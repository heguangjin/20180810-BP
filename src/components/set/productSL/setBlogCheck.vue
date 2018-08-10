<template>
  <div class="zm-dialog-check1">
    <button v-show="show1" class="zm-dialog-check-button" @click.stop="checkBlog">{{prop}}</button>
    <button v-show="show2" class="zm-dialog-check-button" @click.stop="changeProduct">{{prop2}}</button>
  </div>
</template>
<script>
import productCommon from '../../com/product/productCommon'
export default {
  name: "set-blog-check",
  props: ["prop"],
  data() {
    return {
      show1:true,
      show2:false,
      // prop:'',
      prop2:'替换产品',
      vObj:{},
      productType:'product'
    };
  },
  created(){
    let nowVue = zmEditor.$store.state.component.selectList[0]
    if(nowVue.RandomSN == '产品'){

      nowVue.chooseBtnText1 = '选择产品'
      nowVue.chooseBtnText2 = '替换产品'
    }else if(nowVue.RandomSN == '服务'){

      nowVue.chooseBtnText1 = '选择服务'
      nowVue.chooseBtnText2 = '替换服务'
    }
    this.prop = nowVue.chooseBtnText1
    this.prop2 = nowVue.chooseBtnText2
    this.show1 = nowVue.chooseBtn1
    this.show2 = nowVue.chooseBtn2
  },
  methods: {
    ff(){
      let nowVue = zmEditor.$store.state.component.selectList[0]
      this.show1 = true//he
      this.show2 = false//he
    },
    checkBlog() {
      /*
        modules 模块product service
        nowLength 当前多少条数据
        totalLenght 达到多少条数据报警告
        multiple  true是多选 false是单选
        warningText 警告文字
        callBack 回调函数
      */
     let _this = this;
     let nowVue = zmEditor.$store.state.component.selectList[0]
     let m = 'product'
     if(this.prop.trim() == '选择产品'){
        m = 'product'
     }else if(this.prop.trim() == '选择服务'){
        m = 'service'
     }
     this.productType = m
      nowVue.productType = this.productType
      productCommon.choiceModules({
        nowLength: 1,
        totalLenght: 50,
        multiple: false,
        warningText: "最多选择50条博客，请您及时移除过期博客。",
        modules: m,
        callBack: _this.productC
      }); //7-1选择博客数据;
      
    },
    productC(v){
      let nowVue = zmEditor.$store.state.component.selectList[0]
      nowVue.dailogProductL = v

      this.$emit('noProduct',v)
      if(v[0].hasPupupChild != 0){
        this.show1 = true
        this.show2 = false

        nowVue.chooseBtn1 = this.show1
        nowVue.chooseBtn2 = this.show2
      }else{

        this.vObj = v
        nowVue.prodcutList[0].fId = v[0].id
        nowVue.prodcutList[0].fTitle = v[0].name
        nowVue.prodcutList[0].productImg = v[0].mainImage

        this.$emit('changeP',this.prop)
        if(this.prop == '选择产品'){
          this.prop2 = '替换产品'
        }else if(this.prop == '选择服务'){
          this.prop2 = '替换服务'
        }
        this.show1 = false
        this.show2 = true

        nowVue.chooseBtnText2 = this.prop2
        nowVue.chooseBtn1 = this.show1
        nowVue.chooseBtn2 = this.show2
      }
      this.$emit('showPro')

    },
    changeProduct(){
      let nowVue = zmEditor.$store.state.component.selectList[0]

      this.productType = nowVue.productType
      // let v = this.vObj
      let v = nowVue.dailogProductL
      if(v[0].hasPupupChild != 0){
        this.show1 = true
        this.show2 = false
      }else{
        if(this.productType == 'product'){
        nowVue.dataSource='productData'//数据来源类型，分产品(productData)和服务(serviceData)
        }else if(this.productType == 'service'){
        nowVue.dataSource='serviceData'//数据来源类型，分产品(productData)和服务(serviceData)
        }
        nowVue.settingData.productName = v[0].name
        nowVue.settingData.productBanner = v[0].advertisementText
        nowVue.settingData.productImg = v[0].mainImage
        nowVue.settingData.productId = v[0].id
        nowVue.settingData.productPrice = v[0].priceStr
        nowVue.settingData.productHref = v[0].url
        nowVue.settingData.productSku = v[0].productSku

        nowVue.oldProductIfo.productImg = v[0].mainImage
        nowVue.oldProductIfo.productName = v[0].name
        nowVue.oldProductIfo.productBanner = v[0].advertisementText
        nowVue.oldProductIfo.productId = v[0].id
        nowVue.oldProductIfo.productHref = v[0].url
        nowVue.oldProductIfo.productPrice = v[0].priceStr
        nowVue.oldProductIfo.productSku = v[0].productSku
        
        if(this.prop2 == '替换产品'){
          this.prop = '选择产品'
          zmEditor.$store.state.component.selectList[0].settingData.ValidDataType = '指定产品'
        }else if(this.prop2 == '替换服务'){
          this.prop = '选择服务'
          zmEditor.$store.state.component.selectList[0].settingData.ValidDataType = '指定服务'
        }
        this.show1 = true
        this.show2 = false

        nowVue.chooseBtnText1 = this.prop
        nowVue.chooseBtn1 = this.show1
        nowVue.chooseBtn2 = this.show2

        
        zmEditor.$store.state.component.selectList[0].settingData.nowData = v
        zmEditor.$store.state.component.selectList[0].settingData.ValidData = []
        // this.productList.forEach((element,index)=>{
        let obj = {
            id:v[0].id
        }
        zmEditor.$store.state.component.selectList[0].settingData.ValidData.push(obj)
        // })
      }

    }
  }
};
</script>

