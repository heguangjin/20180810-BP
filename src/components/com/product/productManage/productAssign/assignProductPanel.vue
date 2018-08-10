<template>
  <div class="zm-dialog-pageBox zm-dialog-News">
    <setProductSol v-if="setData!=null"></setProductSol>
    <noNewsProduct :prop="setName" v-else></noNewsProduct>
    <productAdd></productAdd>
  </div>
</template>
<script>
import noNewsProduct from "./noNewsProduct";
import productAdd from "./setAddProduct";
import setProductSol from "./setProductSol";
export default {
  name: "assign-product-panel",
  components: {
    noNewsProduct,
    productAdd,
    setProductSol
  },
  data() {
    return {
      addName: "",
      isShow: null
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
      let data = zmEditor.$store.state.product.assignData;
      if (JSON.stringify(data) === "[]") {
        this.isShowProduct = true;
      } else {
        this.isShowProduct = false;
      }
      return this.isShowProduct;
    },
    setData() {
      let name =
        zmEditor.$store.state.component.selectList[0].settingData
          .defauletTypeName.value;
      if (name.indexOf("指定产品") > -1) {
        this.isShow =
          zmEditor.$store.state.component.selectList[0].settingData.isProductAssign;
      } else if (name.indexOf("指定服务")>-1) {
        this.isShow =
          zmEditor.$store.state.component.selectList[0].settingData.isServerAssign;
      }
      return this.isShow; //设置指定数据面板显示
    }
  }
};
</script>

