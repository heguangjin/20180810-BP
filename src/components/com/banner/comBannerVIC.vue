<template>
    <!-- PC端 -->
    <div v-if="isComputer" :id="id" :class="{nowIsSelect:classShow}" class="zm-banner-main" :style="{position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px',display: style.display}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
      <div  v-for="(item,index) in settingData.items" :key="index" :style="{display:display,width:settingData.items[index].width,height:height}">
          <div :is="item.component" :index="index" :dataList="nowLength" :widthList='widthList' v-on:titleChanged = "zidingyi" @widthChange='widthChange' @widthChange2='widthChange2' :items='settingData.items' :totalWidth='style.width' :backgroundArr='settingData.backgroundArr' @videoT="videoT" @ColumnResizeShow="ColumnResizeShow"></div>
      </div>
      <div @click.stop = "bannerMainClick" v-show="mainBannerVeinShow" refs="mainBannerVein" class="zm-main-banner-vein"></div>
      
      <component v-for="(item,index) in childData" :is="item.component" :key="item.id" :prop="item" :index="index"></component>
  </div>

  <!-- 移动端 -->
  <div v-else-if="(!isComputer && settingData.mobileComIsHide)" :id="id" :class="{nowIsSelect:classShow}" class="zm-banner-main2" :style="{position: 'absolute', width: mobileStyle.width+'px',height: mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px'}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
      <div class='eachBanner' v-for="(item,index) in settingData.items" :key="index" :style="{width:'100%',height:(item.height?item.height:style.height)+'px',marginTop:settingData.setLayout.value+'px'}">
          <div :is="item.component" :index="index" :dataList="nowLength" :widthList='widthList' v-on:titleChanged="zidingyi" @widthChange='widthChange' @widthChange2='widthChange2' :items='settingData.items' :totalWidth='style.width' :backgroundArr='settingData.backgroundArr' @videoT="videoT" @ColumnResizeShow="ColumnResizeShow" :isComputer="isComputer"></div>
      </div>
      <div @click.stop = "bannerMainClick" v-show="mainBannerVeinShow" refs="mainBannerVein" class="zm-main-banner-vein"></div>
      
      <component v-for="(item,index) in childData" :is="item.component" :key="item.id" :prop="item" :index="index"></component>
  </div>
</template>
<script>
import v from './CombinationBar/comCombinationBannerVideo'
import i from './CombinationBar/comCombinationBannerPic'
import c from './CombinationBar/comCombinationBannerColor'
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
      bannerFull:true,//全屏
      bannerNoFull:false,//非全屏
      nowWinWidth:0,//保存屏幕宽度（除去右侧滚动条的宽度）
      allVue:[],//存储所有组件实例
      isbanner:false,//判断是否点击过组合横条
      mainBannerVeinShow:true,//是否显示最外层遮罩层
      classShow:false,//选中整个横条时显示的框

      initClick:0,//用来记录当前哪一列存在nowIsSelect类的索引

      // settingData:{
        // maxLength:5
      //   isCombinationBanner: true,//判断是否是组合横条
      //   currentIndex:0,//当前点击列的索引
      //   backgroundArr:[//存储所有列的设置项数据
      //     {
      //       isVideoPlay: true,
      //       isLoopPlay: true,
      //       isActive: false,
      //       playSpeed: '正常播放',
      //       nowIndex: 0,
      //       tabIndex: 0,
      //       textureIndex: 0,
      //       depthIndex: 0,
      //       historyList: { list: [{type: 'video', title: '横条视频', src: 'http://image.zuma.com/upload/968828205866584890.mp4', poster: 'http://image.zuma.com/upload/976346440358859899.jpg'}], title: '使用过的背景', type: 'img' },
      //       initList: null,
      //       previewData: {type: 'video', src: 'http://image.zuma.com/upload/984382427374483873.mp4', poster: 'http://image.zuma.com/upload/976346440358859899.jpg'},
      //       nowVideo: null,
      //       background: {
      //         val: 0,
      //         childLeft: 0,
      //         childWidth: 10
      //       },
      //       coverage: {
      //         val: 0,
      //         childLeft: 0,
      //         childWidth: 10,
      //         color: 'rgba(255,255,255,0)'
      //       },
      //       bottom: {
      //         val: 0,
      //         childLeft: 0,
      //         childWidth: 10,
      //         color: 'rgba(255,255,255,0)'
      //       }
      //     },
      //     {
      //       isVideoPlay: true,
      //       isLoopPlay: true,
      //       isActive: false,
      //       playSpeed: '正常播放',
      //       nowIndex: 0,
      //       tabIndex: 0,
      //       textureIndex: 0,
      //       depthIndex: 0,
      //       historyList: { list: [], type: 'img' },
      //       initList: null,
      //       previewData: {type: 'img', poster: 'http://image.zuma.com/upload/976433570674283643.jpg'},
      //       nowVideo: null,
      //       background: {
      //         val: 0,
      //         childLeft: 0,
      //         childWidth: 10
      //       },
      //       coverage: {
      //         val: 0,
      //         childLeft: 0,
      //         childWidth: 10,
      //         color: 'rgba(255,255,255,0)'
      //       },
      //       bottom: {
      //         val: 0,
      //         childLeft: 0,
      //         childWidth: 10,
      //         color: 'rgba(255,255,255,0)'
      //       }
      //     },
      //     {
      //       isVideoPlay: true,
      //       isLoopPlay: true,
      //       isActive: false,
      //       playSpeed: '正常播放',
      //       nowIndex: 0,
      //       tabIndex: 0,
      //       textureIndex: 0,
      //       depthIndex: 0,
      //       historyList: { list: [], type: 'img' },
      //       initList: null,
      //       previewData: {type: 'color', color: 'rgba(227, 102, 62,0.5)'},
      //       nowVideo: null,
      //       background: {
      //         val: 50,
      //         childLeft: 80*0.36,
      //         childWidth: 10
      //       },
      //       coverage: {
      //         val: 0,
      //         childLeft: 0,
      //         childWidth: 10,
      //         color: 'rgba(255,255,255,0)'
      //       },
      //       bottom: {
      //         val: 0,
      //         childLeft: 0,
      //         childWidth: 10,
      //         color: 'rgba(255,255,255,0)'
      //       }
      //     },
      //   ],
      //   items:[//存储所有列的完整数据（包含设置项的数据）
      //     {
      //       type:'video',
      //       resizeLShow:false,
      //       resizeRShow:false,
      //       ColumnLabelShow:false,
      //       width:'33%',
      //       previewData:null,
      //       vienImg:null,
      //       textureIndex:0,
      //       coverage:'rgba(255,255,255,0)',
      //       bottom:'rgba(255,255,255,0)',
      //       nowIsSelect:false,
      //       ColumnResizeL:false,
      //       ColumnResizeR:false,
      //       depthIndex:0,
      //       isVideoPlay: true,
      //       isLoopPlay: true,
      //       // component: v
      //     },
      //     {
      //       type:'img',
      //       resizeLShow:false,
      //       resizeRShow:false,
      //       ColumnLabelShow:false,
      //       width:'34%',
      //       previewData:null,
      //       vienImg:null,
      //       textureIndex:0,
      //       coverage:'rgba(255,255,255,0)',
      //       bottom:'rgba(255,255,255,0)',
      //       nowIsSelect:false,
      //       ColumnResizeL:false,
      //       ColumnResizeR:false,
      //       depthIndex:0,
      //       isVideoPlay: true,
      //       isLoopPlay: true,
      //       // component: i
      //     },
      //     {
      //       type:'color',
      //       resizeLShow:false,
      //       resizeRShow:false,
      //       ColumnLabelShow:false,
      //       width:'33%',
      //       previewData:null,
      //       vienImg:null,
      //       coverage:'rgba(255,255,255,0)',
      //       bottom:'rgba(255,255,255,0)',
      //       nowIsSelect:false,
      //       ColumnResizeL:false,
      //       ColumnResizeR:false,
      //       depthIndex:0,
      //       isVideoPlay: true,
      //       isLoopPlay: true,
      //       // component: c
      //     }
      //   ],
      // },

      widthList:[],
      id:this.prop.id,
      type:"banner",
      mold:"commonContainer",
      settingData:this.prop.settingData,
      style: this.prop.style,
      display:'inline-block',
      height:'100%',
      pattern: [1,1,1,1,1,1,1,1],//当前组件显示八个点，1：显示 0：不显示
      isShowRotateBtn: false,//当前组件是否显示旋转按钮
      // lists: this.prop.lists,
      childData: this.prop.childData,
      fullPageSet: true,//组件是否有全屏（宽度）功能
      buttonList:[
        {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:this.fullOrNotPage},
        {type:'style', title: "变更样式", icon: "icon-style",paneTitle:'横条样式',paneInfo:"选择和替换横条样式"},
        {type:'del',title:'删除',icon:'icon-delete',callback:this.deleteBanner},
        // {type:'del222',title:'删除222',icon:'icon-delete2',callback:this.cl2}
      ],

      mobileButtonList: [
        { type: "myhide", title: "隐藏", icon: "icon-hide",callback:this.deleteBanner},
        {type:'shangyi1',title:'上移',icon:'icon-shangyi1',callback:this.leftMove},
        {type:'xiayi1',title:'下移',icon:'icon-xiayi1',callback:this.rightMove},
        {
          type: "set",
          title: "设置",
          icon: "icon-shezhi1",
          paneTitle: "横条设置"
        }
      ],
      mobileChildData: this.prop.mobileChildData, //手机版子组件信息
      mobileStyle: this.prop.mobileStyle, //手机版样式
      oldMobileH:0,
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
        previewData: null,
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
          color: 'rgba(255,255,255,0)'
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
  watch:{//观察子组件数据的变化，变化则执行相关事件
    'settingData.backgroundArr': {//backgroundData监测整个对象的变化，'backgroundData.previewData'监测对象中某个属性的变化（需要加引号）
　　　　handler(newValue, oldValue) {
         this.settingData.items[this.settingData.currentIndex].type = this.settingData.backgroundArr[this.settingData.currentIndex].previewData.type
         //  this.settingData.items[this.settingData.currentIndex].previewData = this.settingData.backgroundArr[this.settingData.currentIndex].previewData//这种会发生引用同一个地址，就会产生改变一一个横条列时，其他列也会跟着改变
         this.settingData.items[this.settingData.currentIndex].previewData = Object.assign({},this.settingData.backgroundArr[this.settingData.currentIndex].previewData)
         this.settingData.items[this.settingData.currentIndex].vienImg = this.texturePicture
         this.settingData.items[this.settingData.currentIndex].depthIndex = this.settingData.backgroundArr[this.settingData.currentIndex].depthIndex
         this.settingData.items[this.settingData.currentIndex].textureIndex = this.settingData.backgroundArr[this.settingData.currentIndex].textureIndex
         this.settingData.items[this.settingData.currentIndex].coverage = this.settingData.backgroundArr[this.settingData.currentIndex].coverage.color
         this.settingData.items[this.settingData.currentIndex].bottom = this.settingData.backgroundArr[this.settingData.currentIndex].bottom.color
         this.settingData.items[this.settingData.currentIndex].isVideoPlay = this.settingData.backgroundArr[this.settingData.currentIndex].isVideoPlay
         this.settingData.items[this.settingData.currentIndex].isLoopPlay = this.settingData.backgroundArr[this.settingData.currentIndex].isLoopPlay
　　　　},
　　    deep: true
　　},
    style: {
      handler(){
        if(this.bannerFull){
          // this.style.left = -345
          this.style.left = -zmEditor.$store.state.page.marginLeft
          this.style.width = this.nowWinWidth
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
    nowLength(){//计算子组件总个数
      return this.settingData.items.length
    },
    widthListCl(){//初始化列宽数组
      let width = (1/this.nowLength*100)+"%"
      this.widthList = []
      for(let i = 0;i < this.nowLength;i++){
        this.widthList.push(width)
        // this.settingData.items[i].width = 1/this.nowLength
        this.settingData.items[i].width = width
      }
    },
    nowWidth(){//获取初始化列宽
      return (1/this.nowLength*100)+"%"
    },
    texturePicture(){
        let url = '';
        if(this.settingData.backgroundArr[this.settingData.currentIndex].depthIndex === 0){
          url = 'url(/static/background/light_0' + this.settingData.backgroundArr[this.settingData.currentIndex].textureIndex + '.png)'
        } else{
          url = 'url(/static/background/dark_0' + this.settingData.backgroundArr[this.settingData.currentIndex].textureIndex + '.png)'
        }
        return this.settingData.backgroundArr[this.settingData.currentIndex].textureIndex==0 ? '' : url;
    },
    mobileSetData() {//移动端设置项
            return {
                type: "sets",
                props: [{
                        type: '/set/sliders.vue',
                        props: {
                            title: '横条间距(px)',
                            attr: 'setLayout',
                            param: 'number',
                            minVal: 0,
                            maxVal: 30,
                            value:this.settingData.setLayout.value,
                            decimalNum: 0,
                            callback:this.colSpaceF
                        }
                    },
                ]
            }
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
          this.buttonList.splice(0,1,notFullPageObj)
          this.bannerNoFull = false
          this.bannerFull = true
          this.settingData['fullScreen'].value = true
      }else{
          this.style.width = zmEditor.$store.state.page.contentWidth
          this.buttonList.splice(0,1,FullPageObj)
          this.bannerNoFull = true
          this.bannerFull = false
          this.settingData['fullScreen'].value = false
      }
    },
    colSpaceF(v){//移动端横条间距回调
      this.settingData.isMobile = true
      this.settingData.setLayout.colSpace = v
      // this.mobileStyle.height = this.oldMobileH + parseInt(this.settingData.setLayout.colSpace)*(this.settingData.items.length-1)
      let sumHeight = 0
      this.settingData.items.forEach((element,i)=>{
        sumHeight += element.height
      })
      this.mobileStyle.height = sumHeight + parseFloat(this.settingData.setLayout.value)*(this.settingData.items.length-1)
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
    ColumnResizeShow(index,str){
        if(str){
          if(str.trim() == 'right'){
            this.settingData.items[index].ColumnResizeR = true
            this.settingData.items[index].ColumnResizeL = false
          }else if(str.trim() == 'left'){
            this.settingData.items[index].ColumnResizeR = false
            this.settingData.items[index].ColumnResizeL = true
          }
        }else{
            this.settingData.items[index].ColumnResizeR = false
            this.settingData.items[index].ColumnResizeL = false
        }
    },
    videoT(video,index){//通过$emit子组件点击事件来改变父组件的相关数据
      this.settingData.backgroundArr[this.initClick?this.initClick:index].nowVideo = video;
    },
    zidingyi(index,obj,video,ColumnLabel,DOMRect){//通过$emit子组件点击事件来改变父组件的相关数据

      if(!this.isComputer && this.settingData.mobileComIsHide){
        
      }else{
          if(this.settingData.items.length < 5){
            if($(".rightAdd").children('.zm-editor-button-alt').text().trim() == '右侧添加列'){
              // $(".rightAdd").css("color","#3089d5")
              $(".rightAdd").css("color","")
            }
          }else {
            if($(".rightAdd").children('.zm-editor-button-alt').text().trim() == '右侧添加列'){
              $(".rightAdd").css("color","#bcbcbc")
            }
          }
      }

      this.initClick = index;
      this.settingData.currentIndex = index;
      this.settingData.backgroundArr[this.settingData.currentIndex].nowVideo = video;

      if(index == 0){
        this.settingData.items.forEach((element,i) => {
          if(i==index){
            this.settingData.items[index].resizeLShow = false
            this.settingData.items[index].resizeRShow = true
            this.settingData.items[index].ColumnLabelShow = true
            this.settingData.items[index].nowIsSelect = true
          }else{
            this.settingData.items[i].resizeLShow = false
            this.settingData.items[i].resizeRShow = false
            this.settingData.items[i].ColumnLabelShow = false
            this.settingData.items[i].nowIsSelect = false
          }
        });
      }else if(index == (this.settingData.items.length-1)){
        this.settingData.items.forEach((element,i) => {
          if(i==index){
            this.settingData.items[index].resizeLShow = true
            this.settingData.items[index].resizeRShow = false
            this.settingData.items[index].ColumnLabelShow = true
            this.settingData.items[index].nowIsSelect = true
          }else{
            this.settingData.items[i].resizeLShow = false
            this.settingData.items[i].resizeRShow = false
            this.settingData.items[i].ColumnLabelShow = false
            this.settingData.items[i].nowIsSelect = false
          }
        });
      }else if(index != 0 || index != (this.settingData.items.length-1)){

        this.settingData.items.forEach((element,i) => {
          if(i==index){
            this.settingData.items[index].resizeLShow = true
            this.settingData.items[index].resizeRShow = true
            this.settingData.items[index].ColumnLabelShow = true
            this.settingData.items[index].nowIsSelect = true
          }else{
            this.settingData.items[i].resizeLShow = false
            this.settingData.items[i].resizeRShow = false
            this.settingData.items[i].ColumnLabelShow = false
            this.settingData.items[i].nowIsSelect = false
          }
        });
      }
      
      this.classShow = false
      this.btnList()
      this.isbanner = true
      //当前页面滚动距离
      let nowScrollY = zmEditor.$store.state.page.nowScrollY
      if(DOMRect){
        //重新给按钮设置区域重新定位
        zmEditor.$store.commit('upPlace', {
          left: DOMRect.x + 138,
          top: DOMRect.y + nowScrollY-59
        })
      }

      if(!this.isComputer && this.settingData.mobileComIsHide){

      }else{
        setTimeout(() => {
          if(this.settingData.items.length == 5){
              if($(".rightAdd").attr('title').trim() == '右侧添加列'){
                $(".rightAdd").css("color","#bcbcbc")
              } 
          }
        },100)
      }
      zmEditor.$children[0].isCtrlShow = false; //编辑框隐藏;
    },
    widthChange(str,index,nowPer,otherPer,up){
        this.settingData.items[index].width = nowPer*100 + '%'
        if(str.trim() == 'right'){
          if(this.settingData.items.length >= 2){
            this.settingData.items[index+1].width = otherPer*100 + '%'
          }
        }else if(str.trim() == 'left'){
          if(this.settingData.items.length >= 2){
            this.settingData.items[index-1].width = otherPer*100 + '%'
          }
        }
    },
    widthChange2(index,dw,totleHeight){//移动端拖动按钮改变高度事件
      // let sumOfPercentage = 0 //记录所有列的百分比之和
      // let oldLastPer = 0 //记录最后一列的百分比
      // this.settingData.items.forEach((element,i)=>{
      //   //这里用Math.round() 四舍五入取整，最终所有列的百分比之和刚好为百分之百，一般情况下和都是百分之百,(否者就是比百分之百大百分之一或百分之二)
      //   this.settingData.items[i].width = Math.round(parseFloat(element.width)) + '%'
      //   sumOfPercentage += parseInt(this.settingData.items[i].width)
      //   if(i == (this.settingData.items.length -1)){
      //     oldLastPer = parseInt(this.settingData.items[i].width)
      //   }
      // })
      
      // setTimeout(()=>{
      //   if(sumOfPercentage < 100){
      //     let sub = 100 - sumOfPercentage
      //     this.settingData.items[this.settingData.items.length -1].width = parseInt(oldLastPer) + parseInt(sub) +'%'
          
      //   }
      // },100)
      this.settingData.isMobile = true
      if(!this.settingData.items[index].height){
        this.settingData.items[index].height = this.style.height
      }
      if(totleHeight < 25){
        this.settingData.items[index].height = 25
      }else{
        this.settingData.items[index].height = totleHeight
      }
      let sumHeight = 0
      this.settingData.items.forEach((element,i)=>{
        sumHeight += element.height
      })
      this.mobileStyle.height = sumHeight + parseFloat(this.settingData.setLayout.value)*(this.settingData.items.length-1)
    },
    bannerEditorOrSet() {//编辑和设置按钮点击事件
      event.currentTarget.firstChild.innerHTML.trim() == "编辑" ? this.bannerTitle = "横条背景" : this.bannerTitle = "横条设置"
      event.currentTarget.firstChild.innerHTML.trim() == "编辑" ? this.nowIndex = 0 : this.nowIndex = 1;
      zmEditor.$store.commit('setBackgroundData', {key: 'comType', value: 'banner'});
      zmEditor.$store.commit('changePaneData', {key: 'paneType', value: true});
      zmEditor.$store.commit('changePaneData', {key: 'paneTitle', value: this.bannerTitle});
      zmEditor.$store.commit('changePaneData', {key: 'paneIcon', value: ''});
      zmEditor.$store.commit('changePaneData', {key: 'paneMode', value: "/editor/pane/backgroundPreview.vue"});
      zmEditor.$store.commit('setBackgroundData', {key: 'nowShowStyle', value: 'img'});
      // this.backgroundData.tabIndex = this.nowIndex;
      this.settingData.backgroundArr[this.settingData.currentIndex].tabIndex = this.nowIndex;
    },
    cl2() {//编辑和设置按钮点击事件
      this.bannerTitle = "横条设置"
      this.nowIndex = 1;
      zmEditor.$store.commit('setBackgroundData', {key: 'comType', value: 'banner'});
      zmEditor.$store.commit('changePaneData', {key: 'paneType', value: true});
      zmEditor.$store.commit('changePaneData', {key: 'paneTitle', value: this.bannerTitle});
      zmEditor.$store.commit('changePaneData', {key: 'paneIcon', value: ''});
      zmEditor.$store.commit('changePaneData', {key: 'paneMode', value: "/editor/pane/backgroundPreview.vue"});
      zmEditor.$store.commit('setBackgroundData', {key: 'nowShowStyle', value: 'img'});
      // this.backgroundData.tabIndex = this.nowIndex;
      this.settingData.backgroundArr[0].tabIndex = this.nowIndex;
    },
    fullOrNotPage(){//全屏，取消全屏事件
        let FullPageObj = {type:'fullPage',title:"满屏",icon:'icon-quanping1',callback:this.fullOrNotPage}
        let notFullPageObj = {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:this.fullOrNotPage}
        if(this.buttonList[0].type === "notFullPage"){
            this.style.width = zmEditor.$store.state.page.contentWidth
            this.buttonList.splice(0,1,FullPageObj)
            this.bannerNoFull = true
            this.bannerFull = false
            this.settingData['fullScreen'].value = false
        }else{
            this.style.width = this.nowWinWidth
            this.buttonList.splice(0,1,notFullPageObj)
            this.bannerNoFull = false
            this.bannerFull = true
            this.settingData['fullScreen'].value = true
        }
        
    },
    bannerMainClick(){//父组件点击事件
      
      let component = zmEditor.$store.state.component
      // this.allVue = this.allVue.concat(component.bodyRowList,component.footRowList,component.headRowList)
      this.allVue = zmEditor.$store.getters.allComponent;

      //查找当前页面上所有的组合横条====================================start
      let curSelectCom = zmEditor.$store.state.component.selectList[0];// 当前选中组件
      let parentRow = curSelectCom.$parent;
      let headRow,bodyRow,footRow;
      let headRowBanner = [],bodyRowBanner = [],footRowBanner = [];
      let allBannderCom = [];
      
      findParentRow(parentRow)
      function findParentRow(parentRow){
          switch(parentRow.type){
            case 'headRow':
                headRow = parentRow
            break;
            case 'bodyRow':
                bodyRow = parentRow
            break;
            case 'footRow':
                footRow = parentRow
            break;
            default:
                findParentRow(parentRow.$parent)
            break;
          }
      }

      if(!headRow){
        //headRow不存在
        if(!bodyRow){
          //headROw和bodyRow都不存在,footRow存在
          headRow = footRow.$parent.$refs.headRow;
          bodyRow = footRow.$parent.$refs.bodyRow;
          // footRow = headRow.$parent.$refs.footRow;
        }else{
          // bodyRow存在
          headRow = bodyRow.$parent.$refs.headRow;
          footRow = bodyRow.$parent.$refs.footRow;
        }
      }else{
        //headRow存在
        bodyRow = headRow.$parent.$refs.bodyRow;
        footRow = headRow.$parent.$refs.footRow;
      }

      function findBanner(parentRow,bannerCom){
        let childCom = parentRow.$children;
        childCom.forEach((child) => {
          if(child.settingData.isCombinationBanner){
            bannerCom.push(child)
          }else{
            findBanner(child,bannerCom)
          }
        })
      }

      findBanner(headRow,headRowBanner)
      findBanner(bodyRow,bodyRowBanner)
      findBanner(footRow,footRowBanner)
      allBannderCom = [...headRowBanner,...bodyRowBanner,...footRowBanner];//所有的复合横条组件
      // console.log(allBannderCom,'所有的复合横条组件')


      allBannderCom.forEach((ele,i)=>{//遍历所有组件实例，找到组合横条组件实例进行处理
        if(ele.id == zmEditor.$store.state.component.selectList[0].id){
        }else{
          if(ele.settingData.isCombinationBanner){
            this.buttonList = [
              {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:this.fullOrNotPage},
              {type:'style', title: "变更样式", icon: "icon-style",paneTitle:'横条样式',paneInfo:"选择和替换横条样式"},
              {type:'del',title:'删除',icon:'icon-delete',callback:this.deleteBanner}
            ]
            ele.classShow = false
            ele.mainBannerVeinShow = true
            if(ele.settingData.items){
              ele.settingData.items.forEach((elememt,index)=>{
                  elememt.resizeLShow= false
                  elememt.resizeRShow = false
                  elememt.ColumnLabelShow = false
                  elememt.nowIsSelect = false
              })
            }
          }
        }
      })
      //查找当前页面上所有的组合横条====================================end


      //移动端---计算整个横条的高度====================================start
      let sumHeight = 0
      if(!this.isComputer && this.settingData.mobileComIsHide){
        zmEditor.$children[0].isCtrlShow = false //编辑框隐藏;  
        this.settingData.items.forEach((element,index)=>{
            sumHeight += element.height
      
      })
      this.mobileStyle.height = sumHeight + parseFloat(this.settingData.setLayout.value)*(this.settingData.items.length-1)
      }
      //移动端---计算整个横条的高度====================================end

      let nowCom = zmEditor.$store.state.component.selectList[0]
      zmEditor.$store.state.background.oldCombination = nowCom
      
      this.mainBannerVeinShow = !this.mainBannerVeinShow
      this.classShow = !this.classShow
      this.classShow = true
      this.isbanner = true
      let FullPageObj = {type:'fullPage',title:"满屏",icon:'icon-quanping1',callback:this.fullOrNotPage}
      let notFullPageObj = {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:this.fullOrNotPage}
      if(this.style.width == this.nowWinWidth){
          this.buttonList.splice(0,1,notFullPageObj)
      }else{
          this.buttonList.splice(0,1,FullPageObj)
      }

      zmEditor.$children[0].isCtrlShow = true //编辑框显示;
    },
    rightAdd(){//右侧添加列
      if(this.settingData.items.length > 3){
        if($(".rightAdd").children('.zm-editor-button-alt').text().trim() == '右侧添加列'){
          $(".rightAdd").css("color","#bcbcbc")
        }
        if(this.settingData.items.length > 4){
          return
        }
      }
      let obj = Object.assign({},this.settingData.items[this.initClick])
      obj.resizeLShow = false
      obj.resizeRShow = false
      obj.ColumnLabelShow = false
      obj.nowIsSelect = false
      this.settingData.items.splice(this.settingData.currentIndex,0,Object.assign({},obj));

      //深层拷贝对象（对象里面嵌套对象）,如果只是一般的对象（对象里没有嵌套对象）就用Object.assign({},obj)
      var newSetObj = JSON.parse(JSON.stringify(this.settingData.backgroundArr[this.initClick]));
      this.settingData.backgroundArr.splice(this.settingData.currentIndex,0,newSetObj);

      this.settingData.items.forEach((element,i,)=>{
          if(this.initClick == i) {
            this.settingData.items[this.initClick].resizeLShow = true
            this.settingData.items[this.initClick].resizeRShow = true
            this.settingData.items[this.initClick].ColumnLabelShow = true
            this.settingData.items[this.initClick].nowIsSelect = true
          }else{
            this.settingData.items[i].resizeLShow = false
            this.settingData.items[i].resizeRShow = false
            this.settingData.items[i].ColumnLabelShow = false
            this.settingData.items[i].nowIsSelect = false
          }
            
      })
      let width = (1/this.settingData.items.length*100)+"%"
      for(let i = 0;i < this.settingData.items.length;i++){
        this.settingData.items[i].width = width
      }
      this.btnList()

    },
    deleteBanner(){//删除列
      if(this.settingData.items.length < 6){
        if($(".rightAdd").children('.zm-editor-button-alt').text().trim() == '右侧添加列'){
          // $(".rightAdd").css("color","#3089d5")
          $(".rightAdd").css("color","")
        }
      }
      
      this.settingData.items.forEach((element,i,)=>{
          if(element.nowIsSelect) {
              this.settingData.currentIndex = i
          }
      })
      this.settingData.items.splice(this.settingData.currentIndex,1)
      this.settingData.backgroundArr.splice(this.settingData.currentIndex,1)

      if(this.settingData.currentIndex == 0){
        this.settingData.items[this.settingData.currentIndex].nowIsSelect = true
      }else{
        this.settingData.items[this.settingData.currentIndex-1].nowIsSelect = true
      }
      this.settingData.currentIndex = this.settingData.currentIndex-1
      let [obj1,obj2,obj3,obj4,obj5,obj6,obj7] = [
          {type:'editor',title:"编辑",icon:'icon-110',callback:this.bannerEditorOrSet},
          {type:'bannerSet',title:'设置',icon:'icon-shezhi1',callback:this.bannerEditorOrSet},
          {type:'rightAdd',title:'右侧添加列',icon:'icon-icon rightAdd',callback:this.rightAdd},
          {type:'leftMove',title:'左移',icon:'icon-zuoyi',callback:this.leftMove},
          {type:'rightMove',title:'右移',icon:'icon-youyi',callback:this.rightMove},
          {type:'delBanner',title:'删除',icon:'icon-shanchu2',callback:this.deleteBanner},
          {type:'del',title:'删除',icon:'icon-delete'},
      ]
      this.settingData.items.forEach((element,i,)=>{
          if(element.nowIsSelect) {
              this.settingData.currentIndex = i;
              this.initClick = i;
          }
      })
      let width = (1/this.settingData.items.length*100)+"%"
      for(let i = 0;i < this.settingData.items.length;i++){
        this.settingData.items[i].width = width
      }
      //移动端---计算整个横条的高度====================================start
      let sumHeight = 0
      if(!this.isComputer && this.settingData.mobileComIsHide){
        this.settingData.items.forEach((element,index)=>{
            sumHeight += element.height
      
      })
      this.mobileStyle.height = sumHeight + parseFloat(this.settingData.setLayout.value)*(this.settingData.items.length-1)
      }
      //移动端---计算整个横条的高度====================================end
      this.btnList()
    },
    leftMove(){//列左移
      this.settingData.items.forEach((element,i,)=>{
          if(element.nowIsSelect) {
              this.settingData.currentIndex = i;
          }
      })
      if(this.settingData.currentIndex == 0) return

      var nowEle = this.settingData.items[this.settingData.currentIndex]
      var preEle = this.settingData.items[this.settingData.currentIndex-1]

      var nowEleSet = this.settingData.backgroundArr[this.settingData.currentIndex]
      var preEleSet = this.settingData.backgroundArr[this.settingData.currentIndex-1]
      //当前被选中的列的前一列位置被后一列替换
      this.settingData.items.splice(this.settingData.currentIndex-1,1,nowEle)
      this.settingData.backgroundArr.splice(this.settingData.currentIndex-1,1,Object.assign({},nowEleSet))

      //当前被选中的列的位置被前一列替换
      this.settingData.items.splice(this.settingData.currentIndex,1,preEle)
      this.settingData.backgroundArr.splice(this.settingData.currentIndex,1,Object.assign({},preEleSet))

      this.settingData.items.forEach((element,i,)=>{
          if(element.nowIsSelect) {
              this.settingData.currentIndex = i;
              this.initClick = i;
          }
      })
      this.btnList()

    },
    rightMove(){//列右移
      this.settingData.items.forEach((element,i,)=>{
            if(element.nowIsSelect) {
                this.settingData.currentIndex = i;
            }
      })
      if(this.settingData.currentIndex == (this.settingData.items.length - 1)) return
      let nowEle = this.settingData.items[this.settingData.currentIndex]
      let nextEle = this.settingData.items[this.settingData.currentIndex+1]

      let nowEleSet = this.settingData.backgroundArr[this.settingData.currentIndex]
      let nextEleSet = this.settingData.backgroundArr[this.settingData.currentIndex+1]


      //当前被选中的列的下一列位置被上一列替换
      this.settingData.items.splice(this.settingData.currentIndex+1,1,Object.assign({},nowEle))
      this.settingData.backgroundArr.splice(this.settingData.currentIndex+1,1,Object.assign({},nowEleSet))
      // //当前被选中的列的位置被下一列替换
      this.settingData.items.splice(this.settingData.currentIndex,1,Object.assign({},nextEle))
      this.settingData.backgroundArr.splice(this.settingData.currentIndex,1,Object.assign({},nextEleSet))

      this.settingData.items.forEach((element,i,)=>{
          if(element.nowIsSelect) {
              this.settingData.currentIndex = i;
              this.initClick = i;
          }
      })
      this.btnList()
    },
    btnList(){//根据点击列判断设置按钮的组合
      //PC端设置按钮
      let [obj1,obj2,obj3,obj4,obj5,obj6,obj7] = [
        {type:'editor',title:"编辑",icon:'icon-110',callback:this.bannerEditorOrSet},
        {type:'bannerSet',title:'设置',icon:'icon-shezhi1',callback:this.bannerEditorOrSet},
        {type:'rightAdd',title:'右侧添加列',icon:'icon-icon rightAdd',callback:this.rightAdd},
        {type:'leftMove',title:'左移',icon:'icon-zuoyi',callback:this.leftMove},
        {type:'rightMove',title:'右移',icon:'icon-youyi',callback:this.rightMove},
        {type:'delBanner',title:'删除',icon:'icon-delete',callback:this.deleteBanner},
        {type:'del',title:'删除',icon:'icon-delete'},
      ]
      //移动端设置按钮
      let [mobile1,mobile2,mobile3,mobile4,mobile5] = [
        { type: "myhide", title: "隐藏", icon: "icon-hide",callback:this.deleteBanner},
        {type:'shangyi1',title:'上移',icon:'icon-shangyi1',callback:this.leftMove},
        {type:'xiayi1',title:'下移',icon:'icon-xiayi1',callback:this.rightMove},
        {
          type: "set",
          title: "设置",
          icon: "icon-shezhi1",
          paneTitle: "横条设置"
        },
        { type: "hide", title: "隐藏", icon: "icon-hide"},
      ]
      this.settingData.items.forEach((element,i,)=>{
        if(element.nowIsSelect) {
            if(i == 0){
              this.buttonList = [obj1,obj2,obj3,obj5,obj6]
              this.mobileButtonList = [mobile1,mobile3,mobile4]
              this.settingData.items[i].resizeLShow = false
              if(this.settingData.items.length == 1){
                element.resizeLShow = false
                element.resizeRShow = false
                element.ColumnLabelShow = false
                this.buttonList = [obj1,obj2,obj3,obj7]
                this.mobileButtonList = [mobile5]
              }else{
                element.resizeLShow = false
                element.resizeRShow = true
                element.ColumnLabelShow = true
              }
            }else if(i == (this.settingData.items.length-1)){
              this.buttonList = [obj1,obj2,obj3,obj4,obj6]
              this.mobileButtonList = [mobile1,mobile2,mobile4]
              if(this.settingData.items.length == 1){
                element.resizeLShow = false
                element.resizeRShow = false
                element.ColumnLabelShow = false
                this.buttonList = [obj1,obj2,obj3,obj7]
              }else{
                element.resizeLShow = true
                element.resizeRShow = false
                element.ColumnLabelShow = true
              }
            }else{
              this.buttonList = [obj1,obj2,obj3,obj4,obj5,obj6]
              this.mobileButtonList = [mobile1,mobile2,mobile3,mobile4]
              if(i != (this.settingData.items.length - 1) || i != 0){
                element.resizeLShow = true
                element.resizeRShow = true
                element.ColumnLabelShow = true
              }
            }
        }
      })
    }
  },
  created(){
    let sumHeight = 0
    this.settingData.items.forEach((element,index)=>{
            
      element.resizeLShow = false
      element.resizeRShow = false
      element.ColumnLabelShow = false
      element.nowIsSelect = false

      if(!this.settingData.isMobile){
        element.height = this.style.height
        this.mobileStyle.height = this.style.height*this.settingData.items.length
        this.oldMobileH = this.mobileStyle.height
        // sumHeight += element.height
        // this.mobileStyle.height = sumHeight + parseFloat(this.settingData.setLayout.value)*(this.settingData.items.length-1)
      }else{
        
        sumHeight += element.height
        // this.mobileStyle.height = sumHeight
      }
      

      switch(index){
        case 0 :
          element.component = v
          break;
        case 1 :
          element.component = i
          break;
        case 2 :
          element.component = c
          break;
      }
    })
    //移动端=========================start
    if(!this.isComputer && this.settingData.mobileComIsHide){
      this.pattern = []
      zmEditor.$children[0].isCtrlShow = false //编辑框隐藏;
    }else{
      this.pattern = [1,1,1,1,1,1,1,1]
    }
    if(this.settingData.isMobile){
      this.mobileStyle.height = sumHeight + parseFloat(this.settingData.setLayout.value)*(this.settingData.items.length-1)
    }

    //移动端=========================end
  },
  beforeMount(){
    zmEditor.$store.state.background.oldCombination = null
  },
  mounted(){
    // this.nowWinWidth = zmEditor.$store.state.page.nowWinWidth - (this.getScrollbarWidth()?this.getScrollbarWidth():0)
    this.nowWinWidth = zmEditor.$store.state.page.nowWinWidth
    this.style.width = this.nowWinWidth

    let that = this
    //当前被编辑框以外的点击事件
    $(document).on("click", function (event) {
        event.stopPropagation();
        // console.log("event.target112--这是定义在组合横条中的全局点击事件如有影响请告知",event.target)
        if(that.isbanner == false) {
          return
        }
        //  console.log("event.target--这是定义在组合横条中的全局点击事件如有影响请告知",event.target)
        // if($(event.target).hasClass("#zm-page-body") || $(event.target).hasClass("#zm-page-foot") || $(event.target).hasClass("#zm-page-head") || (zmEditor.$store.state.background.oldCombination != zmEditor.$store.state.component.selectList[0])){
        if($(event.target).hasClass("zm-editor-mobile-row") || $(event.target).hasClass("zm-editor-page") || $(event.target).hasClass("zm-rows") || $(event.target).hasClass("zm-row-container-body") || $(event.target).hasClass("zm-page-bodyColor") || (zmEditor.$store.state.background.oldCombination != zmEditor.$store.state.component.selectList[0])){
        // console.log("event.target--这是定义在组合横条中的全局点击事件如有影响请告知",event.target)
        zmEditor.$children[0].isCtrlShow = false //编辑框隐藏;
        that.mainBannerVeinShow = true
        that.classShow = false;
        that.buttonList = [
          {type:'notFullPage',title:"取消满屏",icon:'icon-puman',callback:that.fullOrNotPage},
          {type:'style', title: "变更样式", icon: "icon-style",paneTitle:'横条样式',paneInfo:"选择和替换横条样式"},
          {type:'del',title:'删除',icon:'icon-delete',callback:that.deleteBanner}
        ]
        that.settingData.items.forEach((element,i)=>{
            element.resizeLShow = false
            element.resizeRShow = false
            element.ColumnLabelShow = false
            element.nowIsSelect = false
        })
        that.isbanner = false
        }else{
          that.btnList()
          that.isbanner = true
        }
    })
    // this.$store.state.pane.isRenderSelect && this.$store.commit("changeSelectList",this)
    if(this.$store.state.pane.isRenderSelect){
      this.$store.commit("changeSelectList",this)
    }else{
      this.id == this.$store.state.component.oldComID && this.$store.commit("changeSelectList",this)
    }
    this.$store.commit("addContainerToList",this)//容器组件需要添加这一行

    // 移动端===========================start
    if(this.lists && this.lists.length > 0 && this.lists[0].bannerFull){
      this.style.left = -zmEditor.$store.state.page.marginLeft
      this.style.width = this.nowWinWidth
      this.bannerNoFull = false
      this.bannerFull = true
      this.style.height = this.lists[0].height
    }
    if(this.lists && this.lists.length > 0 && this.lists[0].bannerNoFull){
      this.style.left = 0
      this.style.width = zmEditor.$store.state.page.contentWidth
      this.bannerNoFull = true
      this.bannerFull = false
      this.style.height = this.lists[0].height
    }
    if(!this.isComputer && this.settingData.mobileComIsHide){
      zmEditor.$children[0].isCtrlShow = false //编辑框隐藏;
      this.pattern = []
      // this.mobileStyle.height = this.style.height
    }
    // 移动端===========================end
  },
}
</script>
<style scoped>
 .zm-banner-main{
   display:flex;
 }
 .zm-banner-main2{
    box-sizing: content-box !important;
 }
 .zm-banner-main2 .eachBanner:nth-child(1){
   margin-top:0px !important;
 }
 .zm-main-banner-vein{
    /* z-index:1; */
    width: 100%;
    height: 100%;
    left:0px;
    top:0px;
    position:absolute;
  }
  .nowIsSelect{
    border: 2px solid #2D81C9;
    box-sizing: border-box;
  }
  .disableColor{
    color:#bcbcbc !important;
  }
  .banner-container{
    position: absolute;
    width:100%;
    height:100%;
    left: 0px;
    top:0px;
  }
</style>
