export default {
    computed: {
        setMobLists() {
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
            let bottom = this.settingData.BoxMarginBottom.value; //BOX行距;
            let labelBg = this.settingData.fLabelBgColor.value;
            let _id = '#' + this.id + ' ';
            return `
            <style>
            ${_id}.zm-product-list .zm-product-mobileBox{
                margin-bottom:${bottom};
            }
            ${_id}.zm-product-list .zm-product-mobileBox:last-child{
                margin-bottom: 0px;
            }
            ${_id}.zm-product-list .zm-product-mobileBox .zm-product-imgBox div .zm-product-news:after{
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
