<template>
    <div class="setFont zm-edit-item">
        <div class="tit" v-text="prop.title" v-show="showTitle"></div>
        <div class="tit titArea" v-show="showInput">
            <input id="demo" :maxlength="prop.style.maxLength" rows="1" v-bind:class="{'zm-edit-select':isSelect}" v-model="prop.style.inputText" @keyup.enter="addenter" @focus="addFocus" @input="addInput" @blur="addBlur"/>
        </div>
        <div class="conF">
            <setFontFamily :prop="this.prop"></setFontFamily>
            <setFontSize :prop="this.prop"></setFontSize>
            <setColor :prop="prop"></setColor>
            <setFontWeight :prop="prop"></setFontWeight>
            <setFontStyle :prop="prop" v-if="!this.prop.u"></setFontStyle>
            <setFontUnd :prop="prop" v-if="this.prop.u"></setFontUnd>
        </div>
    </div>
</template>

<script>
import setFontFamily from "./fontSet/setFontFamily";
import setFontSize from "./fontSet/setFontSize";
import setColor from "./fontSet/setColor";
import setFontWeight from "./fontSet/setFontWeight";
import setFontStyle from "./fontSet/setFontStyle";
import setFontUnd from "./fontSet/setFontUnd";
export default {
  name: "set-font",
  props: ["prop"],
  data() {
    return {
      title: "",
      isSelect: false,
      showInput: true,
      showTitle: false,
      text: false
    };
  },
  created(){
    this.prop.style.inputText = this.prop.style.placeholder;
  },
  methods: {
    addInput() {
      let nowVue = this.nowVue();
      let textCount = this.fileGetLength(event.currentTarget.value.trim());
      if (textCount <= this.prop.style.maxLength && textCount > 0) {
        nowVue.settingData[this.prop.attr2].value = event.currentTarget.value;
      } else {
       event.currentTarget.value = nowVue.settingData[this.prop.attr2].value;
      }
    },
    //重命名获取字符位数;
    fileGetLength(v) {
      var len = 0;
      for (var i = 0; i < v.length; i++) {
        var a = v.charAt(i);
        len = a.match(/[^\x00-\xff]/gi) != null ? len + 2 : len + 1;
      }
      return len;
    },
    nowVue() {
      return zmEditor.$store.state.component.selectList[0];
    },
    addFocus() {
      this.isSelect = true;
      event.currentTarget.select();
      this.$store.commit('removeComKeyEvent')//he
    },
    addBlur() {
      this.isSelect = false;
      this.$store.commit('addComKeyEvent')//he
    },
    addenter(){
      this.isSelect = false;
      event.currentTarget.blur();
    }
  },
  components: {
    setFontFamily,
    setFontSize,
    setFontWeight,
    setFontStyle,
    setColor,
    setFontUnd
  }
};
</script>
<style scoped lang="less">
.setFont {
  width: 245px;
  // height: 95px;
  margin: 0 20px;
  border-bottom: 1px solid #F2F2F2;
  font-size: 12px;
}
.tit {
  height: 35px;
  line-height: 45px;
  text-align: left;
}
input::-webkit-input-placeholder {
  color: #bbb;
}
input:-moz-placeholder {
  color: #bbb;
}
input::-moz-placeholder {
  color: #bbb;
}
input::-ms-input-placeholder {
  color: #bbb;
}
.titArea {
  padding-top: 12px;
  height: 49px;
  input {
    display: block;
    width: 100%;
    height: 82%;
    resize: none;
    border: none;
    border: 1px solid #BCBCBC;
    border-radius: 3px;
    outline: medium;
    overflow: hidden;
    padding: 7px 5px;
    color:#c9c9c9;
    word-break: break-all;
    font-size: 12px;
  }
  .zm-edit-select {
    border: 1px solid #3089d5;
    box-shadow: 0 0 5px #3089d5;
    background-color: white;
  }
}
.conF {
  width: 100%;
  height: 49px;
  margin-top: -4px;
}
</style>