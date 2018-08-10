<template>
    <!-- PC端 -->
    <div v-if="isComputer" :id="id" class="zm-product-shuff" :style="{overflow:'hidden',position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px'}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
        <div class="zm-component-product-carousel" ref='procuctcarousel' :style="{width:style.width+'px',paddingLeft:settingData.productCarousel.paddingLeft+'px',paddingRight:settingData.productCarousel.paddingRight+'px',paddingTop:settingData.productCarousel.paddingTop+'px',paddingBottom:settingData.productCarousel.paddingBottom+'px',backgroundColor:settingData.productCarousel.value,}">
            <div class="zm-component-product-carousel-ul-box" ref='procuctbox' :style="{width:settingData.ulBoxW.width+'px'}">
                <ul class="zm-component-product-carousel-ul" ref='procuctUl' :style="{left:settingData.ProductViewCarousel.translateX+'px',width:settingData.ProductViewCarousel.ulWidth+'px'}">
                    <li ref='procuctLi'  v-for="(item,index) in assignData" :key='index' :productId="item.id" :style="{marginLeft:settingData.ProductViewCarousel.liMarginLeft+'px'}">
                        <div class="zm-component-product-carousel-imgbox1" @click.stop='productLink(item.url)' :style="{overflow:'hidden',width:settingData.ProductViewCarousel.imgWidth+'px',height:settingData.ProductViewCarousel.imgHeight+'px'}">
                            <div class="zm-component-product-carousel-imgbox2">
                                <!-- <img :src="item.mainImage"> -->
                                <div class="imgbox3" ref='imgbox3' :class="{image_magnify2:settingData.imgLayout.enlarge,image_shiftLeft2:settingData.imgLayout.leftMove,image_shiftTop2:settingData.imgLayout.topMove,image_emptiness2:settingData.imgLayout.blur}" :style="{backgroundImage:'url('+item.mainImage+')',width:settingData.ProductViewCarousel.imgWidth+'px',height:settingData.ProductViewCarousel.imgHeight+'px',border:settingData.border,backgroundSize:settingData.ProductViewCarousel.backgroundSize,backgroundPosition:settingData.ProductViewCarousel.backgroundPosition,}"></div>
                                <div v-html="vienH" class="zm-component-product-carousel-vien" v-show='settingData.carouselVien.show' @mouseout.stop="vienMouseout(index)" @mousemove="vienMousemove(index)" :class="{image_magnify2:settingData.imgLayout.enlarge,image_shiftLeft2:settingData.imgLayout.leftMove,image_shiftTop2:settingData.imgLayout.topMove,image_emptiness2:settingData.imgLayout.blur}" :style="{backgroundColor:'rgba(255,255,255,0)',width:settingData.carouselVien.width,height:settingData.carouselVien.height,position:settingData.carouselVien.position,left:settingData.carouselVien.left,top:settingData.carouselVien.top}"></div>
                                
                                <div v-show="item.fLabel.length >= 3" class="zm-component-product-carousel-sale" v-if="(item.fLabel != null) && (item.fLabel.trim() !='') && (item.fLabel !=' ')" :style="{left:settingData.carouselSale.left+'px',top:settingData.carouselSale.top+'px',width:settingData.carouselSale.width+'px',height:settingData.carouselSale.height+'px',color:settingData.carouselSale.color,textAlign:settingData.carouselSale.textAlign,lineHeight:settingData.carouselSale.lineHeight+'px',fontSize:settingData.carouselSale.fontSize+'px'}">
                                    <svg :style="{fill:settingData.fLabelBgColor.value}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 204"><defs><style>.cls-1{fill:#ff5c01;}</style></defs><title>产品标签</title><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><polygon  points="135 204 67.5 158 0 204 0 0 135 0 135 204"/></g></g></svg>
                                    <div class="zm-component-product-hot" :style="{color:settingData.fLabelTColor.value,width:settingData.productHot.width,height:settingData.productHot.height,position:settingData.productHot.position,left:settingData.productHot.left+'px',top:settingData.productHot.top,textAlign:settingData.productHot.textAlign,lineHeight:settingData.productHot.lineHeight,}">{{item.fLabel}}</div>
                                </div>
                                <div v-show="item.fLabel.length < 3" class="zm-component-product-carousel-sale" v-if="(item.fLabel != null) && (item.fLabel.trim() !='') && (item.fLabel !=' ')" :style="{left:settingData.carouselSale.left+'px',top:settingData.carouselSale.top+'px',width:settingData.carouselSale.width+'px',height:settingData.carouselSale.height+'px',color:settingData.carouselSale.color,textAlign:settingData.carouselSale.textAlign,lineHeight:settingData.carouselSale.lineHeight+'px',fontSize:settingData.carouselSale.fontSize+'px'}">
                                    <svg :style="{fill:settingData.fLabelBgColor.value}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 204"><defs><style>.cls-1{fill:#ff5c01;}</style></defs><title>产品标签</title><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><polygon  points="135 204 67.5 158 0 204 0 0 135 0 135 204"/></g></g></svg>
                                    <div class="zm-component-product-hot" :style="{color:settingData.fLabelTColor.value,width:settingData.productHot.width,height:settingData.productHot.height,position:settingData.productHot.position,left:settingData.productHot.left+'px',top:'24%',textAlign:settingData.productHot.textAlign,lineHeight:settingData.productHot.lineHeight,}">{{item.fLabel}}</div>
                                </div>

                            </div>
                        </div>
                        <div class="zm-component-product-carousel-text" ref='textHeight' :style="{height:settingData.ProductViewCarousel.text+'px',width:settingData.ProductViewCarousel.imgWidth+'px',}">
                            <div class="zm-component-product-carousel-title" @click.stop='productLink(item.url)' :style="{height:(settingData.carouselHitleH+1)+'px',textIndent:settingData.carouselTitleT.value,textAlign:settingData.carouselTitAlign,lineHeight:settingData.NamelineHeight.value+'em',lineClamp:['-webkit',settingData.textRowNum],boxOrient:'vertical',width:settingData.ProductViewCarousel.imgWidth+'px',marginTop:settingData.carouselTitlePT.value,marginBottom:settingData.carouselTitlePB.value,fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}"><span v-html="NameHC"></span>{{item.name}}</div>
                            <div class="zm-component-product-carousel-sku" v-show="settingData.skuSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.skumarginRight.value,textIndent:settingData.skuTitTextIndent.value,textAlign:settingData.skutit,marginBottom:settingData.skumarginBottom.value,paddingTop:settingData.skuTitmarginTop.value,fontWeight:settingData.skufont3.value.fontWeight,fontFamily:settingData.skufont3.value.fontFamily,fontSize:settingData.skufont3.value.fontSize,color:settingData.skufont3.value.color,fontStyle:settingData.skufont3.value.fontStyle}">{{item.productSku}}</div>
                            <div class="zm-component-product-carousel-price" v-show="settingData.retailSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.retailmarginRight.value,textIndent:settingData.retailTitTextIndent.value,textAlign:settingData.retailtit,paddingBottom:settingData.retailmarginBottom.value,paddingTop:settingData.retailTitmarginTop.value,fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}"><span>{{item.priceStr}}</span></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="zm-component-product-carousel-arrowleft arrowBtn"  @click.stop='arrow("left")' :style="{left:settingData.BtnTextIndent.value+'px',cursor:settingData.cursorStyle1,top:settingData.carouselArrow.top,backgroundColor:settingData.carouselArrowbg.value,marginTop:settingData.carouselArrow.marginTop+'px',width:settingData.carouselArrow.width+'px',height:settingData.carouselArrow.height+'px',top:settingData.carouselArrow.top}">
                <span v-html="arrowBtnHC"></span>
                <i class="iconfont arrowHoverC" v-html="arrowHoverColor" :class="settingData.ctrlStyle.left" :style="{color:settingData.arrowColor.value,lineHeight:settingData.carouselArrow.height+'px',}"></i>
            </div>
            <div class="zm-component-product-carousel-arrowright arrowBtn" @click.stop='arrow("right")' :style="{right:settingData.BtnTextIndent.value+'px',cursor:settingData.cursorStyle2,top:settingData.carouselArrow.top,backgroundColor:settingData.carouselArrowbg.value,marginTop:settingData.carouselArrow.marginTop+'px',width:(parseInt(settingData.carouselArrow.width)+1)+'px',height:settingData.carouselArrow.height+'px',top:settingData.carouselArrow.top}">
                <span v-html="arrowBtnHC"></span>
                <i class="iconfont arrowHoverC" v-html="arrowHoverColor" :class="settingData.ctrlStyle.right" :style="{color:settingData.arrowColor.value,lineHeight:settingData.carouselArrow.height+'px',}"></i>
            </div>
        </div>
    </div>
    <!-- 移动端 -->
    <div v-else-if="(!isComputer && settingData.mobileComIsHide)" :id="id" class="zm-product-shuff" :style="{overflow:'hidden',position: 'absolute', width: mobileStyle.width+'px',height: mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px'}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
        <div class="zm-component-product-carousel" ref='procuctcarousel' :style="{width:mobileStyle.width+'px',paddingLeft:settingData.mobileData.paddingLeft+'px',paddingRight:settingData.mobileData.paddingRight+'px',paddingTop:settingData.productCarousel.paddingTop+'px',paddingBottom:settingData.productCarousel.paddingBottom+'px',backgroundColor:settingData.productCarousel.value,}">
            <div class="zm-component-product-carousel-ul-box" ref='procuctbox' :style="{width:settingData.ulBoxW.width+'px'}">
                <ul class="zm-component-product-carousel-ul" ref='procuctUl' :style="{left:settingData.ProductViewCarousel.translateX+'px',width:settingData.ProductViewCarousel.ulWidth+'px'}">
                    <li ref='procuctLi'  v-for="(item,index) in assignData" :key='index' :productId="item.id" :style="{marginLeft:settingData.ProductViewCarousel.liMarginLeft+'px'}">
                        <div class="zm-component-product-carousel-imgbox1" @click.stop='productLink(item.url)' :style="{overflow:'hidden',width:settingData.mobileData.imgWidth+'px',height:settingData.mobileData.imgHeight+'px'}">
                            <div class="zm-component-product-carousel-imgbox2">
                                <!-- <img :src="item.mainImage"> -->
                                <div class="imgbox3" ref='imgbox3' :class="{image_magnify2:settingData.imgLayout.enlarge,image_shiftLeft2:settingData.imgLayout.leftMove,image_shiftTop2:settingData.imgLayout.topMove,image_emptiness2:settingData.imgLayout.blur}" :style="{backgroundImage:'url('+item.mainImage+')',width:settingData.mobileData.imgWidth+'px',height:settingData.ProductViewCarousel.imgHeight+'px',border:settingData.border,backgroundSize:settingData.ProductViewCarousel.backgroundSize,backgroundPosition:settingData.ProductViewCarousel.backgroundPosition,}"></div>
                                <div v-html="vienH" class="zm-component-product-carousel-vien" v-show='settingData.carouselVien.show' @mouseout.stop="vienMouseout(index)" @mousemove="vienMousemove(index)" :class="{image_magnify2:settingData.imgLayout.enlarge,image_shiftLeft2:settingData.imgLayout.leftMove,image_shiftTop2:settingData.imgLayout.topMove,image_emptiness2:settingData.imgLayout.blur}" :style="{backgroundColor:'rgba(255,255,255,0)',width:settingData.carouselVien.width,height:settingData.carouselVien.height,position:settingData.carouselVien.position,left:settingData.carouselVien.left,top:settingData.carouselVien.top}"></div>
                                
                                <div v-show="item.fLabel.length >= 3" class="zm-component-product-carousel-sale" v-if="(item.fLabel != null) && (item.fLabel.trim() !='') && (item.fLabel !=' ')" :style="{left:settingData.carouselSale.left+'px',top:settingData.carouselSale.top+'px',width:settingData.carouselSale.width+'px',height:settingData.carouselSale.height+'px',color:settingData.carouselSale.color,textAlign:settingData.carouselSale.textAlign,lineHeight:settingData.carouselSale.lineHeight+'px',fontSize:settingData.carouselSale.fontSize+'px'}">
                                    <svg :style="{fill:settingData.fLabelBgColor.value}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 204"><defs><style>.cls-1{fill:#ff5c01;}</style></defs><title>产品标签</title><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><polygon  points="135 204 67.5 158 0 204 0 0 135 0 135 204"/></g></g></svg>
                                    <div class="zm-component-product-hot" :style="{color:settingData.fLabelTColor.value,width:settingData.productHot.width,height:settingData.productHot.height,position:settingData.productHot.position,left:settingData.productHot.left+'px',top:settingData.productHot.top,textAlign:settingData.productHot.textAlign,lineHeight:settingData.productHot.lineHeight,}">{{item.fLabel}}</div>
                                </div>
                                <div v-show="item.fLabel.length < 3" class="zm-component-product-carousel-sale" v-if="(item.fLabel != null) && (item.fLabel.trim() !='') && (item.fLabel !=' ')" :style="{left:settingData.carouselSale.left+'px',top:settingData.carouselSale.top+'px',width:settingData.carouselSale.width+'px',height:settingData.carouselSale.height+'px',color:settingData.carouselSale.color,textAlign:settingData.carouselSale.textAlign,lineHeight:settingData.carouselSale.lineHeight+'px',fontSize:settingData.carouselSale.fontSize+'px'}">
                                    <svg :style="{fill:settingData.fLabelBgColor.value}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 204"><defs><style>.cls-1{fill:#ff5c01;}</style></defs><title>产品标签</title><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><polygon  points="135 204 67.5 158 0 204 0 0 135 0 135 204"/></g></g></svg>
                                    <div class="zm-component-product-hot" :style="{color:settingData.fLabelTColor.value,width:settingData.productHot.width,height:settingData.productHot.height,position:settingData.productHot.position,left:settingData.productHot.left+'px',top:'24%',textAlign:settingData.productHot.textAlign,lineHeight:settingData.productHot.lineHeight,}">{{item.fLabel}}</div>
                                </div>

                            </div>
                        </div>
                        <div class="zm-component-product-carousel-text" ref='textHeight' :style="{height:settingData.ProductViewCarousel.text+'px',width:settingData.mobileData.imgWidth+'px',}">
                            <div class="zm-component-product-carousel-title" @click.stop='productLink(item.url)' :style="{lineClamp:['-webkit',2],boxOrient:'vertical',marginTop:settingData.carouselTitlePT.value,fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:parseInt(settingData.bannerfont3.value.fontSize)>16?'16px':settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}"><span v-html="NameHC"></span>{{item.name}}</div>
                            <div class="zm-component-product-carousel-sku" v-show="settingData.skuSwitchShowM.value" :style="{boxOrient:'vertical',marginTop:'10px',fontWeight:settingData.skufont3.value.fontWeight,fontFamily:settingData.skufont3.value.fontFamily,fontSize:parseInt(settingData.skufont3.value.fontSize)>16?'16px':settingData.skufont3.value.fontSize,color:settingData.skufont3.value.color,fontStyle:settingData.skufont3.value.fontStyle}">{{item.productSku}}</div>
                            <div class="zm-component-product-carousel-price" v-show="settingData.retailSwitchShowM.value" :style="{boxOrient:'vertical',marginTop:'8px',fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:parseInt(settingData.retailfont3.value.fontSize)>16?'16px':settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}"><span>{{item.priceStr}}</span></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="zm-component-product-carousel-arrowleft arrowBtn"  @click.stop='mobileArrow("left")' :style="{left:settingData.BtnTextIndent.value+'px',cursor:settingData.cursorStyle1,top:settingData.carouselArrow.top,backgroundColor:settingData.carouselArrowbg.value,marginTop:settingData.mobileData.marginTop+'px',width:settingData.mobileData.width+'px',height:settingData.btnH.value+'px',top:settingData.carouselArrow.top}">
                <span v-html="arrowBtnHC"></span>
                <i class="iconfont arrowHoverC" v-html="arrowHoverColor" :class="settingData.ctrlStyle.left" :style="{color:settingData.arrowColor.value,lineHeight:settingData.btnH.value+'px',}"></i>
            </div>
            <div class="zm-component-product-carousel-arrowright arrowBtn" @click.stop='mobileArrow("right")' :style="{right:settingData.BtnTextIndent.value+'px',cursor:settingData.cursorStyle2,top:settingData.carouselArrow.top,backgroundColor:settingData.carouselArrowbg.value,marginTop:settingData.mobileData.marginTop+'px',width:settingData.mobileData.width+'px',height:settingData.btnH.value+'px',top:settingData.carouselArrow.top}">
                <span v-html="arrowBtnHC"></span>
                <i class="iconfont arrowHoverC" v-html="arrowHoverColor" :class="settingData.ctrlStyle.right" :style="{color:settingData.arrowColor.value,lineHeight:settingData.btnH.value+'px',}"></i>
            </div>
        </div>
    </div>
</template>

<script>
import productShuffConfig from "./productShuffConfig.js";
export default {
    mixins:[productShuffConfig],
    name: "com-productShuffling",
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
          id:this.prop.id,
          type:"product",
          mold:"commonContainer",
          style: this.prop.style,
          settingData:this.prop.settingData,
          lists: this.prop.lists,
          pattern: [1,1,1,1,1,1,1,1],
          isShowRotateBtn: false,
          fullPageSet: true,//组件是否有全屏（宽度）功能
          buttonList: [
            {
                type: "manage",
                title: "商品",
                icon: "icon-gouwuche",
                callback: () => {
                    zmEditor.$store.commit("changePaneData", {
                    key: "paneType",
                    value: true
                    }); //打开弹窗;
                    zmEditor.$store.commit("changePaneData", {
                    key: "paneTitle",
                    value: "商品管理",
                    }); //弹窗标题;;
                    zmEditor.$store.commit("changePaneData", {
                    key: "paneHelpInfo",
                    value: "选择要显示的商品(产品或服务)"
                    }); //问号图标hover显示内容;
                    zmEditor.$store.commit("changePaneData", {
                    key: "paneMode",
                    value: "/com/product/productManage/productManage.vue"
                    }); //弹窗内容应加载的组件路径;
                }
            },
            { type: "set",title: "设置", icon: "icon-shezhi1",paneTitle:'商品设置',paneInfo:"通过设置项调整布局、图片、背景色和文字内容"},
            { type: "style", title: "变更样式", icon: "icon-style",paneTitle:'商品样式',paneInfo:"选择和替换商品样式"},
            { type: "del", title: "删除", icon: "icon-delete" },
          ],
          prodcutList:[//商品类型设置项下的产品数据
                {
                    fId:'556566121',
                    fTitle:'韩版修身连衣裙韩版修身韩版修身',
                    productImg:'http://image.zuma.com/upload/913204624819277634.jpg',
                },
          ],

          mobileButtonList: [
              { type: "hide", title: "隐藏", icon: "icon-hide" },
              {
                type: "set",
                title: "设置",
                icon: "icon-shezhi1",
                paneTitle: "商品管理"
              }
          ], //手机版设置项按钮
          mobileChildData: this.prop.mobileChildData, //手机版子组件信息
          mobileStyle: this.prop.mobileStyle, //手机版样式
        }
    },
    watch:{
        'style.left':{
            handler(){
                if(this.style.width == zmEditor.$store.state.page.nowWinWidth ){
                }else{
                    this.settingData.ProductViewCarousel.oldMainWidth =  this.style.width
                    this.settingData.oldLeft  =  this.style.left;
                }
            },
            deep:true
        },
        'settingData.shadowShow.value':{
            handler(){
                if(this.settingData.shadowShow.value){
                    this.settingData.boxShadow = this.settingData.oldboxShadow
                }else{
                    this.settingData.boxShadow = ''
                }
            }
        }
    },
    computed:{
        vienH(){//光标悬浮遮罩颜色
            let viehoverC = this.settingData.carouselVien.value
            let _id = "#"+this.id
            return `<style>
                ${_id} .zm-component-product-carousel-vien:hover{
                    background-color:${viehoverC} !important;
                }
            </style>`
        },
        arrowHoverColor(){//光标悬浮箭头颜色
            let hoverC = this.settingData.arrowHoverColor.value
            let _id = "#"+this.id
            return `<style>
                    ${_id} .arrowHoverC:hover{
                        color:${hoverC} !important;
                    }
            </style>`
        },
        arrowBtnHC(){//光标悬浮按钮背景颜色
            let btnhoverC = this.settingData.arrowBtnHC.value
            let _id = "#"+this.id
            return `<style>
                    ${_id} .arrowBtn:hover{
                        background-color:${btnhoverC} !important;
                    }
            </style>`
        },
        NameHC(){//光标悬浮文字颜色
            let nameHoverC = this.settingData.NameHoverColor.value
            let _id = "#"+this.id
            return `<style>
                    ${_id} .zm-component-product-carousel-title:hover{
                        color:${nameHoverC} !important;
                        text-decoration: underline;
                    }
            </style>`
        },
        assignData(){
            let _this = this;
            let arr = [];
            if(!this.lists){
                return
            }
            cutData(_this.lists)
            function cutData(_data) {
                _data.forEach(item => {
                    if (item.childItem != null && item.childItem != undefined && item.childItem.length != 0) {
                        cutData(item.childItem)
                    } else {
                        try {
                            arr.push(item);
                        } catch (err) {
                            console.log(arr)
                        }
                    }
                })
            }
            this.settingData.productShufflingList = arr
            this.settingData.ProductViewCarousel.translateX = 0
            this.settingData.ProductViewCarousel.moveLeftNum = 0

            // this.settingData.lists = arr
            this.$emit('updataMes',{ key : "lists",index:this.index,value:arr});//数据存储,更改父级lists;
            return arr
        },
        isFullPage(){
		  // 返回值为当前组件控制全屏按钮的属性值
		  return this.settingData['fullScreen'].value;
        }
    },
    methods:{
        fullpage(val){//工具条控制是否全屏的设置项的回调函数逻辑
            if(val){
                this.style.width = zmEditor.$store.state.page.nowWinWidth
                this.style.left = -zmEditor.$store.state.page.marginLeft
                this.settingData['fullScreen'].value = true
            }else{
                this.style.width = this.settingData.ProductViewCarousel.oldMainWidth
                this.style.left = this.settingData.oldLeft
                this.settingData['fullScreen'].value = false
            }
            this.ComponentsOfCalculated()
            this.settingData.ProductViewCarousel.translateX = 0
            this.settingData.ProductViewCarousel.moveLeftNum = 0

            this.settingData.cursorStyle1 = 'pointer'
            this.settingData.cursorStyle2 = 'not-allowed'
            this.isCarousel = true
            this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
        },
        boxShadowX(v){//阴影X轴偏移设置项
            this.settingData.boxShadowObj.boxShadowX = v+'px '
            this.boxShadowF()
        },
        boxShadowY(v){//阴影Y轴偏移设置项
            this.settingData.boxShadowObj.boxShadowY = v+'px '
            this.boxShadowF()
        },
        boxShadowB(v){//阴影模糊度设置项
            this.settingData.boxShadowObj.boxShadowB = v+'px '
            this.boxShadowF()
        },
        boxShadowBG(v){//阴影颜色设置项
            this.settingData.boxShadowObj.boxShadowBG = v.color
            this.boxShadowF()
        },
        boxShadowF(){//阴影
            this.settingData.boxShadow = this.settingData.boxShadowObj.boxShadowX + this.settingData.boxShadowObj.boxShadowY + this.settingData.boxShadowObj.boxShadowB + this.settingData.boxShadowObj.boxShadowBG
            this.settingData.oldboxShadow = this.settingData.boxShadow
        },
        isShowSet(_that, val) {
            let child = _that.$parent.$children;
            child.forEach(item => {
                item.prop && item.prop.attr == "carouselVien" ? (item.prop.isShowSet = val) : "";
            })
        },
        productLink(url){//点击查看详情
            // location.href = url//当前页打开新页面
            // window.open(url, "_blank")//保存当前页，打开新页面
        },
        pictureHeight(ww,hh){//图片宽高比例设置项回调函数
            let imgW = this.settingData.ProductViewCarousel.imgWidth
            let imgWM = this.settingData.mobileData.imgWidth
            switch(ww){
                case 16:
                    this.settingData.ProductViewCarousel.imgHeight = Math.round(imgW*(9/16))
                    this.settingData.mobileData.imgHeight = Math.round(imgWM*(9/16))
                    // this.style.height = Math.round(imgW*(9/16)) + titleH
                    break;
                case 3:
                    if(hh == 2){
                        this.settingData.ProductViewCarousel.imgHeight = Math.round(imgW*(2/3))
                        this.settingData.mobileData.imgHeight = Math.round(imgWM*(2/3))
                    }else if(hh == 4){
                        this.settingData.ProductViewCarousel.imgHeight = Math.round(imgW*(4/3))
                        this.settingData.mobileData.imgHeight = Math.round(imgWM*(4/3))
                    }
                    break;
                case 4:
                    this.settingData.ProductViewCarousel.imgHeight = Math.round(imgW*(3/4))
                    this.settingData.mobileData.imgHeight = Math.round(imgWM*(3/4))
                    break;
                case 1:
                    this.settingData.ProductViewCarousel.imgHeight = Math.round(imgW)
                    this.settingData.mobileData.imgHeight = Math.round(imgWM)
                    break;
            }
              this.settingData.ProductViewCarousel.widthPer = ww
              this.settingData.ProductViewCarousel.heightPer = hh
            //   this.style.height = ($(this.$refs.procuctLi).height() + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom)
              this.ComponentsOfCalculated()
              this.ComponentsOfCalculatedM()
        },
        paddingTopF(v){//组件上部高度
            this.settingData.productCarousel.paddingTop = parseFloat(v)
            this.ComponentsOfCalculated()
        },
        bgImgCb(v){//图片显示效果设置项回调函数
              if(v.trim() == '自适应'){
                this.settingData.ProductViewCarousel.backgroundSize = 'cover'
                this.settingData.ProductViewCarousel.backgroundPosition = ''
              }else if(v.trim() == '填充'){
                this.settingData.ProductViewCarousel.backgroundSize = ''
                this.settingData.ProductViewCarousel.backgroundPosition = '0px 0px'
              }
        },
        vienMousemove(index){//图片遮罩层移入事件
            // this.settingData.carouselVien.show = true
            if(this.settingData.imgLayout.enlarge == true){
                $(this.$refs.imgbox3).eq(index).css('transform','scale(1.04)')
            }else if(this.settingData.imgLayout.leftMove == true){
                $(this.$refs.imgbox3).eq(index).css('transform','translateX(-3%)')
            }else if(this.settingData.imgLayout.topMove == true){
                $(this.$refs.imgbox3).eq(index).css('transform','translateY(-3%)')
            }else if(this.settingData.imgLayout.blur == true){
                $(this.$refs.imgbox3).eq(index).css('filter','blur(2px)')
            }
            
        },
        vienMouseout(index){//图片遮罩层移出事件
            // this.settingData.carouselVien.show = false
            $(this.$refs.imgbox3).eq(index).css('transition','')
            $(this.$refs.imgbox3).eq(index).css('transform','')
            $(this.$refs.imgbox3).eq(index).css('transform','')
            $(this.$refs.imgbox3).eq(index).css('transform','')
            $(this.$refs.imgbox3).eq(index).css('filter','')
        },
        imgFloatE(v,v2,_that){//图片悬浮效果回调函数
              switch(v){
                  case '无效果':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = false
                    this.settingData.carouselVien.show = false
                    this.settingData.carouselVien.isShowSet = true
                    this.isShowSet(_that, this.settingData.carouselVien.isShowSet);
                    break;
                  case '放大':
                    this.settingData.imgLayout.enlarge = true
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = false
                    this.settingData.carouselVien.show = false
                    this.settingData.carouselVien.isShowSet = true
                    this.isShowSet(_that, this.settingData.carouselVien.isShowSet);
                    break;
                  case '左移':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = true
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = false
                    this.settingData.carouselVien.show = false
                    this.settingData.carouselVien.isShowSet = true
                    this.isShowSet(_that, this.settingData.carouselVien.isShowSet);
                    break;
                  case '上移':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = true
                    this.settingData.imgLayout.blur = false
                    this.settingData.carouselVien.show = false
                    this.settingData.carouselVien.isShowSet = true
                    this.isShowSet(_that, this.settingData.carouselVien.isShowSet);
                    break;
                  case '虚化':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = true
                    this.settingData.carouselVien.show = false
                    this.settingData.carouselVien.isShowSet = true
                    this.isShowSet(_that, this.settingData.carouselVien.isShowSet);
                    break;
                  case '覆盖颜色':
                    this.settingData.carouselVien.show = true
                    this.settingData.carouselVien.isShowSet = false
                    this.isShowSet(_that, this.settingData.carouselVien.isShowSet);
                    break;
              }
        },
        borderColorF(v){//图片边框颜色
            this.settingData.borderColor.value = v.color
            this.settingData.border = this.settingData.borderW.value+' solid '+this.settingData.borderColor.value
        },
        borderWF(v){//图片边框宽度
            this.settingData.borderW.value = v+'px'
            this.settingData.border = this.settingData.borderW.value+' solid '+this.settingData.borderColor.value
        },
        ComponentsOfCalculated(){//计算组件宽高，计算图片和文字区域宽高函数
            let num = this.settingData.ProductViewCarousel.num
            let paddingLeft = this.settingData.productCarousel.paddingLeft
            let liMarginLeft = this.settingData.ProductViewCarousel.liMarginLeft
            let paddingTop = this.settingData.productCarousel.paddingTop
            this.settingData.ProductViewCarousel.imgWidth = ((this.style.width - paddingLeft*2 - liMarginLeft*(num-1))/num)
            this.settingData.ProductViewCarousel.imgHeight = (this.settingData.ProductViewCarousel.imgWidth*(this.settingData.ProductViewCarousel.heightPer/this.settingData.ProductViewCarousel.widthPer))
            
            // let mainH = this.settingData.ProductViewCarousel.imgHeight + $(this.$refs.textHeight).height() + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom+10-parseFloat(this.settingData.retailmarginBottom.value,paddingTop)
            // setTimeout(()=>{
                let mainH = this.settingData.ProductViewCarousel.imgHeight + $(this.$refs.textHeight).height() + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom
                this.style.height = mainH
            // },20)
            this.settingData.cursorStyle1 = 'pointer'
            this.settingData.cursorStyle2 = 'not-allowed'

        },
        ComponentsOfCalculatedM(){//移动端计算组件宽高，计算图片和文字区域宽高函数
            let num = this.settingData.mobileData.num
            let paddingLeft = this.settingData.mobileData.paddingLeft
            let liMarginLeft = this.settingData.ProductViewCarousel.liMarginLeft
            let paddingTop = this.settingData.mobileData.paddingTop
            this.settingData.mobileData.imgWidth = ((this.mobileStyle.width - paddingLeft*2 - liMarginLeft*(num-1))/num)
            this.settingData.mobileData.imgHeight = (this.settingData.mobileData.imgWidth*(this.settingData.ProductViewCarousel.heightPer/this.settingData.ProductViewCarousel.widthPer))

            setTimeout(()=>{
                let textHeight = this.getTextHeight()
                // let mainH = this.settingData.mobileData.imgHeight + $(this.$refs.textHeight).height() + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom
                let mainH = this.settingData.mobileData.imgHeight + textHeight + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom
                this.mobileStyle.height = mainH
            },20)
        },
        getTextHeight(){
            let _id = "#"+this.id
            let maxH = $(_id).find('.zm-component-product-carousel-text').eq(0).height()
            for(let i = 1;i < $(_id).find('.zm-component-product-carousel-text').length;i++){
                if(maxH < $(_id).find('.zm-component-product-carousel-text').eq(i).height() ){
                    maxH = $(_id).find('.zm-component-product-carousel-text').eq(i).height()
                }
            }
            return maxH
        },
        fullScreen(v){//全屏宽度
            if(v == true ){
                this.style.width = zmEditor.$store.state.page.nowWinWidth
                this.style.left = -zmEditor.$store.state.page.marginLeft
                this.settingData['fullScreen'].value = true
            }else if(v == false){
                this.style.width = this.settingData.ProductViewCarousel.oldMainWidth
                this.style.left = this.settingData.oldLeft
                this.settingData['fullScreen'].value = false
            }
            this.ComponentsOfCalculated()
            this.settingData.ProductViewCarousel.translateX = 0
            this.settingData.ProductViewCarousel.moveLeftNum = 0

            this.settingData.cursorStyle1 = 'pointer'
            this.settingData.cursorStyle2 = 'not-allowed'
            this.isCarousel = true
            this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
        },
        numberOfColumns(v){//列数改变
            this.settingData.ProductViewCarousel.num = v
            this.settingData.ProductViewCarousel.translateX = 0
            setTimeout(()=>{
                this.ComponentsOfCalculated()
                this.settingData.ProductViewCarousel.oldMainWidth = this.style.width
                this.settingData.oldLeft = this.style.left
                this.settingData.ProductViewCarousel.moveLeftNum = 0
                this.isCarousel = true

                this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
            },20)
            this.settingData.ProductViewCarousel.oldnum = v
        },
        liMarginLeftF(v){//列间距
            this.settingData.ProductViewCarousel.translateX = 0
            this.settingData.ProductViewCarousel.moveLeftNum = 0
            this.settingData.ProductViewCarousel.liMarginLeft =parseInt(v)
            // this.style.width = this.settingData.ProductViewCarousel.oldMainWidth
            
            setTimeout(()=>{
                this.ComponentsOfCalculated()
                this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
            },20)
            // this.ComponentsOfCalculated()
            // this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
        },
        arrow(v){//点击组件左右箭头事件
            let liMove = parseFloat(this.settingData.ProductViewCarousel.imgWidth + this.settingData.ProductViewCarousel.liMarginLeft)
            setTimeout(()=>{
                if(v == 'right'){
                    ++this.settingData.ProductViewCarousel.moveLeftNum
                    if(this.settingData.ProductViewCarousel.moveLeftNum > (this.settingData.productShufflingList.length-this.settingData.ProductViewCarousel.num)){
                        this.settingData.ProductViewCarousel.moveLeftNum = this.settingData.productShufflingList.length-this.settingData.ProductViewCarousel.num
                        this.settingData.cursorStyle1 = 'pointer'
                        this.settingData.cursorStyle2 = 'not-allowed'
                        return
                    }
                    this.settingData.cursorStyle1 = 'pointer'
                    this.settingData.cursorStyle2 = 'pointer'
                    this.settingData.ProductViewCarousel.translateX += parseFloat(-liMove)
                }else if(v == 'left'){
                    --this.settingData.ProductViewCarousel.moveLeftNum
                    if(this.settingData.ProductViewCarousel.moveLeftNum < 0){
                        this.settingData.ProductViewCarousel.moveLeftNum = 0
                        this.settingData.cursorStyle1 = 'not-allowed'
                        this.settingData.cursorStyle2 = 'pointer'
                        return
                    }
                    this.settingData.cursorStyle1 = 'pointer'
                    this.settingData.cursorStyle2 = 'pointer'
                    
                    
                    this.settingData.ProductViewCarousel.translateX += parseFloat(liMove)

                    
                }
                this.settingData.ProductViewCarousel.oldMainWidth = this.style.width
                this.settingData.oldLeft = this.style.left
                this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
            },20)

        },
        mobileArrow(v){//移动端点击组件左右箭头事件
            let liMove = this.settingData.mobileData.imgWidth + this.settingData.ProductViewCarousel.liMarginLeft
            setTimeout(()=>{
                if(v == 'right'){
                    ++this.settingData.ProductViewCarousel.moveLeftNum
                    if(this.settingData.ProductViewCarousel.moveLeftNum > (this.settingData.productShufflingList.length-this.settingData.mobileData.num)){
                        this.settingData.ProductViewCarousel.moveLeftNum = this.settingData.productShufflingList.length-this.settingData.mobileData.num
                        this.settingData.cursorStyle1 = 'pointer'
                        this.settingData.cursorStyle2 = 'not-allowed'
                        return
                    }
                    this.settingData.cursorStyle1 = 'pointer'
                    this.settingData.cursorStyle2 = 'pointer'
                    this.settingData.ProductViewCarousel.translateX += parseFloat(-liMove)
                }else if(v == 'left'){
                    --this.settingData.ProductViewCarousel.moveLeftNum
                    if(this.settingData.ProductViewCarousel.moveLeftNum < 0){
                        this.settingData.ProductViewCarousel.moveLeftNum = 0
                        this.settingData.cursorStyle1 = 'not-allowed'
                        this.settingData.cursorStyle2 = 'pointer'
                        return
                    }
                    this.settingData.cursorStyle1 = 'pointer'
                    this.settingData.cursorStyle2 = 'pointer'
                    
                    
                    this.settingData.ProductViewCarousel.translateX += parseFloat(liMove)

                    
                }
                // this.settingData.ProductViewCarousel.oldMainWidth = this.style.width
                // this.settingData.oldLeft = this.style.left
                // this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
            },20)

        },
        pointCallBack(index){//拖动组件八个点的回调函数
            this.settingData.ProductViewCarousel.translateX = 0
            this.settingData.ProductViewCarousel.moveLeftNum = 0
            // this.settingData.cursorStyle1 = 'pointer'
            // this.settingData.cursorStyle2 = 'not-allowed'
            let liMove = this.settingData.ProductViewCarousel.imgWidth+this.settingData.ProductViewCarousel.liMarginLeft
            
            if(index == 0 ||index == 2 || index==3 || index == 4 || index == 6 || index == 7){
                this.ComponentsOfCalculated()
           }else{
               let num = this.settingData.ProductViewCarousel.num
               let paddingLeft = this.settingData.productCarousel.paddingLeft
               let liMarginLeft = this.settingData.ProductViewCarousel.liMarginLeft
               let paddingTop = this.settingData.productCarousel.paddingTop
               this.settingData.ProductViewCarousel.imgHeight = (this.style.height - paddingTop*2 - $(this.$refs.textHeight).height())
               this.settingData.ProductViewCarousel.imgWidth = (this.settingData.ProductViewCarousel.imgHeight*(this.settingData.ProductViewCarousel.widthPer/this.settingData.ProductViewCarousel.heightPer))
               this.style.width = (this.settingData.ProductViewCarousel.imgWidth*this.settingData.ProductViewCarousel.num+this.settingData.ProductViewCarousel.liMarginLeft*(this.settingData.ProductViewCarousel.num-1) + this.settingData.productCarousel.paddingLeft*2)
           }
           this.settingData.ProductViewCarousel.oldMainWidth = this.style.width
           this.settingData.oldLeft = this.style.left
           this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
           this.settingData.cursorStyle1 = 'not-allowed'
           this.settingData.cursorStyle2 = 'pointer'
        },
        arrowStyleF(v, a, b) { //title,left箭头,index
            this.settingData.ctrlStyle.title = v;
            this.settingData.ctrlStyle.left = a;
            this.settingData.ctrlStyle.right = b;
        },
        arrowWidthF(v){//箭头宽度
            this.settingData.carouselArrow.width = v
            // this.settingData.carouselArrow.value = this.settingData.oldArrowBg
        },
        BtnTextIndentF(v){//左右按钮缩进
            this.settingData.BtnTextIndent.value = v
        },
        textRowF(v){//文本行数
              if(v.trim() == '单行文本'){
                  this.settingData.textRowNum = 1
              }else if(v.trim() == '两行文本'){
                  this.settingData.textRowNum = 2
              }
              this.settingData.carouselHitleH = parseFloat(this.settingData.bannerfont3.value.fontSize)*parseFloat(this.settingData.NamelineHeight.value)*parseFloat(this.settingData.textRowNum)
              setTimeout(()=>{
                //   this.settingData.carouselHitleH = parseFloat(this.settingData.bannerfont3.value.fontSize)*parseFloat(this.settingData.NamelineHeight.value)*parseFloat(this.settingData.textRowNum)
                  this.ComponentsOfCalculated()
                  this.settingData.ProductViewCarousel.translateX = 0
                  this.settingData.ProductViewCarousel.moveLeftNum = 0
              },20)
        },
        nameLineH(v){//商品名称行高
            if(this.settingData.textRowNum == 1){
                  this.settingData.NamelineHeight.value = 1.2
              }else if(this.settingData.textRowNum == 2){
                  this.settingData.NamelineHeight.value = v
            }
            this.settingData.carouselHitleH = parseFloat(this.settingData.bannerfont3.value.fontSize)*parseFloat(this.settingData.NamelineHeight.value)*parseFloat(this.settingData.textRowNum)
            setTimeout(()=>{
                this.ComponentsOfCalculated()
            },20)
            
        },
        textIndentF(v1){//SKU边距缩设置项进回调函数
            switch(this.settingData.skutit){
                case 'left':
                this.settingData.skumarginRight.value = ''
                this.settingData.skuTitTextIndent.value = v1 + 'px'
                break;
                case 'center':
                this.settingData.skumarginRight.value = ''
                this.settingData.skuTitTextIndent.value = '0px'
                break;
                case 'right':
                this.settingData.skumarginRight.value = v1 + 'px'
                this.settingData.skuTitTextIndent.value = '0px'
                break;
            }
            this.ComponentsOfCalculated()
        },
        textIndentF2(v1){//零售价边距缩设置项进回调函数
            switch(this.settingData.retailtit){
                case 'left':
                this.settingData.retailmarginRight.value = ''
                this.settingData.retailTitTextIndent.value = v1 + 'px'
                break;
                case 'center':
                this.settingData.retailmarginRight.value = ''
                this.settingData.retailTitTextIndent.value = '0px'
                break;
                case 'right':
                this.settingData.retailmarginRight.value = v1 + 'px'
                this.settingData.retailTitTextIndent.value = '0px'
                break;
            }
            this.ComponentsOfCalculated()
        },
        getDom(){
            this.style.width = (this.settingData.ProductViewCarousel.imgWidth*this.settingData.ProductViewCarousel.num+this.settingData.ProductViewCarousel.liMarginLeft*(this.settingData.ProductViewCarousel.num-1) + this.settingData.productCarousel.paddingLeft*2)
            // this.style.height = ($(this.$refs.procuctLi).height() + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom)
            this.settingData.ProductViewCarousel.ulWidth = (this.settingData.ProductViewCarousel.imgWidth*this.settingData.productShufflingList.length + this.settingData.ProductViewCarousel.liMarginLeft*(this.settingData.productShufflingList.length-1))
            this.settingData.ProductViewCarousel.imgHeight = (this.settingData.ProductViewCarousel.imgWidth*(this.settingData.ProductViewCarousel.heightPer/this.settingData.ProductViewCarousel.widthPer))
            this.settingData.ulBoxW.width = this.style.width - this.settingData.productCarousel.paddingLeft*2
            // this.settingData.ProductViewCarousel.oldMainWidth = this.style.width
           
            let textHeight = $(this.$el).find(".zm-component-product-carousel-text").eq(0).height()
            // let mainH = this.settingData.ProductViewCarousel.imgHeight + $(this.$refs.textHeight).height() + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom
            let mainH = this.settingData.ProductViewCarousel.imgHeight + textHeight + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom
            
            this.style.height = mainH > 0 ? mainH : 331.39
        
            // this.settingData.carouselHitleH = parseFloat(this.settingData.bannerfont3.value.fontSize)*parseFloat(this.settingData.NamelineHeight.value)*parseFloat(this.settingData.textRowNum)+parseFloat(this.settingData.carouselTitlePT.value)
            this.settingData.carouselHitleH = parseFloat(this.settingData.bannerfont3.value.fontSize)*parseFloat(this.settingData.NamelineHeight.value)*parseFloat(this.settingData.textRowNum)

            this.settingData.cursorStyle1 = 'pointer'
            this.settingData.cursorStyle2 = 'not-allowed'
            this.settingData.border = this.settingData.borderW.value+' solid '+this.settingData.borderColor.value
        },
        mobileGetDom(){
            this.mobileStyle.width = (this.settingData.mobileData.imgWidth*this.settingData.mobileData.num+this.settingData.ProductViewCarousel.liMarginLeft*(this.settingData.mobileData.num-1) + this.settingData.mobileData.paddingLeft*2)
            
            
            this.settingData.ProductViewCarousel.ulWidth = (this.settingData.mobileData.imgWidth*this.settingData.productShufflingList.length + this.settingData.ProductViewCarousel.liMarginLeft*(this.settingData.productShufflingList.length-1))
            this.settingData.ProductViewCarousel.imgHeight = (this.settingData.mobileData.imgWidth*(this.settingData.ProductViewCarousel.heightPer/this.settingData.ProductViewCarousel.widthPer))
            this.settingData.ulBoxW.width = this.mobileStyle.width - this.settingData.mobileData.paddingLeft*2
            
            let textHeight = this.getTextHeight()

            let mainH = this.settingData.ProductViewCarousel.imgHeight + textHeight + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom
            
            
            this.mobileStyle.height = mainH > 0 ? mainH : 331.39

            this.settingData.carouselHitleH = parseFloat(this.settingData.bannerfont3.value.fontSize)*parseFloat(this.settingData.NamelineHeight.value)*parseFloat(this.settingData.textRowNum)

            this.settingData.cursorStyle1 = 'pointer'
            this.settingData.cursorStyle2 = 'not-allowed'
            this.settingData.border = this.settingData.borderW.value+' solid '+this.settingData.borderColor.value
        }
    },
    created(){
        let _this = this;
        let url = '/product-api/getProductList';//获取产品数据
        // let url = '/service/webbuilder-api/serviceNote/getNewServiceList';//获取服务数据
        if(this.lists && this.lists.length >0){
            this.settingData.oldboxShadow = this.settingData.boxShadow
            return
        }

        _this.$axios
            .post(
                url,
                {},
                {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                }
                }
            )
            .then(function(response) {
                // console.log('response--------------------',response)
                var data = response.data.data;
                _this.items = data;
                // _this.lists = _this.items.splice(0, 13);
                _this.lists = _this.items
                // _this.assignData()
                _this.settingData.oldboxShadow = _this.settingData.boxShadow

            })
            .catch(function(err) {
                console.log('数据请求失败!');
            });
    },
    mounted(){
        if(!this.isComputer && this.settingData.mobileComIsHide){
            this.mobileGetDom()
            this.mobileArrow('left')
            this.pattern = []
            zmEditor.$children[0].isCtrlShow = false //编辑框隐藏;
        }else{
            setTimeout(()=>{
                this.getDom()
                this.settingData.ProductViewCarousel.oldMainWidth = this.style.width
                this.settingData.oldLeft = this.style.left
                this.arrow('left')
            },500)
        }
        if(this.$store.state.pane.isRenderSelect){
            this.$store.commit("changeSelectList",this)
        }else{
            this.id == this.$store.state.component.oldComID && this.$store.commit("changeSelectList",this)
        }
    },
}
</script>

<style scoped>
    .zm-component-product-carousel {
        position: relative;
        background-color: #A1A1A1;
        height: auto;
        box-sizing: border-box;
        overflow: hidden;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box {
        width: auto;
        height: auto;
        overflow: hidden;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul {
        height: auto;
        /* width: 1000px; */
        /*overflow: hidden;*/
        box-sizing: border-box;
        display: flex;
        position: relative;
        transition: all 0.5s;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li:hover {
        z-index: 12;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li {
        /*float: left;*/
        /* width: 200px; */
        height:auto;
        /*background-color: coral;*/
        text-decoration: none;
        list-style: none;
        cursor: pointer;
        box-sizing: border-box;
        /* margin-left: 10px; */
        color: #fff;
        font-size: 16px;
        font-family: "仿宋";
        /*position: relative;*/
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1 > .zm-component-product-carousel-imgbox2:hover {
        z-index: 12;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1 > .zm-component-product-carousel-imgbox2:hover > .imgbox3 {
        /* transform: scale(1.5); */
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1 > .zm-component-product-carousel-imgbox2 {
        position: relative;
        box-sizing: border-box;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1 > .zm-component-product-carousel-imgbox2 > .imgbox3 {
        /* width: 200px; */
        /* height: auto; */
        /* border: 1px solid #e0eee0; */
        /* box-sizing: border-box; */
        /* transition: all 0.5s; */
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1 > .zm-component-product-carousel-imgbox2 .zm-component-product-carousel-vien {
        position: absolute;
        left: 0px;
        top: 0;
        /* transition: all 0.5s; */
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1 > .zm-component-product-carousel-imgbox2 > .zm-component-product-carousel-sale {
        position: absolute;
        /* left: 10px;
        top: 0;
        width: 40px;
        height: 50px;
        color: #fff;
        text-align: center;
        line-height: 50px;
        font-size: 14px; */
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1 > .zm-component-product-carousel-imgbox2 > .zm-component-product-carousel-sale svg {
        width: 100%;
        height: 100%;
        fill: orange;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1 > .zm-component-product-carousel-imgbox2 > .zm-component-product-carousel-sale .zm-component-product-hot {
        /* width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 8%; */
        /*margin-top:-25px;*/
        /*line-height: 50px;*/
        /* text-align: center; */
        /* line-height: 1em; */
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-imgbox1:after {
        content: "";
        display: block;
        height: 0;
        width: 0;
        clear: both;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-text .zm-component-product-carousel-title {
        /* padding-top: 10px; */
        word-break: break-all;
        word-wrap: break-word;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* -webkit-line-clamp: 2; */
        -webkit-box-orient: vertical;

    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-text .zm-component-product-carousel-sku {
        /* padding-top: 10px; */
        /* word-break: break-all; */
        /* word-wrap: break-word; */
        overflow : hidden;
        text-overflow: ellipsis;
        /* display: -webkit-box; */
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li > .zm-component-product-carousel-text .zm-component-product-carousel-price {
        /* padding-top: 10px;
        color: red;
        font-weight: 600; */
        /* word-break: break-all; */
        /* word-wrap: break-word; */
        overflow : hidden;
        text-overflow: ellipsis;
        /* display: -webkit-box; */
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-ul-box .zm-component-product-carousel-ul > li:first-child {
        margin-left: 0px !important;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-arrowleft,
    .zm-component-product-carousel .zm-component-product-carousel-arrowright {
        /* background-color: #fff; */
        position: absolute;
        /* margin-top: -20px; */
        /* width: 20px; */
        /* height: 40px; */
        /* top: 50%; */
        /* cursor: pointer; */
        text-align: center;
        /* z-index: 100; */
        /* font-size: 18px; */
        overflow: hidden;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-arrowleft i,
    .zm-component-product-carousel .zm-component-product-carousel-arrowright i {
        /* width: 100%;
        height: 100%;
        transform: scale(0.5, 0.5); */
        font-size: 18px;
        font-weight:700;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-arrowleft {
        left: 0;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-arrowright {
        right: 0;
        transform: rotateY(0deg);
    }
    /* .arrowHoverC:hover{
        color:red;
    } */
    /* //商品轮播图片悬浮效果=======start */
    .image_magnify2{
    transition: All 0.5s;
    }
    .image_magnify2:hover{
    transform: scale(1.04);
    }
    .image_shiftLeft2{
    transition: All 0.5s;
    }
    .image_shiftLeft2:hover{
    transform: translateX(-3%);
    }
    .image_shiftTop2{
    transition: All 0.5s;
    }
    .image_shiftTop2:hover{
    transform: translateY(-3%);
    }
    .image_emptiness2{
    /* transition: All 0.5s; */
    }
    .image_emptiness2:hover{
    filter: blur(2px);
    }
    /* //商品轮播图片悬浮效果=======end */
</style>



