<template>
  <div class="zm-dialog-sortord" @mouseleave="addSelHidden">
    <span class="zm-dialog-Icon-title">商品选择</span>
    <div class="zm-dialog-Icon" @click="addSelClass()" v-bind:class="{'zmicon_hover':isHover}">
      <span class="number">{{defauletTypeName}}</span>
      <i class="iconfont icon-sanjiao-copy icon_triangle"></i>
    </div>
    <ul class="zm-dialog-random" v-show="isShow" @mouseleave="addSelHidden">
      <li @click="assignProduct">指定产品</li>
      <li @click="productCategory">产品类目</li>
      <li @click="issueProduct">最新发布的产品</li>
      <li @click="assignServe">指定服务</li>
      <li @click="serveCategory">服务类目</li>
      <li @click="issueServe">最新发布的服务</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "set-product-select",
  data() {
    return {
      isShow: false,
      isHover: false,
      RandomSN: ""
    };
  },
  methods: {
    addSelClass() {
      let _this = this;
      _this.isShow = !_this.isShow;
      _this.isHover = !_this.isHover;
    },
    addSelHidden() {
      let _this = this;
      _this.isShow = false;
      _this.isHover = false;
    },
    addSelClick() {
      let _this = this;
      let current = event.currentTarget;
      _this.isShow = !_this.isShow;
      _this.isHover = !_this.isHover;
      _this.RandomSN = current.innerText;
      zmEditor.$store.state.component.selectList[0].settingData.defauletTypeName.value =
        _this.RandomSN; //商品默认类型;
    },
    assignProduct() {
      let _this = this;
      _this.addSelClick();
      zmEditor.$store.commit("setLabel", "管理产品");
      zmEditor.$store.commit("setNoProduct", false);
      zmEditor.$store.commit("setUrl", {
        key: "productUrl",
        value: "/product-api/getProductList"
      });
      zmEditor.$store.commit("setBufferPoll", false);
    },
    productCategory() {
      let _this = this;
      _this.addSelClick();
      zmEditor.$store.commit("setLabel", "管理产品");
      zmEditor.$store.commit("setUrl", {
        key: "productListUrl",
        value: "/product-api/productCategory/getProductCategoryList"
      });
      zmEditor.$store.commit("setUrl", {
        key: "productUrl",
        value: "/product-api/getProductListByCategorys"
      });
      _this.productAxiosPost();
      zmEditor.$store.commit("setNoProduct", false);
      zmEditor.$store.commit("setBufferPoll", false);
    },
    issueProduct() {
      let _this = this;
      _this.addSelClick();
      zmEditor.$store.commit("setLabel", "管理产品");
      zmEditor.$store.commit("setNoProduct", false);
      zmEditor.$store.commit("setUrl", {
        key: "productUrl",
        value: "/product-api/getProductList"
      });
      _this.productAxios();
      zmEditor.$store.commit("setBufferPoll", false);
    },
    assignServe() {
      let _this = this;
      _this.addSelClick();
      zmEditor.$store.commit("setLabel", "管理服务");
      zmEditor.$store.commit("setNoProduct", false);
      zmEditor.$store.commit("setUrl", {
        key: "productUrl",
        value: "/service/webbuilder-api/serviceNote/getNewServiceList"
      });
      zmEditor.$store.commit("setBufferPoll", false);
    },
    serveCategory() {
      let _this = this;
      _this.addSelClick();
      zmEditor.$store.commit("setLabel", "管理服务");
      zmEditor.$store.commit("setUrl", {
        key: "productListUrl",
        value:
          "/service/webbuilder-api/shopserviceCategory/getServiceCategoryList"
      });
      zmEditor.$store.commit("setUrl", {
        key: "productUrl",
        value: "/service/webbuilder-api/serviceNote/getServiceByCatesForSite"
      });
      _this.productAxiosPost();
      zmEditor.$store.commit("setNoProduct", false);
      zmEditor.$store.commit("setBufferPoll", false);
    },
    issueServe() {
      let _this = this;
      _this.addSelClick();
      zmEditor.$store.commit("setLabel", "管理服务");
      zmEditor.$store.commit("setNoProduct", false);
      zmEditor.$store.commit("setUrl", {
        key: "productUrl",
        value: "/service/webbuilder-api/serviceNote/getNewServiceList"
      });
      _this.productAxios();
      zmEditor.$store.commit("setBufferPoll", false);
    },
    productAxiosPost() {
      let url = zmEditor.$store.state.product.productListUrl;
      let _this = this;
      if (url.indexOf("product") > -1) {
        _this.$axios
          .post(
            url,
            {},
            {
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              }
            }
          )
          .then(function(response) {
            let result = response.data.data;
            zmEditor.$store.commit("setProductType", result); //设置类目数据;
            console.log("数据OK!", result);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        _this.$axios
          .post(
            url,
            {},
            {
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              }
            }
          )
          .then(function(response) {
            let result = response.data.data;
            zmEditor.$store.commit("setServerTypeData", result); //设置类目数据;
            console.log("数据OK!", result);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    productAxios() {
      let url = zmEditor.$store.state.product.productUrl;
      let _this = this;
      if (url.indexOf("product") > -1) {
        _this.$axios
          .post(
            url,
            {},
            {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
                  "X-Requested-With": "XMLHttpRequest"
              }
            }
          )
          .then(function(response) {
            let result = response.data.data;
            zmEditor.$store.state.component.selectList[0].settingData.newProductData = result; //设置最新产品数据;
            zmEditor.$store.state.component.selectList[0].lists = result;
            console.log("数据OK!", result);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        _this.$axios
          .post(
            url,
            {},
            {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
                  "X-Requested-With": "XMLHttpRequest"
              }
            }
          )
          .then(function(response) {
            let result = response.data.data;
            zmEditor.$store.state.component.selectList[0].settingData.newServerData = result; //设置最新服务数据;
            zmEditor.$store.state.component.selectList[0].lists = result;
            console.log("数据OK!", result);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  },
  computed: {
    defauletTypeName() {
      this.RandomSN =
        zmEditor.$store.state.component.selectList[0].settingData.defauletTypeName.value;
      return this.RandomSN;
    }
  }
};
</script>
