<template>
  <div class="zm-dialog-pageBox zm-dialog-News">
    <newsProduct :prop="setName" v-if="setList"></newsProduct>
    <noNewsProduct :prop="setName" v-else></noNewsProduct>
    <productCheck v-if="setList"></productCheck>
    <productAdd v-else :prop="setName"></productAdd>
  </div>
</template>
<script>
import newsProduct from "./newsProduct";
import noNewsProduct from "./noNewsProduct";
import productCheck from "./setProductCheck";
import productAdd from "./setAddProduct";
export default {
  name: "product-news-panel",
  components: {
    newsProduct,
    noNewsProduct,
    productCheck,
    productAdd
  },
  data() {
    return {
      addName: "",
      isShowProduct: true,
      lists:null
    };
  },
  computed: {
    setName() {
      zmEditor.$store.state.product.productUrl.indexOf("service") > -1
        ? (this.addName = "服务")
        : (this.addName = "产品");
      return this.addName;
    },
    setList() {
      let url = zmEditor.$store.state.product.productUrl;
      let data;
      if(url.indexOf("product") > -1){
        data = zmEditor.$store.state.component.selectList[0].settingData.newProductData;
      }else{
        data = zmEditor.$store.state.component.selectList[0].settingData.newServerData;
      }
      if (JSON.stringify(data) === "[]") {
        this.isShowProduct = false;
      } else {
        this.isShowProduct = true;
      }

      return this.isShowProduct;
    }
  }
};
</script>

