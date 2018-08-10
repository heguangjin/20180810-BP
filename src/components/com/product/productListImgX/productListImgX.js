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
                                        type: "/set/switch/ranksNum.vue",
                                        props: {
                                            attr: "ranksNum",
                                            minVal: 1,
                                            maxVal: 4,
                                            callback: this.ranksNum
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '行间距(px)',
                                            attr: 'setLayout',
                                            param: 'number',
                                            minVal: 0,
                                            maxVal: 30,
                                            value:this.settingData.setLayout.lineSpace,
                                            decimalNum: 0,
                                            callback:this.lineSpaceF
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '列间距(px)',
                                            attr: 'setLayout',
                                            param: 'number',
                                            minVal: 0,
                                            maxVal: 30,
                                            value:this.settingData.setLayout.colSpace,
                                            decimalNum: 0,
                                            callback:this.colSpaceF
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '背景颜色',
                                            attr: 'bgColor',
                                            param: 'color',
                                            minVal: 0,
                                            maxVal: 100,
                                            value:this.settingData.bgColor.value,
                                            decimalNum: 0,
                                        }
                                    },
                                    {
                                        type: '/set/sliders.vue',
                                        props: {
                                            title: '图片宽度占比(%)',
                                            attr: 'setLayout',
                                            param: 'number',
                                            minVal: 30,
                                            maxVal: 70,
                                            value:this.settingData.setLayout.imgPer*100,
                                            decimalNum: 0,
                                            callback:this.imgPerF
                                        }
                                    },
                                    {
                                        type: '/set/switch/pictrue.vue',
                                        props: {
                                            title:'图片宽高比例',
                                            attr: "imgWHPer",
                                            value: this.settingData.imgWHPer.row,
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
                                ]
                            },
                            {
                                title: '图片设置',
                                type: 'sets',
                                props:[
                                    {
                                        type: '/set/productSList/imgPosition.vue',
                                        props:{
                                            title:"图片位置 :",
                                            attr:"imgPosition",
                                            imgPosition:this.settingData.imgPosition,
                                            callback:this.imgPositionF
                                        }
                                    },
                                    {
                                        type: '/set/switch/setDetails.vue',
                                        props: {
                                            title:'画面显示效果',
                                            attr: "productDetails",
                                            value:this.settingData.productDetails.value.text,
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
                                            title:'光标悬浮画面效果',
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
                                            isShowSet: this.settingData.imgLayout.isShowSet, //默认隐藏该设置项;
                                            title: '光标悬浮遮罩颜色',
                                            attr: 'imgLayout',
                                            param: 'color',
                                            minVal: 0,
                                            maxVal: 80,
                                            value:this.settingData.imgLayout.value,
                                            decimalNum: 0,
                                        }
                                    },
                                ]
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
                                            attr: 'font3',
                                            // attr2:'productName',
                                            style:{
                                                // input:1,
                                                // maxlength:40,
                                                // inputText:this.settingData.productName,
                                                // placeholder:'输入要显示的内容',
                                                'fontFamily':this.settingData.font3.value.fontFamily,
                                                'fontSize':this.settingData.font3.value.fontSize,
                                                'color':'rgba(0,0,0,1)',
                                                'fontWeight':this.settingData.font3.value.fontWeight,
                                                'fontStyle':this.settingData.font3.value.fontStyle,
                                                callBack1:function(v){
                                                    this.settingData.font3.value.fontFamily = v
                                                }.bind(this),
                                                callBack2:function(v){
                                                    this.settingData.font3.value.fontSize = v
                                                    this.calculateCom()
                                                
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
                                            title:'文本行数',
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
                                            attr: 'TitmarginTop',
                                            param:'size',
                                            minVal:0,
                                            maxVal:20,
                                            value: this.settingData.TitmarginTop.value,
                                            decimalNum: 0,
                                            callback:()=>{
                                                this.calculateCom()
                                            }
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
                                            callback:this.nameLineH
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
                                            callback:()=>{
                                                this.calculateCom()
                                            }
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
                                        type: "/set/switch/setWarp.vue",
                                        props: {
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
                                                        // attr: 'bannerfont3',
                                                        // attr2: 'productBanner',
                                                        style:{
                                                            // input:1,
                                                            // maxlength:40,
                                                            // inputText:this.settingData.productBanner,
                                                            // placeholder:'输入要显示的内容',
                                                            'fontFamily':this.settingData.bannerfont3.value.fontFamily,
                                                            'fontSize':this.settingData.bannerfont3.value.fontSize,
                                                            'color':'rgba(0,0,0,1)',
                                                            'fontWeight':this.settingData.bannerfont3.value.fontWeight,
                                                            'fontStyle':this.settingData.bannerfont3.value.fontStyle,
                                                            callBack1:function(v){
                                                                this.settingData.bannerfont3.value.fontFamily = v
                                                            
                                                            }.bind(this),
                                                            callBack2:function(v){
                                                                this.settingData.bannerfont3.value.fontSize = v
                                                                this.calculateCom()
                                                             
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
                                                        callback:()=>{
                                                            this.calculateCom()
                                                        }
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
                                                        callback:()=>{
                                                            this.calculateCom()
                                                        }
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
                                                            callback:()=>{
                                                                this.calculateCom()
                                                            }
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
                                                    value: this.settingData.retailSwitchShow.value
                                                }
                                            }],
                                            sonType:[
                                                {
                                                    // type: '/set/setFont/setFont.vue',
                                                    type: '/set/setMyFont/setFont2.vue',
                                                    props: {
                                                        title: '文字设置',
                                                        // attr: 'retailfont3',
                                                        style:{
                                                            'fontFamily':this.settingData.retailfont3.value.fontFamily,
                                                            'fontSize':this.settingData.retailfont3.value.fontSize,
                                                            'color':'#990000',
                                                            'fontWeight':this.settingData.retailfont3.value.fontWeight,
                                                            'fontStyle':this.settingData.retailfont3.value.fontStyle,
                                                            callBack1:function(v){
                                                                this.settingData.retailfont3.value.fontFamily = v
                                                                
                                                            }.bind(this),
                                                            callBack2:function(v){
                                                                this.settingData.retailfont3.value.fontSize = v
                                                                this.calculateCom()
                                                                
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
                                                        callback:()=>{
                                                            this.calculateCom()
                                                        }
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
                                                        callback:()=>{
                                                            this.calculateCom()
                                                        }
                                                    }
                                                },
                                                {
                                                    type: '/set/setTextLayout.vue',
                                                    props:{
                                                        title:'文字布局',
                                                        style:{
                                                            textAlign:'center',
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
                            {
                                title: '查看详情',
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
                                                        center:true,
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
                                                        },
                                                        callback:this.btnTF
                                                    },
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
                                                    type: '/set/sliders.vue',
                                                    props: {
                                                        title: '按钮上部高度(px)',
                                                        attr: 'btnmarginTop',
                                                        param:'size',
                                                        minVal:0,
                                                        maxVal:20,
                                                        value: this.settingData.btnmarginTop.value,
                                                        decimalNum: 0,
                                                        callback:()=>{
                                                            this.calculateCom()
                                                        }
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
                                                        callback:()=>{
                                                            this.calculateCom()
                                                        }
                                                    }
                                                },
                                                {
                                                    type: '/set/sliders.vue',
                                                    props: {
                                                        title: '按钮下部高度(px)',
                                                        attr: 'btnmarginBottom',
                                                        param:'size',
                                                        minVal:0,
                                                        maxVal:20,
                                                        value: this.settingData.btnmarginBottom.value,
                                                        decimalNum: 0,
                                                        callback:()=>{
                                                            this.calculateCom()
                                                        }
                                                    }
                                                },
                                                {
                                                    type: '/set/setTextLayout.vue',
                                                    props:{
                                                        title:'按钮布局',
                                                        style:{
                                                            textAlign:'right',
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
                        props: [
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
                                            title: "阴影",
                                            attr: "shadowShow",
                                            value: this.settingData.shadowShow.value
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
                                                attr: 'blur',
                                                param:'number',
                                                minVal:0,
                                                maxVal:5,
                                                value: this.settingData.blur.value,
                                                decimalNum: 0,
                                                callback:this.boxShadowB
                                            }
                                        },
                                        {
                                            type: '/set/sliders.vue',
                                            props: {
                                                title: '阴影颜色',
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
                        type: '/set/sliders.vue',
                        props: {
                            title: '列间距(px)',
                            attr: 'colSM',
                            param: 'number',
                            minVal: 0,
                            maxVal: 30,
                            value:this.settingData.colSM.value,
                            decimalNum: 0,
                            callback:this.colSpaceMF
                        }
                    },
                    {
                        type: '/set/sliders.vue',
                        props: {
                            title: '行间距(px)',
                            attr: 'rowSM',
                            param: 'number',
                            minVal: 0,
                            maxVal: 30,
                            value:this.settingData.rowSM.value,
                            decimalNum: 0,
                            callback:this.rowSpaceMF
                        }
                    },
                    {
                        type: '/set/switch/switch.vue',
                        props: {
                            title: "显示SKU",
                            attr: "skuSwitchShow",
                            value: this.settingData.skuSwitchShow.value,
                            callback:()=>{this.caculatedM()}
                        }
                    },
                    {
                        type: '/set/switch/switch.vue',
                        props: {
                            title: '显示零售价',
                            attr: "retailSwitchShowM",
                            value: this.settingData.retailSwitchShowM.value,
                            callback:()=>{this.caculatedM()}
                        }
                    },
                ]
            }
        },
    }
}