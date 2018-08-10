<template>

<div class="zm-component-combination">  
    <!-- 图片 -->
    <div @click.stop="bannerOneClick" @dblclick.stop="dblclick" class="zm-component-banner" :class="{nowIsSelect:items[index].nowIsSelect}" data-type-banner="image" v-if="items[index].type=='img'" :style="{width: style.width,height: style.height}">
        <div class="zm-bg-banner-PIC" :style="{backgroundImage:items[index].previewData?'url('+items[index].previewData.poster+')' : 'url('+backgroundArr[index].previewData.poster+')',backgroundColor:items[index].bottom}"></div>
        <div class="zm-bg-banner-vein" :style="{backgroundImage:items[index].vienImg,backgroundColor:items[index].coverage}"></div>
        <div class="zm-banner-resizeL" v-if="isComputer" v-show='items[index].resizeLShow' @mousedown.stop="resizedown('left')" ><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="zm-banner-resizeR" v-if="isComputer" v-show='items[index].resizeRShow' @mousedown.stop="resizedown('right')"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="zm-banner-resize" v-if="!isComputer" v-show='items[index].nowIsSelect' @mousedown.stop="resizedownMb"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="banner-Column-label" v-if="isComputer" v-show='items[index].ColumnLabelShow'>第 {{index + 1}}列&nbsp;&nbsp;&nbsp;宽 : {{parseInt(parseFloat(items[index].width)/100*totalWidth)}}px</div>
        <div class="banner-Column-resizeL" v-if="isComputer" v-show='items[index].ColumnResizeL'>{{parseInt(parseFloat(items[index].width)/100*totalWidth)}}PX</div>
        <div class="banner-Column-resizeR" v-if="isComputer" v-show='items[index].ColumnResizeR'>{{parseInt(parseFloat(items[index].width)/100*totalWidth)}}PX</div>
    </div>

    <!-- 颜色 -->
    <div @click.stop="bannerOneClick" @dblclick.stop="dblclick" class="zm-component-banner" :class="{nowIsSelect:items[index].nowIsSelect}" data-type-banner="color" v-if="items[index].type=='color'" :style="{width: style.width,height: style.height}">
        <div class="zm-bg-banner-BGC" :style="{backgroundColor:items[index].previewData?items[index].previewData.color:backgroundArr[index].previewData.color}"></div>
        <div class="zm-banner-resizeL" v-if="isComputer" v-show='items[index].resizeLShow' @mousedown.stop="resizedown('left')" ><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="zm-banner-resizeR" v-if="isComputer" v-show='items[index].resizeRShow' @mousedown.stop="resizedown('right')"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="zm-banner-resize" v-if="!isComputer" v-show='items[index].nowIsSelect' @mousedown.stop="resizedownMb"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="banner-Column-label" v-if="isComputer" v-show='items[index].ColumnLabelShow'>第 {{index + 1}}列&nbsp;&nbsp;&nbsp;宽 : {{parseInt(parseFloat(items[index].width)/100*totalWidth)}}px</div>
        <div class="banner-Column-resizeL" v-if="isComputer" v-show='items[index].ColumnResizeL'>{{parseInt(parseFloat(items[index].width)/100*totalWidth)}}PX</div>
        <div class="banner-Column-resizeR" v-if="isComputer" v-show='items[index].ColumnResizeR'>{{parseInt(parseFloat(items[index].width)/100*totalWidth)}}PX</div>
    </div>

    <!-- 视频 -->
    <div @click.stop="bannerOneClick" @dblclick.stop="dblclick" class="zm-component-banner" :class="{nowIsSelect:items[index].nowIsSelect}" data-type-banner="video" v-show="items[index].type=='video'" :style="{width: style.width,height: style.height}">
        <div class="zm-bg-banner-Video">
            <video :src="items[index].previewData?items[index].previewData.src : backgroundArr[index].previewData.src" :poster="items[index].previewData?items[index].previewData.poster : ''" :autoplay="items[index].isVideoPlay"  ref="video" :loop="items[index].isLoopPlay"></video>
        </div>
        <span v-show="svgShow" class="span-video iconfont icon-videoBgyulan"></span>
        <div class="zm-bg-banner-vein" :style="{backgroundImage:items[index].vienImg,backgroundColor:items[index].coverage}"></div>
        <div class="zm-banner-resizeL" v-if="isComputer" v-show='items[index].resizeLShow' @mousedown.stop="resizedown('left')" ><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="zm-banner-resizeR" v-if="isComputer" v-show='items[index].resizeRShow' @mousedown.stop="resizedown('right')"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="zm-banner-resize" v-if="!isComputer" v-show='items[index].nowIsSelect' @mousedown.stop="resizedownMb"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 20 180.1 212.7" preserveAspectRatio="none"><g><polyline points="56.4,89.8 90.4,56.5 123.7,89.8"></polyline><polyline points="123.7,172.8 89.7,206.1 56.4,172.8"></polyline><path d="M31.1,113.4 149,113.4"></path><path d="M31.1,148.2 149,148.2"></path></g></svg></div>
        <div class="banner-Column-label" v-if="isComputer" v-show='items[index].ColumnLabelShow'>第 {{index + 1}}列&nbsp;&nbsp;&nbsp;宽 : {{parseInt(parseFloat(items[index].width)/100*totalWidth)}}px</div>
        <div class="banner-Column-resizeL" v-if="isComputer" v-show='items[index].ColumnResizeL'>{{parseInt(parseFloat(items[index].width)/100*totalWidth)}}PX</div>
        <div class="banner-Column-resizeR" v-if="isComputer" v-show='items[index].ColumnResizeR'>{{parseInt(parseFloat(items[index].width)/100*totalWidth)}}PX</div>
    </div>
    <div class="is-container banner-container">
        <component v-for="(item,index) in childData" :is="item.component" :key="item.id" :prop="item" :index="index"></component>
    </div>
</div>

</template>
<script>
import mixin from './mixin.js'
export default {
  props: ['dataList','index','widthList','items','totalWidth','backgroundArr'],
  mixins:[mixin],
  data () {
    return {
      svgShow:true,
      src: 'http://image.zuma.com/upload/968828205866584890.mp4',
    }
  },
 }
</script>
<style scoped>
/* @import '../../../../style/component-banner/components.Banner.PC.Edit.css' */
  .zm-component-combination{
    width: 100%;
    height: 100%;
  }
  .zm-component-banner{
    width: 100%;
    height: 100%;
    position:relative;
  }
  .nowIsSelect{
    border: 2px solid #2D81C9;
    box-sizing: border-box;
  }
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
  z-index: 1;
  transform: rotate(90deg);
  background: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#e6e6e6));
  border-radius: 2px;
  border: 1px solid #E4E4E4;
  box-shadow: 0 0 5px rgba(218, 227, 233, 0.6);
  user-select: none;
  }
  .zm-banner-resize{
  top: 100%;
  left:87%;
  height: 20px;
  width: 18px;
  margin-top: -9px;
  background-color: #fff;
  position: absolute;
  cursor: n-resize;
  z-index: 1;
  /* transform: rotate(90deg); */
  background: -webkit-gradient(linear, 0 0, 0 bottom, from(#fff), to(#e6e6e6));
  border-radius: 2px;
  border: 1px solid #e4e4e4;
  box-shadow: 0 0 5px rgba(218, 227, 233, 0.6);
  user-select: none;
  }
  .zm-banner-resizeR svg,
  .zm-banner-resizeL svg,.zm-banner-resize svg {
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
</style>
