<template>
  <div class="zm-product-main" :id="id" :style="{position: 'absolute', width: mobileStyle.width+'px',height: mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px',zIndex:mobileStyle.zindex}">
    <div class="zm-product-content" :data-num="settingData.proNum.value">
      <div class="zm-product-list">
        <div class="zm-product-box" v-for="(item,index) in setMobLists" :key="index" :data-sortid="item.id">
          <div class="zm-product-imgBox">
            <div style="width:100%;height:100%;overflow:hidden;">
              <a class="zm-product-img" :href="item.url" target="_blank" :style="{backgroundImage:'url('+item.mainImage+')',height:settingData.mobPicHeight.value}">
              </a>
              <span class="zm-product-news" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
                <i :style="{color:settingData.fLabelTColor.value}">{{item.fLabel}}</i>
              </span>
            </div>
          </div>
          <div>
            <a class="zm-product-title" style="max-height: 34px;" :href="item.url" target="_blank">{{item.name}}</a>
          </div>
          <a class="zm-product-sku" :href="item.url" target="_blank" :style="{display:settingData.skuShow.num}">{{item.productSku}}</a>
          <a class="zm-product-price" :href="item.url" target="_blank" :style="{display:settingData.priceShow.num}">{{item.priceStr}}
          </a>
        </div>
      </div>
      <div style="color:#86869B;text-align:center;padding:10px;font-size:12px;width:100%;" @click.self="loadProduct">加载更多产品</div>
    </div>
    <span v-html="productStyle"></span>
  </div>
</template>
<style scoped>
@import "../../../style/component-product/productList.css";
</style>
<script>
import computed from "./productList/computed.js";
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
      mobileStyle: this.prop.mobileStyle, //手机版样式
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
