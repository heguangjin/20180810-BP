<template>
    <div class="zm-product-err">
          <i></i>
          <p>您目前没有选择{{setName}}！！</p>
          <p style="position:absolute;bottom:100px;">请选择添加{{setName}}！</p>
          <p class="iconfont icon-pointer" style="position:absolute;bottom:59px;;margin-bottom:0px;"></p>
        </div>
</template>
<script>
export default {
    name:"no-news-product",
    computed: {
    setName() {
      return zmEditor.$store.state.product.labelName;
    }
  }
}
</script>

