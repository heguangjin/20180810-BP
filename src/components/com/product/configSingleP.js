export default {
  computed: {
      setData(){
        if(this.settingData.productLayout == 1 || this.settingData.productLayout == 2){
            this.isHideLevel = true
        }else if(this.settingData.productLayout == 3 || this.settingData.productLayout == 4){
            this.isHideLevel = false
        }
        return {
            type: 'tabs',
            props: [
                {
                title: '布局',
                type: 'sets',
                props: [
                    {
                        type: '/set/sliders.vue',
                        props: {
                            title: '背景颜色',
                            attr: 'backgroundColor',
                            param: 'color',
                            minVal: 0,
                            maxVal: 100,
                            value:this.settingData.backgroundColor.value,
                            decimalNum: 0,
                        }
                    },
                    {
                        type: '/set/productLayout01.vue',
                        props: {
                            value:this.settingData.layOutIndex,
                            attr:'layOutIndex',
                            callback:this.cb1
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
                        type: '/set/switch/setDetails.vue',
                        props: {
                            title:'图片显示效果',
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
                            ],
                            callback: this.imgFloatE
                        }
                    },
                ]
                },
                {
                    title: '商品',
                    type: 'sets',
                    isScroll: false,
                    props:[
                        {
                            type:'/set/productSL/setBlog.vue',
                            props:this.prodcutList

                        }
                    ]
                    // props:[
                    //     {
                    //         type:'/set/setVideo.vue',
                    //         callback:function(params,a){
                    //             this.videoList = a
                    //             this.curSrc = params[0].fUrl
                    //             this.curPoster = params[0].fScaleUrl
                    //         }.bind(this)
                    //     }
                    // ]
                },
                {
                title: '文字',
                type: 'level',
                props:[
                    {
                        title: '商品名称',
                        type: 'sets',
                        props:[
                            {
                                type: '/set/setMyFont/setFont2.vue',
                                props: {
                                    // title: '文字设置',
                                    attr: 'font3',
                                    attr2:'productName',
                                    style:{
                                        input:1,
                                        maxlength:40,
                                        inputText:this.settingData.productName,
                                        placeholder:'输入要显示的内容',
                                        'fontFamily':this.settingData.font3.value.fontFamily,
                                        'fontSize':this.settingData.font3.value.fontSize,
                                        'color':'rgba(255,255,255,1)',
                                        'fontWeight':this.settingData.font3.value.fontWeight,
                                        'fontStyle':this.settingData.font3.value.fontStyle,
                                        callBack1:function(v){
                                            this.settingData.font3.value.fontFamily = v
                                         
                                        }.bind(this),
                                        callBack2:function(v){
                                            this.settingData.font3.value.fontSize = v
                                        
                                        }.bind(this),
                                        callBack3:function(v){
                                            this.settingData.font3.value.color = v
                                         
                                        }.bind(this),
                                        callBack4:function(v){
                                            this.settingData.font3.value.fontWeight = v
                                        
                                        }.bind(this),
                                        callBack5:function(v){
                                            this.settingData.font3.value.fontStyle = v
                                        
                                        }.bind(this),
                                    }
                                },
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '上部高度(px)',
                                    attr: 'TitmarginTop',
                                    param:'size',
                                    minVal:0,
                                    maxVal:20,
                                    value: this.settingData.TitmarginTop.value,
                                    decimalNum: 0,
                                }
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '行高(倍)',
                                    attr: 'lineHeight',
                                    param:'number',
                                    minVal:0.1,
                                    maxVal:2,
                                    value: this.settingData.lineHeight.value,
                                    decimalNum: 1,
                                    callback:this.lineH
                                }
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '下部高度(px)',
                                    attr: 'marginBottom',
                                    param:'size',
                                    minVal:0,
                                    maxVal:20,
                                    value: this.settingData.marginBottom.value,
                                    decimalNum: 0,
                                }
                            },
                            {
                                type: '/set/setTextLayout.vue',
                                props:{
                                    title:'文字布局',
                                    style:{
                                        textAlign:'left',
                                        callBack:function(a){
                                     
                                        this.settingData.tit = a
                                        }.bind(this)
                                    }
                                }
                            },
                            {
                                type: '/set/sliders.vue',
                                props: {
                                    title: '边距缩进(px)',
                                    attr: 'TitTextIndent',
                                    param:'size',
                                    minVal:0,
                                    maxVal:20,
                                    value: this.settingData.TitTextIndent.value,
                                    decimalNum: 0,
                                    callback:this.textIndentF2
                                }
                            },
                        ]
                    },
                    {
                        title: '广告语',
                        type: 'sets',
                        props:[
                            
                            {
                                // type: '/set/complexSwitch.vue',
                                type: "/set/switch/setWarp.vue",
                                props: {
                                    // title: '显示广告语',
                                    // value: this.settingData.bannerSwitchShow.value,
                                    // callback:function(v){
                                    //     this.settingData.bannerSwitchShow.value = v
                                    // }.bind(this),

                                    onOffBut: [{
                                        type: "/set/switch/switch.vue",
                                        props: {
                                            title: "显示广告语",
                                            attr: "bannerSwitchShow",
                                            value: this.settingData
                                                .bannerSwitchShow
                                                .value
                                        }
                                    }],
                                    sonType:[
                                        {
                                            type: '/set/setMyFont/setFont2.vue',
                                            props: {
                                                title: '文字设置',
                                                attr: 'bannerfont3',
                                                attr2: 'productBanner',
                                                style:{
                                                    input:1,
                                                    maxlength:40,
                                                    inputText:this.settingData.productBanner,
                                                    placeholder:'输入要显示的内容',
                                                    'fontFamily':this.settingData.bannerfont3.value.fontFamily,
                                                    'fontSize':this.settingData.bannerfont3.value.fontSize,
                                                    'color':'rgba(255,255,255,1)',
                                                    'fontWeight':this.settingData.bannerfont3.value.fontWeight,
                                                    'fontStyle':this.settingData.bannerfont3.value.fontStyle,
                                                    callBack1:function(v){
                                                        this.settingData.bannerfont3.value.fontFamily = v
                                                    
                                                    }.bind(this),
                                                    callBack2:function(v){
                                                        this.settingData.bannerfont3.value.fontSize = v
                                                     
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
                                                title: '上部高度(px)',
                                                attr: 'bannerTitmarginTop',
                                                param:'size',
                                                minVal:0,
                                                maxVal:20,
                                                value: this.settingData.bannerTitmarginTop.value,
                                                decimalNum: 0,
                                            }
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '行高(倍)',
                                                attr: 'bannerlineHeight',
                                                param:'number',
                                                minVal:0.1,
                                                maxVal:2,
                                                value: this.settingData.bannerlineHeight.value,
                                                decimalNum: 1,
                                                callback:this.lineH2
                                            }
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '下部高度(px)',
                                                attr: 'bannermarginBottom',
                                                param:'size',
                                                minVal:0,
                                                maxVal:20,
                                                value: this.settingData.bannermarginBottom.value,
                                                decimalNum: 0,
                                            }
                                        },
                                        {
                                            type: '/set/setTextLayout.vue',
                                            props:{
                                                title:'文字布局',
                                                style:{
                                                    textAlign:'left',
                                                    callBack:function(a){
                                                    
                                                    this.settingData.bannertit = a
                                                    }.bind(this)
                                                }
                                            }
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '边距缩进(px)',
                                                attr: 'bannerTitTextIndent',
                                                param:'size',
                                                minVal:0,
                                                maxVal:20,
                                                value: this.settingData.bannerTitTextIndent.value,
                                                decimalNum: 0,
                                                callback:this.textIndentF3
                                            }
                                        },
                                    ]
                                }
                            },
                        ]
                    },
                    {
                        title: '分割线',
                        type: 'sets',
                        isHideLevel:this.isHideLevel,
                        props:[
                            {
                                type: "/set/switch/setWarp.vue",
                                props: {
                                        // title: '显示分割线',
                                        // value: this.settingData.DivisionSwitchShow.value,
                                        // callback:function(v){
                                        //     this.settingData.DivisionSwitchShow.value = v
                                        // }.bind(this),
                                        onOffBut: [{
                                            type: "/set/switch/switch.vue",
                                            props: {
                                                title: "显示分割线",
                                                attr: "DivisionSwitchShow",
                                                value: this.settingData.DivisionSwitchShow.value
                                            }
                                        }],
                                        sonType:[
                                            {
                                                type: '/set/sliders.vue',
                                                props: {
                                                    title: '线条长度(%)',
                                                    attr: 'lineWidth',
                                                    param:'number',
                                                    minVal:10,
                                                    maxVal:90,
                                                    value: this.settingData.lineWidth.value,
                                                    decimalNum: 0,
                                                }
                                            },
                                            {
                                                type: '/set/sliders.vue',
                                                props: {
                                                    title: '线条宽度(PX)',
                                                    attr: 'lineH',
                                                    param:'size',
                                                    minVal:0,
                                                    maxVal:5,
                                                    value: this.settingData.lineH.value,
                                                    decimalNum: 0,
                                                }
                                            },
                                            {
                                                type: '/set/sliders.vue',
                                                props: {
                                                    title: '线条颜色',
                                                    attr: 'lineBg',
                                                    param: 'color',
                                                    minVal: 0,
                                                    maxVal: 100,
                                                    value:this.settingData.lineBg.value,
                                                    decimalNum: 0,
                                                }
                                            },
                                        ]
                                    }
                            },
                        ]
                    },
                    {
                        title: '零售价',
                        type: 'sets',
                        props:[
                            {
                                type: "/set/switch/setWarp.vue",
                                props: {
                                    // title: '显示零售价',
                                    // value: this.settingData.retailSwitchShow.value,
                                    // callback:function(v){
                                    //     this.settingData.retailSwitchShow.value = v
                                    // }.bind(this),
                                    onOffBut: [{
                                        type: "/set/switch/switch.vue",
                                        props: {
                                            title: "显示零售价",
                                            attr: "retailSwitchShow",
                                            value: this.settingData.retailSwitchShow.value
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
                                                    'color':'rgba(255,255,255,1)',
                                                    'fontWeight':this.settingData.retailfont3.value.fontWeight,
                                                    'fontStyle':this.settingData.retailfont3.value.fontStyle,
                                                    callBack1:function(v){
                                                        this.settingData.retailfont3.value.fontFamily = v
                                                        
                                                    }.bind(this),
                                                    callBack2:function(v){
                                                        this.settingData.retailfont3.value.fontSize = v
                                                        
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
                                                callback:this.retailmarginF
                                            }
                                        },
                                        {
                                            type: '/set/setTextLayout.vue',
                                            props:{
                                                title:'文字布局',
                                                style:{
                                                    textAlign:this.settingData.retailtit,
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
                                                callback:this.textIndentF
                                            }
                                        },
                                    ]
                                }
                            },
                        ]
                    },
                    {
                        title: '按钮',
                        type: 'sets',
                        props:[
                            {
                                type: "/set/switch/setWarp.vue",
                                props: {
                                    // title: '显示按钮',
                                    // value: this.settingData.btnSwitchShow.value,
                                    // callback:function(v){
                                    //     this.settingData.btnSwitchShow.value = v
                                    // }.bind(this),
                                    onOffBut: [{
                                        type: "/set/switch/switch.vue",
                                        props: {
                                            title: "显示按钮",
                                            attr: "btnSwitchShow",
                                            value: this.settingData.btnSwitchShow.value
                                        }
                                    }],
                                    sonType:[
                                        {
                                            // type: '/set/setFont/setFont.vue',
                                            type: '/set/setMyFont/setFont2.vue',
                                            props: {
                                                // title: '文字设置',
                                                attr: 'btnfont3',
                                                attr2:'btnText',
                                                style:{
                                                    input:1,
                                                    maxlength:20,
                                                    inputText:this.settingData.btnText,
                                                    placeholder:'输入要显示的内容',
                                                    'fontFamily':this.settingData.btnfont3.value.fontFamily,
                                                    'fontSize':this.settingData.btnfont3.value.fontSize,
                                                    'color':'rgba(255,255,255,1)',
                                                    'fontWeight':this.settingData.btnfont3.value.fontWeight,
                                                    'fontStyle':this.settingData.btnfont3.value.fontStyle,
                                                    callBack1:function(v){
                                                        this.settingData.btnfont3.value.fontFamily = v
                                                    
                                                    }.bind(this),
                                                    callBack2:function(v){
                                                        this.settingData.btnfont3.value.fontSize = v
                                                       
                                                    }.bind(this),
                                                    callBack3:function(v){
                                                        this.settingData.btnfont3.value.color = v
                                                       
                                                    }.bind(this),
                                                    callBack4:function(v){
                                                        this.settingData.btnfont3.value.fontWeight = v
                                                        
                                                    }.bind(this),
                                                    callBack5:function(v){
                                                        this.settingData.btnfont3.value.fontStyle = v
                                                        
                                                    }.bind(this),
                                                }
                                            },
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '按钮上部高度(px)',
                                                attr: 'btnmarginTop',
                                                param:'size',
                                                minVal:0,
                                                maxVal:20,
                                                value: this.settingData.btnmarginTop.value,
                                                decimalNum: 0,
                                                callback:this.btnmarginF
                                            }
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '按钮宽度(%)',
                                                attr: 'btnWidth',
                                                param:'number',
                                                minVal:40,
                                                maxVal:100,
                                                value: this.settingData.btnWidth.value,
                                                decimalNum: 0,
                                            }
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '按钮高度(px)',
                                                attr: 'btnheight',
                                                param:'size',
                                                minVal:16,
                                                maxVal:50,
                                                value: this.settingData.btnheight.value,
                                                decimalNum: 0,
                                            }
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '背景颜色',
                                                attr: 'btnBg',
                                                param: 'color',
                                                minVal: 0,
                                                maxVal: 100,
                                                value:this.settingData.btnBg.value,
                                                decimalNum: 0,
                                            }
                                        },
                                        {
                                            type: '/set/setTextLayout.vue',
                                            props:{
                                                title:'按钮布局',
                                                style:{
                                                    textAlign:this.settingData.btnPosition.value,
                                                    callBack:function(a){
                                                    
                                                    this.settingData.btnPosition.value = a
                                                    this.settingData.btnP.value = ''
                                                    if(a == 'center'){
                                                        this.settingData.btnPosition.value = ''
                                                        this.settingData.btnP.value = '0 auto'

                                                    }
                                                    // this.settingData.btnIndent.value = '0px'
                                                    }.bind(this)
                                                }
                                            }
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '边距缩进(px)',
                                                attr: 'btnIndent',
                                                param:'size',
                                                minVal:0,
                                                maxVal:20,
                                                value: this.settingData.btnIndent.value,
                                                decimalNum: 0,
                                                callback:this.textIndentF4
                                            }
                                        },
                                    ]
                                }
                            },
                        ]
                    },
                ]
                },
                {
                title: '阴影',
                type: 'sets',
                props:[
                    {
                        type: "/set/switch/setWarp.vue",
                        props: {
                            // title: '显示按钮',
                            // value: this.settingData.btnSwitchShow.value,
                            // callback:function(v){
                            //     this.settingData.btnSwitchShow.value = v
                            // }.bind(this),
                            onOffBut: [{
                                type: "/set/switch/switch.vue",
                                props: {
                                    title: "显示按钮",
                                    attr: "shadowSwitchShow",
                                    value: this.settingData.shadowSwitchShow.value
                                }
                            }],
                            sonType:[
                                {
                                    type: '/set/sliders.vue',
                                    props: {
                                        title: 'X轴偏移',
                                        attr: 'Xmove',
                                        param:'number',
                                        minVal:0,
                                        maxVal:5,
                                        value: this.settingData.Xmove.value,
                                        decimalNum: 0,
                                        callback:this.boxShadowX
                                    }
                                },
                                {
                                    type: '/set/sliders.vue',
                                    props: {
                                        title: 'Y轴偏移',
                                        attr: 'Ymove',
                                        param:'number',
                                        minVal:0,
                                        maxVal:5,
                                        value: this.settingData.Ymove.value,
                                        decimalNum: 0,
                                        callback:this.boxShadowY
                                    }
                                },
                                {
                                    type: '/set/sliders.vue',
                                    props: {
                                        title: '模糊',
                                        attr: 'shadowblur',
                                        param:'number',
                                        minVal:0,
                                        maxVal:5,
                                        value: this.settingData.shadowblur.value,
                                        decimalNum: 0,
                                        callback:this.boxShadowB
                                    }
                                },
                                {
                                    type: '/set/sliders.vue',
                                    props: {
                                        title: '背景颜色',
                                        attr: 'shadowBg',
                                        param: 'color',
                                        minVal: 0,
                                        maxVal: 100,
                                        value:this.settingData.shadowBg.value,
                                        decimalNum: 0,
                                        callback:this.boxShadowBG
                                    }
                                },
                            ]
                        }
                    }
                ]
            },
          ]
         }
      },
      mobileSetData() {//移动端设置项
        return {
            type: "sets",
            props: [

                {
                    type: '/set/switch/switch.vue',
                    props: {
                        title: "显示广告语",
                        attr: "bannerSwitchShowM",
                        value: this.settingData.bannerSwitchShowM.value,
                    }
                },
                {
                    type: '/set/switch/switch.vue',
                    props: {
                        title: "显示分割线",
                        attr: "DivisionSwitchShowM",
                        value: this.settingData.DivisionSwitchShowM.value,
                    }
                },
                {
                    type: '/set/switch/switch.vue',
                    props: {
                        title: '显示零售价',
                        attr: "retailSwitchShowM",
                        value: this.settingData.retailSwitchShowM.value,
                    }
                },
                {
                    type: '/set/switch/switch.vue',
                    props: {
                        title: '显示按钮',
                        attr: "btnSwitchShowM",
                        value: this.settingData.btnSwitchShowM.value,
                    }
                }

            ]
        }
      },
    }
}