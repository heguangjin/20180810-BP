<template>
  <div v-if="isComputer" class="zm-product-main" :id="id" :style="{position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px',zIndex: style.zIndex}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
    <div class="zm-product-content" :data-num="settingData.proNum.value" :style="{padding:settingData.boxPaddingLR.value,backgroundColor:settingData.BoxBackgroundColor.value}">
      <div class="zm-product-mobileBox" v-for="(item,index) in setLists" :key="index" :data-sortid="item.id" :style="{width:settingData.boxWidth.value}">
        <div class="zm-product-imgBox">
          <div style="width:100%;height:100%;overflow:hidden;">
            <a class="zm-product-img" :style="{backgroundImage:'url('+item.mainImage+')',backgroundPosition:settingData.pictureSize.num,height:settingData.pictureHeight.value}">
            </a>
            <span class="zm-product-news" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
              <i :style="{color:settingData.fLabelTColor.value}">{{item.fLabel}}</i>
            </span>
          </div>
        </div>
        <div class="zm-product-cont" :style="{backgroundColor:settingData.ContBackgroundColor.value,marginTop:settingData.boxMarginTop.value,paddingBottom:settingData.skuMarginBottom.value,paddingTop:settingData.titleMarginTop.value}">
          <a class="zm-product-title" :style="{marginBottom:settingData.titleMarginBottom.value,textAlign:settingData.titleAlign.value,paddingLeft:settingData.titlePaddingLRight.value,paddingRight:settingData.titlePaddingLRight.value,fontFamily:settingData.titleFont.value.fontFamily,fontStyle:settingData.titleFont.value.fontStyle,fontWeight:settingData.titleFont.value.fontWeight,fontSize:settingData.titleFont.value.fontSize,color:settingData.titleFont.value.color,lineHeight:settingData.titleLineHeight.value,height:settingData.titleLineHeight.num,lineClamp:settingData.titleDBHeight.num,boxOrient:'vertical'}">{{item.name}}</a>
          <div class="zm-product-price" :style="{display:settingData.priceShow.num,paddingTop:settingData.priceMarginTop.value,paddingBottom:settingData.priceMarginBottom.value,textAlign:settingData.priceAlign.value,paddingLeft:settingData.pricePaddingLRight.value,paddingRight:settingData.pricePaddingLRight.value,fontFamily:settingData.priceFont.value.fontFamily,fontStyle:settingData.priceFont.value.fontStyle,fontWeight:settingData.priceFont.value.fontWeight,fontSize:settingData.priceFont.value.fontSize,color:settingData.priceFont.value.color}">{{item.priceStr}}
          </div>
          <div class="zm-product-details" :style="{marginTop:settingData.skuMarginTop.value,textAlign:settingData.skuAlign.value}">
            <a class="zm-product-sku" :style="{display:settingData.skuShow.num,marginLeft:settingData.skuPaddingLRight.value,marginRight:settingData.skuPaddingLRight.value,fontFamily:settingData.skuFont.value.fontFamily,fontStyle:settingData.skuFont.value.fontStyle,fontWeight:settingData.skuFont.value.fontWeight,fontSize:settingData.skuFont.value.fontSize,color:settingData.skuFont.value.color,backgroundColor:settingData.skuBackgroundColor.value,width:settingData.skuWidth.value,height:settingData.skuHeight.value,lineHeight:settingData.skuHeight.value}">{{settingData.productDetails.value}}</a>
          </div>
        </div>
      </div>
      <div :is="settingData.pageUrl" v-if="settingData.pageShow.value" :total="settingData.total" :current.sync="settingData.current" :display="settingData.display" @pagechange="pagechangeA($event)" :style="{paddingTop:settingData.pageMarginTop.value,paddingBottom:settingData.pageMarginBottom.value}"></div>
    </div>
    <span v-html="productStyle"></span>
  </div>
  <div v-else-if="(!isComputer && settingData.mobileComIsHide)" class="zm-product-main" :id="id" :style="{position: 'absolute', width: mobileStyle.width+'px',height: mobileStyle.height+'px',left: mobileStyle.left+'px',top: mobileStyle.top+'px',zIndex:mobileStyle.zindex}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
    <div  class="zm-product-content" :data-num="settingData.proNum.value">
    <div class="zm-product-list">
      <div class="zm-product-mobileBox" v-for="(item,index) in setMobLists" :key="index" :data-sortid="item.id" style="display:block;">
        <div class="zm-product-imgBox">
          <div style="width:100%;height:100%;overflow:hidden;">
            <a class="zm-product-img" :style="{backgroundImage:'url('+item.mainImage+')'}">
            </a>
            <span class="zm-product-news" v-if="(item.fLabel != null) && (item.fLabel !='') && (item.fLabel !=' ')">
              <i :style="{color:settingData.fLabelTColor.value}">{{item.fLabel}}</i>
            </span>
          </div>
        </div>
        <div class="zm-product-cont" style="padding:10px 20px;">
          <a class="zm-product-title" style="max-height: 34px;">{{item.name}}</a>
          <div class="zm-product-price" :style="{display:settingData.priceShow.num}">{{item.priceStr}}
          </div>
          <div class="zm-product-details" :style="{display:settingData.skuShow.num,backgroundColor:'#3098d5'}">
            查看详情
          </div>
        </div>
      </div>
    </div>
     <div style="color:#86869B;text-align:center;padding:10px;font-size:12px;width:100%;" @click.self="loadProduct">加载更多产品</div>
     </div>
    <span v-html="productStyle"></span>
  </div>
</template>
<style scoped>
@import "../../../style/component-product/productList.css";
</style>
<script>
import callBack from "./productListImgY/callBackFunction.js";
import computed from "./productListImgY/computed.js";
export default {
  name: "com-product-list",
  props: {
    prop: {
      type: Object,
      required: true
    },
    index: {
      type: [String, Number],
      required: true
    }
  },
  mixins: [computed, callBack], //callBack----设置项回调;computd----设置项;
  data() {
    return {
      id: this.prop.id, //随机ID;
      type: "product", //组件类别;
      mold: "commonUnit", //组件类型（普通组件：commonUnit)(普通容器：commonContainer) (特殊容器：multipleContainer)(其他自定义)
      style: this.prop.style, //组件样式;
      mobileStyle: this.prop.mobileStyle, //手机版样式
      settingData: this.prop.settingData, //组件设置项数据;
      pattern: [1, 1, 1, 1, 1, 1, 1, 1],
      isRotate: false,
      buttonList: [
        {
          type: "manage",
          title: "商品",
          icon: "icon-gouwuche",
          callback: () => {
            zmEditor.$store.commit("changePaneData", {
              key: "paneType",
              value: true
            }); //打开弹窗;
            zmEditor.$store.commit("changePaneData", {
              key: "paneTitle",
              value: "商品管理"
            }); //弹窗标题;
            zmEditor.$store.commit("changePaneData", {
            key: "paneHelpInfo",
            value: "选择要显示的商品(产品或服务)"
            }); //问号图标hover显示内容;
            zmEditor.$store.commit("changePaneData", {
              key: "paneMode",
              value: "/com/product/productManage/productManage.vue"
            }); //弹窗内容应加载的组件路径;
          }
        },
        {
          type: "set",
          title: "设置",
          icon: "icon-shezhi1",
          paneTitle: "商品设置",
          paneInfo:"通过设置项调整布局、图片、背景色和文字内容"
        },
        {
          type: "style",
          title: "变更样式",
          icon: "icon-style",
          paneTitle: "商品样式",
          paneInfo:"选择和替换商品样式"
        },
        { type: "del", title: "删除", icon: "icon-delete" }
      ],
      mobileButtonList: [
        { type: "hide", title: "隐藏", icon: "icon-hide" },
        {
          type: "set",
          title: "设置",
          icon: "icon-shezhi1",
          paneTitle: "商品管理"
        }
      ],
      items: [], //后台所有数据;
      lists: this.prop.lists
      // settingData: {
      //   "typeId":[],
      //   "assignProductData":null,
      //   "assignServerData":null,
      //   "isProductAssign":null,
      //   "isServerAssign":null,
      //   "isShowSet": true,
      //   initWidth:null,
      //   defauletTypeName: {
      //     value: "产品类目"
      //   },
      //   productSortName: {
      //     value: "按发布时间排序"
      //   },
      //   serverSortName: {
      //     value: "按发布时间排序"
      //   },
      //   productDetails: {
      //     value: "查看详情"
      //   },
      //   initWidth: null,
      //   initHeight: null,
      //   fullScreenShow: {
      //     value: false,
      //     num: 0
      //   },
      //   proNum: {
      //     value: 4
      //   },
      //   boxPaddingLR: {
      //     value: "0px"
      //   },
      //   ranksNum: {
      //     rowsVal: 2,
      //     colsVal: 2
      //   },
      //   boxWidth: {
      //     value: "338px"
      //   },
      //   BoxMarginBottom: {
      //     value: "10px"
      //   },
      //   BoxMarginLeft: {
      //     value: "10px"
      //   },
      //   boxMarginTop: {
      //     value: "10px"
      //   },
      //   ContBackgroundColor: {
      //     value: "rgba(255,255,255,1)"
      //   },
      //   pictureScale: {
      //     row: 16,
      //     col: 9
      //   },
      //   BoxBackgroundColor: {
      //     value: "rgba(214,231,247,1)"
      //   },
      //   boxBorderWidth: {
      //     value: "1px"
      //   },
      //   boxBorderColor: {
      //     value: "rgba(215,215,215,1)"
      //   },
      //   boxBorderHoverWidth: {
      //     value: "1px"
      //   },
      //   boxBorderHoverColor: {
      //     value: "rgba(0,255,255,1)"
      //   },
      //   pictureSize: {
      //     value: {
      //       iconClass: "",
      //       text: "自适应"
      //     },
      //     num: "center center"
      //   },
      //   pictureHover: {
      //     value: {
      //       iconClass: "",
      //       text: "放大"
      //     },
      //     num: "scale(1.1)",
      //     filter: 0,
      //     isShad: "hidden"
      //   },
      //   pictureBackHover: {
      //     value: "rgba(255,102,0,0.3)"
      //   },
      //   picturePadding: {
      //     value: "10px"
      //   },
      //   pictureColor: {
      //     value: "rgba(0,0,0,0)"
      //   },
      //   pictureWidth: {
      //     value: "1px"
      //   },
      //   pictureHeight: {
      //     value: "177px"
      //   },
      //   pageShow: {
      //     value: false
      //   },
      //   pageMarginTop: {
      //     value: "20px"
      //   },
      //   pageMarginBottom: {
      //     value: "20px"
      //   },
      //   titleFont: {
      //     value: {
      //       fontFamily: "微软雅黑",
      //       fontSize: "14px",
      //       color: "rgba(121,121,121,1)",
      //       fontWeight: "normal",
      //       fontStyle: "normal"
      //     }
      //   },
      //   titleDBHeight: {
      //     value: {
      //       text: "单行文本",
      //       iconClass: ""
      //     },
      //     num: 1
      //   },
      //   titleMarginTop: {
      //     value: "10px"
      //   },
      //   titleLineHeight: {
      //     value: "1.1em",
      //     num: "1.1em",
      //     curr: ""
      //   },
      //   titleMarginBottom: {
      //     value: "10px"
      //   },
      //   titleAlign: {
      //     value: "left"
      //   },
      //   titlePaddingLRight: {
      //     value: "10px"
      //   },
      //   skuShow: {
      //     value: true,
      //     num: "inline-block"
      //   },
      //   skuFont: {
      //     value: {
      //       fontFamily: "微软雅黑",
      //       fontSize: "14px",
      //       color: "rgba(0,0,0,1)",
      //       fontWeight: "normal",
      //       fontStyle: "normal"
      //     }
      //   },
      //   skuBackgroundColor: {
      //     value: "rgba(48,152,213,1)"
      //   },
      //   skuMarginTop: {
      //     value: "10px"
      //   },
      //   skuWidth: {
      //     value: "30%"
      //   },
      //   skuHeight: {
      //     value: "30px"
      //   },
      //   skuMarginBottom: {
      //     value: "10px"
      //   },
      //   skuAlign: {
      //     value: "right"
      //   },
      //   skuPaddingLRight: {
      //     value: "10px"
      //   },
      //   priceShow: {
      //     value: true,
      //     num: "block"
      //   },
      //   priceFont: {
      //     value: {
      //       fontFamily: "微软雅黑",
      //       fontSize: "16px",
      //       color: "rgba(204,0,52,1)",
      //       fontWeight: "normal",
      //       fontStyle: "normal"
      //     }
      //   },
      //   priceMarginTop: {
      //     value: "10px"
      //   },
      //   priceMarginBottom: {
      //     value: "10px"
      //   },
      //   priceAlign: {
      //     value: "left"
      //   },
      //   pricePaddingLRight: {
      //     value: "10px"
      //   },
      //   fLabelBgColor: {
      //     value: "rgb(255, 102, 0)"
      //   },
      //   fLabelTColor: {
      //     value: "rbg(255,255,255)"
      //   }
      // } //后台前10条数据及选择数据;
    };
  },
  created() {
    let _this = this;
    let url = "/product-api/getProductList"; //获取产品数据
    if (_this.lists.length == 0) {
      _this.$axios
        .post(
          url,
          {},
          {
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest"
            }
          }
        )
        .then(function(response) {
          var data = response.data.data;
          _this.items = data;
          _this.lists = _this.items.splice(0, 8);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
    let file = "/set/switch/pagination.vue";
    const component = () => import("../../../components" + file);
    this.settingData.pageUrl = component;
  },
  watch: {
    style: {
      handler(val, oldval) {
        try {
          this.rearchData(
            this.settingData["ranksNum"].rowsVal,
            this.settingData["ranksNum"].colsVal
          );
          if (this.style.width == zmEditor.$store.state.page.nowWinWidth) {
          } else {
            this.settingData.initWidth = this.style.width;
            this.settingData.initLeft = this.style.left;
          }
        } catch (err) {
          console.log("忽略！", err);
        }
      },
      deep: true //对象内部的属性监听，也叫深度监听
    }
  },
  mounted() {
    if (this.$store.state.pane.isRenderSelect) {
      this.$store.commit("changeSelectList", this); //渲染组件的时候自动选中;
    } else {
      this.id == this.$store.state.component.oldComID &&
        this.$store.commit("changeSelectList", this); //渲染组件的时候自动选中;
    }
  }
};
</script>
