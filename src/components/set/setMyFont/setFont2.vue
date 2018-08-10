<template>
  <div class="setFont zm-edit-item" :style="{height:height+'px'}">
      <div class="tit" v-text="prop.title" v-show="showTitle"></div>
      <div class="tit titArea" v-show="showInput">
          <textarea @focus="inputFocus" @blur="inputBlur" v-if="prop.center" id="demo" :style="{padding:padding2 + 'px'}" maxlength="40" @keydown="enterF" @input="textChange" rows="2" v-model="prop.style.inputText" :placeholder="prop.style.placeholder"></textarea>
          <textarea v-else  @focus="inputFocus" @blur="inputBlur" id="demo" :style="{padding:padding + 'px'}" maxlength="40" @keydown="enterF" @input="textChange" rows="2" v-model="prop.style.inputText" :placeholder="prop.style.placeholder"></textarea>
      </div>
      <div class="conF">
        <setFontFamily  :prop="this.prop"></setFontFamily>
        <setFontSize  :prop="this.prop"></setFontSize>
        <setColor  :prop="prop"></setColor>
        <setFontWeight  :prop="prop"></setFontWeight>
        <setFontStyle  :prop="prop" v-if="!this.prop.u"></setFontStyle>
        <setFontUnd  :prop="prop" v-if="this.prop.u"></setFontUnd>
      </div>
  </div>
</template>

<script>
import setFontFamily from './fontSet/setFontFamily'
import setFontSize from './fontSet/setFontSize'
import setColor from './fontSet/setColor'
import setFontWeight from "./fontSet/setFontWeight";
import setFontStyle from "./fontSet/setFontStyle";
import setFontUnd from "./fontSet/setFontUnd";
export default {
  name: 'set-font', 
  data () {
    return {
      title:"",
      showInput:true,
      showTitle:true,
      text:false,
      textCon:"",
      textOldValue:'',
      textOldValue2:'',
      textOldValue3:'',
      height:50,
      padding:5,
      padding2:11,
    }
  },
  props:['prop'],
  methods: {
      inputFocus(){
          this.$store.commit('removeComKeyEvent')
      },
      inputBlur(){
          this.$store.commit('addComKeyEvent')
      },
      enterF(event){
          let nowVue = this.nowVue()
          let kd = event.keyCode
          if(kd == 13 || kd == 38 || kd == 40){
            if(kd == 13){
                console.log("按回车键提交数据")
                let _this = this;
                let nowVue = zmEditor.$store.state.component.selectList[0]
                let fid = nowVue.settingData.productId
                let fname
                let newAdvertisementText
                let url

                if(this.prop.attr2 == 'productName'){
                    // fname = nowVue.settingData.productName
                    fname = this.prop.style.inputText
                }
                if(this.prop.attr2 == 'productBanner'){
                    // newAdvertisementText = nowVue.settingData.productBanner
                    newAdvertisementText = this.prop.style.inputText
                }
                if(nowVue.dataSource =='productData'){
                    // url = '/product/webbuilder-api/product/updateProductInfoByParam'
                    url = '/product-api/updateProductInfoByParam'
                }else if(nowVue.dataSource =='serviceData'){
                    url = '/service/webbuilder-api/serviceNote/updateShopServiceInfoByParam'
                }
                this.$axios({
                    method: 'post',
                    url:url,
                    headers:{"Content-Type": "application/x-www-form-urlencoded","X-Requested-With": "XMLHttpRequest"},
                    responseType:'json',
                    params: {
                        id:fid,
                        newName:fname,
                        newAdvertisementText:newAdvertisementText,
                    }
                }).then((res)=>{
                    console.log("数据提交成功")
                    nowVue.settingData[this.prop.attr2] = this.prop.style.inputText
                }).catch(()=>{
                    console.log("数据提交失败")
                })

            }
              event.currentTarget.blur()
              event.returnValue = false;
          }
      },
      textChange(){
          let nowVue = this.nowVue()
        //   nowVue.settingData[this.prop.attr2] = this.prop.style.inputText
          let textCount = this.fileGetLength(this.prop.style.inputText.trim())
          if(textCount <= this.prop.style.maxlength && textCount >0){
              this.textOldValue2 = this.prop.style.inputText
            //   nowVue.settingData[this.prop.attr2] = this.textOldValue2
          }else if(textCount > this.prop.style.maxlength){
              this.prop.style.inputText = this.textOldValue2
            //   nowVue.settingData[this.prop.attr2] = this.textOldValue2
          }else if(textCount <= 0){
              this.prop.style.inputText = this.textOldValue
              nowVue.settingData[this.prop.attr2] = this.textOldValue
          }
          if(this.prop.callback){
              this.prop.callback(this.prop.style.inputText)
          }
      },
      Compute(v) {
        var d = document.getElementById('dvCompute');
        d.innerHTML = v;
        return { w: d.offsetWidth, h: d.offsetHeight };
      },
      //重命名获取字符位数;
      fileGetLength(v) {
        var len = 0;
        for (var i = 0; i < v.length; i++) {
            var a = v.charAt(i);
            len = (a.match(/[^\x00-\xff]/ig) != null) ? (len + 2) : (len + 1);
        }
        return len;
      },
      nowVue(){
          return zmEditor.$store.state.component.selectList[0]
      },
  },
  components: {
      setFontFamily,
      setFontSize,
      setFontWeight,
      setFontStyle,
      setColor,
      setFontUnd
  },
  mounted () {
      if(this.prop.style.input && this.prop.title){
          this.showInput = true;
          this.showTitle = true;
          this.textOldValue = this.prop.style.inputText
          this.height = 130
      }else if(this.prop.style.input){
          this.showInput = true;
          this.showTitle = false;
          this.textOldValue = this.prop.style.inputText
          this.height = 95
      }else if(this.prop.title){
          this.showInput = false;
          this.showTitle = true;
          this.height = 85
      }else{
          this.showInput = false;
          this.showTitle = false;
          this.height = 50
      }
  }
}

</script>
<style scoped lang="less">
.setFont{
    width: 245px ;
    // height: 95px;
    margin: 0 20px ;
    border-bottom: 1px solid #D7D7D7 ;
    font-size: 14px ;
    color:#797979;
}
.tit{
    height: 35px;
    line-height: 45px ;
    text-align: left ;
    font-size:12px;
    
} ;
textarea::-webkit-input-placeholder{
    color:#C9C9C9;
}
textarea:-moz-placeholder{
    color:#C9C9C9;
}
textarea::-moz-placeholder{
    color:#C9C9C9;
}
textarea:-ms-input-placeholder{
    color:#C9C9C9;
}
.titArea{
    padding-top:9px; 
    height: 49px;
    textarea{
        display: block;
        width: 100%;
        height: 95%;
        resize: none ;
        border: none ;
        border: 1px solid #ddd ;
        border-radius:3px ; 
        outline: medium ;
        overflow: hidden;
        // padding-left: 5px ;
        // padding-right: 5px ;
        padding:5px 5px;
        word-break: break-all;
        color:#797979;
    }
    textarea:hover{
        box-shadow: 0 0 10px #3089D5;
        border: 1px solid #3089D5 ;
    }
}
.conF{
    width: 100% ;
    height: 49px;
}
</style>