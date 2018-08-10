<template>
    <div :id="id" class="zm-product-imgX" :style="{paddingTop:settingData.setLayout.lineSpace*(1/2)+'px',paddingBottom:settingData.setLayout.lineSpace*(1/2)+'px',paddingLeft:settingData.setLayout.colSpace*(1/2)+'px',paddingRight:settingData.setLayout.colSpace*(1/2)+'px',display:'flex',backgroundColor:settingData.bgColor.value,overflow:'hidden',position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px'}">
        <span v-html='productBox'></span>
        <ul class="ulBox">
            <li v-for="(item,index) in assignData" :key="index" class="productBox" :style="{boxShadow:settingData.boxShadow,width:settingData.setLayout.productBoxW+'px',height:settingData.setLayout.productBoxH+'px',}">
                <div class="imgBoxN" :style="{height:settingData.setLayout.imgHeight+'px',width:settingData.setLayout.imgPer*settingData.setLayout.productBoxW+'px',float:settingData.imgCss.float1,overflow:'hidden'}">
                    <div class="imgBox" @click.stop="productLink(item.url)" :class="{image_magnify2:settingData.imgLayout.enlarge,image_shiftLeft2:settingData.imgLayout.leftMove,image_shiftTop2:settingData.imgLayout.topMove,image_emptiness2:settingData.imgLayout.blur}" :style="{height:settingData.setLayout.imgHeight+'px',width:settingData.setLayout.imgPer*settingData.setLayout.productBoxW+'px',backgroundSize:settingData.imgCss.backgroundSize,backgroundPosition:settingData.imgCss.backgroundPosition,backgroundImage:'url('+item.mainImage+')',}">
                        <!-- <span class="zm-product-news" v-show="item.fLabel.length >= 3" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                            <i :style="{color:settingData.fLabelTColor.value,top:'2px'}">{{item.fLabel}}</i>
                        </span>
                        <span class="zm-product-news" v-show="item.fLabel.length < 3" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                            <i :style="{color:settingData.fLabelTColor.value,top:'11px'}">{{item.fLabel}}</i>
                        </span>
                        <span class="zm-product-news" v-show="item.fLabel.length == 2" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                            <i :style="{color:settingData.fLabelTColor.value,top:'11px',left:'11px'}">{{item.fLabel}}</i>
                        </span> -->
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
</template>

<script>
// import productListImgX from './productListImgX.js'
export default {
    // mixins:[productListImgX],
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
          lists: this.prop.lists
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
            let labelBg = this.settingData.fLabelBgColor.value
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
                    ${_id} .imgBox ::before{
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
        assignData(){
            let _this = this
            let arr = []
            cutData(_this.lists)
            function cutData(_data) {
                _data.forEach(item => {
                    if (item.childItem != null && item.childItem != undefined && item.childItem.length != 0) {
                        cutData(item.childItem)
                    } else {
                        try {
                            arr.push(item)
                        } catch (err) {
                            console.log(arr)
                        }
                    }
                })
            }
            return arr
        }
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
  methods: {
    productLink(url){//点击查看详情
        // location.href = url//当前页打开新页面
        window.open(url, "_blank")//保存当前页，打开新页面
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
    ValidData(url, ValidID,businessType) {//指定数据过滤下架数据
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
          console.log('指定数据请求失败11')
        });
    },
  }
}
</script>

<style scoped>
    .zm-product-imgX{
        display: flex;
    }
    .productBox{
        float:left;
        box-sizing: border-box;
        background-color: #fff;
    }
    .imgBox{
        position: relative;
        cursor: pointer;
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
        /* z-index: 20; */
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



