<template>
  <div class="fontSize" @click.stop="selFontList" ref="fontSize">
    <div class="textWrap">
      <span v-text="fontFamily"></span>
      <i class="iconfont icon-xiangxia1"></i>
    </div>
    <ul @mouseleave.stop="leave" :class="{showul:showul}">
      <div class="wrap">
        <li  v-for="(val,index) in item" :key="index" @click.stop="selFont(index)">
            <span v-text="val.label"></span>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "set-font-family",
    data(){
      return{
        item:[
          {label:'方正舒体', fontFamily:'方正舒体'},
          {label:'方正姚体', fontFamily:'方正姚体'},
          {label:'仿宋', fontFamily:'仿宋'},
          {label:'黑体', fontFamily:'黑体'},
          {label:'华文彩云', fontFamily:'华文彩云'},
          {label:'华文仿宋', fontFamily:'华文仿宋'},
          {label:'华文行楷', fontFamily:'华文行楷'},
          {label:'华文琥珀', fontFamily:'华文琥珀'},
          {label:'华文楷体', fontFamily:'华文楷体'},
          {label:'华文隶书', fontFamily:'华文隶书'},
          {label:'华文宋体', fontFamily:'华文宋体'},
          {label:'华文细黑', fontFamily:'华文细黑'},
          {label:'华文新魏', fontFamily:'华文新魏'},
          {label:'华文中宋', fontFamily:'华文中宋'},
          {label:'楷体', fontFamily:'楷体'},
          {label:'隶书', fontFamily:'隶书'},
          {label:'宋体', fontFamily:'宋体'},
          {label:'微软雅黑', fontFamily:'微软雅黑'},
          {label:'新宋体', fontFamily:'新宋体'},
          {label:'幼圆', fontFamily:'幼圆'},
          {label:'Arial', fontFamily:'Arial'},
          {label:'Helvetica', fontFamily:'Helvetica'},
          {label:'Times New Roman', fontFamily:'Times New Roman'},
          {label:'Kokila', fontFamily:'Kokila'},
          {label:'SimSun-ExtB', fontFamily:'SimSun-ExtB'},
          {label:'Garamond', fontFamily:'Garamond'},
          {label:'Bodoni MT', fontFamily:'Bodoni MT'},
          {label:'Adobe Arabic', fontFamily:'Adobe Arabic'},
          {label:'Adobe Caslon', fontFamily:'Adobe Caslon'},
          {label:'Adobe Devanagari', fontFamily:'Adobe Devanagari'},
          {label:'Adobe Garamond', fontFamily:'Adobe Garamond'},
          {label:'Adobe Hebrew', fontFamily:'Adobe Hebrew'},
          {label:'Axure Handwriting', fontFamily:'Axure Handwriting'},
          {label:'cooper', fontFamily:'cooper'},
          {label:'Chaparral Pro', fontFamily:'Chaparral Pro'},
          {label:'Minion Pro', fontFamily:'Minion Pro'},
          {label:'Myriad Pro', fontFamily:'Myriad Pro'},
          {label:'Nueva Std', fontFamily:'Nueva Std'},
          {label:'Orator Std', fontFamily:'Orator Std'},
          {label:'Roboto', fontFamily:'Roboto'},
          {label:'Tekton Pro', fontFamily:'Tekton Pro'},
          {label:'Adobe Naskh', fontFamily:'Adobe Naskh'},
          {label:'Arvo', fontFamily:'Arvo'},
          {label:'Birch Std', fontFamily:'Birch Std'},
          {label:'Brush Script Std', fontFamily:'Brush Script Std'},
          {label:'Droid Serif', fontFamily:'Droid Serif'},
          {label:'Giddyup Std', fontFamily:'Giddyup Std'},
          {label:'Hobo Std', fontFamily:'Hobo Std'},
          {label:'Lobster', fontFamily:'Lobster'},
          {label:'Mesquite Std', fontFamily:'Mesquite Std'},
          {label:'Microsoft Uighur', fontFamily:'Microsoft Uighur'},
          {label:'Open Sans', fontFamily:'Open Sans'},
          {label:'Poiret One', fontFamily:'Poiret One'},
          {label:'Prestige Elite Std', fontFamily:'Prestige Elite Std'},
          {label:'Raleway', fontFamily:'Raleway'}
        ],
        fontFamily:"微软雅黑",
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
        let v = this.item[index].label ;
        this.fontFamily = v ;
        if(this.prop.style.callBack1){
          this.prop.style.callBack1(v)
        }
      },
      leave(){
        this.showul = false ;
      }
    },
    mounted(){
      this.fontFamily = this.prop.style['fontFamily'] ;
    }
  }
</script>

<style scoped>
  .fontSize{
    width: 90px;
    height: 30px;
    border: 1px solid #ddd ;
    border-radius: 3px;
    line-height: 30px;
    margin-top: 8px;
    padding: 0 15px 0 4px ;
    cursor: pointer;
    position: relative;
    font-size: 12px;
    margin-right: 4px;
    float: left;
  }
  .fontSize:hover{
    box-shadow: 0 0 10px #3089D5;
    border-color:#3089D5 ;
  }
  .fontSize:hover .iconfont{
    color: #3089D5;
  }
  .textWrap{
    color:#797979;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    width: 90px;
    height: 0;
    position: absolute;
    top: 31px;
    left: -1px;
    padding: 0;
    background: transparent;
    text-align: center;
    overflow: hidden;
    z-index: 9999;
    transition: 0.4s;
  }
  .wrap{
    width: 90px ;
    height: 199px;
    overflow-x: hidden ;
    border: 1px solid #ddd;
    border-radius: 3px;
    background: #fff ;
  }
  li{
    list-style: none;
    height:28px ;
    width: 88px ; 
    overflow: hidden;
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
