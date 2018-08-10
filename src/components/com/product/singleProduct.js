export default {
    data () {
        return {
          prodcutList:[//商品类型设置项下的产品数据
                {
                    fId:null,
                    fTitle:'韩版修身连衣裙韩版修身韩版修身',
                    productImg:'http://image.zuma.com/upload/913204624819277634.jpg',
                },
          ],
          chooseBtn1:true,
          chooseBtn2:false,
          chooseBtnText1:'选择产品',
          chooseBtnText2:'替换产品',
          dailogProductL:[],
          productType:'product',
          RandomSN:'产品',
          compositeDataL:'产品',
          dataSource:'productData',//数据来源类型，分产品(productData)和服务(serviceData)
          typeIndex:0,

          id: this.prop.id,
          type:"product",
          mold:"commonProduct",
          style:this.prop.style,
        //   lists:this.prop.lists,
          settingData:this.prop.settingData,
          pattern: [1,1,1,1,1,1,1,1],
          isShowRotateBtn: false,
          buttonList: [
            { type: "set",title: "设置", icon: "icon-shezhi1",paneTitle:'商品设置',paneInfo:"通过设置项调整布局、图片、背景色和文字内容"},
            { type: "style", title: "变更样式", icon: "icon-style",paneTitle:'商品样式',paneInfo:"选择和替换商品样式"},
            { type: "del", title: "删除", icon: "icon-delete" }
          ],
          isHideLevel:false,//是否显示分割线
          oldProductIfo:{//记录旧的产品数据
            productImg:'',//http://image.zuma.com/upload/982149997201329593.png?_=0.4107963756802373
            productHref:'',//http://zuma.com/productInfo/productInfo?fId=992609350633918464
            productName:"",//现货发[12期分期送礼]Apple/苹果 iPhone 7全网通4G手机国行苹果7现货发[12期分期送礼]Apple/苹果 iPhone 7全网通4G手机国行苹果7
            productId:1,
            productBanner:'',//正品女装
            productPrice:0,//100.00
          },
          oldretailB:0,
          oldbtT:0,
          newArr:[],

          mobileButtonList: [
              { type: "hide", title: "隐藏", icon: "icon-hide" },
              {
                type: "set",
                title: "设置",
                icon: "icon-shezhi1",
                paneTitle: "产品设置"
              }
        ], //手机版设置项按钮
          mobileChildData: this.prop.mobileChildData, //手机版子组件信息
          mobileStyle: this.prop.mobileStyle, //手机版样式
        //   settingData:{
        //     productImg: "",
        //     productHref: "",
        //     productName: "",
        //     productId: 1,
        //     productBanner: "",
        //     productPrice: null,
        //     btnText: "查看详情",
        //     backgroundColor: {
        //         value: "rgba(151, 196, 234,1)"
        //     },
        //     bgSize: {
        //         value: "cover"
        //     },
        //     bgPosition: {
        //         value: ""
        //     },
        //     marginTop: 0,
        //     marginBottom: {
        //         value: "10px"
        //     },
        //     lineHeight: {
        //         "value": 1.2
        //     },
        //     paddingLeft: 0,
        //     layOutIndex: 1,
        //     pictureScale: {
        //         row: 16,
        //         col: 9
        //     },
        //     blogDetails: {
        //         value: {
        //             text: "自适应",
        //             iconClass: ""
        //         }
        //     },
        //     imgFloat: {
        //         value: {
        //             text: "无效果",
        //             iconClass: ""
        //         }
        //     },
        //     imgCss: {
        //         imgW: "100%",
        //         imgH: "auto"
        //     },
        //     font3: {
        //         value: {
        //             fontFamily: "微软雅黑",
        //             fontSize: "14px",
        //             color: "rgba(255,255,255,1)",
        //             fontWeight: 700,
        //             fontStyle: "normal",
        //             productName: ""
        //         }
        //     },
        //     TitmarginTop: {
        //         value: "10px"
        //     },
        //     tit: "left",
        //     TitTextIndent: {
        //         value: "0px"
        //     },
        //     TitMarginRight: {
        //         value: ""
        //     },
        //     bannerfont3: {
        //         value: {
        //             fontFamily: "微软雅黑",
        //             fontSize: "14px",
        //             color: "rgba(255,255,255,1)",
        //             fontWeight: 700,
        //             fontStyle: "normal"
        //         }
        //     },
        //     bannerTitmarginTop: {
        //         value: "10px"
        //     },
        //     bannermarginBottom: {
        //         "value": "10px"
        //     },
        //     bannerlineHeight: {
        //         "value": 1.2
        //     },
        //     bannertit: "left",
        //     bannerTitTextIndent: {
        //         value: "0px"
        //     },
        //     bannerMarginRight: {
        //         value: ""
        //     },
        //     retailfont3: {
        //         value: {
        //             fontFamily: "微软雅黑",
        //             fontSize: "14px",
        //             color: "rgba(153,0,0,1)",
        //             fontWeight: 700,
        //             fontStyle: "normal"
        //         }
        //     },
        //     retailTitmarginTop: {
        //         value: "10px"
        //     },
        //     retailmarginBottom: {
        //         "value": "10px"
        //     },
        //     retailtit: "left",
        //     retailTitTextIndent: {
        //         value: "0px"
        //     },
        //     retailmarginRight: {
        //         value: ""
        //     },
        //     btnfont3: {
        //         value: {
        //             fontFamily: "微软雅黑",
        //             fontSize: "13px",
        //             color: "rgba(255,255,255,1)",
        //             fontWeight: 500,
        //             fontStyle: "normal"
        //         }
        //     },
        //     btnmarginTop: {
        //         value: "10px"
        //     },
        //     btnmarginLeft: {
        //         value: "0px"
        //     },
        //     btnmarginRight: {
        //         "value": "0px"
        //     },
        //     btnBg: {
        //         value: "rgba(48,137,213,1)"
        //     },
        //     btnIndent: {
        //         value: "0px"
        //     },
        //     btnP: {
        //         value: ""
        //     },
        //     btnPosition: {
        //         value: "left"
        //     },
        //     btnWidth: {
        //         value: 45
        //     },
        //     btnheight: {
        //         value: "30px"
        //     },
        //     lineWidth: {
        //         value: 90
        //     },
        //     lineH: {
        //         value: "1px"
        //     },
        //     lineBg: {
        //         value: "rgba(255,255,255,1)"
        //     },
        //     bannerSwitchShow: {
        //         value: true
        //     },
        //     retailSwitchShow: {
        //         value: true
        //     },
        //     btnSwitchShow: {
        //         value: true
        //     },
        //     DivisionSwitchShow: {
        //         value: true
        //     },
        //     Xmove: {
        //         value: 1
        //     },
        //     Ymove: {
        //         value: 2
        //     },
        //     settingData.topMove: {
        //         value: 3
        //     },
        //     shadowBg: {
        //         value: "rgb(255,255,255)"
        //     },
        //     shadowSwitchShow: {
        //         value: true
        //     }
        //   cssObj:{//文字区域和图片区域的高宽
        //       width:0,
        //       titleHeight:156,
        //     //   titleWidth:170,
        //       XimgH:150,
        //       XimgW:267,
        //       XtitleH:150,
        //       XtitleW:170,
        //       padding:25,
        //       paddingTop:0
        //   },
        //   boxShadow:'',//阴影
        //   boxShadowObj:{//阴影设置项数据
        //       boxShadowX:'0px ',
        //       boxShadowY:'0px ',
        //       boxShadowB:'0px ',
        //       boxShadowBG:'rgba(255,255,255,1)',
        //   },
        //   oldlineHeight:1.2,//初始商品名称行高
        //   oldbannerlineHeight:1.2,//初始广告语行高
        //   oldSettingData:null,
        //   },

        }
      }, 
      watch:{
        'settingData.productName':{
              handler(){
                let obj={
                    mainImage:this.settingData.productImg,
                    name:this.settingData.productName,
                    advertisementText:this.settingData.productBanner,
                    url:this.settingData.productHref,
                    id:this.settingData.productId,
                    priceStr:this.settingData.productPrice,
                    productSku:this.settingData.productSku,
                }
                let arr=[]
                arr.push(obj)
                if(this.lists.length > 0){

                }else{
                    this.$emit('updataMes',{ key : "lists",index:this.index,value:arr});//数据存储,更改父级lists;
                }
                
              },
              deep:true
          }
      },
      computed:{
        lists(){
            return this.prop.lists
        },
      },
      methods:{
          bgImgCb(v){//图片显示效果设置项回调函数
              if(v.trim() == '自适应'){
                this.settingData.bgSize.value = 'cover'
                this.settingData.bgPosition.value = ''
              }else if(v.trim() == '填充'){
                this.settingData.bgSize.value = ''
                this.settingData.bgPosition.value = '0px 0px'
              }
          },
          productLink(href){//点击查看详情
            // location.href = href
            // window.open(href, "_blank")
          },
          boxShadowX(v){//阴影X轴偏移设置项
            this.settingData.boxShadowObj.boxShadowX = v+'px '
            this.boxShadowF()
          },
          boxShadowY(v){//阴影Y轴偏移设置项
            this.settingData.boxShadowObj.boxShadowY = v+'px '
            this.boxShadowF()
          },
          boxShadowB(v){//阴影模糊度设置项
            this.settingData.boxShadowObj.boxShadowB = v+'px '
            this.boxShadowF()
          },
          boxShadowBG(v){//阴影颜色设置项
            this.settingData.boxShadowObj.boxShadowBG = v.color
            this.boxShadowF()
          },
          boxShadowF(){//阴影
            this.settingData.boxShadow = this.settingData.boxShadowObj.boxShadowX + this.settingData.boxShadowObj.boxShadowY + this.settingData.boxShadowObj.boxShadowB + this.settingData.boxShadowObj.boxShadowBG
          },
          fileGetLength(v) {//重命名获取字符位数;
            var len = 0;
            for (var i = 0; i < v.length; i++) {
                var a = v.charAt(i);
                len = (a.match(/[^\x00-\xff]/ig) != null) ? (len + 2) : (len + 1);
            }
            return len;
          },
          cb1(index,that){//点击布局样式设置项回调函数
            let childVueList = that.$parent.$children
            let nowPicV
            childVueList.forEach((element)=>{
                if(element.changSelect && element.dataType && element.fTitle == '图片宽高比例'){
                    nowPicV = element
                }
            })
            this.settingDataF()//重置样式
            if(index == 3 || index == 4){
                this.isHideLevel = false
                this.style.height = this.settingData.oldStyleH ? this.settingData.oldStyleH : this.style.height
                this.settingData.cssObj.XimgH = this.style.height
                this.settingData.cssObj.XtitleH = this.style.height
                this.settingData.cssObj.XtitleW = this.settingData.XtitleW

                this.settingData.font3.value.fontSize = "18px"
                this.settingData.retailfont3.value.fontSize = "20px"
                this.settingData.retailtit = "center"
                this.settingData.btnPosition.value = "right"
                this.settingData.btnmarginTop= {
                    value: "10px"
                }

                this.settingData.nowProportion=1
                this.settingData.nowProportionCol=1
                this.settingData.oldStyleW=300
                this.settingData.oldStyleH=166
                this.settingData.XtitleW=166
                this.settingData.titleHeight=156
                this.settingData.pictureScale = {
                    row:1,
                    col:1
                }
                nowPicV.changSelect.row = this.settingData.pictureScale.row
                nowPicV.changSelect.col = this.settingData.pictureScale.col

                this.settingData.cssObj.XimgW = this.settingData.cssObj.XimgH*(this.settingData.pictureScale.row/this.settingData.pictureScale.col)
                this.style.width = this.settingData.cssObj.XimgW + this.settingData.cssObj.XtitleW

    
            }else if(index == 1 || index == 2){
                this.isHideLevel = true
                // this.style.width = this.settingData.oldStyleW
                this.style.width = 329
                this.settingData.cssObj.titleHeight = this.settingData.titleHeight
                this.settingData.imgCss.imgW = this.style.width + 'px'
                // this.settingData.oldPictureScale={
                //     row:16,
                //     col:9
                //   }

                // this.settingData.font3.value.fontSize = "18px"
                // this.settingData.retailfont3.value.fontSize = "20px"
                // this.settingData.retailtit = "center"
                this.settingData.btnPosition.value = "right"
                this.settingData.cssObj.titleHeight = 138

                this.settingData.nowProportion=16
                this.settingData.nowProportionCol=9
                this.settingData.oldStyleW=300
                this.settingData.oldStyleH=166
                this.settingData.XtitleW=166
                this.settingData.titleHeight=138

                this.settingData.pictureScale = {
                    row:16,
                    col:9
                }
                nowPicV.changSelect.row = this.settingData.pictureScale.row
                nowPicV.changSelect.col = this.settingData.pictureScale.col

                this.settingData.imgCss.imgH = Math.round(parseFloat(this.settingData.imgCss.imgW)*(this.settingData.pictureScale.col/this.settingData.pictureScale.row)) + 'px'
               
                this.style.height = Math.round(parseFloat(this.settingData.imgCss.imgH)) + this.settingData.cssObj.titleHeight
            }
            
            this.settingData.productLayout= index//重置样式
            this.settingData.layOutIndex = index//重置样式
            this.settingData.lineHeight.value = 1.2//重置样式
            if(index == 1 || index == 2){
                this.settingData.btnWidth.value = 40//重置样式
            }else{
                this.settingData.btnWidth.value = 70//重置样式
            }

            this.settingData.productImg = this.oldProductIfo.productImg
            this.settingData.productName = this.oldProductIfo.productName
            this.settingData.productBanner = this.oldProductIfo.productBanner
            this.settingData.productId = this.oldProductIfo.productId
            this.settingData.productHref = this.oldProductIfo.productHref
            this.settingData.productPrice = this.oldProductIfo.productPrice
            this.settingData.productSku = this.oldProductIfo.productSku

          },
          pictureHeight(ww,hh){//图片宽高比例设置项回调函数
              if(this.settingData.productLayout == 1 || this.settingData.productLayout == 2){
                let imgW = $(this.$refs.img).width()
                let imgH = $(this.$refs.img).height()
                let titleH = this.settingData.cssObj.titleHeight
                switch(ww){
                    case 16:
                        this.settingData.imgCss.imgH = Math.round(imgW*(9/16)) + 'px'
                        this.style.height = Math.round(imgW*(9/16)) + titleH
                        break;
                    case 3:
                        if(hh == 2){
                            this.settingData.imgCss.imgH = Math.round(imgW*(2/3)) + 'px'
                            this.style.height = Math.round(imgW*(2/3)) + titleH
                        }else if(hh == 4){
                            this.settingData.imgCss.imgH = Math.round(imgW*(4/3)) + 'px'
                            this.style.height = Math.round(imgW*(4/3)) + titleH
                        }
                        break;
                    case 4:
                        this.settingData.imgCss.imgH = Math.round(imgW*(3/4)) + 'px'
                        this.style.height = Math.round(imgW*(3/4)) + titleH
                        break;
                    case 1:
                        this.settingData.imgCss.imgH = Math.round(imgW) + 'px'
                        this.style.height = Math.round(imgW) + titleH
                        break;
                }
              }else if(this.settingData.productLayout == 3 || this.settingData.productLayout == 4){
                let imgW = $(this.$refs.Ximg).width()
                let imgH = $(this.$refs.Ximg).height()
                let titleH = this.settingData.cssObj.XtitleH
                switch(ww){
                    case 16:
                        this.settingData.cssObj.XimgH = Math.round(imgW*(9/16))
                        this.style.height = Math.round(imgW*(9/16))
                        break;
                    case 3:
                        if(hh == 2){
                            this.settingData.cssObj.XimgH = Math.round(imgW*(2/3))
                            this.style.height = Math.round(imgW*(2/3))
                        }else if(hh == 4){
                            this.settingData.cssObj.XimgH = Math.round(imgW*(4/3))
                            this.style.height = Math.round(imgW*(4/3))
                        }
                        break;
                    case 4:
                        this.settingData.cssObj.XimgH = Math.round(imgW*(3/4))
                        this.style.height = Math.round(imgW*(3/4))
                        break;
                    case 1:
                        this.settingData.cssObj.XimgH = Math.round(imgW)
                        this.style.height = Math.round(imgW)
                        break;
                }
              }
              this.settingData.nowProportion = ww
              this.settingData.nowProportionCol = hh
              this.settingData.oldPictureScale.row = ww
              this.settingData.oldPictureScale.col = hh
          },
          imgFloatE(v){//图片悬浮效果回调函数
              switch(v){
                  case '无效果':
                    this.settingData.enlarge = false
                    this.settingData.leftMove = false
                    this.settingData.topMove = false
                    this.settingData.blur = false
                    break;
                  case '放大':
                    this.settingData.enlarge = true
                    this.settingData.leftMove = false
                    this.settingData.topMove = false
                    this.settingData.blur = false
                    break;
                  case '左移':
                    this.settingData.enlarge = false
                    this.settingData.leftMove = true
                    this.settingData.topMove = false
                    this.settingData.blur = false
                    break;
                  case '上移':
                    this.settingData.enlarge = false
                    this.settingData.leftMove = false
                    this.settingData.topMove = true
                    this.settingData.blur = false
                    break;
                  case '虚化':
                    this.settingData.enlarge = false
                    this.settingData.leftMove = false
                    this.settingData.topMove = false
                    this.settingData.blur = true
                    break;
              }
          },
          lineH(v){//商品名称设置项回调函数
              let fontCount = this.settingData.productName.length
              if(this.settingData.productLayout==1 || this.settingData.productLayout == 2){
                let fontW = fontCount*parseInt(this.settingData.font3.value.fontSize)
                let nowW = this.style.width - (this.settingData.cssObj.padding*2)
                if(fontW > nowW){
                    this.settingData.oldlineHeight = this.settingData.lineHeight.value
                }else{
                    this.settingData.lineHeight.value = 1.2
                }
              }else{
                let fontW = fontCount*parseInt(this.settingData.font3.value.fontSize)
                let nowW = this.style.width - (this.settingData.cssObj.padding*2)- parseInt($(this.$refs.Ximg).width())
                if(fontW > nowW){
                    this.settingData.oldlineHeight = this.settingData.lineHeight.value
                }else{
                    this.settingData.lineHeight.value = 1.2
                }
              }
          },
          lineH2(v){//广告语设置项回调函数
              let fontCount2 = this.settingData.productBanner.length
              if(this.settingData.productLayout==1 || this.settingData.productLayout == 2){
                let fontW2 = fontCount2*parseInt(this.settingData.bannerfont3.value.fontSize)
                let nowW = this.style.width - (this.settingData.cssObj.padding*2)
                if(fontW2 > nowW){
                    this.settingData.oldbannerlineHeight = this.settingData.bannerlineHeight.value 
                }else{
                    this.settingData.bannerlineHeight.value = 1.2
                }
              }else{
                let fontW2 = fontCount2*parseInt(this.settingData.bannerfont3.value.fontSize)
                let nowW = this.style.width - (this.settingData.cssObj.padding*2)- parseInt($(this.$refs.Ximg).width())
                if(fontW2 > nowW){
                    this.settingData.oldbannerlineHeight = this.settingData.bannerlineHeight.value 
                }else{
                    this.settingData.bannerlineHeight.value = 1.2
                }
              }
          },
          pointCallBack(index){//拖动组件八个点的回调函数
            if(index == 0 ||index == 2 || index==3 || index == 4 || index == 6 || index == 7){
                let nowProportion = this.settingData.nowProportion
                if(this.settingData.productLayout == 1 || this.settingData.productLayout == 2){
                    this.settingData.imgCss.imgW = this.style.width + 'px'
                    let imgW = this.style.width
                    let imgH = $(this.$refs.img).height()
                    let titleH = this.settingData.cssObj.titleHeight
                    switch(nowProportion){
                        case 16:
                            this.settingData.imgCss.imgH = Math.round(imgW*(9/16)) + 'px'
                            this.style.height = Math.round(imgW*(9/16)) + titleH
                            break;
                        case 3:
                            if(this.settingData.oldPictureScale.col == 2){
                                this.settingData.imgCss.imgH = Math.round(imgW*(2/3)) + 'px'
                                this.style.height = Math.round(imgW*(2/3)) + titleH
                            }else if(this.settingData.oldPictureScale.col == 4){
                                this.settingData.imgCss.imgH = Math.round(imgW*(4/3)) + 'px'
                                this.style.height = Math.round(imgW*(4/3)) + titleH
                            }
                            break;
                        case 4:
                            this.settingData.imgCss.imgH = Math.round(imgW*(3/4)) + 'px'
                            this.style.height = Math.round(imgW*(3/4)) + titleH
                            break;
                        case 1:
                            this.settingData.imgCss.imgH = Math.round(imgW) + 'px'
                            this.style.height = Math.round(imgW) + titleH
                            break;
                    }
                    let fontCount = this.settingData.productName.length
                    let fontW = fontCount*parseInt(this.settingData.font3.value.fontSize)
                    let nowW = this.style.width - (this.settingData.cssObj.padding*2)
                    if(fontW > nowW){
                        this.settingData.lineHeight.value = this.settingData.oldlineHeight
                    }else{
                        this.settingData.lineHeight.value = 1.2
                    }
            
                    let fontCount2 = this.settingData.productBanner.length ? this.settingData.productBanner.length : 0
                    let fontW2 = fontCount2*parseInt(this.settingData.bannerfont3.value.fontSize)
                    if(fontW2 > nowW){
                        this.settingData.bannerlineHeight.value = this.settingData.oldbannerlineHeight
                    }else{
                        this.settingData.bannerlineHeight.value = 1.2
                    }
                }else if(this.settingData.productLayout == 3 || this.settingData.productLayout == 4){
                    this.settingData.cssObj.XtitleW = this.style.width - this.settingData.cssObj.XimgW
    
                    let fontCount = this.settingData.productName.length
                    let fontW = fontCount*parseInt(this.settingData.font3.value.fontSize)
                    let nowW = this.style.width - (this.settingData.cssObj.padding*2)- parseInt($(this.$refs.Ximg).width())
                    if(fontW > nowW){
                        this.settingData.lineHeight.value = this.settingData.oldlineHeight
                    }else{
                        this.settingData.lineHeight.value = 1.2
                    }
        
                    let fontCount2 = this.settingData.productBanner.length
                    let fontW2 = fontCount2*parseInt(this.settingData.bannerfont3.value.fontSize)
                    let nowW2 = this.style.width - (this.settingData.cssObj.padding*2)- parseInt($(this.$refs.Ximg).width())
                    if(fontW2 > nowW2){
                        this.settingData.bannerlineHeight.value = this.settingData.oldbannerlineHeight
                    }else{
                        this.settingData.bannerlineHeight.value = 1.2
                    }
        
                }
            }else{
                if( this.settingData.productLayout == 1 || this.settingData.productLayout == 2){
                    // this.cssObj.titleHeight = this.style.height - $(this.$refs.imgHeight).height()
                    this.settingData.cssObj.titleHeight = this.style.height - $(this.$refs.img).height()
                }
            }
            if(index == 0 ||index == 1 || index == 2 || index==4 || index == 5 || index == 6){
                if(this.settingData.productLayout == 3 || this.settingData.productLayout == 4){
                    this.settingData.cssObj.XimgH = this.style.height
                    this.settingData.cssObj.XtitleH = this.style.height
                    let nowProportion = this.settingData.nowProportion

                    let imgW = $(this.$refs.Ximg).width()
                    let imgH = this.style.height
                    let titleH = this.settingData.cssObj.XtitleH
                    switch(nowProportion){
                        case 16:
                            this.settingData.cssObj.XimgW = Math.round(imgH*(16/9))
                            this.settingData.cssObj.XtitleW = this.style.width - this.settingData.cssObj.XimgW
                            break;
                        case 3:
                            // if(this.settingData.nowProportionCol == 2){
                            if(this.settingData.oldPictureScale.col == 2){
                                this.settingData.cssObj.XimgW = Math.round(imgH*(3/2))
                                this.settingData.cssObj.XtitleW = this.style.width - this.settingData.cssObj.XimgW
                            // }else if(this.settingData.nowProportionCol == 4){
                            }else if(this.settingData.oldPictureScale.col == 4){
                                this.settingData.cssObj.XimgW = Math.round(imgH*(3/4))
                                this.settingData.cssObj.XtitleW = this.style.width - this.settingData.cssObj.XimgW
                            }
                            break;
                        case 4:
                            this.settingData.cssObj.XimgW = Math.round(imgH*(4/3))
                            this.settingData.cssObj.XtitleW = this.style.width - this.settingData.cssObj.XimgW
                            break;
                        case 1:
                            this.settingData.cssObj.XimgW = imgH
                            this.settingData.cssObj.XtitleW = this.style.width - this.settingData.cssObj.XimgW
                            // if(this.settingData.cssObj.XtitleW == 0){
                            //     console.log("文字区域宽度为零")
                            // }
                            break;
                    }
                    this.style.width = this.settingData.cssObj.XimgW + this.settingData.cssObj.XtitleW
                }
            }
          },
          textIndentF(v1){//零售价边距缩设置项进回调函数
            switch(this.settingData.retailtit){
                case 'left':
                this.settingData.retailmarginRight.value = ''
                this.settingData.retailTitTextIndent.value = v1 + 'px'
                break;
                case 'center':
                this.settingData.retailmarginRight.value = ''
                this.settingData.retailTitTextIndent.value = '0px'
                break;
                case 'right':
                this.settingData.retailmarginRight.value = v1 + 'px'
                this.settingData.retailTitTextIndent.value = '0px'
                break;
            }
          },
          textIndentF2(v1){//商品名称边距缩进设置项回调函数
            switch(this.settingData.tit){
                case 'left':
                this.settingData.TitMarginRight.value  = ''
                this.settingData.TitTextIndent.value  = v1 + 'px'
                break;
                case 'center':
                this.settingData.TitMarginRight.value = ''
                this.settingData.TitTextIndent.value = v1 + 'px'
                break;
                case 'right':
                this.settingData.TitTextIndent.value = '0px'
                this.settingData.TitMarginRight.value = v1 + 'px'
                break;
            }
          },
          textIndentF3(v1){//广告语边距缩进设置项回调函数
            switch(this.settingData.bannertit){
                case 'left':
                this.settingData.bannerTitTextIndent.value  =  v1 + 'px'
                this.settingData.bannerMarginRight.value  = ''
                break;
                case 'center':
                this.settingData.bannerMarginRight.value = ''
                this.settingData.bannerTitTextIndent.value = v1 + 'px'
                break;
                case 'right':
                this.settingData.bannerTitTextIndent.value = '0px'
                this.settingData.bannerMarginRight.value = v1 + 'px'
                break;
            }
          },
          textIndentF4(v1){//按钮边距缩进设置项回调函数
            switch(this.settingData.btnPosition.value){
                case 'left':
                this.settingData.btnmarginRight.value  = ''
                this.settingData.btnmarginLeft.value  = v1 + 'px'
                break;
                case 'center':
                this.settingData.btnmarginRight.value = ''
                this.settingData.btnmarginLeft.value = ''
                break;
                case 'right':
                this.settingData.btnmarginLeft.value = ''
                this.settingData.btnmarginRight.value = v1 + 'px'
                break;
            }
          },
          settingDataF(){//记录初始的设置项数据
            this.settingData.productImg = ""
            this.settingData.productHref = ""
            this.settingData.productName = ""
            this.settingData.productId = 1
            this.settingData.productBanner = ""
            this.settingData.productPrice = null
            this.settingData.btnText = "查看详情"
            this.settingData.backgroundColor = {
                value: "#514F7D"
            }
            this.settingData.bgSize= {
                value: "cover"
            }
            this.settingData.bgPosition= {
                value: ""
            }
            this.settingData.marginTop= 0
            this.settingData.marginBottom= {
                value: "5px"
            }
            this.settingData.lineHeight= {
                value: 1.2
            }
            this.settingData.paddingLeft= 0
            this.settingData.layOutIndex= 1
            this.settingData.pictureScale= {
                row: 16,
                col: 9
            }
            this.settingData.blogDetails= {
                value: {
                    text: "自适应",
                    iconClass: ""
                }
            }
            this.settingData.imgFloat= {
                value: {
                    text: "无效果",
                    iconClass: ""
                }
            }
            this.settingData.imgCss= {
                imgW: "100%",
                imgH: "auto"
            }
            this.settingData.font3= {
                value: {
                    fontFamily: "微软雅黑",
                    fontSize: "14px",
                    color: "rgba(255,255,255,1)",
                    fontWeight: 700,
                    fontStyle: "normal",
                    productName: ""
                }
            }
            this.settingData.TitmarginTop= {
                value: "10px"
            }
            this.settingData.tit= "left"
            this.settingData.TitTextIndent={
                value: "0px"
            }
            this.settingData.TitMarginRight= {
                value: ""
            }
            this.settingData.bannerfont3= {
                value: {
                    fontFamily: "微软雅黑",
                    fontSize: "14px",
                    color: "#FCDC34",
                    fontWeight: 500,
                    fontStyle: "normal"
                }
            }
            this.settingData.bannerTitmarginTop= {
                value: "0px"
            }
            this.settingData.bannermarginBottom= {
                value: "5px"
            }
            this.settingData.bannerlineHeight= {
                value: 1.2
            }
            this.settingData.bannertit= "left"
            this.settingData.bannerTitTextIndent= {
                value: "0px"
            }
            this.settingData.bannerMarginRight= {
                value: ""
            }
            this.settingData.retailfont3= {
                value: {
                    fontFamily: "微软雅黑",
                    fontSize: "20px",
                    color: "#fff",
                    fontWeight: 500,
                    fontStyle: "normal"
                }
            }
            this.settingData.retailTitmarginTop= {
                value: "0px"
            }
            this.settingData.retailmarginBottom.value = {
                value: "0px"
            }
            this.settingData.retailmarginBottom.value = "0px"
            this.settingData.retailtit= "left"
            
            this.settingData.retailmarginRight= {
                value: ""
            }
            this.settingData.btnfont3= {
                value: {
                    fontFamily: "微软雅黑",
                    fontSize: "13px",
                    color: "rgba(255,255,255,1)",
                    fontWeight: 500,
                    fontStyle: "normal"
                }
            }
            this.settingData.btnmarginTop= {
                value: "0px"
            }
            this.settingData.btnmarginLeft= {
                value: "0px"
            }
            this.settingData.btnmarginRight= {
                value: "0px"
            }
            this.settingData.btnBg= {
                value: "rgba(255,255,255,0.2)"
            }
            this.settingData.btnIndent= {
                value: "0px"
            }
            this.settingData.btnP= {
                value: ""
            }
            this.settingData.btnPosition= {
                value: "left"
            }
            this.settingData.btnWidth= {
                value: 45
            }
            this.settingData.btnheight= {
                value: "30px"
            }
            this.settingData.lineWidth= {
                value: 90
            }
            this.settingData.lineH= {
                value: "1px"
            }
            this.settingData.lineBg= {
                value: "rgba(255,255,255,.2)"
            }
            this.settingData.bannerSwitchShow= {
                value: true
            }
            this.settingData.retailSwitchShow= {
                value: true
            }
            this.settingData.btnSwitchShow= {
                value: true
            }
            this.settingData.DivisionSwitchShow= {
                value: true
            }
            this.settingData.Xmove= {
                value: 1
            }
            this.settingData.Ymove= {
                value: 2
            }
            this.settingData.shadowblur= {
                value: 3
            }
            this.settingData.shadowBg= {
                value: "rgba(255,255,255,1)"
            }
            this.settingData.shadowSwitchShow= {
                value: true
            }
            this.settingData.enlarge=false
            this.settingData.leftMove=false
            this.settingData.topMove=false
            this.settingData.blur=false
            this.settingData.cssObj={//文字区域和图片区域的高宽
                width:0,
                titleHeight:156,
                //   titleWidth:170,
                XimgH:150,
                XimgW:267,
                XtitleH:150,
                XtitleW:170,
                padding:25,
                paddingTop:0
            }
            this.settingData.boxShadow='0px 0px 0px rgba(255,255,255,1)'//阴影
            this.settingData.boxShadowObj={//阴影设置项数据
                boxShadowX:'0px ',
                boxShadowY:'0px ',
                boxShadowB:'0px ',
                boxShadowBG:'rgba(255,255,255,1)',
            }
            this.settingData.oldlineHeight=1.2//初始商品名称行高
            this.settingData.oldbannerlineHeight=1.2//初始广告语行高
            this.settingData.productLayout=1
            this.settingData.oldPictureScale={
                row:1,
                col:1
            }
            this.settingData.nowProportion=1
            this.settingData.nowProportionCol=1
            this.settingData.oldStyleW=300
            this.settingData.oldStyleH=166
            this.settingData.XtitleW=166
            this.settingData.titleHeight=156
          },
          retailmarginF(v){//解决零售价与查看详情按钮之间margin属性的塌陷问题
              this.oldretailB = parseFloat(v)
              this.settingData.btnmarginTop.value = this.oldbtT+'px'
              //   this.settingData.retailTitTextIndent.value = (parseFloat(this.settingData.btnmarginTop.value) + parseFloat(v))+'px'
              this.settingData.retailmarginBottom.value = (this.oldbtT + parseFloat(v))+'px'
          },
          btnmarginF(v){//解决零售价与查看详情按钮之间margin属性的塌陷问题
            this.oldbtT = parseFloat(v)
            this.settingData.retailmarginBottom.value = this.oldretailB+'px'
            this.settingData.btnmarginTop.value = (this.oldretailB + parseFloat(v))+'px'
          },
      },
      created(){//创建之后进行数据请求
        this.settingData.layOutIndex = this.settingData.productLayout
        if(this.settingData.productLayout == 1 || this.settingData.productLayout == 2){
        this.settingData.btnWidth.value = 40
        // this.style.width = 329
        this.settingData.oldStyleW = this.style.width
        // this.cssObj.titleHeight = 156
        this.settingData.cssObj.titleHeight = this.settingData.titleHeight
        this.settingData.imgCss.imgW = this.style.width + 'px'
        let per = 1
        let pictureScale = {
            row:16,
            col:9
        }
        switch(this.settingData.nowProportion){
            case 16:
                per = 9/16
                pictureScale = {
                    row:16,
                    col:9
                }
                break;
            case 3:
                if(this.settingData.nowProportionCol == 2){
                    per = 2/3
                    pictureScale = {
                        row:3,
                        col:2
                    }
                }else if(this.settingData.nowProportionCol == 4){
                    per = 4/3
                    pictureScale = {
                        row:3,
                        col:4
                    }
                }
                break;
            case 4:
                per = 3/4
                pictureScale = {
                    row:4,
                    col:3
                }
                break;
            case 1:
                per = 1
                pictureScale = {
                    row:1,
                    col:1
                }
                break;
        }
            this.settingData.pictureScale = pictureScale
            this.settingData.imgCss.imgH = Math.round(parseFloat(this.settingData.imgCss.imgW)*per) + 'px'
            this.style.height = Math.round(parseFloat(this.settingData.imgCss.imgW)*per) + this.settingData.cssObj.titleHeight

        }else if(this.settingData.productLayout == 3 || this.settingData.productLayout == 4){

            this.settingData.btnWidth.value = 70
            this.settingData.oldStyleH = this.style.height
            this.settingData.cssObj.XimgH = this.style.height
            this.settingData.cssObj.XtitleH = this.style.height
            this.settingData.cssObj.XtitleW = this.settingData.XtitleW//170

            let per = 1
            let pictureScale = {
                row:16,
                col:9
            }
            switch(this.settingData.nowProportion){
                case 16:
                    per = 16/9
                    pictureScale = {
                        row:16,
                        col:9
                    }
                    break;
                case 3:
                    if(this.settingData.nowProportionCol == 2){
                        per = 3/2
                        pictureScale = {
                            row:3,
                            col:2
                        }
                    }else if(this.settingData.nowProportionCol == 4){
                        per = 3/4
                        pictureScale = {
                            row:3,
                            col:4
                        }
                    }
                    break;
                case 4:
                    per = 4/3
                    pictureScale = {
                        row:4,
                        col:3
                    }
                    break;
                case 1:
                    per = 1
                    pictureScale = {
                        row:1,
                        col:1
                    }
                    break;
            }
            this.settingData.cssObj.XimgW = this.settingData.cssObj.XimgH*per
            this.style.width = this.settingData.cssObj.XimgW + this.settingData.cssObj.XtitleW
            this.settingData.pictureScale = pictureScale
        }

        if(this.lists && this.lists.length > 0){
            let newArr=[]
            this.lists.forEach((element,index)=>{
                if(element.childItem && (element.childItem.length > 0)){
                // if(element.childItem.length != 0){
                    // newArr.push(...element.childItem)
                }else{
                    newArr.push(element)
                }
            })
            // let oldD = this.lists[0]
            if(newArr.length < 0){

            }else{
                let oldD = newArr[0]
                // that.dataSource='productData'//数据来源类型，分产品(productData)和服务(serviceData)
                this.settingData.productImg = oldD.productImg ? oldD.productImg : oldD.mainImage
        
                this.settingData.productName = oldD.productName ? oldD.productName : oldD.name
                this.settingData.productBanner = oldD.productBanner ? oldD.productBanner : oldD.advertisementText
                this.settingData.productHref = oldD.productHref ? oldD.productHref : oldD.url
                this.settingData.productId = oldD.productId ? oldD.productId : oldD.id
                this.settingData.productPrice = oldD.productPrice ? oldD.productPrice : oldD.priceStr
                this.settingData.productSku = oldD.productSku ? oldD.productSku : oldD.productSku
    
                this.oldProductIfo.productImg = oldD.productImg ? oldD.productImg : oldD.mainImage
                this.oldProductIfo.productName = oldD.productName ? oldD.productName : oldD.name
                this.oldProductIfo.productBanner = oldD.productBanner ? oldD.productBanner : oldD.advertisementText
                this.oldProductIfo.productHref = oldD.productHref ? oldD.productHref : oldD.url
                this.oldProductIfo.productId = oldD.productId ? oldD.productId : oldD.id
                this.oldProductIfo.productPrice = oldD.productPrice ? oldD.productPrice : oldD.priceStr
                this.oldProductIfo.productSku = oldD.productSku ? oldD.productSku : oldD.productSku
    
                this.prodcutList[0].fId = oldD.productId ? oldD.productId : oldD.id
                this.prodcutList[0].fTitle = oldD.productName ? oldD.productName : oldD.name
                this.prodcutList[0].productImg = oldD.productImg ? oldD.productImg : oldD.mainImage
    
                this.oldbtT = parseFloat(this.settingData.btnmarginTop.value)
                this.oldretailB = parseFloat(this.settingData.retailmarginBottom.value)
                return
            }

        }
        //单一产品数据请求=============================================================start
        // let url ="/product_web/product-api/getProductList"//获取产品数据
        let url = '/product-api/getProductList';//获取产品数据
        // let url = '/service/webbuilder-api/serviceNote/getNewServiceList';//获取服务数据
        if(url.indexOf('product') > -1){
            this.dataSource='productData'//数据来源类型，分产品(productData)和服务(serviceData)
        }else if(url.indexOf('service') > -1){
            this.dataSource='serviceData'//数据来源类型，分产品(productData)和服务(serviceData)
        }
        let data={};
        let that = this
        this.$axios.post(url,{},
            {
            headers: {
                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                "X-Requested-With": "XMLHttpRequest"
            }}).then(function(response){
                let result = response.data.data;
                let newArr=[]
                result.forEach((element,index)=>{
                    if(element.childItem && (element.childItem.length > 0)){
                    // if(element.childItem.length != 0){
                        // newArr.push(...element.childItem)
                    }else{
                        newArr.push(element)
                    }
                })
                newArr.forEach((element,index)=>{
                        let re
                        // if(that.settingData.productLayout == 1){
                        //     re = newArr[that.settingData.productLayout-1]
                        // }else if(that.settingData.productLayout == 2){
                        //     re = newArr[that.settingData.productLayout-1]
                        // }else if(that.settingData.productLayout == 3){
                        //     re = newArr[that.settingData.productLayout-1]
                        // }else if(that.settingData.productLayout == 4){
                        //     re = newArr[that.settingData.productLayout-1]
                        // }
                        re = newArr[0]
                        // that.dataSource='productData'//数据来源类型，分产品(productData)和服务(serviceData)
                        that.settingData.productImg = re.mainImage
                        that.settingData.productName = re.name
                        that.settingData.productBanner = re.advertisementText
                        that.settingData.productHref = re.url
                        that.settingData.productId = re.id
                        that.settingData.productPrice = re.priceStr
                        that.settingData.productSku = re.productSku
        
                        that.oldProductIfo.productImg = re.mainImage
                        that.oldProductIfo.productName = re.name
                        that.oldProductIfo.productBanner = re.advertisementText
                        that.oldProductIfo.productHref = re.url
                        that.oldProductIfo.productId = re.id
                        that.oldProductIfo.productPrice = re.priceStr
                        that.oldProductIfo.productSku = re.productSku

                        that.prodcutList[0].fId = re.id
                        that.prodcutList[0].fTitle = re.name
                        that.prodcutList[0].productImg = re.mainImage ? re.mainImage : re.image

                        that.oldbtT = parseFloat(that.settingData.btnmarginTop.value)
                        that.oldretailB = parseFloat(that.settingData.retailmarginBottom.value)
                        
                    // }
                })
            }).catch( function(response) {
                // 这里是处理错误的回调
                console.log('数据请求失败',response)
        });
        //单一产品数据请求=============================================================end

        // this.oldSettingData = Object.assign({},this.settingData)
      },
      mounted(){
          this.settingData.font3.value.productName = this.settingData.productName
        //   this.$store.state.pane.isRenderSelect && this.$store.commit("changeSelectList",this)
        if(!this.isComputer && this.settingData.mobileComIsHide){
            this.pattern = []
            zmEditor.$children[0].isCtrlShow = false //编辑框隐藏;
          }else{
          }
        if(this.$store.state.pane.isRenderSelect){
            this.$store.commit("changeSelectList",this)
        }else{
            this.id == this.$store.state.component.oldComID && this.$store.commit("changeSelectList",this)
        }
      }
}