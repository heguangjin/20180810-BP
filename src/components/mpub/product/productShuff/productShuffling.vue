<template>
    <!-- 移动端 -->
    <div :id="id" class="zm-product-shuff" :style="{overflow:'hidden',position: 'absolute', width: mobileStyle.width+'px',height: mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px'}">
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
// import productShuffConfig from "./productShuffConfig.js";
export default {
    // mixins:[productShuffConfig],
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
          mobileChildData: this.prop.mobileChildData, //手机版子组件信息
          mobileStyle: this.prop.mobileStyle, //手机版样式
          prodcutList:[//商品类型设置项下的产品数据
                {
                    fId:'556566121',
                    fTitle:'韩版修身连衣裙韩版修身韩版修身',
                    productImg:'http://image.zuma.com/upload/913204624819277634.jpg',
                },
          ],
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
            // this.settingData.productShufflingList = arr
            // this.settingData.ProductViewCarousel.translateX = 0
            // this.settingData.ProductViewCarousel.moveLeftNum = 0
            return arr
            // return arr
        }
    },
    methods:{
        productLink(url){//点击查看详情
            // location.href = url//当前页打开新页面
            window.open(url, "_blank")//保存当前页，打开新页面
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
        typeData(url, typeID) {
            //类目id数据;
            let _this = this;
            _this.$axios
                .post(url, "fCategoryIds=" + typeID, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                }
                })
                .then(function(response) {
                var data = response.data.data;
                _this.lists = data;
                })
                .catch(function(err) {
                console.log(err);
                });
        },
        newData(url) {
            //最新数据;
            let _this = this;
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
                var data = response.data.data;
                _this.lists = data;
                })
                .catch(function(err) {
                console.log(err);
                });
        },
        ValidData(url, ValidID,businessType) {//指定数据过滤下架数据;
            let _this = this;
            _this.$axios
                .post(url, "idListStr=" +JSON.stringify(ValidID)+"&businessType="+businessType, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                }
                })
                .then(function(response) {
                var data = response.data.data;
                let ValidData = []
                data.forEach((element,index)=>{
                    if(element.status == 0){
                        ValidData.push(element.id)
                    }
                })
                let realValidData = []
                for(let i=0;i<ValidData.length;i++){
                    for(let j = 0;j<_this.lists.length;j++){
                        if(parseFloat(ValidData[i]) == parseFloat(_this.lists[j].id)){
                            realValidData.push(_this.lists[j])
                        }
                    }
                }
                _this.lists = realValidData;
                })
                .catch(function(err) {
                console.log(err);
                });
        },
    },
    created() { 
        let ValidData = this.settingData.ValidData
        let typeID = this.settingData.typeId;
        let typeName = this.settingData.defauletTypeName.value;
        let url;
        switch (typeName) {
            case "服务类目":
                url = "/service/webbuilder-api/serviceNote/getServiceByCatesForSite"; //获取多个类目服务数据;
                this.typeData(url, typeID);
                break;
            case "产品类目":
                url = "/product-api/getProductListByCategorys"; //获取多个类目产品数据;
                this.typeData(url, typeID);
                break;
            case "最新发布的产品":
                url = "/product-api/getProductList"; //获取最新产品数据;
                this.newData(url);
                break;
            case "最新发布的服务":
                url = "/service/webbuilder-api/serviceNote/getNewServiceList"; //获取最新服务数据;
                this.newData(url);
                break;
            case "指定产品":
            case "指定服务":
                let businessType
                if(typeName == "指定产品"){
                    businessType = 10
                }else if(typeName == "指定服务"){
                    businessType = 20
                }
                url = "/website-api/check-data/queryValidity"; //获取过滤下架数据的数据;
                this.ValidData(url,ValidData,businessType);
                break;
            default:
                break;
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
        font-size: 22px;
    }
    .zm-component-product-carousel > .zm-component-product-carousel-arrowleft i,
    .zm-component-product-carousel .zm-component-product-carousel-arrowright i {
        /* width: 100%;
        height: 100%;
        transform: scale(0.5, 0.5); */
        font-size: 22px;
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



