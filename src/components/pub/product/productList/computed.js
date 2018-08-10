export default {
    computed: {
        setLists() {
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
            this.settingData.total = arr.length;
            this.settingData.display = parseInt(this.settingData.proNum.value);
            let [page, cur, proNum, lists] = [arr, this.settingData.current, this.settingData.display, []];
            let start = (cur - 1) * proNum;
            let end = start + proNum;
            let maxCur = Math.ceil(this.settingData.total / proNum);
            if (cur == maxCur) {
                end = this.settingData.total;
            } else if (cur > maxCur) {
                start = (maxCur - 1) * proNum;
                end = start + proNum;
            }
            page.forEach((item, i) => {
                if (i >= start && i < end) {
                    lists.push(item)
                }
            })
            return lists;
        },
        productStyle() {
            let boxColor = this.settingData.boxBorderColor.value;
            let boxHoverColor = this.settingData.boxBorderHoverColor.value;
            let boxWidth = this.settingData.boxBorderWidth.value;
            let boxHoverWidth = this.settingData.boxBorderHoverWidth.value;
            let imgColor = this.settingData.pictureBackHover.value;
            let imgChange = this.settingData.pictureHover.num;
            let imgFilter = this.settingData.pictureHover.filter;
            let pictureSize = this.settingData.pictureSize.num;
            let isShad = this.settingData.pictureHover.isShad;
            let left = this.settingData.BoxMarginLeft.value; //BOX边距;
            let bottom = this.settingData.BoxMarginBottom.value; //BOX行距;
            let col = parseInt(this.settingData.ranksNum.colsVal);
            let colBot = parseInt(this.settingData.ranksNum.colsVal) + 1;
            let labelBg = this.settingData.fLabelBgColor.value;
            let _id = '#' + this.id + ' ';
            return `
            <style>
                ${_id}.zm-product-content .zm-product-box{
                    border-width:${boxWidth};
                    border-color:${boxColor}; 
                    margin-left:${left};
                }
                ${_id}.zm-product-content .zm-product-box:nth-child(${col}n+1){
                    margin-left:0px;
                }
                ${_id}.zm-product-content .zm-product-box:nth-child(n+${colBot}){
                    margin-top:${bottom};
                }
                ${_id}.zm-product-content .zm-product-box:hover{
                    border-width:${boxHoverWidth};
                    border-color:${boxHoverColor};
                }
                ${_id}.zm-product-content .zm-product-box .zm-product-imgBox .zm-product-img{
                    z-index: 0;
                    background-position:${pictureSize};
                    transform:none;
                    transition: all 0.25s;
                }
                ${_id}.zm-product-content .zm-product-box .zm-product-imgBox .zm-product-img:hover{
                    transform: ${imgChange};
                    filter:${imgFilter};
                    transition: all 1s;
                }
                ${_id}.zm-product-content .zm-product-box .zm-product-imgBox .zm-product-img:after{
                    content: "";
                    visibility: hidden;
                    width:100%;
                    height:100%;
                    position:absolute;
                    top:0;
                    left:0;
                    border:1px solid transparent;
                    background-color:transparent;
                }
                ${_id}.zm-product-content .zm-product-box .zm-product-imgBox .zm-product-img:hover:after{
                    visibility: ${isShad};
                    background-color: ${imgColor};
                    transition: all 1s;
                }
                ${_id}.zm-product-content .zm-product-box .zm-product-imgBox div .zm-product-news:after{
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
            </style>`
        }
    }
}
