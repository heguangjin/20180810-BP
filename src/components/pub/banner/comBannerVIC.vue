<template>
    <div :id="id" class="zm-banner-main" :style="{position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px'}">
      <div  v-for="(item,index) in settingData.items" :key="index" :style="{display:display,width:settingData.items[index].width,height:height}">
          <!-- <div :is="item.component" :index="index" :totalWidth='style.width'  :items='settingData.items' :backgroundArr='settingData.backgroundArr'></div> -->

          <div class="zm-component-combination">
            <!-- 图片 -->
            <div  class="zm-component-banner" data-type-banner="image" v-if="settingData.items[index].type=='img'" :style="{width: style.width,height: style.height}">
                <div class="zm-bg-banner-PIC" :style="{backgroundImage:settingData.items[index].previewData?'url('+settingData.items[index].previewData.poster+')' : 'url('+settingData.backgroundArr[index].previewData.poster+')',backgroundColor:settingData.items[index].bottom}"></div>
                <div class="zm-bg-banner-vein" :style="{backgroundImage:settingData.items[index].vienImg,backgroundColor:settingData.items[index].coverage}"></div>
                <!-- <div class="zm-banner-resizeL" v-show='settingData.items[index].resizeLShow' ><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div> -->
                <!-- <div class="zm-banner-resizeR" v-show='settingData.items[index].resizeRShow'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div> -->
                <!-- <div class="banner-Column-label" v-show='settingData.items[index].ColumnLabelShow'>第 {{index + 1}}列&nbsp;&nbsp;&nbsp;宽 : {{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}px</div> -->
                <!-- <div class="banner-Column-resizeL" v-show='settingData.items[index].ColumnResizeL'>{{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}PX</div> -->
                <!-- <div class="banner-Column-resizeR" v-show='settingData.items[index].ColumnResizeR'>{{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}PX</div> -->
            </div>

            <!-- 颜色 -->
            <div class="zm-component-banner"  data-type-banner="color" v-if="settingData.items[index].type=='color'" :style="{width: style.width,height: style.height}">
                <div class="zm-bg-banner-BGC" :style="{backgroundColor:settingData.items[index].previewData?settingData.items[index].previewData.color : settingData.backgroundArr[index].previewData.color}"></div>
                <!-- <div class="zm-banner-resizeL" v-show='settingData.items[index].resizeLShow' ><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div> -->
                <!-- <div class="zm-banner-resizeR" v-show='settingData.items[index].resizeRShow'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div> -->
                <!-- <div class="banner-Column-label" v-show='settingData.items[index].ColumnLabelShow'>第 {{index + 1}}列&nbsp;&nbsp;&nbsp;宽 : {{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}px</div> -->
                <!-- <div class="banner-Column-resizeL" v-show='settingData.items[index].ColumnResizeL'>{{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}PX</div> -->
                <!-- <div class="banner-Column-resizeR" v-show='settingData.items[index].ColumnResizeR'>{{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}PX</div> -->
            </div>

            <!-- 视频 -->
            <div class="zm-component-banner" data-type-banner="video" v-show="settingData.items[index].type=='video'" :style="{width: style.width,height: style.height}">
                <div class="zm-bg-banner-Video">
                    <video :src="settingData.items[index].previewData?settingData.items[index].previewData.src : settingData.backgroundArr[index].previewData.src" :poster="settingData.items[index].previewData?settingData.items[index].previewData.poster : ''" :autoplay="settingData.items[index].isVideoPlay"  ref="video" :loop="settingData.items[index].isLoopPlay"></video>
                </div>
                <span v-show="svgShow" class="span-video iconfont icon-videoBgyulan"></span>
                <div class="zm-bg-banner-vein" :style="{backgroundImage:settingData.items[index].vienImg,backgroundColor:settingData.items[index].coverage}"></div>
                <!-- <div class="zm-banner-resizeL" v-show='settingData.items[index].resizeLShow' ><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div> -->
                <!-- <div class="zm-banner-resizeR" v-show='settingData.items[index].resizeRShow'><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div> -->
                <!-- <div class="banner-Column-label" v-show='settingData.items[index].ColumnLabelShow'>第 {{index + 1}}列&nbsp;&nbsp;&nbsp;宽 : {{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}px</div> -->
                <!-- <div class="banner-Column-resizeL" v-show='settingData.items[index].ColumnResizeL'>{{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}PX</div> -->
                <!-- <div class="banner-Column-resizeR" v-show='settingData.items[index].ColumnResizeR'>{{parseInt(parseFloat(settingData.items[index].width)/100*style.width)}}PX</div> -->
            </div>
        </div>
      </div>
    <!-- <div v-show="mainBannerVeinShow" refs="mainBannerVein" class="zm-main-banner-vein"></div> -->
      <div class="is-container banner-container">
        <component v-for="(item,index) in childData" :is="item.component" :key="item.id" :prop="item" :index="index"></component>
      </div>
  </div>
</template>
<script>
// import v from './CombinationBar/comCombinationBannerVideo'
// import i from './CombinationBar/comCombinationBannerPic'
// import c from './CombinationBar/comCombinationBannerColor'
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
      // bannerFull:true,//全屏
      // bannerNoFull:false,//非全屏
      // nowWinWidth:0,//保存屏幕宽度（除去右侧滚动条的宽度）
      // allVue:[],//存储所有组件实例
      // isbanner:false,//判断是否点击过组合横条
      // mainBannerVeinShow:true,//是否显示最外层遮罩层
      // classShow:false,//选中整个横条时显示的框
      // initClick:0,//用来记录当前哪一列存在nowIsSelect类的索引
      // widthList:[],
      id:this.prop.id,
      type:"banner",
      mold:"commonContainer",
      settingData:this.prop.settingData,
      style: this.prop.style,
      display:'inline-block',
      height:'100%',
      childData: this.prop.childData,
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
    console.log('进入组合横条pc端预览------------------')
  }
}
</script>
<style scoped>
 .zm-banner-main{
   display:flex;
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
