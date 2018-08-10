export default {
    computed: {
        setData(){
            return {
                type: 'tabs',
                props: [
                    {
                        title: '布局',
                        type: 'level',
                        props: [
                            {
                                title: '常规布局',
                                type: 'sets',
                                props:[
                                    {
                                        type: '/set/switch/switch.vue',
                                        props: {
                                            title: '全屏宽度',
                                            attr:'fullWidth',
                                            value:this.settingData.fullWidth.value,
                                            callback:this.fullScreen
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '列数',
                                            attr: 'ProductViewCarousel',
                                            param: 'number',
                                            minVal: 1,
                                            maxVal: 12,
                                            value:this.settingData.ProductViewCarousel.num,
                                            decimalNum: 0,
                                            callback:this.numberOfColumns
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '列间距(px)',
                                            attr: 'ProductViewCarousel',
                                            param: 'number',
                                            minVal: 1,
                                            maxVal: 20,
                                            value:this.settingData.ProductViewCarousel.liMarginLeft,
                                            decimalNum: 0,
                                            callback:this.liMarginLeftF
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '顶部间距(px)',
                                            attr: 'productCarousel',
                                            param: 'number',
                                            minVal: 0,
                                            maxVal: 20,
                                            value:this.settingData.productCarousel.paddingTop,
                                            decimalNum: 0,
                                            callback:this.paddingTopF
                                        }
                                    },
                                    {
                                        type: '/set/switch/pictrue.vue',
                                        props: {
                                            title:'图片宽高比例',
                                            attr: "pictureScale",
                                            value: this.settingData.pictureScale.row,
                                            label:[
                                                {
                                                    row:16,
                                                    col:9
                                                },
                                                {
                                                    row:3,
                                                    col:2
                                                },
                                                {
                                                    row:4,
                                                    col:3
                                                },
                                                {
                                                    row:1,
                                                    col:1
                                                },
                                                {
                                                    row:3,
                                                    col:4
                                                },
                                            ],
                                            callback: this.pictureHeight
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '背景颜色',
                                            attr: 'productCarousel',
                                            param: 'color',
                                            minVal: 0,
                                            maxVal: 100,
                                            value:this.settingData.productCarousel.value,
                                            decimalNum: 0,
                                            // callback:()=>{
                                            //     console.log('mdf')
                                            // }
                                        }
                                    },

                                ]
                            },
                            {
                                title:'图片设置',
                                type: 'level',
                                props:[
                                    {
                                        type: '/set/switch/setDetails.vue',
                                        props: {
                                            title:'显示效果',
                                            attr: "blogDetails",
                                            value:this.settingData.blogDetails.value.text,
                                            label:[
                                                {
                                                    name: "填充",
                                                    type: ""
                                                },
                                                {
                                                    name: "自适应",
                                                    type: ""
                                                },
                                            ],
                                            callback: this.bgImgCb
                                        }
                                    },
                                    {
                                        type: '/set/switch/setDetails.vue',
                                        props: {
                                            title:'图片悬浮效果',
                                            attr: "imgFloat",
                                            value:this.settingData.imgFloat.value.text,
                                            label:[
                                                {
                                                    name: "无效果",
                                                    type: ""
                                                },
                                                {
                                                    name: "放大",
                                                    type: ""
                                                },
                                                {
                                                    name: "左移",
                                                    type: ""
                                                },
                                                {
                                                    name: "上移",
                                                    type: ""
                                                },
                                                {
                                                    name: "虚化",
                                                    type: ""
                                                },
                                                {
                                                    name: "覆盖颜色",
                                                    type: ""
                                                },
                                            ],
                                            callback: this.imgFloatE
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            isShowSet: this.settingData.carouselVien.isShowSet, //默认隐藏该设置项;
                                            title: '光标悬浮遮罩颜色',
                                            attr: 'carouselVien',
                                            param: 'color',
                                            minVal: 0,
                                            maxVal: 80,
                                            value:this.settingData.carouselVien.value,
                                            decimalNum: 0,
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '边框颜色',
                                            attr: 'borderColor',
                                            param: 'color',
                                            minVal: 0,
                                            maxVal: 100,
                                            value:this.settingData.borderColor.value,
                                            decimalNum: 0,
                                            callback:this.borderColorF
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '边宽宽度(px)',
                                            attr: 'borderW',
                                            param: 'size',
                                            minVal: 0,
                                            maxVal: 5,
                                            value:this.settingData.borderW.value,
                                            decimalNum: 0,
                                            callback:this.borderWF
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: '翻页控件',
                        type: 'sets',
                        props: [
                            {
                                type: '/set/productSL/scale.vue',
                                // type: '/set/video/scale.vue',
                                props: {
                                    attr: 'ctrlStyle',
                                    title: "控件样式",
                                    curRatio: this.settingData.ctrlStyle.title,
                                    curIcon: this.settingData.ctrlStyle.left,
                                    list: [
                                        {
                                            left: "icon-danxianjiantou",
                                            right: "icon-danxianjiantou-copy",
                                            title: '单线箭头',
                                        },
                                        {
                                            left: "icon-shuangxianjiantou-copy-copy", 
                                            right: "icon-shuangxianjiantou-copy",
                                            title: '双线箭头',
                                        },
                                        {
                                            left: "icon-longArrow", 
                                            right: "icon-longArrow-copy",
                                            title: '长箭头',
                                        },
                                        {
                                            left: "icon-triangle-left", 
                                            right: "icon-triangle-right",
                                            title: '三角箭头',
                                        },
                                    ],
                                    height:2,
                                    icon:1,
                                    callBack:this.arrowStyleF
                                },
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '控件宽度(px)',
                                    attr: 'carouselArrow',
                                    param: 'number',
                                    minVal: 0,
                                    maxVal: 30,
                                    value:this.settingData.carouselArrow.width,
                                    decimalNum: 0,
                                    callback:this.arrowWidthF
                                }
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '箭头颜色',
                                    attr: 'arrowColor',
                                    param: 'color',
                                    minVal: 0,
                                    maxVal: 100,
                                    value:this.settingData.arrowColor.value,
                                    decimalNum: 0,
                                }
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '背景颜色',
                                    attr: 'carouselArrowbg',
                                    param: 'color',
                                    minVal: 0,
                                    maxVal: 100,
                                    // value:this.settingData.carouselArrow.value,
                                    value:this.settingData.carouselArrowbg.value,
                                    decimalNum: 0,
                                    callback:(v)=>{
                                        // this.settingData.oldArrowBg = this.settingData.carouselArrow.value
                                    }
                                }
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '光标悬浮箭头颜色',
                                    attr: 'arrowHoverColor',
                                    param: 'color',
                                    minVal: 0,
                                    maxVal: 100,
                                    value:this.settingData.arrowHoverColor.value,
                                    decimalNum: 0,
                                }
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '光标悬浮背景颜色',
                                    attr: 'arrowBtnHC',
                                    param: 'color',
                                    minVal: 0,
                                    maxVal: 100,
                                    value:this.settingData.arrowBtnHC.value,
                                    decimalNum: 0,
                                }
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '边距缩进(px)',
                                    attr: 'BtnTextIndent',
                                    param:'number',
                                    minVal:-30,
                                    maxVal:30,
                                    value: this.settingData.BtnTextIndent.value,
                                    decimalNum: 0,
                                    callback:this.BtnTextIndentF
                                }
                            },
                        ]
                    },
                    {
                        title: '文字',
                        type: 'level',
                        props: [
                            {
                                title: '商品名称',
                                type: 'sets',
                                props:[
                                    {
                                        type: '/set/setMyFont/setFont2.vue',
                                        props: {
                                            title: '文字设置',
                                            attr: 'bannerfont3',
                                            // attr2: 'productBanner',
                                            style:{
                                                // input:1,
                                                // maxlength:40,
                                                // inputText:this.settingData.productBanner,
                                                // placeholder:'输入要显示的内容',
                                                'fontFamily':this.settingData.bannerfont3.value.fontFamily,
                                                'fontSize':this.settingData.bannerfont3.value.fontSize,
                                                'color':'rgb(255,255,255)',
                                                'fontWeight':this.settingData.bannerfont3.value.fontWeight,
                                                'fontStyle':this.settingData.bannerfont3.value.fontStyle,
                                                callBack1:function(v){
                                                    this.settingData.bannerfont3.value.fontFamily = v
                                                
                                                }.bind(this),
                                                callBack2:function(v){
                                                    this.settingData.bannerfont3.value.fontSize = v
                                                    setTimeout(()=>{
                                                        this.settingData.carouselHitleH = parseFloat(this.settingData.bannerfont3.value.fontSize)*parseFloat(this.settingData.NamelineHeight.value)*parseFloat(this.settingData.textRowNum)
                                                        this.ComponentsOfCalculated()
                                                        let mainH = this.settingData.ProductViewCarousel.imgHeight + $(this.$refs.textHeight).height() + this.settingData.productCarousel.paddingTop+this.settingData.productCarousel.paddingBottom
                                                        this.style.height = mainH
                                                        this.settingData.ProductViewCarousel.translateX = 0
                                                        this.settingData.ProductViewCarousel.moveLeftNum = 0
                                                    },20)
                                                    this.pointCallBack(3)

                                                }.bind(this),
                                                callBack3:function(v){
                                                    this.settingData.bannerfont3.value.color = v
                                                
                                                }.bind(this),
                                                callBack4:function(v){
                                                    this.settingData.bannerfont3.value.fontWeight = v
                                                
                                                }.bind(this),
                                                callBack5:function(v){
                                                    this.settingData.bannerfont3.value.fontStyle = v
                                                
                                                }.bind(this),
                                            }
                                        },
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '文字颜色悬浮效果',
                                            attr: 'NameHoverColor',
                                            param: 'color',
                                            minVal: 0,
                                            maxVal: 100,
                                            value:this.settingData.NameHoverColor.value,
                                            decimalNum: 0,
                                        }
                                    },
                                    {
                                        type: '/set/switch/setDetails.vue',
                                        props: {
                                            title:'显示效果',
                                            attr: "textRow",
                                            value:this.settingData.textRow.value.text,
                                            label:[
                                                {
                                                    name: "单行文本",
                                                    type: ""
                                                },
                                                {
                                                    name: "两行文本",
                                                    type: ""
                                                },
                                            ],
                                            callback: this.textRowF
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '上部高度(px)',
                                            attr: 'carouselTitlePT',
                                            param:'size',
                                            minVal:0,
                                            maxVal:20,
                                            value: this.settingData.carouselTitlePT.value,
                                            decimalNum: 0,
                                            callback:()=>{
                                                setTimeout(()=>{
                                                    this.ComponentsOfCalculated()
                                                },20)
                                            }
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '行高(倍)',
                                            attr: 'NamelineHeight',
                                            param:'number',
                                            minVal:0.1,
                                            maxVal:2,
                                            value: this.settingData.NamelineHeight.value,
                                            decimalNum: 1,
                                            callback:this.nameLineH,
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '下部高度(px)',
                                            attr: 'carouselTitlePB',
                                            param:'size',
                                            minVal:0,
                                            maxVal:20,
                                            value: this.settingData.carouselTitlePB.value,
                                            decimalNum: 0,
                                            callback:()=>{this.ComponentsOfCalculated()}
                                        }
                                    },
                                    {
                                        type: '/set/setTextLayout.vue',
                                        props:{
                                            title:'文字布局',
                                            style:{
                                                textAlign:'left',
                                                callBack:function(a){
                                                
                                                this.settingData.carouselTitAlign = a
                                                }.bind(this)
                                            }
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '边距缩进(px)',
                                            attr: 'carouselTitleT',
                                            param:'size',
                                            minVal:0,
                                            maxVal:20,
                                            value: this.settingData.carouselTitleT.value,
                                            decimalNum: 0,
                                            callback:()=>{this.ComponentsOfCalculated()}
                                        }
                                    },
                                ]
                            },
                            {
                                title: 'SKU',
                                type: 'sets',
                                props:[
                                    {
                                        type: "/set/switch/setWarp.vue",
                                        props: {
                                            onOffBut: [{
                                                type: "/set/switch/switch.vue",
                                                props: {
                                                    title: "显示SKU",
                                                    attr: "skuSwitchShow",
                                                    value: this.settingData.skuSwitchShow.value,
                                                    callback:()=>{
                                                        setTimeout(()=>{
                                                            this.ComponentsOfCalculated()
                                                        },20)
                                                    }
                                                }
                                            }],
                                            sonType:[
                                                {
                                                    // type: '/set/setFont/setFont.vue',
                                                    type: '/set/setMyFont/setFont2.vue',
                                                    props: {
                                                        // title: '文字设置',
                                                        attr: 'skufont3',
                                                        style:{
                                                            'fontFamily':this.settingData.skufont3.value.fontFamily,
                                                            'fontSize':this.settingData.skufont3.value.fontSize,
                                                            'color':'rgb(255,255,255)',
                                                            'fontWeight':this.settingData.skufont3.value.fontWeight,
                                                            'fontStyle':this.settingData.skufont3.value.fontStyle,
                                                            callBack1:function(v){
                                                                this.settingData.skufont3.value.fontFamily = v
                                                                
                                                            }.bind(this),
                                                            callBack2:function(v){
                                                                this.settingData.skufont3.value.fontSize = v
                                                                this.ComponentsOfCalculated()
                                                                this.settingData.ProductViewCarousel.translateX = 0
                                                                this.settingData.ProductViewCarousel.moveLeftNum = 0
                                                                this.pointCallBack(3)
                                                                
                                                            }.bind(this),
                                                            callBack3:function(v){
                                                                this.settingData.skufont3.value.color = v
                                                                
                                                            }.bind(this),
                                                            callBack4:function(v){
                                                                this.settingData.skufont3.value.fontWeight = v
                                                                
                                                            }.bind(this),
                                                            callBack5:function(v){
                                                                this.settingData.skufont3.value.fontStyle = v
                                                              
                                                            }.bind(this),
                                                        }
                                                    },
                                                },
                                                {
                                                    type: '/set/sliders.vue',
                                                    props: {
                                                        title: '上部高度(px)',
                                                        attr: 'skuTitmarginTop',
                                                        param:'size',
                                                        minVal:0,
                                                        maxVal:20,
                                                        value: this.settingData.skuTitmarginTop.value,
                                                        decimalNum: 0,
                                                        callback:()=>{this.ComponentsOfCalculated()}
                                                    }
                                                },
                                                {
                                                    type: '/set/sliders.vue',
                                                    props: {
                                                        title: '下部高度(px)',
                                                        attr: 'skumarginBottom',
                                                        param:'size',
                                                        minVal:0,
                                                        maxVal:20,
                                                        value: this.settingData.skumarginBottom.value,
                                                        decimalNum: 0,
                                                        callback:()=>{this.ComponentsOfCalculated()}
                                                    }
                                                },
                                                {
                                                    type: '/set/setTextLayout.vue',
                                                    props:{
                                                        title:'文字布局',
                                                        style:{
                                                            textAlign:'left',
                                                            callBack:function(a){
                                                            
                                                            this.settingData.skutit = a
                                                            }.bind(this)
                                                        }
                                                    }
                                                },
                                                {
                                                    type: '/set/sliders.vue',
                                                    props: {
                                                        title: '边距缩进(px)',
                                                        attr: 'skuTitTextIndent',
                                                        param:'size',
                                                        minVal:0,
                                                        maxVal:20,
                                                        value: this.settingData.skuTitTextIndent.value,
                                                        decimalNum: 0,
                                                        callback:this.textIndentF
                                                    }
                                                },
                                            ]
                                        }
                                    },
                                ]
                            },
                            {
                                title: '零售价格',
                                type: 'sets',
                                props:[
                                    {
                                        type: "/set/switch/setWarp.vue",
                                        props: {
                                            onOffBut: [{
                                                type: "/set/switch/switch.vue",
                                                props: {
                                                    title: "显示零售价",
                                                    attr: "retailSwitchShow",
                                                    value: this.settingData.retailSwitchShow.value,
                                                    callback:()=>{
                                                        setTimeout(()=>{
                                                            this.ComponentsOfCalculated()
                                                        },20)
                                                    }
                                                }
                                            }],
                                            sonType:[
                                                {
                                                    // type: '/set/setFont/setFont.vue',
                                                    type: '/set/setMyFont/setFont2.vue',
                                                    props: {
                                                        // title: '文字设置',
                                                        attr: 'retailfont3',
                                                        style:{
                                                            'fontFamily':this.settingData.retailfont3.value.fontFamily,
                                                            'fontSize':this.settingData.retailfont3.value.fontSize,
                                                            'color':'rgb(255,0,0)',
                                                            'fontWeight':this.settingData.retailfont3.value.fontWeight,
                                                            'fontStyle':this.settingData.retailfont3.value.fontStyle,
                                                            callBack1:function(v){
                                                                this.settingData.retailfont3.value.fontFamily = v
                                                                
                                                            }.bind(this),
                                                            callBack2:function(v){
                                                                this.settingData.retailfont3.value.fontSize = v
                                                                this.ComponentsOfCalculated()
                                                                this.settingData.ProductViewCarousel.translateX = 0
                                                                this.settingData.ProductViewCarousel.moveLeftNum = 0
                                                                this.pointCallBack(3)
                                                                
                                                            }.bind(this),
                                                            callBack3:function(v){
                                                                this.settingData.retailfont3.value.color = v
                                                                
                                                            }.bind(this),
                                                            callBack4:function(v){
                                                                this.settingData.retailfont3.value.fontWeight = v
                                                                
                                                            }.bind(this),
                                                            callBack5:function(v){
                                                                this.settingData.retailfont3.value.fontStyle = v
                                                              
                                                            }.bind(this),
                                                        }
                                                    },
                                                },
                                                {
                                                    type: '/set/sliders.vue',
                                                    props: {
                                                        title: '上部高度(px)',
                                                        attr: 'retailTitmarginTop',
                                                        param:'size',
                                                        minVal:0,
                                                        maxVal:20,
                                                        value: this.settingData.retailTitmarginTop.value,
                                                        decimalNum: 0,
                                                        callback:()=>{this.ComponentsOfCalculated()}
                                                    }
                                                },
                                                {
                                                    type: '/set/sliders.vue',
                                                    props: {
                                                        title: '下部高度(px)',
                                                        attr: 'retailmarginBottom',
                                                        param:'size',
                                                        minVal:0,
                                                        maxVal:20,
                                                        value: this.settingData.retailmarginBottom.value,
                                                        decimalNum: 0,
                                                        callback:()=>{this.ComponentsOfCalculated()}
                                                    }
                                                },
                                                {
                                                    type: '/set/setTextLayout.vue',
                                                    props:{
                                                        title:'文字布局',
                                                        style:{
                                                            textAlign:'left',
                                                            callBack:function(a){
                                                            this.settingData.retailtit = a
                                                            }.bind(this)
                                                        }
                                                    }
                                                },
                                                {
                                                    type: '/set/sliders.vue',
                                                    props: {
                                                        title: '边距缩进(px)',
                                                        attr: 'retailTitTextIndent',
                                                        param:'size',
                                                        minVal:0,
                                                        maxVal:20,
                                                        value: this.settingData.retailTitTextIndent.value,
                                                        decimalNum: 0,
                                                        callback:this.textIndentF2
                                                    }
                                                },
                                            ]
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    // {
                    //     title: '阴影',
                    //     type: 'sets',
                    //     props: [
                    //         {
                    //             type: "/set/switch/setWarp.vue",
                    //             props: {
                    //                 // title: '显示按钮',
                    //                 // value: this.settingData.btnSwitchShow.value,
                    //                 // callback:function(v){
                    //                 //     this.settingData.btnSwitchShow.value = v
                    //                 // }.bind(this),
                    //                 onOffBut: [{
                    //                     type: "/set/switch/switch.vue",
                    //                     props: {
                    //                         title: "阴影",
                    //                         attr: "shadowShow",
                    //                         value: this.settingData.shadowShow.value
                    //                     }
                    //                 }],
                    //                 sonType:[
                    //                     {
                    //                         type: '/set/sliders.vue',
                    //                         props: {
                    //                             title: 'X轴偏移',
                    //                             attr: 'Xmove',
                    //                             param:'number',
                    //                             minVal:0,
                    //                             maxVal:5,
                    //                             value: this.settingData.Xmove.value,
                    //                             decimalNum: 0,
                    //                             callback:this.boxShadowX
                    //                         }
                    //                     },
                    //                     {
                    //                         type: '/set/sliders.vue',
                    //                         props: {
                    //                             title: 'Y轴偏移',
                    //                             attr: 'Ymove',
                    //                             param:'number',
                    //                             minVal:0,
                    //                             maxVal:5,
                    //                             value: this.settingData.Ymove.value,
                    //                             decimalNum: 0,
                    //                             callback:this.boxShadowY
                    //                         }
                    //                     },
                    //                     {
                    //                         type: '/set/sliders.vue',
                    //                         props: {
                    //                             title: '模糊',
                    //                             attr: 'blur',
                    //                             param:'number',
                    //                             minVal:0,
                    //                             maxVal:5,
                    //                             value: this.settingData.blur.value,
                    //                             decimalNum: 0,
                    //                             callback:this.boxShadowB
                    //                         }
                    //                     },
                    //                     {
                    //                         type: '/set/sliders.vue',
                    //                         props: {
                    //                             title: '阴影颜色',
                    //                             attr: 'shadowBg',
                    //                             param: 'color',
                    //                             minVal: 0,
                    //                             maxVal: 100,
                    //                             value:this.settingData.shadowBg.value,
                    //                             decimalNum: 0,
                    //                             callback:this.boxShadowBG
                    //                         }
                    //                     },
                    //                 ]
                    //             }
                    //         }
                    //     ]
                    // },

                ]
            }
        },
        mobileSetData() {//移动端设置项
            return {
                type: "sets",
                props: [
                    {
                        type: '/set/sliders.vue',
                        props: {
                            title: '翻页箭头高度(px)',
                            attr: 'btnH',
                            param: 'number',
                            minVal: 0,
                            maxVal: 40,
                            value:this.settingData.btnH.value,
                            decimalNum: 0,
                        }
                    },
                    {
                        type: '/set/switch/switch.vue',
                        props: {
                            title: "显示SKU",
                            attr: "skuSwitchShowM",
                            value: this.settingData.skuSwitchShowM.value,
                            callback:()=>{this.ComponentsOfCalculatedM()}
                        }
                    },
                    {
                        type: '/set/switch/switch.vue',
                        props: {
                            title: '显示零售价',
                            attr: "retailSwitchShowM",
                            value: this.settingData.retailSwitchShowM.value,
                            callback:()=>{this.ComponentsOfCalculatedM()}
                        }
                    }

                ]
            }
        },
    }
}