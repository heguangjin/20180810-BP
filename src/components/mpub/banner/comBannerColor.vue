<template>
  <!-- 移动端 -->
  <div @dblclick.stop="dblclick" :id="id" class="zm-banner-main" :style="{position: 'absolute', width: mobileStyle.width+'px',height: mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px'}">
      
    <!-- 图片 -->
    <div class="zm-component-banner" data-type-banner="image" v-if="settingData.backgroundData.previewData.type=='img'">
        <div class="zm-bg-banner-PIC" :style="{backgroundImage:settingData.backgroundData.previewData?'url('+settingData.backgroundData.previewData.poster+')' : 'url(http://image.zuma.com/upload/976433818364712059.jpg)',backgroundColor:settingData.backgroundData.bottom.color}"></div>
        <div class="zm-bg-banner-vein" :style="{backgroundImage:texturePicture,backgroundColor:settingData.backgroundData.coverage.color}"></div>
    </div>

    <!-- 颜色 -->
    <div class="zm-component-banner zm-component-banner-one" data-type-banner="color" v-else-if="settingData.backgroundData.previewData.type=='color'">
        <div class="zm-bg-banner-BGC" :style="{backgroundColor:settingData.backgroundData.previewData?settingData.backgroundData.previewData.color : rgb}"></div>
    </div>

    <!-- 视频 -->
    <div class="zm-component-banner zm-component-banner-one" data-type-banner="video" v-show="settingData.backgroundData.previewData.type=='video'">
        <div class="zm-bg-banner-Video">
            <video :src="settingData.backgroundData.previewData?settingData.backgroundData.previewData.src : src" :poster="settingData.backgroundData.previewData?settingData.backgroundData.previewData.poster : ''" autoplay="false" loop="true" ref="video"></video>
        </div>
        <span v-show="svgShow" class="span-video iconfont icon-videoBgyulan"></span>
        <div class="zm-bg-banner-vein" :style="{backgroundImage:texturePicture,backgroundColor:settingData.backgroundData.coverage.color}"></div>
    </div>
    <div class="is-container banner-container">
       <component v-for="(item,index) in childData" :is="item.component" :key="item.id" :prop="item" :index="index"></component>
    </div>

  </div>
</template>
<script>
// import mixin from './mixin.js'
export default {
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
  data() {
    return {
      bannerFull: true, //全屏
      bannerNoFull: false, //非全屏
      nowWinWidth: 0, //保存屏幕宽度（除去右侧滚动条的宽度）
      videoShow: true,
      colorShow: false,
      picShow: false,
      svgShow: true,
      url: "http://image.zuma.com/upload/976346440358859899.jpg",
      src: "http://image.zuma.com/upload/968828205866584890.mp4",
      rgb: "#E3663E",
      bannerTitle: "横条背景",
      nowIndex: 0,

      id:this.prop.id,
      type:"banner",
      style: this.prop.style,
      settingData:this.prop.settingData,
      list: this.list,
      childData: this.prop.childData,
      mobileChildData: this.prop.mobileChildData, //手机版子组件信息
      mobileStyle: this.prop.mobileStyle, //手机版样式
    };
  },
  computed: {
    texturePicture() {
      let url = "";
      if (this.settingData.backgroundData.depthIndex === 0) {
        url =
          "url(http://local.zuma.com:8888/background/light_0" +
          this.settingData.backgroundData.textureIndex +
          ".png)";
      } else {
        url =
          "url(http://local.zuma.com:8888/background/dark_0" +
          this.settingData.backgroundData.textureIndex +
          ".png)";
      }
      return url;
    }
  },
};
</script>
<style scoped>
.zm-component-banner {
  width: 100%;
  height: 100%;
  position: relative;
}

.zm-bg-banner-PIC {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.zm-bg-banner-BGC {
  width: 100%;
  height: 100%;
}

.zm-bg-banner-Video {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.span-video {
  display: inline-block;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3px;
  bottom: 2px;
  color: rgb(255, 255, 255);
  font-size: 28px;
  /* background-color:red */
}
.zm-bg-banner-vein {
  /* z-index: 1; */
  width: 100%;
  height: 100%;

  left: 0px;
  top: 0px;
  position: absolute;
}
.banner-container{
  position: absolute;
  width:100%;
  height:100%;
  left: 0px;
  top:0px;
}
</style>
