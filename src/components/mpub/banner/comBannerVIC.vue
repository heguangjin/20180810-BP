<template>
    <div :id="id" class="zm-banner-main2" :style="{overflow:'hidden',position: 'absolute', width: mobileStyle.width+'px',height: mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px'}">
      <div class='eachBanner' v-for="(item,index) in settingData.items" :key="index" :style="{width:'100%',height:(item.height?item.height:style.height)+'px',marginTop:settingData.setLayout.value+'px'}">
          <div class="zm-component-combination">  
            <!-- 图片 -->
            <div  class="zm-component-banner" data-type-banner="image" v-if="settingData.items[index].type=='img'" :style="{width: style.width,height: style.height}">
                <div class="zm-bg-banner-PIC" :style="{backgroundImage:settingData.items[index].previewData?'url('+settingData.items[index].previewData.poster+')' : 'url('+settingData.backgroundArr[index].previewData.poster+')',backgroundColor:settingData.items[index].bottom}"></div>
                <div class="zm-bg-banner-vein" :style="{backgroundImage:settingData.items[index].vienImg,backgroundColor:settingData.items[index].coverage}"></div>
            </div>

            <!-- 颜色 -->
            <div class="zm-component-banner"  data-type-banner="color" v-if="settingData.items[index].type=='color'" :style="{width: style.width,height: style.height}">
                <div class="zm-bg-banner-BGC" :style="{backgroundColor:settingData.items[index].previewData?settingData.items[index].previewData.color : settingData.backgroundArr[index].previewData.color}"></div>
            </div>

            <!-- 视频 -->
            <div class="zm-component-banner" data-type-banner="video" v-show="settingData.items[index].type=='video'" :style="{width: style.width,height: style.height}">
                <div class="zm-bg-banner-Video">
                    <video :src="settingData.items[index].previewData?settingData.items[index].previewData.src : settingData.backgroundArr[index].previewData.src" :poster="settingData.items[index].previewData?settingData.items[index].previewData.poster : ''" :autoplay="settingData.items[index].isVideoPlay"  ref="video" :loop="settingData.items[index].isLoopPlay"></video>
                </div>
                <span v-show="svgShow" class="span-video iconfont icon-videoBgyulan"></span>
                <div class="zm-bg-banner-vein" :style="{backgroundImage:settingData.items[index].vienImg,backgroundColor:settingData.items[index].coverage}"></div>
            </div>
        </div>
      </div>
      <!-- <div class="is-container banner-container"> -->
        <component v-for="(item,index) in childData" :is="item.component" :key="item.id" :prop="item" :index="index"></component>
      <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: 'vic',
  props: {
      prop: {
        type:Object,
        required:true
      },
      index:{
        type:[String,Number],
        required:true
      }
  },
  data: function () {
    return {
      id:this.prop.id,
      type:"banner",
      mold:"commonContainer",
      settingData:this.prop.settingData,
      style: this.prop.style,
      childData: this.prop.childData,
      mobileChildData: this.prop.mobileChildData, //手机版子组件信息
      mobileStyle: this.prop.mobileStyle, //手机版样式
    }
  },
  computed:{
    itemsC(){
      return this.settingData.items
    },
    texturePicture(){
        let url = '';
        if(this.settingData.backgroundArr[this.settingData.currentIndex].depthIndex === 0){
          url = 'url(/static/background/light_0' + this.settingData.backgroundArr[this.settingData.currentIndex].textureIndex + '.png)'
        } else{
          url = 'url(/static/background/dark_0' + this.settingData.backgroundArr[this.settingData.currentIndex].textureIndex + '.png)'
        }
        return this.settingData.backgroundArr[this.settingData.currentIndex].textureIndex==0 ? '' : url;
    }
  },
  mounted(){
    console.log('进入组合横条移动端------------------')
  }
}
</script>
<style scoped>
 .zm-banner-main2 .eachBanner:nth-child(1){
   margin-top:0px !important;
 }
 .zm-main-banner-vein{
    z-index:1;
    width: 100%;
    height: 100%;
    left:0px;
    top:0px;
    position:absolute;
  }
  /* .nowIsSelect{
    border: 2px solid #2D81C9;
    box-sizing: border-box;
  }
  .disableColor{
    color:#bcbcbc !important;
  } */





  .zm-component-combination{
    width: 100%;
    height: 100%;
  }
  .zm-component-banner{
    width: 100%;
    height: 100%;
    position:relative;
  }
  /* .nowIsSelect{
    border: 2px solid #2D81C9;
    box-sizing: border-box;
  } */
  .zm-bg-banner-PIC{
    width: 100%;
    height: 100%;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .zm-bg-banner-BGC{
    width: 100%;
    height: 100%;
  }
  .zm-bg-banner-Video{
    width: 100%;
    height: 100%;
    overflow:hidden
  }
  video{
    object-fit: cover;
    width:100%;
    height:100%;
  }
  .span-video{
    display: inline-block; 
    width: 30px; 
    height: 30px; 
    position: absolute; 
    left: 3px; 
    bottom: 2px; 
    color: rgb(255, 255, 255); 
    font-size: 28px;
  }
  .zm-bg-banner-vein{
    /* z-index:1; */
    width: 100%; 
    height: 100%;

    left:0px;
    top:0px;
    position:absolute;
  }
  .zm-banner-resizeR,
  .zm-banner-resizeL {
  top: 10%;
  height: 20px;
  width: 18px;
  margin-top: -9px;
  background-color: #fff;
  position: absolute;
  cursor: w-resize;
  z-index: 2;
  transform: rotate(90deg);
  background: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#e6e6e6));
  border-radius: 2px;
  border: 1px solid #E4E4E4;
  box-shadow: 0 0 5px rgba(218, 227, 233, 0.6);
  user-select: none;
  }
  .zm-banner-resizeR svg,
  .zm-banner-resizeL svg {
  width: 100%;
  height: 100%;
  stroke: #c9c9c9;
  fill: #c9c9c9;
  }
  .zm-banner-resizeR {
    right: -10px;
  }
  .zm-banner-resizeL {
    left: -10px;
  }
  .banner-Column-label {
    width: 130px;
    height: 28px;
    background-color: #3089d5;
    position: absolute;
    left: 0;
    top: -28px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 28px;
    font-size: 13px;
  }
  .banner-Column-resizeL,
  .banner-Column-resizeR {
    top: 13%;
    position: absolute;
    width: 52px;
    height: 20px;
    background-color: #fff;
    color:#333333;
    border-radius: 2px;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    box-shadow: 5 5 5 #ffffff;
    z-index: 100;
  }
  .banner-Column-resizeL {
    left: 15px;
  }
  .banner-Column-resizeR {
    right: 15px;
  }
  .banner-container{
    position: absolute;
    width:100%;
    height:100%;
    left: 0px;
    top:0px;
  }
</style>
