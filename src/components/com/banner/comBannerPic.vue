<template>
    <!-- PC端 -->
    <div v-if="isComputer" @dblclick.stop="dblclick" :id="id" class="zm-banner-main" :style="{position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px'}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
      
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

  <!-- 移动端 -->
  <div v-else-if="(!isComputer && settingData.mobileComIsHide)" @dblclick.stop="dblclick" :id="id" class="zm-banner-main" :style="{position: 'absolute', width: mobileStyle.width+'px',height: mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px'}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
      
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
  data () {
    return {
      bannerFull:true,//全屏
      bannerNoFull:false,//非全屏
      nowWinWidth:0,//保存屏幕宽度（除去右侧滚动条的宽度）
      videoShow:true,
      colorShow:false,
      picShow:false,
      svgShow:true,
      url: "http://image.zuma.com/upload/976346440358859899.jpg",
      src: 'http://image.zuma.com/upload/968828205866584890.mp4',
      rgb: '#E3663E',
      bannerTitle:"横条背景",
      nowIndex: 0,
      // id: '',
      // uid: '',
      // inrowlayer: '',
      // style: {
      //     width: 0,
      //     height: 300,
      //     left: 0,
      //     top: 0,
      //     zIndex: 0,
      //     rotate: 0
      // },
      id:this.prop.id,
      type:"banner",
      mold:"commonContainer",
      settingData:this.prop.settingData,
      style: this.prop.style,
      pattern: [1,1,1,1,1,1,1,1],
      isShowRotateBtn: false,
      // lists: this.prop.lists,
      childData: this.prop.childData,
      fullPageSet: true,//组件是否有全屏（宽度）功能
      buttonList:[
        {type:'editor',title:"编辑",icon:'icon-110',callback:this.cl2},
        {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:this.fullOrNotPage},
        {type:'bannerSet',title:'设置',icon:'icon-shezhi1',callback:this.cl2},
        {type:'style', title: "变更样式", icon: "icon-style",paneTitle:'横条样式',paneInfo:"选择和替换横条样式"},
        {type:'del',title:'删除',icon:'icon-delete'}
      ],

      mobileButtonList: [
        { type: "hide", title: "隐藏", icon: "icon-hide" },
        { type: "bannerSet", title: "设置", icon: "icon-shezhi1" },
        { type: "hide", title: "下移", icon: "icon-hide" },
      ], //手机版设置项按钮
      mobileButtonList: [{ type: "hide", title: "隐藏", icon: "icon-hide" }], 
      mobileChildData: this.prop.mobileChildData, //手机版子组件信息
      mobileStyle: this.prop.mobileStyle, //手机版样式
      // settingData:{
      //   backgroundData:{
      //     isVideoPlay: true,
      //     isLoopPlay: true,
      //     isActive: false,
      //     playSpeed: '正常播放',
      //     nowIndex: 0,
      //     tabIndex: 0,
      //     textureIndex: 0,
      //     depthIndex: 0,
      //     historyList: { list: [], type: 'img' },
      //     initList: null,
      //     previewData: {type: 'img', poster: 'http://image.zuma.com/upload/976346440358859899.jpg'},
      //     nowVideo: null,
      //     background: {
      //       val: 0,
      //       childLeft: 0,
      //       childWidth: 10
      //     },
      //     coverage: {
      //       val: 0,
      //       childLeft: 0,
      //       childWidth: 10,
      //       color: null
      //     },
      //     bottom: {
      //       val: 0,
      //       childLeft: 0,
      //       childWidth: 10,
      //       color: 'rgba(255,255,255,0)'
      //     }
      //   },
      // },
      backgroundData:{
        isVideoPlay: true,
        isLoopPlay: true,
        isActive: false,
        playSpeed: '正常播放',
        nowIndex: 0,
        tabIndex: 0,
        textureIndex: 0,
        depthIndex: 0,
        historyList: { list: [], type: 'img' },
        initList: null,
        previewData: {type: 'img', poster: 'http://image.zuma.com/upload/976346440358859899.jpg'},
        nowVideo: null,
        background: {
          val: 0,
          childLeft: 0,
          childWidth: 10
        },
        coverage: {
          val: 0,
          childLeft: 0,
          childWidth: 10,
          color: null
        },
        bottom: {
          val: 0,
          childLeft: 0,
          childWidth: 10,
          color: 'rgba(255,255,255,0)'
        }
      },
    }
  },
  watch:{
      style: {
        handler(){
          // let arr = []
          if(this.bannerFull){
            // this.style.left = -345
            this.style.left = -zmEditor.$store.state.page.marginLeft + 5
            this.style.width = this.nowWinWidth
            // let oldData = {
            //   full:true,
            //   left:this.style.left,
            //   width:this.style.width,
            //   height:this.style.height
            // }
            // arr.push(oldData)
          }
          if(this.bannerNoFull){
            this.style.left = 0
            this.style.width = zmEditor.$store.state.page.contentWidth
          }
          if(this.style.height < 0){
            this.style.height = 0
          }
          // 移动端===========================start
          let obj = {
            bannerFull:this.bannerFull?this.bannerFull:false,
            bannerNoFull:this.bannerNoFull?this.bannerNoFull:false,
            height:this.style.height,
            left:this.style.left
          }
          let arr = []
          arr.push(obj)
          // element.height = this.style.height
          this.$emit('updataMes',{ key : "lists",index:this.index,value:arr});//数据存储,更改父级lists;
          // 移动端===========================end
        },
        deep: true
    },
  },
  computed:{
      lists(){
        return this.prop.lists
      },
      texturePicture(){
        let url = '';
        if(this.settingData.backgroundData.depthIndex === 0){
          url = 'url(/static/background/light_0' + this.settingData.backgroundData.textureIndex + '.png)'
        } else{
          url = 'url(/static/background/dark_0' + this.settingData.backgroundData.textureIndex + '.png)'
        }
        return url;
      },
      isFullPage(){
		  // 返回值为当前组件控制全屏按钮的属性值
		  return this.settingData['fullScreen'].value;
     }
  },
  methods:{
    fullpage(val){//工具条控制是否全屏的设置项的回调函数逻辑
      //控制是否全屏的设置项的回调函数逻辑
      let FullPageObj = {type:'fullPage',title:"满屏",icon:'icon-quanping1',callback:this.fullOrNotPage}
      let notFullPageObj = {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:this.fullOrNotPage}
      if(val){
            this.style.width = this.nowWinWidth
            this.buttonList.splice(1,1,notFullPageObj)
            this.bannerNoFull = false
            this.bannerFull = true
            this.settingData['fullScreen'].value = true
        }else{
            this.style.width = zmEditor.$store.state.page.contentWidth;
            this.buttonList.splice(1,1,FullPageObj)
            this.bannerNoFull = true
            this.bannerFull = false  
            this.settingData['fullScreen'].value = false
      }
    },
    getScrollbarWidth() {//获取右侧滚动条宽度
        var oP = document.createElement('p'), styles = {
            width: '100px',
            height: '100px',
            overflowY: 'scroll',
        }, i, scrollbarWidth;

        for (i in styles){
            oP.style[i] = styles[i];
        }
        document.body.appendChild(oP);
        scrollbarWidth = oP.offsetWidth - oP.clientWidth;
        oP.remove();

        return scrollbarWidth;
    },
    dblclick(){
        this.bannerTitle = "横条设置"
        this.nowIndex = 1;
        zmEditor.$store.commit('setBackgroundData', {key: 'comType', value: 'banner'});
        zmEditor.$store.commit('changePaneData', {key: 'paneType', value: true});
        zmEditor.$store.commit('changePaneData', {key: 'paneTitle', value: this.bannerTitle});
        zmEditor.$store.commit('changePaneData', {key: 'paneMode', value: "/editor/pane/backgroundPreview.vue"});
        zmEditor.$store.commit('setBackgroundData', {key: 'nowShowStyle', value: 'img'});
        this.settingData.backgroundData.tabIndex = this.nowIndex;
    },
    cl2(v){
        if(v){
          this.bannerTitle = "横条设置"
          this.nowIndex = 1;
        }else{
            event.currentTarget.firstChild.innerHTML.trim() == "编辑" ? this.bannerTitle = "横条背景" : this.bannerTitle = "横条设置"
            event.currentTarget.firstChild.innerHTML.trim() == "编辑" ? this.nowIndex = 0 : this.nowIndex = 1;
        }
        zmEditor.$store.commit('setBackgroundData', {key: 'comType', value: 'banner'});
        zmEditor.$store.commit('changePaneData', {key: 'paneType', value: true});
        zmEditor.$store.commit('changePaneData', {key: 'paneTitle', value: this.bannerTitle});
        zmEditor.$store.commit('changePaneData', {key: 'paneIcon', value: ''});
        zmEditor.$store.commit('changePaneData', {key: 'paneMode', value: "/editor/pane/backgroundPreview.vue"});
        zmEditor.$store.commit('setBackgroundData', {key: 'nowShowStyle', value: 'img'});
        this.settingData.backgroundData.tabIndex = this.nowIndex;
    },
    fullOrNotPage:function(){
        let FullPageObj = {type:'fullPage',title:"满屏",icon:'icon-quanping1',callback:this.fullOrNotPage}
        let notFullPageObj = {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:this.fullOrNotPage}
        if(this.buttonList[1].type === "notFullPage"){
            this.style.width = zmEditor.$store.state.page.contentWidth;
            this.buttonList.splice(1,1,FullPageObj)
            this.bannerNoFull = true
            this.bannerFull = false
            this.settingData['fullScreen'].value = false
        }else{
            this.style.width = this.nowWinWidth;
            this.buttonList.splice(1,1,notFullPageObj)
            this.bannerNoFull = false
            this.bannerFull = true
            this.settingData['fullScreen'].value = true
        }
    },
  },
  mounted:function(){
    this.settingData.backgroundData.nowVideo = this.$refs.video;
    // this.nowWinWidth = zmEditor.$store.state.page.nowWinWidth - (this.getScrollbarWidth()?this.getScrollbarWidth():0)
    this.nowWinWidth = zmEditor.$store.state.page.nowWinWidth
    this.style.width = this.nowWinWidth
    // this.$store.state.pane.isRenderSelect && this.$store.commit("changeSelectList",this)
    if(this.$store.state.pane.isRenderSelect){
      this.$store.commit("changeSelectList",this)
    }else{
      this.id == this.$store.state.component.oldComID && this.$store.commit("changeSelectList",this)
    }
    this.$store.commit("addContainerToList",this)//容器组件需要添加这一行

    // 移动端===========================start
    let FullPageObj = {type:'fullPage',title:"满屏",icon:'icon-quanping1',callback:this.fullOrNotPage}
    let notFullPageObj = {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:this.fullOrNotPage}
    if(this.lists && this.lists.length > 0 && this.lists[0].bannerFull){
      this.style.left = -zmEditor.$store.state.page.marginLeft
      this.style.width = this.nowWinWidth
      this.bannerNoFull = false
      this.bannerFull = true
      this.buttonList.splice(1,1,notFullPageObj)
      this.style.height = this.lists[0].height
    }
    if(this.lists && this.lists.length > 0 && this.lists[0].bannerNoFull){
      this.style.left = 0
      this.style.width = zmEditor.$store.state.page.contentWidth
      this.bannerNoFull = true
      this.bannerFull = false
      this.buttonList.splice(1,1,FullPageObj)
      this.style.height = this.lists[0].height
    }
    if(!this.isComputer && this.settingData.mobileComIsHide){
      zmEditor.$children[0].isCtrlShow = false //编辑框隐藏;
      this.pattern = []
      this.mobileStyle.height = this.style.height
    }
    // 移动端===========================end
  }
 }
</script>
<style scoped>
  .zm-component-banner{
    width: 100%;
    height: 100%;
    position:relative;
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
    /* background-color:red */
  }
  .zm-bg-banner-vein{
    /* z-index:1; */
    width: 100%; 
    height: 100%;

    left:0px;
    top:0px;
    position:absolute;
  }
  .banner-container{
    position: absolute;
    width:100%;
    height:100%;
    left: 0px;
    top:0px;
  }
</style>
