<template>
  <div class="FontWeightSetItem">
    <div ref="FontWeight" :class="{item:cur,current:current}" @click="itemClick"><i class="iconfont icon-bold"></i></div>
  </div>
</template>

<script>
  export default {
    name: "set-font-weight",
    data(){
      return{
        cur: true,
        current:false,
      }
    },
    props:['prop'],
    methods: {
      itemClick: function(){
        let arr = this.$refs.FontWeight.classList ,self = this ,mark = true ;
        arr.forEach((item)=>{
          item === "current"?mark = false:mark = true ;
        }) ;
        if(mark){
          this.current = true ;
          this.prop.style.callBack4&&this.prop.style.callBack4("800") ;
        }else {
          this.current = false ;
          this.prop.style.callBack4&&this.prop.style.callBack4("300") ;
        }
      }
    },
    mounted(){
      if(this.prop.style.fontWeight >= 600 || this.prop.style.fontWeight == "bold"){
        this.current = true ;
      }else{
        this.current = false ;
      }
    },
  }
</script>

<style scoped>
  .FontWeightSetItem {
    margin: 8px 3px 0px 0px ;
    float: left;
    line-height: 30px ;
  }
  .FontWeightSetItem .item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 1px;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #ddd;
    line-height: 30px ;
  }
  .FontWeightSetItem .current {
    border: 1px solid #3089D5;
    background-color: #EAF3FB;
  }
  .FontWeightSetItem .item:hover {
    background-color: #EAF3FB;
  }
  .FontWeightSetItem .item i {
    font-size: 20px;
    color: #797979;
    display: block;
    margin-top: -3px;
  }
</style>
