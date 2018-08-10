import {
    DH_CHECK_P_NOT_SAFE_PRIME
} from "constants";

export default {
    methods: {
        loadProduct() { //加载更多产品
            let num = parseInt(this.settingData.mobCont.value);
            num++;
            this.settingData.mobCont.value = num;
            if (this.settingData["proNum"].value <= this.lists.length) {
                this.settingData["proNum"].value = parseInt(this.settingData.mobOldNum.value) * num + 8;
                this.setMobListData();
            }
        },
        pagechangeA(val) {
            // 页码改变event ， p 为新的 current
            this.settingData.current = parseInt(val);
            this.settingData.showPage = parseInt(val);
        },
        pointCallBack(index) { //编辑框8个小点回调;
            if (this.isComputer) {
                if (index == 5) {
                    let comHeight = this.$el.firstChild.firstChild.offsetHeight;
                    let bot = parseInt(this.settingData.BoxMarginBottom.value);
                    let hotPage = null;
                    this.settingData.pageShow.value ? (hotPage = (25 + 58 + parseInt(this.settingData.pageMarginTop.value) + parseInt(this.settingData.pageMarginBottom.value))) - bot : hotPage = 0; //25==page内容高度;58==page上下边距;
                    if (this.style.height > comHeight + hotPage) {
                        let col = this.settingData.ranksNum.colsVal;
                        this.settingData.ranksNum.rowsVal = Math.floor((this.style.height + bot - hotPage) / (bot + comHeight));
                        this.settingData.proNum.value = this.settingData.ranksNum.rowsVal * col;
                    } else {
                        this.style.height = comHeight + hotPage
                    }
                }
            }
        },
        setListData() {
            setTimeout(() => {
                this.style.height = this.$el.firstChild.clientHeight;
            }, 200);
        },
        setMobListData() {
            setTimeout(() => {
                this.mobileStyle.height = this.$el.firstChild.clientHeight;
            }, 0);
        },
        fullScreenShow(val) {
            if (val) {
                this.style.width = zmEditor.$store.state.page.nowWinWidth;
                this.style.left = -(zmEditor.$store.state.page.marginLeft);
            } else {
                this.style.width = this.settingData.initWidth;
                this.style.left = this.settingData.initLeft;
            }
            // this.setListData();
        },
        fullpage(val) { //editor显示全屏方法;
            if (val) {
                this.style.width = zmEditor.$store.state.page.nowWinWidth;
                this.style.left = -(zmEditor.$store.state.page.marginLeft);
            } else {
                this.style.width = this.settingData.initWidth;
                this.style.left = this.settingData.initLeft;
            }
        },
        ranksNum(rows, cols) {
            this.settingData["ranksNum"].rowsVal = rows;
            this.settingData["ranksNum"].colsVal = cols;
            this.settingData["proNum"].value = parseInt(rows * cols);
            this.rearchData(rows, cols, "proNum");
            this.setListData();

        },
        rearchData(rows, cols, val) {
            let _left = parseInt(this.settingData.BoxMarginLeft.value); //BOX边距
            let _width = (
                (parseFloat(this.style.width) - (cols - 1) * _left) /
                cols
            ).toFixed(9);
            this.settingData["boxWidth"].value = _width + "px";
            this.setPicH();
        },
        setMobHeight() {
            let _left = parseInt(this.settingData.BoxMarginLeft.value); //BOX边距
            let _height = (
                (parseFloat(this.mobileStyle.width) - _left) /
                2
            ).toFixed(9); //2:指两列;
            this.settingData.mobPicHeight.value = _height + "px";
        },
        BoxMarginBottom(val) {
            this.settingData["BoxMarginBottom"].value = val + "px";
            this.rearchData(
                this.settingData["ranksNum"].rowsVal,
                this.settingData["ranksNum"].colsVal
            );
            this.setListData();
        },
        BoxMarginLeft(val) {
            this.settingData["BoxMarginLeft"].value = val + "px";
            this.rearchData(
                this.settingData["ranksNum"].rowsVal,
                this.settingData["ranksNum"].colsVal
            );
            this.setListData();
        },
        pictureHeight(row, col) {
            var val = [row, col];
            this.getSettingData("pictureHeight", val);
            this.setListData();
        },
        setPicH() {
            let r = this.settingData["pictureScale"].row;
            let l = this.settingData["pictureScale"].col;
            let boxWidth =
                parseFloat(this.settingData["boxWidth"].value) -
                parseFloat(this.settingData.boxBorderWidth.value) * 2 - parseFloat(
                    this.settingData["picturePadding"].value
                ) * 2;
            this.settingData["pictureHeight"].value =
                parseFloat(boxWidth / r * l) +
                "px";
        },
        pictureSize(val) {
            this.getPictrueSetData("pictureSize", val, "text")
        },
        pictureHover(val, val2, _that) {
            this.getPictrueSetData("pictureHover", val, "text", _that)
        },
        titleFontFamily(val) {
            this.getSettingData("titleFont", val, "fontFamily")
        },
        titleFontSize(val) {

            this.getSettingData("titleFont", val, "fontSize")
        },
        titleColor(val) {
            this.getSettingData("titleFont", val, "color")
        },
        titleFontWeight(val) {
            this.getSettingData("titleFont", val, "fontWeight")
        },
        titleFontStyle(val) {
            this.getSettingData("titleFont", val, "fontStyle")
        },
        titleDBHeight(val) {
            if (val == "单行文本") {
                this.settingData.titleDBHeight.num = 1;
                this.settingData.titleDBHeight.value.text = val;
                this.settingData.titleLineHeight.value = "1.1em";
                this.settingData.titleLineHeight.num = "1.1em";
            } else {
                this.settingData.titleDBHeight.num = 2;
                this.settingData.titleDBHeight.value.text = val;
                let size = parseInt(this.settingData.titleFont.value.fontSize);
                let linH = parseInt(this.settingData.titleLineHeight.value);
                this.settingData.titleLineHeight.value = linH + size + "px";
                this.settingData.titleLineHeight.num = parseInt(this.settingData.titleLineHeight.value) * 2 + "px";
            }
            this.setListData();
        },
        setTitleHeight(){
            if (this.settingData.titleDBHeight.value.text == "单行文本") {
                this.settingData.titleDBHeight.num = 1;
                this.settingData.titleLineHeight.value = "1.1em";
                this.settingData.titleLineHeight.num = "1.1em";
            } else {
                this.settingData.titleDBHeight.num = 2;
                let size = parseInt(this.settingData.titleFont.value.fontSize);
                let linH = parseInt(this.settingData.titleLineHeight.value);
                this.settingData.titleLineHeight.value = linH + size + "px";
                this.settingData.titleLineHeight.num = parseInt(this.settingData.titleLineHeight.value) * 2 + "px";
            }
            this.setListData();
        },
        titleLineHeight(val) {
            if (this.settingData.titleDBHeight.value.text != "单行文本") {
                let size = parseInt(this.settingData.titleFont.value.fontSize);
                let linH = parseInt(val);
                this.settingData.titleLineHeight.value = linH + size + "px";
                this.settingData.titleLineHeight.num = parseInt(this.settingData.titleLineHeight.value) * 2 + "px";
            } else {
                this.settingData.titleLineHeight.value = "1.1em";
                this.settingData.titleLineHeight.num = "1.1em";
            }
        },
        titleAlign(val) {
            this.getSettingData("titleAlign", val)
        },
        skuFontFamily(val) {
            this.getSettingData("skuFont", val, "fontFamily")
        },
        skuFontSize(val) {

            this.getSettingData("skuFont", val, "fontSize")
        },
        skuColor(val) {
            this.getSettingData("skuFont", val, "color")
        },
        skuFontWeight(val) {
            this.getSettingData("skuFont", val, "fontWeight")
        },
        skuFontStyle(val) {
            this.getSettingData("skuFont", val, "fontStyle")
        },
        skuAlign(val) {
            this.getSettingData("skuAlign", val)
        },
        priceFontFamily(val) {
            this.getSettingData("priceFont", val, "fontFamily")
        },
        priceFontSize(val) {
            this.getSettingData("priceFont", val, "fontSize")
        },
        priceColor(val) {
            this.getSettingData("priceFont", val, "color")
        },
        priceFontWeight(val) {
            this.getSettingData("priceFont", val, "fontWeight")
        },
        priceFontStyle(val) {
            this.getSettingData("priceFont", val, "fontStyle")
        },
        priceAlign(val) {
            this.getSettingData("priceAlign", val)
        },
        boxShadow(val) {
            this.getSettingData("boxShadow", val);
        },
        hShadow(val) {
            this.getSettingData("hShadow", val + "px");
        },
        vShadow(val) {
            this.getSettingData("vShadow", val + "px");
        },
        blurShadow(val) {
            this.getSettingData("blurShadow", val + "px");
        },
        colorShadow(val) {
            this.getSettingData("colorShadow", val.color);
        },
        getSettingData(property, convert, subvalue, _that) {
            //1.Change对象 2.转换格式值  3.对1的子对象change（子对象value值为obj======必须传第3个参数)
            let _type = property;
            if (
                typeof this.settingData[property].value === "string" ||
                typeof this.settingData[property].value === "boolean"
            ) {
                switch (_type) {
                    case "lineHeightNum":
                        let lineH = parseInt(
                            this.settingData["ContLineHeight"].value
                        );
                        this.settingData[property].num = convert * lineH + "px";
                        this.settingData[property].value = parseInt(convert);
                        this.setListData();
                        break;
                    case "pictureHeight":
                        let boxWidth =
                            parseFloat(this.settingData["boxWidth"].value) -
                            parseFloat(this.settingData.boxBorderWidth.value) * 2 - parseFloat(
                                this.settingData["picturePadding"].value
                            ) * 2;
                        this.settingData[property].value =
                            parseFloat(boxWidth / convert[0] * convert[1]) +
                            "px";
                        this.settingData["pictureScale"].row = convert[0];
                        this.settingData["pictureScale"].col = convert[1];
                        break;
                    case "boxShadow":
                        if (convert) {
                            convert =
                                this.settingData["hShadow"].value +
                                " " +
                                this.settingData["vShadow"].value +
                                " " +
                                this.settingData["blurShadow"].value +
                                " " +
                                this.settingData["colorShadow"].value;
                            this.settingData[property].num = convert;
                        } else {
                            convert = "none";
                            this.settingData[property].num = convert;
                        }
                        break;
                    case "hShadow":
                        this.settingData[property].value = convert;
                        this.settingData["boxShadow"].num =
                            convert +
                            " " +
                            this.settingData["vShadow"].value +
                            " " +
                            this.settingData["blurShadow"].value +
                            " " +
                            this.settingData["colorShadow"].value;
                        break;
                    case "vShadow":
                        this.settingData[property].value = convert;
                        this.settingData["boxShadow"].num =
                            this.settingData["hShadow"].value +
                            " " +
                            convert +
                            " " +
                            this.settingData["blurShadow"].value +
                            " " +
                            this.settingData["colorShadow"].value;
                        break;
                    case "blurShadow":
                        this.settingData[property].value = convert;
                        this.settingData["boxShadow"].num =
                            this.settingData["hShadow"].value +
                            " " +
                            this.settingData["vShadow"].value +
                            " " +
                            convert +
                            " " +
                            this.settingData["colorShadow"].value;
                        break;
                    case "colorShadow":
                    default:
                        this.settingData[property].value = convert;
                        break;
                }
            } else {
                this.settingData[property].value[subvalue] = convert;
                if(property == "titleFont" && subvalue== "fontSize"){
                    this.setTitleHeight();
                }
            }
        },
        getPictrueSetData(property, convert, subvalue, _that) {
            //1.Change对象 2.转换格式值  3.对1的子对象change（子对象value值为obj======必须传第3个参数)
            let _type = property;
            switch (_type) {
                case "pictureSize":
                    let cont = null;
                    convert == "填充" ? cont = "left top" : cont = "center";
                    this.settingData[property].value[subvalue] = convert;
                    this.settingData[property].num = cont;
                    break;
                case "pictureHover":
                    this.settingData[property].num = "none";
                    switch (convert) {
                        case "放大":
                            this.settingData[property].value[subvalue] = convert;
                            this.settingData[property].num = "scale(1.1)";
                            this.settingData[property].filter = "none";
                            this.settingData[property].isShad = "hidden";
                            this.settingData.isShowSet = true;
                            this.isShowSet(_that, this.settingData.isShowSet);
                            break;
                        case "左移":
                            this.settingData[property].value[subvalue] = convert;
                            this.settingData[property].num = "translateX(-5px)";
                            this.settingData[property].filter = "none";
                            this.settingData[property].isShad = "hidden";
                            this.settingData.isShowSet = true;
                            this.isShowSet(_that, this.settingData.isShowSet);
                            break;
                        case "上移":
                            this.settingData[property].value[subvalue] = convert;
                            this.settingData[property].num = "translateY(-5px)";
                            this.settingData[property].filter = "none";
                            this.settingData[property].isShad = "hidden";
                            this.settingData.isShowSet = true;
                            this.isShowSet(_that, this.settingData.isShowSet);
                            break;
                        case "虚化":
                            this.settingData[property].value[subvalue] = convert;
                            this.settingData[property].filter = "blur(2px)";
                            this.settingData[property].isShad = "hidden";
                            this.settingData.isShowSet = true;
                            this.isShowSet(_that, this.settingData.isShowSet);
                            break;
                        case "覆盖颜色":
                            this.settingData[property].value[subvalue] = convert;
                            this.settingData[property].isShad = "visible";
                            this.settingData.isShowSet = false;
                            this.isShowSet(_that, this.settingData.isShowSet);
                            break;
                        default:
                            this.settingData[property].num = "none";
                            this.settingData[property].value[subvalue] = convert;
                            this.settingData[property].filter = "none";
                            this.settingData[property].isShad = "hidden";
                            this.settingData.isShowSet = true;
                            this.isShowSet(_that, this.settingData.isShowSet);
                            break;
                    }
                    break;
                default:
                    this.settingData[property].value[subvalue] = convert;
                    break;
            }
        },
        isShowSet(_that, val) {
            let child = _that.$parent.$children;
            child.forEach(item => {
                item.prop && item.prop.attr == "pictureBackHover" ? (item.prop.isShowSet = val) : "";
            })
        }
    }
}
