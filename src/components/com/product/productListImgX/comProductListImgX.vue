<template>
    <!-- PC端 -->
    <div v-if="isComputer" :id="id" class="zm-product-imgX" :style="{paddingTop:settingData.setLayout.lineSpace*(1/2)+'px',paddingBottom:settingData.setLayout.lineSpace*(1/2)+'px',paddingLeft:settingData.setLayout.colSpace*(1/2)+'px',paddingRight:settingData.setLayout.colSpace*(1/2)+'px',display:'flex',backgroundColor:settingData.bgColor.value,overflow:'hidden',position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px'}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
        <span v-html='productBox'></span>
        <ul class="ulBox">
            <li v-for="(item,index) in assignData" :key="index" class="productBox" :style="{boxShadow:settingData.boxShadow,width:settingData.setLayout.productBoxW+'px',height:settingData.setLayout.productBoxH+'px',}">
                <div class="imgBoxN" :style="{height:settingData.setLayout.imgHeight+'px',width:settingData.setLayout.imgPer*settingData.setLayout.productBoxW+'px',float:settingData.imgCss.float1,overflow:'hidden'}">
                    <div class="imgBox" @click.stop="productLink(item.url)" :class="{image_magnify2:settingData.imgLayout.enlarge,image_shiftLeft2:settingData.imgLayout.leftMove,image_shiftTop2:settingData.imgLayout.topMove,image_emptiness2:settingData.imgLayout.blur}" :style="{height:settingData.setLayout.imgHeight+'px',width:settingData.setLayout.imgPer*settingData.setLayout.productBoxW+'px',backgroundSize:settingData.imgCss.backgroundSize,backgroundPosition:settingData.imgCss.backgroundPosition,backgroundImage:'url('+item.mainImage+')',}">
                    </div>
                    <span class="zm-product-news" v-show="item.fLabel.length >= 3" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                        <i :style="{color:settingData.fLabelTColor.value,top:'2px'}">{{item.fLabel}}</i>
                    </span>
                    <span class="zm-product-news" v-show="item.fLabel.length < 3" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                        <i :style="{color:settingData.fLabelTColor.value,top:'11px'}">{{item.fLabel}}</i>
                    </span>
                    <span class="zm-product-news" v-show="item.fLabel.length == 2" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                        <i :style="{color:settingData.fLabelTColor.value,top:'11px',left:'11px'}">{{item.fLabel}}</i>
                    </span>
                </div>
                <div class="tBox" :style="{height:'auto',width:(100-settingData.setLayout.imgPer*100)+'%',float:settingData.imgCss.float2,}">
                    <div class="productName" @click.stop="productLink(item.url)" :style="{lineClamp:['-webkit',settingData.textRowNum],boxOrient:'vertical',marginRight:settingData.TitMarginRight.value,textIndent:settingData.TitTextIndent.value,textAlign:settingData.tit,marginBottom:settingData.marginBottom.value,lineHeight:settingData.lineHeight.value+'em',marginTop:settingData.TitmarginTop.value,fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}"><span v-html="NameHC"></span>{{item.name}}</div>
                    <div class="adv" v-show="settingData.bannerSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.bannerMarginRight.value,textIndent:settingData.bannerTitTextIndent.value,textAlign:settingData.bannertit,marginBottom:settingData.bannermarginBottom.value,lineHeight:settingData.bannerlineHeight.value+'em',marginTop:settingData.bannerTitmarginTop.value,fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{item.advertisementText}}</div>
                    <!-- <div class="line" :style="{width:'100%',height:'1px',backgroundColor:'#3089D5'}"></div> -->
                    <div class="line" v-show="settingData.DivisionSwitchShow.value" :style="{height:settingData.lineH.value,backgroundColor:settingData.lineBg.value,width:settingData.lineWidth.value +'%'}"></div>
                    <div class="productPrice" v-show="settingData.retailSwitchShow.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginRight:settingData.retailmarginRight.value,textIndent:settingData.retailTitTextIndent.value,textAlign:settingData.retailtit,marginBottom:settingData.retailmarginBottom.value,paddingTop:settingData.retailTitmarginTop.value,fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{item.priceStr}}</div>
                    <div class="title-details" @click.stop="productLink(item.url)" v-show="settingData.btnSwitchShow.value" :style="{marginBottom:settingData.btnmarginBottom.value,marginTop:settingData.btnmarginTop.value,height:settingData.btnheight.value}"><span  :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
                </div>
            </li>
        </ul>
        
    </div>

    <!-- 移动端 -->
    <div v-else-if="(!isComputer && settingData.mobileComIsHide)" :id="id" class="zm-product-M" :style="{position: 'absolute', width: mobileStyle.width+'px',height:mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px'}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
        <span v-html="productBoxM"></span>
        <ul class="mobileUl" :style="{width:'100%',height:'auto'}">
            <li class="productBox productBoxM" v-for="(item,index) in assignData" :key="index" :style="{width:settingData.mobileCss.imgW+'px',height:'auto'}">
                <div class="imgBoxN" @click.stop="productLink(item.url)" :style="{height:settingData.mobileCss.imgW+'px',width:settingData.mobileCss.imgW+'px',overflow:'hidden'}">
                    <div class="imgBox" :style="{height:settingData.mobileCss.imgW+'px',width:settingData.mobileCss.imgW+'px',backgroundImage:'url('+item.mainImage+')',}">
                    </div>
                    <span class="zm-product-news" v-show="item.fLabel.length >= 3" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                        <i :style="{color:settingData.fLabelTColor.value,top:'2px'}">{{item.fLabel}}</i>
                    </span>
                    <span class="zm-product-news" v-show="item.fLabel.length < 3" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                        <i :style="{color:settingData.fLabelTColor.value,top:'11px'}">{{item.fLabel}}</i>
                    </span>
                    <span class="zm-product-news" v-show="item.fLabel.length == 2" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                        <i :style="{color:settingData.fLabelTColor.value,top:'11px',left:'11px'}">{{item.fLabel}}</i>
                    </span>
                </div>

                <div class="tBoxM" :style="{height:'auto',width:'100%'}">
                    <div class="productName" @click.stop="productLink(item.url)" :style="{height:'34px',lineClamp:['-webkit',2],boxOrient:'vertical',marginTop:'10px',fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:'13px',color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}"><span v-html="NameHC"></span>{{item.name}}</div>
                    <div class="adv" v-show="settingData.skuSwitchShow.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'5px',fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:'13px',color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{item.productSku}}</div>
                    <div class="productPrice" v-show="settingData.retailSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'10px',fontWeight:700,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:'13px',color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{item.priceStr}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import productListImgX from './productListImgX.js'
export default {
    mixins:[productListImgX],
    name: "com-productListImgX",
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
          count:0,
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
                    value: "商品管理"
                    }); //弹窗标题;
                    zmEditor.$store.commit("changePaneData", {
                    key: "paneHelpInfo",
                    value: "选择要显示的商品(产品或服务)"
                    }); //问号图标hover显示内容;
                    // zmEditor.$store.commit("changePaneData", {
                    // key: "paneIcon",
                    // value: "icon-gouwuche"
                    // }); //弹窗图标;
                    zmEditor.$store.commit("changePaneData", {
                    key: "paneMode",
                    value: "/com/product/productManage/productManage.vue"
                    }); //弹窗内容应加载的组件路径;
                }
            },
            { type: "set",title: "设置", icon: "icon-shezhi1",paneTitle:'商品设置',paneInfo:"通过设置项调整布局、图片、背景色和文字内容"},
            { type: "style", title: "变更样式", icon: "icon-style",paneTitle:'商品样式',paneInfo:"选择和替换商品样式" },
            { type: "del", title: "删除", icon: "icon-delete" },
          ],

          mobileButtonList: [
            { type: "hide", title: "隐藏", icon: "icon-hide" },
            {
                type: "set",
                title: "设置",
                icon: "icon-shezhi1",
                paneTitle: "产品设置"
            },
          ], //手机版设置项按钮
          mobileChildData: this.prop.mobileChildData, //手机版子组件信息
          mobileStyle: this.prop.mobileStyle, //手机版样式
        }
    },
    watch:{
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
        NameHC(){//光标悬浮文字颜色
            let nameHoverC = this.settingData.NameHoverColor.value
            let _id = "#"+this.id
            return `<style>
                    ${_id} .productName:hover{
                        color:${nameHoverC} !important;
                        text-decoration: underline;
                    }
            </style>`
        },
        productBox(){
            let _id = "#"+this.id
            let row = this.settingData.ranksNum.rowsVal
            let col = this.settingData.ranksNum.colsVal
            let colSpace = this.settingData.setLayout.colSpace
            let lineSpace = this.settingData.setLayout.lineSpace
            let vienS = this.settingData.imgLayout.vien
            let vienBg = this.settingData.imgLayout.value
            let labelBg = this.settingData.fLabelBgColor.value;
            return `<style>
                    ${_id} .productBox:nth-child(n){
                        margin-right:${colSpace}px;
                    }
                    ${_id} .productBox:nth-child(${col}n){
                        margin-right:0px;
                    }
                    ${_id} .productBox:nth-child(n+${col}){
                        margin-bottom:${lineSpace}px;
                    }
                    ${_id} .imgBox::after{
                        content: "";
                        display: ${vienS};
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width:100%;
                        height:100%;
                        background-color: rgba(0,0,0,0);
                        transition:all .5s
                    }
                    ${_id} .imgBox:hover::after{
                        background-color: ${vienBg};
                    }
                    ${_id} .zm-product-news::before{
                    content: "";
                    display: block;
                    position: absolute;
                    left: 10px;
                    top: 0px;
                    width: 0px;
                    border-top: 40px solid ${labelBg};
                    border-left: 17px solid ${labelBg};
                    border-right: 17px solid ${labelBg};
                    border-bottom: 11px solid transparent;
                }
            </style>`
        },
        productBoxM(){
            let _id = "#"+this.id
            let mR = this.settingData.colSM.value
            let mT = this.settingData.rowSM.value
            let vienS = this.settingData.imgLayout.vien
            let vienBg = this.settingData.imgLayout.value
            let labelBg = this.settingData.fLabelBgColor.value;
            return `<style>
                        ${_id} .mobileUl li{
                            display: inline-block;
                        }
                        ${_id} .mobileUl li:nth-child(2n-1){
                            margin-right: ${mR}px;
                        }
                        ${_id} .mobileUl li:nth-child(n+3){
                            margin-top: ${mT}px;
                        }
                        ${_id} .imgBox::after{
                            content: "";
                            display: ${vienS};
                            position: absolute;
                            left: 0px;
                            top: 0px;
                            width:100%;
                            height:100%;
                            background-color: rgba(0,0,0,0);
                            transition:all .5s
                        }
                        ${_id} .imgBox:hover::after{
                            background-color: ${vienBg};
                        }
                        ${_id} .zm-product-news::before{
                            content: "";
                            display: block;
                            position: absolute;
                            left: 10px;
                            top: 0px;
                            width: 0px;
                            border-top: 40px solid ${labelBg};
                            border-left: 17px solid ${labelBg};
                            border-right: 17px solid ${labelBg};
                            border-bottom: 11px solid transparent;
                        }
                    <style>`
        },
        assignData(){
            let _this = this;
            let arr = [];
            cutData(_this.lists)
            function cutData(_data) {
                _data.forEach(item => {
                    if (item.childItem != null && item.childItem != undefined && item.childItem.length != 0) {
                        cutData(item.childItem)
                    } else {
                        try {
                            arr.push(item);
                        } catch (err) {
                            // console.log(arr)
                        }
                    }
                })
            }
            arr = arr.splice(0, _this.settingData.ranksNum.rowsVal*_this.settingData.ranksNum.colsVal)
            // this.settingData.lists = arr
            this.$emit('updataMes',{ key : "lists",index:this.index,value:arr});//数据存储,更改父级lists;
            return arr
        }
    },
    methods:{
        caculatedM(){//移动端组件高度计算
            let count = this.settingData.ranksNum.rowsVal*this.settingData.ranksNum.colsVal
            this.settingData.mobileCss.imgW = parseFloat((this.mobileStyle.width - this.settingData.colSM.value)/2)
            setTimeout(()=>{
                if(!this.isComputer && this.settingData.mobileComIsHide){
                    let _id = "#"+this.id
                    let maxH = $(_id).find('.productBoxM').eq(0).height()
                    for(let i = 1;i < $(_id).find('.productBoxM').length;i++){
                        if(maxH < $(_id).find('.productBoxM').eq(i).height()){
                            maxH = $(_id).find('.productBoxM').eq(i).height()
                        }
                    }
                    this.mobileStyle.height = Math.ceil(count/2)*maxH + this.settingData.rowSM.value*(Math.ceil(count/2)-1)  
                }
            },50)
        },
        colSpaceMF(v){
            this.caculatedM()
        },
        rowSpaceMF(v){
            this.caculatedM()
        },
        productLink(url){//点击查看详情
            // location.href = url//当前页打开新页面
            // window.open(url, "_blank")//保存当前页，打开新页面
        },
        calculateCom(){//计算整个组件宽高
            let setLayout = this.settingData.setLayout
            setLayout.productBoxW = (this.style.width - setLayout.colSpace*this.settingData.ranksNum.colsVal)/this.settingData.ranksNum.colsVal
            setLayout.imgWidth = setLayout.productBoxW*setLayout.imgPer
            setLayout.imgHeight = setLayout.imgWidth*(this.settingData.imgWHPer.col/this.settingData.imgWHPer.row)
            let _id = "#"+this.id
            let maxH = $(_id).find('.tBox').eq(0).height()
            for(let i = 1;i < $(_id).find('.tBox').length;i++){
                if(maxH < $(_id).find('.tBox').eq(i).height() ){
                    maxH = $(_id).find('.tBox').eq(i).height()
                }
            }
            let tBoxH = maxH
            if(tBoxH > setLayout.imgHeight){
                setLayout.productBoxH = tBoxH
            }else{
                setLayout.productBoxH = setLayout.imgHeight
            }
            this.style.height = setLayout.productBoxH*this.settingData.ranksNum.rowsVal+setLayout.lineSpace*this.settingData.ranksNum.rowsVal
            this.settingData.oldMainH = this.style.height
        },
        pointCallBack(index){//拖动组件八个点的回调函数
            let nowH = this.style.height
            if(index == 0 || index == 2 || index == 3 || index == 4 || index == 6 || index == 7){
                this.calculateCom()
            }else{
                let dx = this.style.height - this.settingData.oldMainH
                if( Math.abs(dx) == 0) return
                if(index == 5 ){
                    let productH = this.settingData.setLayout.productBoxH
                    let num = Math.floor((this.style.height - this.settingData.setLayout.lineSpace*this.settingData.ranksNum.rowsVal)/this.settingData.setLayout.productBoxH)
                    this.settingData.ranksNum.rowsVal = num

                    if(this.settingData.ranksNum.rowsVal < 1){
                            this.settingData.ranksNum.rowsVal = 1
                            this.style.height = this.settingData.setLayout.productBoxH*this.settingData.ranksNum.rowsVal+this.settingData.setLayout.lineSpace*this.settingData.ranksNum.rowsVal
                    }else{
                        if(this.settingData.ranksNum.rowsVal > 4){
                            this.settingData.ranksNum.rowsVal = 4
                            this.style.height = this.settingData.setLayout.productBoxH*this.settingData.ranksNum.rowsVal+this.settingData.setLayout.lineSpace*this.settingData.ranksNum.rowsVal
                        }else{
                            // this.calculateCom()
                            this.style.height = nowH
                        }
                    }
                }else{
                    this.style.height = this.settingData.setLayout.productBoxH*this.settingData.ranksNum.rowsVal+this.settingData.setLayout.lineSpace*this.settingData.ranksNum.rowsVal
                }
            }
        },
        btnTF(v){//查看详情按钮文字内容回调
            this.settingData.btnText = v
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
        textIndentF4(v1){//按钮边距缩进设置项回调函数
            switch(this.settingData.btnPosition.value){
                case 'left':
                this.settingData.btnmarginRight.value  = ''
                this.settingData.btnmarginLeft.value  = v1 + 'px'
                break;
                case 'center':
                this.settingData.btnmarginRight.value = ''
                this.settingData.btnmarginLeft.value = ''
                break;
                case 'right':
                this.settingData.btnmarginLeft.value = ''
                this.settingData.btnmarginRight.value = v1 + 'px'
                break;
            }
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
        },
        textIndentF3(v1){//广告语边距缩进设置项回调函数
            switch(this.settingData.bannertit){
                case 'left':
                this.settingData.bannerTitTextIndent.value  =  v1 + 'px'
                this.settingData.bannerMarginRight.value  = ''
                break;
                case 'center':
                this.settingData.bannerMarginRight.value = ''
                this.settingData.bannerTitTextIndent.value = v1 + 'px'
                break;
                case 'right':
                this.settingData.bannerTitTextIndent.value = '0px'
                this.settingData.bannerMarginRight.value = v1 + 'px'
                break;
            }
        },
        nameLineH(v){//商品名称行高
            if(this.settingData.textRowNum == 1){
                  this.settingData.lineHeight.value = 1.2
              }else if(this.settingData.textRowNum == 2){
                  this.settingData.lineHeight.value = v
            }
            this.calculateCom()
        },
        textRowF(v){//文本行数
              if(v.trim() == '单行文本'){
                  this.settingData.textRowNum = 1
              }else if(v.trim() == '两行文本'){
                  this.settingData.textRowNum = 2
              }
              setTimeout(()=>{
                  this.calculateCom()
              },50)
              
        },
        imgFloatE(v,v2,_that){//图片悬浮效果回调函数
              switch(v){
                  case '无效果':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = false
                    this.settingData.imgLayout.vien = 'none'
                    this.settingData.imgLayout.isShowSet = true
                    this.isShowSet(_that, this.settingData.imgLayout.isShowSet);
                    break;
                  case '放大':
                    this.settingData.imgLayout.enlarge = true
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = false
                    this.settingData.imgLayout.vien = 'none'
                    this.settingData.imgLayout.isShowSet = true
                    this.isShowSet(_that, this.settingData.imgLayout.isShowSet);
                    break;
                  case '左移':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = true
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = false
                    this.settingData.imgLayout.vien = 'none'
                    this.settingData.imgLayout.isShowSet = true
                    this.isShowSet(_that, this.settingData.imgLayout.isShowSet);
                    break;
                  case '上移':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = true
                    this.settingData.imgLayout.blur = false
                    this.settingData.imgLayout.vien = 'none'
                    this.settingData.imgLayout.isShowSet = true
                    this.isShowSet(_that, this.settingData.imgLayout.isShowSet);
                    break;
                  case '虚化':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = true
                    this.settingData.imgLayout.vien = 'none'
                    this.settingData.imgLayout.isShowSet = true
                    this.isShowSet(_that, this.settingData.imgLayout.isShowSet);
                    break;
                  case '覆盖颜色':
                    this.settingData.imgLayout.enlarge = false
                    this.settingData.imgLayout.leftMove = false
                    this.settingData.imgLayout.topMove = false
                    this.settingData.imgLayout.blur = false
                    this.settingData.imgLayout.vien = 'block'
                    this.settingData.imgLayout.isShowSet = false
                    this.isShowSet(_that, this.settingData.imgLayout.isShowSet);
                    break;
              }
        },
        bgImgCb(v){//图片显示效果设置项回调函数
              if(v.trim() == '自适应'){
                this.settingData.imgCss.backgroundSize = 'cover'
                this.settingData.imgCss.backgroundPosition = ''
              }else if(v.trim() == '填充'){
                this.settingData.imgCss.backgroundSize = ''
                this.settingData.imgCss.backgroundPosition = '0px 0px'
              }
        },
        pictureHeight(ww,hh){//图片宽高比例设置项回调函数
            this.settingData.imgWHPer.row = ww
            this.settingData.imgWHPer.col = hh
            this.calculateCom()
        },
        imgPositionF(v){
            if(v == 'left'){
                this.settingData.imgCss.float1 = 'left'
                this.settingData.imgCss.float2 = 'right'
            }else if(v == 'right'){
                this.settingData.imgCss.float1 = 'right'
                this.settingData.imgCss.float2 = 'left'
            }
        },
        imgPerF(v){
            this.settingData.setLayout.imgPer = v/100
            this.calculateCom()
        },
        lineSpaceF(v){//行间距回调
            this.settingData.setLayout.lineSpace = v
            this.calculateCom()
        },
        colSpaceF(v){//列间距回调
            this.settingData.setLayout.colSpace = v
            this.calculateCom()
        },
        ranksNum(v1,v2){//几行几列回调
            this.settingData.ranksNum.rowsVal = v1
            this.settingData.ranksNum.colsVal = v2
            this.calculateCom()
        },
        isShowSet(_that, val) {
            let child = _that.$parent.$children;
            child.forEach(item => {
                item.prop && item.prop.attr == "imgLayout" ? (item.prop.isShowSet = val) : "";
            })
        }
    },
    created(){
        let _this = this
        let setLayout = _this.settingData.setLayout
        let url ="/product-api/getProductList"//获取产品数据
        // let url = '/service/webbuilder-api/serviceNote/getNewServiceList'//获取服务数据
        if(!this.isComputer && this.settingData.mobileComIsHide){
            this.settingData.mobileCss.imgW = parseFloat((this.mobileStyle.width - this.settingData.colSM.value)/2)
        }
        if(this.lists && this.lists.length >0){
            _this.calculateCom()
            if(_this.settingData.imgPosition == 'left'){
                _this.settingData.imgCss.float1 = 'left'
                _this.settingData.imgCss.float2 = 'right'
            }else if(_this.settingData.imgPosition == 'right'){
                _this.settingData.imgCss.float1 = 'right'
                _this.settingData.imgCss.float2 = 'left'
            }
            _this.settingData.oldboxShadow = _this.settingData.boxShadow
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
                var data = response.data.data
                _this.items = data
                _this.lists = _this.items
                console.log("成功")
                _this.calculateCom()
                if(_this.settingData.imgPosition == 'left'){
                    _this.settingData.imgCss.float1 = 'left'
                    _this.settingData.imgCss.float2 = 'right'
                }else if(_this.settingData.imgPosition == 'right'){
                    _this.settingData.imgCss.float1 = 'right'
                    _this.settingData.imgCss.float2 = 'left'
                }
                _this.settingData.oldboxShadow = _this.settingData.boxShadow
            })
            .catch(function(err) {
               console.log("失败");
            });
    },
    mounted(){
        // this.$store.state.pane.isRenderSelect && this.$store.commit("changeSelectList",this)
        if(this.$store.state.pane.isRenderSelect){
            this.$store.commit("changeSelectList",this)
        }else{
            this.id == this.$store.state.component.oldComID && this.$store.commit("changeSelectList",this)
        }

        if(!this.isComputer && this.settingData.mobileComIsHide){
            this.caculatedM()
        }else{
            this.pointCallBack(3)
        }
    },
}
</script>

<style scoped>
    .zm-component-main{
        display: flex;
    }
    .ulBox{
    }
    .productBox{
        float:left;
        box-sizing: border-box;
        background-color: #fff;
    }
    .imgBox{
        position: relative;
        cursor: pointer;
        background-size: cover;
    }
    .imgBoxN{
        position: relative;
    } 
    .imgBoxN .zm-product-news {
        position: absolute;
        left: 0px;
        top: 0;
        /* width: 36px; */
        /* width: 100%; */
        /* height: 100%; */
        min-height: 46px;
        display: table;
        box-sizing: border-box;
        padding: 0 4px;
        color: white;
        vertical-align: middle;
    }
    .imgBoxN .zm-product-news i{
        display: table-cell;
        /* width: 100%;
        height: 100%; */
        width: 34px;
        height: 51px;
        position: absolute;
        left: 9px;
        top: 2px;
        vertical-align: middle;
        text-align: center;
        font-size: 12px;
        /* z-index: 2; */
    }
    /* .imgBox::after{
        content: "";
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        width:100%;
        height:100%;
        background-color: rgba(0,0,0,.5);

    } */
    .tBox{
        box-sizing: border-box;
        padding:0px 20px;
        /* overflow: hidden; */
    }
    .tBoxM{
        box-sizing: border-box;
    }
    .productName{
        word-break: break-all;
        word-wrap: break-word;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* -webkit-line-clamp: 1; */
        -webkit-box-orient: vertical;
        cursor: pointer;
    }
    .adv{
        word-break: break-all;
        word-wrap: break-word;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .productPrice{
        word-break: break-all;
        word-wrap: break-word;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .title-details {
        width: 100%;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: #ffffff;
        margin-top: 10px;
        font-weight: 500;
        font-size: 13px;
        cursor: pointer;
    }
    .title-details span {
        display: block;
        height: 100%;
        width: 45%;
        background-color: #3089D5;
        overflow: hidden;
        /* float: right; */
    }
    /* //商品轮播图片悬浮效果=======start */
    .image_magnify2{
    transition: All 0.5s;
    }
    .image_magnify2:hover{
    /* transform: scale(1.04); */
    /* transform: background-size(104%); */
    background-size:104%;
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

    /* 移动端css */
    .zm-product-M > .mobileUl{
        font-size: 0px;
    }
</style>



