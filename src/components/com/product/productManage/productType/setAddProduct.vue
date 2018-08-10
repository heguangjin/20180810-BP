<template>
  <div class="zm-dialog-check">
    <a href="http://zuma.com/product/getProductCategory" target="_blank" v-if="prop=='产品'"><button class="zm-dialog-check-button">添加{{title}}</button></a>
    <a href="http://www.zuma.com/service_web/zmService/toAddSysServiceCategory" target="_blank" v-else><button class="zm-dialog-check-button">添加{{title}}</button></a>
  </div>
</template>
<script>
export default {
  name: "set-product-check",
  props:["prop"],
  data() {
    return {
      title:this.prop
    };
  }
};
</script>

