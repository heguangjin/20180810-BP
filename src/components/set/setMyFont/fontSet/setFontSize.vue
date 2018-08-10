<template>
  <div class="fontSize" @click.stop="selFontList" ref="fontSize">
    <span v-text="fontSize"></span>
    <i class="iconfont icon-xiangxia1"></i>
    <ul @mouseleave.stop="leave" :class="{showul:showul}">
      <div class="wrap">
        <li v-text="val.fontSize" v-for="(val,index) in item" :key="index" @click.stop="selFont(index)"></li>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "select-font-family",
    data(){
      return{
        item:[
          {fontSize:12},
          {fontSize:14},
          {fontSize:16},
          {fontSize:18},
          {fontSize:20},
          {fontSize:22},
          {fontSize:24},
          {fontSize:26},
          {fontSize:28},
          {fontSize:30},
          {fontSize:32},
          {fontSize:34},
          {fontSize:36},
          {fontSize:38},
          {fontSize:40},
          {fontSize:42},
          {fontSize:44},
          {fontSize:46},
          {fontSize:48},
          {fontSize:50},
          {fontSize:52},
          {fontSize:54},
          {fontSize:56},
          {fontSize:58},
          {fontSize:60},
        ],
        fontSize:"20",
        showul:false,
      }
    },
    props:['prop'],
    methods:{
      selFontList(){
        let sizeDiv = this.$refs.fontSize.getElementsByTagName("ul")[0].getElementsByTagName("div")[0] ;
        let $sizeDiv = $(sizeDiv) ;
        $sizeDiv.niceScroll({
          cursorcolor:"#97c4ea",
          boxzoom:true,
          cursorwidth: "4px",
          cursorborder: "0px solid #fff",
          cursorborderradius: "2px",
          railpadding: { top: 0, right: 1, left: 0, bottom: 0 },
          preventmultitouchscrolling: true ,
          autohidemode:false,
          cursordragspeed: 0.5,
          oneaxismousemode: false,
          enablescrollonselection: true,
        });
        this.showul = !this.showul ;
        let div = this.$refs.fontSize.getElementsByTagName("ul")[0].getElementsByTagName("div") ;
        for(let i=0;i<div.length;i++){
            if(div[i].className == ""){
                div[i].style.display = "none" ;
            }
        }
      },
      selFont(index){
        this.showul = false ;
        let v = this.item[index].fontSize ;
        this.fontSize = v ;
        v = v + "px" ;
        this.prop.style.callBack2&&this.prop.style.callBack2(v) ;
      },
      leave(){
        this.showul = false ;
      }
    },
    mounted(){
      this.fontSize = parseInt(this.prop.style['fontSize']);
    }
  }
</script>

<style scoped>
  .fontSize{
    width: 49px;
    height: 30px;
    border: 1px solid #ddd ;
    border-radius: 3px;
    line-height: 30px;
    margin-top: 8px;
    padding: 0 10px 0 4px ;
    cursor: pointer;
    position: relative;
    font-size: 12px;
    margin-right: 4px;
    float: left;
    color:#797979;
  }
  .fontSize:hover{
    box-shadow: 0 0 10px #3089D5;
    border-color:#3089D5 ;
  }
  .fontSize:hover .iconfont{
    color: #3089D5;
  }
  .iconfont{
    color: #ddd;
    display: block;
    position: absolute;
    top: -1px;
    right: 3px;
    font-size: 14px;
  } 
  ul{
    width: 49px;
    height: 0;
    position: absolute;
    top: 31px;
    left: -1px;
    padding: 0;
    background:transparent;
    text-align: center;
    overflow: hidden;
    z-index: 9999;
    transition: 0.4s;
  }
  .wrap{
    width: 49px ;
    height: 199px;
    overflow-x: hidden ;
    border: 1px solid #ddd;
    border-radius: 3px;
    background: #fff ;
    
  }
  li{
    list-style: none;
    height:28px ;
    width: 47px ; 
    color:#797979;
  }
  li:hover{
    background: lightskyblue;
  }
  .showul{
    height: 200px;
    transition: 0.4s ;
  }
</style>
