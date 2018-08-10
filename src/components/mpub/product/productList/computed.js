export default {
    computed: {
        setMobLists(){
            let _this = this;
            let arr = [];
            cutData(_this.lists)
            function cutData(_data) {
                _data.forEach(item => {
                    if (item.childItem != null && item.childItem != undefined && item.childItem.length != 0) {
                        cutData(item.childItem)
                    } else {
                        try {
                            arr.push(item);
                        } catch (err) {
                            console.log(arr)
                        }
                    }
                })
            }
            if (arr.length > this.settingData.proNum.value) {
                arr.length = this.settingData.proNum.value;
            }
            this.$emit('updataMes', {
                key: "lists",
                index: this.index,
                value: this.lists
            }); //数据存储,更改父级lists;
            return arr;
        },
        productStyle() {
            let left = this.settingData.BoxMarginLeft.value; //BOX边距;
            let bottom = this.settingData.BoxMarginBottom.value; //BOX行距;
            let labelBg = this.settingData.fLabelBgColor.value;
            let _id = '#' + this.id + ' ';
            return `
            <style>
            ${_id}.zm-product-list{
                display: -moz-flex;
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                -moz-flex-wrap: wrap;
                -webkit-flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                justify-content:space-between;
            }
            ${_id}.zm-product-list .zm-product-box{
                width: calc((100% - ${left}) / 2);
            }
            ${_id}.zm-product-list .zm-product-box:nth-child(n+3){
                margin-top:${bottom};
            }
            ${_id}.zm-product-list .zm-product-box .zm-product-imgBox div .zm-product-news:after{
                content: "";
                display: inline-block;
                position: absolute;
                left: 0px;
                top: 0px;
                width: 0px;
                border-top: 44px solid ${labelBg};
                border-left: 18px solid ${labelBg};
                border-right: 18px solid ${labelBg};
                border-bottom: 11px solid transparent;
                z-index: -1;
            }
        </style>`;
        }
    }
}
