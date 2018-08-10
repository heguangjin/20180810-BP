<template>
    <div class="zm-product-err">
          <i></i>
          <p>未检测到您发布过<br/>{{setName}}！！</p>
          <p style="position:absolute;bottom:100px;">请选择添加{{setName}}！</p>
          <p class="iconfont icon-pointer" style="position:absolute;bottom:59px;margin-bottom:0px;"></p>
        </div>
</template>
<script>
export default {
    name:"no-news-product",
    props:["prop"],
    computed:{
        setName(){
            return this.prop;
        }
    }
}
</script>

