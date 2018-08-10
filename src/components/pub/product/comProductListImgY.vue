<template>
  <div class="zm-product-main" :id="id" :style="{position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px',zIndex: style.zIndex}">
    <div class="zm-product-content" :data-num="settingData.proNum.value" :style="{padding:settingData.boxPaddingLR.value,backgroundColor:settingData.BoxBackgroundColor.value}">
      <div class="zm-product-mobileBox" v-for="(item,index) in setLists" :key="index" :data-sortid="item.id" :style="{width:settingData.boxWidth.value}">
        <div class="zm-product-imgBox">
           <div style="width:100%;height:100%;overflow:hidden;">
              <a class="zm-product-img" :href="item.url" target="_blank" :style="{height:settingData.pictureHeight.value,backgroundImage:'url('+item.mainImage+')',backgroundPosition:settingData.pictureSize.num}">
              </a>
              <span class="zm-product-news" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                  <i :style="{color:settingData.fLabelTColor.value}">{{item.fLabel}}</i>
              </span>
           </div>
        </div>
        <div class="zm-product-cont" :style="{backgroundColor:settingData.ContBackgroundColor.value,marginTop:settingData.boxMarginTop.value,paddingBottom:settingData.skuMarginBottom.value,paddingTop:settingData.titleMarginTop.value}">
          <a class="zm-product-title" :href="item.url" target="_blank" :style="{marginBottom:settingData.titleMarginBottom.value,textAlign:settingData.titleAlign.value,paddingLeft:settingData.titlePaddingLRight.value,paddingRight:settingData.titlePaddingLRight.value,fontFamily:settingData.titleFont.value.fontFamily,fontStyle:settingData.titleFont.value.fontStyle,fontWeight:settingData.titleFont.value.fontWeight,fontSize:settingData.titleFont.value.fontSize,color:settingData.titleFont.value.color,lineHeight:settingData.titleLineHeight.value,height:settingData.titleLineHeight.num,lineClamp:settingData.titleDBHeight.num,boxOrient:'vertical'}">{{item.name}}</a>
          <div class="zm-product-price" :href="item.url" target="_blank" :style="{display:settingData.priceShow.num,paddingTop:settingData.priceMarginTop.value,paddingBottom:settingData.priceMarginBottom.value,textAlign:settingData.priceAlign.value,paddingLeft:settingData.pricePaddingLRight.value,paddingRight:settingData.pricePaddingLRight.value,fontFamily:settingData.priceFont.value.fontFamily,fontStyle:settingData.priceFont.value.fontStyle,fontWeight:settingData.priceFont.value.fontWeight,fontSize:settingData.priceFont.value.fontSize,color:settingData.priceFont.value.color}">{{item.priceStr}}
          </div>
          <div class="zm-product-details" :href="item.url" target="_blank" :style="{marginTop:settingData.skuMarginTop.value,textAlign:settingData.skuAlign.value,width:'100%'}">
            <a class="zm-product-sku" :href="item.url" target="_blank" :style="{display:settingData.skuShow.num,marginLeft:settingData.skuPaddingLRight.value,marginRight:settingData.skuPaddingLRight.value,fontFamily:settingData.skuFont.value.fontFamily,fontStyle:settingData.skuFont.value.fontStyle,fontWeight:settingData.skuFont.value.fontWeight,fontSize:settingData.skuFont.value.fontSize,color:settingData.skuFont.value.color,backgroundColor:settingData.skuBackgroundColor.value,width:settingData.skuWidth.value,height:settingData.skuHeight.value,lineHeight:settingData.skuHeight.value}">{{settingData.productDetails.value}}</a>
          </div>
        </div>
      </div>
      <div :is="settingData.pageUrl" v-if="settingData.pageShow.value" :total="settingData.total" :current.sync="settingData.current" :display="settingData.display" @pagechange="pagechangeA($event)" :style="{paddingTop:settingData.pageMarginTop.value,paddingBottom:settingData.pageMarginBottom.value}"></div>
    </div>
    <span v-html="productStyle"></span>
  </div>
</template>
<style scoped>
@import "../../../style/component-product/productList.css";
</style>
<script>
import computed from "./productListImgY/computed.js";
export default {
  name: "com-product-list",
  props: {
    prop: {
      type: Object,
      required: true
    },
    index: {
      type: [String, Number],
      required: true
    }
  },
  mixins: [computed], //computd----设置项;
  data() {
    return {
      id: this.prop.id, //随机ID;
      style: this.prop.style, //组件样式;
      settingData: this.prop.settingData, //组件设置项数据;
      lists: this.prop.lists
    };
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
    let file = "/set/switch/pagination.vue";
    const component = () => import("../../../components" + file);
    this.settingData.pageUrl = component;
  },
  methods: {
    pagechangeA(val) {
      // 页码改变event ， p 为新的 current
      this.settingData.current = parseInt(val);
      this.settingData.showPage = parseInt(val);
    },
    typeData(url, typeID) {
      //类目id数据;
      let _this = this;
      _this.$axios
        .post(url, "fCategoryIds=" + typeID, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
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
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
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
          console.log(err);
        });
    },
  }
};
</script>
