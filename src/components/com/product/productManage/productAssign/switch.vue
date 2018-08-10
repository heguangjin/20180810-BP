<template>
  <div class="labelBox">
    <div class="switchBox">
      <span>显示{{prop}}标签</span>
      <!-- <span class="switch" @click.stop="switchOnOff" :style="{backgroundColor:cssObj.backgroundColor}"> -->
      <span class="switch" @click.stop="switchOnOff" :class="{switchOn:isSwitchOn,switchOff:!isSwitchOn}">
        <span class="point" :style="{float:cssObj.float}"></span>
      </span>
      <div class="bottomW"></div>
    </div>
    <div class="label" v-show="isSwitchOn">
      <div class="lN">{{prop}}{{title2}}:</div>
      <div class="nList">
        <div @click.stop="tagC(i)" :nowLabel="curSelectedCom" :class="{tagN:bgArr[i].tagNS,tagS:bgArr[i].tagSS,}" class="tag" v-for="(item,i) in labelList" :key="i">{{item}}</div>
      </div>
    </div>
    <div class="bottomW"></div>
  </div>
</template>
<script>
export default {
  name: "switch",
  props: ["prop","list","oldText"],
  data() {
    return {
      title: "显示产品标签",
      title2: "标签",
      isSwitchOn: true,
      cssObj:{
        backgroundColor:'#3089D5',
        float:"right"
      },
      tagNS:true,
      tagSS:false,
      bgArr:[],
      labelList:[
        '去除标签','新','荐','券','惠','精品','让利','热卖','热销','好评','特价','爆款','分期','新品','主打','推荐',
        '批发','包邮','年货','NEW','Hot','限时特惠','韩','欧版','美版','进口','精品国货','免费安装','买就送','分期付',
        '量贩装','情人节','中秋','端午','国庆','圣诞','元旦','双十一','五一特惠',
      ]
    };
  },
  computed: {
    curSelectedCom() {
      let index
      this.labelList.forEach((element,i)=>{
        if(element == this.list[0].fLabel){
          index = i
        }
      })
      if(this.bgArr.length > 0){
        this.bgArr.forEach((element,i)=>{
          if(index){
            if(i == index){
              this.bgArr[index].tagNS = false
              this.bgArr[index].tagSS = true
            }else{
              this.bgArr[i].tagNS = true
              this.bgArr[i].tagSS = false
            }
          }else{
            this.bgArr[i].tagNS = true
            this.bgArr[i].tagSS = false
          }
          
        })

      }
      return this.list[0].fLabel //当前选中的组件
    }
  },
  methods: {
    tagC(index){
      this.bgArr.forEach((element,i)=>{
        if(i == index){
          element.tagNS = false
          element.tagSS = true
        }else{
          element.tagNS = true
          element.tagSS = false
        }
        if(this.labelList[index] == '去除标签'){
          let str = ' '
          this.$emit('tagb',str)
        }else{
          this.$emit('tagb',this.labelList[index])
        }
      })
    },
    switchOnOff(){
      if(this.cssObj.float == 'left'){
        this.cssObj.backgroundColor = '#3089D5'
        this.cssObj.float = 'right'
        this.isSwitchOn = true
      }else if(this.cssObj.float == 'right'){
        this.cssObj.backgroundColor = '#eee'
        this.cssObj.float = 'left'
        this.isSwitchOn = false
      }
    }

  },
  created() {
    let obj 
    this.labelList.forEach((element,i)=>{
      obj = {
        tagNS:true,
        tagSS:false
      }
      if(element = this.list[0].fLabel){
        obj = {
                tagNS:false,
                tagSS:true
              }
      }
      this.bgArr.push(obj)
    })
  }
};
</script>
<style scoped>
  .bottomW{
      position: absolute;
      bottom: 0px;
      width: 260px;
      height: 1px;
      background-color: #d7d7d7;
    }
  .labelBox{
      width:100%;
      height: auto;
      /* background-color: #eee; */
      padding: 0px 20px;
      position: relative;
  }
  .switchBox{
      width:100%;
      height: 55px;
      line-height: 55px;
      position: relative;
      color:#797979;

  }
  .switchBox span{
    color:#797979;
    font-size:12px;
  }
  .switch{
    display: inline-block;
    width: 40px;
    height: 20px;
    /* background-color: #3089D5; */
    border-radius:10px;
    /* border-to */
    margin-left:125px;
    /* position: relative; */
  }
  .switchOn{
    background-color: #3089D5;
  }
  .switchOff{
    background-color: #eee;
  }
  .point{
    width: 18px;
    height: 18px;
    /* float: left; */
    background-color: #fff;
    border-radius: 50%;
    margin-top: 1px;
  }
  .label{
    width:100%;
    height: auto;
    /* background-color: green; */
  }
  .lN{
    height: 40px;
    width:100%;
    line-height: 40px;
    position: relative;
    color:#797979;
    font-size:12px;
  }
  .nList{
    /* height: 168px; */
    width:100%;
    background-color: #fff;
    padding-bottom: 20px;
  }
  .nList div{
    font-size: 12px;
  }
  .tag{
    display: inline-block;
    height: 12px;
    line-height: 1px;
    font-size: 12px;
    color:#797979;
    background-color: #F2F2F2;
    padding: 11px;
    text-align: center;
    margin-left: 5px;
    margin-top: 5px;
    border-radius: 2px;
    cursor: pointer;
  }
  .tagN{
    color:#797979;
    background-color: #F2F2F2;
  }
  .tagS{
    color:#fff;
    background-color: #3089D5;
  }
</style>
