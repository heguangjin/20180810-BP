<template>
  <div class="zm-productS-content">
    <div class="zm-product-pageBox">
      <EasyScrollbar :barOption="myBarOption">
        <ul class="zm-dialog-pageList1">
          <!-- unselectable="on" onselectstart="return false;" style="user-select:none;"  -->
          <li v-for="(ite,i) in setList" :key="i" v-dragging="{ item: ite, list: setList, group: 'ite' }" class="zm-dialog-pageList-one sliderDragLi clearFloat" :data-fid="ite.id" :data-show="true" :data-title="ite.fInitName" v-bind:class="{'bgW':i==bgW,'onlay':i===isOnlay,'onlayclick':i===isOnlayClick,'wrong':i===isWrong}" @click.self.prevent="addClick(ite,i)" @mouseenter="addMouseEnter(i)" @mouseleave="addMouseLeave(i)">
            <i class="zm-index">{{i}}</i>
            <span class="zm-dialog-carousel-onePageIndex zm-dialog-serialNumber" :style="{backgroundImage:'url('+ite.mainImage+')'}"></span>
            <div class="zm-dialog-Title">
              <textarea class="zm-dialog-pageList-title" id="myProInput" row="3"  v-model="ite.name" @keyup.enter="addEnter(ite,i)" @focus="inputFocus(ite,i)" @input.stop.prevent="addInput(ite,i)" @blur="addblur(ite,i)" v-bind:class="{ 'onFocus': i===isOnFocus,'onError' : i===isonError}"></textarea>
              <i class="zm-boxShow" v-show="ite.isInputShow" @dblclick.stop.prevent="addAbClick(ite,i)"></i>
            </div>
            <span class="zm-dialog-eye iconfont" v-bind:class="{'icon-eyeOn': ite.isIconEyeOn}" v-show='hidden'></span>
            <span class="zm-dialog-eye iconfont" v-show='hidden' v-bind:class="{'icon-eyeOff':ite.isIconEyeOn==false?ite.isIconEyeOff:(i==isKey) && ite.isEyeOff}"></span>
            <span class="zm-dialog-eye iconfont" v-bind:class="{'icon-cha2':ite.isIconCha}" @click.self.prevent="addIconCha(i)"></span>
            <span class="zm-dialog-setting iconfont" v-bind:class="{'icon-duigou1':ite.isIconDuigou1}" @click.stop="addDuiGou(ite,i)"></span>
            <span class="zm-dialog-setting iconfont" v-bind:class="{'icon-solidsettingicon':ite.iconShezhi2}" @click.self.prevent="addSetting(ite,i)"></span>
            <p class="zm-dialog-nameError iconfont icon-jinzhitishi" v-if="i===isJiZhi" :title="errorTitle"></p>
            <p class="zm-dialog-renameError" v-if="i===isDubeName">{{errorTitle}}</p>
            <p class="zm-dialog-nameErrorText" v-if="i===isNameOver">{{errorTitle}}</p>
          </li>
        </ul>
      </EasyScrollbar>
      <!-- <div class="zm-dialog-carousel-pageSetBox" @mouseenter="pageSetEnter()" @mouseleave="pageSetLeave()" v-show="isSelect" :style="{top:top}"> -->
      <div class="zm-dialog-carousel-pageSetBox" @mouseenter="pageSetEnter()" @mouseleave="pageSetLeave()" v-show="isSelect" :style="{top:objCss.top,left:objCss.left}">
        <div @click.stop.prevent="addReName()">重命名</div>
        <div @click.stop.prevent="addReMove()">移除</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "set-blog",
  // props: ["prop"],
  data() {
    return {
      // compositeDataL:"选择产品",
      myBarOption:{
          horizrailenabled:false,//是否显示水平滚动条
      },
      productType:'产品',
      hidden:false,
      isOnlayClick: "",
      isOnlay: "",
      isWrong: "",
      isOnFocus: "",
      isonError: "",
      isKey: 0,
      lists: [],
      isSelect: false,
      top: "0px",
      num: 0,
      isJiZhi: "",
      isDubeName: "",
      isNameOver: "",
      errorTitle: "※ 请填写不超过30个汉字或60个字符!",
      current: null,
      initData: "",
      ratio: [],
      isSavefTilte: false,
      objCss:{
        left:0,
        top:0
      },
      bgW:-1
    };
  },
  computed: {
    setList() {
      let _this = this;
      let oldData
      if(zmEditor.$store.state.product.productUrl.indexOf('product') > -1){
          oldData = zmEditor.$store.state.component.selectList[0].settingData.assignProductData ? zmEditor.$store.state.component.selectList[0].settingData.assignProductData : []
      }else if(zmEditor.$store.state.product.productUrl.indexOf('service') > -1){
          oldData = zmEditor.$store.state.component.selectList[0].settingData.assignServerData ? zmEditor.$store.state.component.selectList[0].settingData.assignServerData : []
      }
      if (oldData) {
        _this.lists = oldData;
          _this.lists.forEach((element, index) => {
            if (
              element.hasOwnProperty("isIconEyeOn") ||
              element.hasOwnProperty("iconShezhi2") ||
              element.hasOwnProperty("isIconCha") ||
              element.hasOwnProperty("isIconDuigou1") ||
              element.hasOwnProperty("isEyeOff") ||
              element.hasOwnProperty("isIconEyeOff")
            ) {
              return;
            } else {
              element.isIconEyeOn = true;
              element.iconShezhi2 = true;
              element.isIconCha = false;
              element.isIconDuigou1 = false;
              element.isEyeOff = false;
              element.isIconEyeOff = true;
              element.fInitName = element.name;
              element.isShowBlog = true;
              element.isInputShow = true;
            }
          });


          zmEditor.$store.state.component.selectList[0].lists = _this.lists;//给组件数据赋值
          zmEditor.$store.state.component.selectList[0].lists = Object.assign(
            [],
            zmEditor.$store.state.component.selectList[0].lists
          );//更新组件的数据
      }
      return _this.lists;
    },
  },
  methods: {
    addClick(ite, i) {
      let _this = this;
      _this.isOnlayClick = i;
    },
    addMouseEnter(i) {
      let _this = this;
      _this.isOnlay = i;


      // if(this.lists[this.num].isIconDuigou1){//he
      //   this.lists[this.num].iconShezhi2 = false;
      // }else{
      //   this.lists[this.num].iconShezhi2 = true;
      // }
      var myInput = document.getElementById('myProInput');//he
      if (myInput == document.activeElement) {//he
          console.log('获取焦点');
          this.bgW = this.num//he
      } else {
          console.log('未获取焦点');
          this.bgW = -1//he
      }
    },
    addMouseLeave(i) {
      let _this = this;
      _this.isOnlay = -1;

      if(this.isSelect){

      }else{
        // _this.lists[i].iconShezhi2 = false;//he
        this.bgW = i//he
      }

      setTimeout(() => {
        if (!_this.a) {
          _this.isSelect = false;
        }
      }, 200);
    },
    addblur(ite, i) {
      let _this = this;
      ite.isInputShow = true;
      setTimeout(() => {
        if (_this.isSavefTilte) {
          //修改fTitle成功;
          _this.addListinit(i); //list图标数据类初始化;
          _this.isWrong = -1;
          _this.isOnFocus = -1;
          _this.isOnlayClick = -1;
          // _this.num = i;
          _this.isJiZhi = false;
          _this.isDubeName = false;
          _this.isNameOver = false;
          _this.isonError = -1;
          _this.isOnFocus = -1;
        } else {
          //修改fTitle不成功；
          ite.name = _this.initData;
          _this.addListinit(i); //list图标数据类初始化;
          _this.isWrong = -1;
          _this.isOnFocus = -1;
          _this.isOnlayClick = -1;
          // _this.num = i;
          _this.isJiZhi = false;
          _this.isDubeName = false;
          _this.isNameOver = false;
          _this.isonError = -1;
          _this.isOnFocus = -1;
        }
      }, 200);
      _this.clearSelections(); //取消选中状态;
      // _this.$refs.blogSelect.addSelHidden(); //调用子级排序列表方法;
      event.stopPropagation();
      this.$store.commit('addComKeyEvent')//he
      return false;
    },
    inputFocus(ite, index) {
      let _this = this;
      this.initData = ite.name;
      this.ratio = [];
      this.lists.forEach(item => {
        this.ratio.push(JSON.parse(JSON.stringify(item.name)));
      });
      this.ratio.splice(index, 1);
      let targName = event.currentTarget;
      targName.select();
      _this.addListSet(index); //list图标数据设置;
      _this.isOnlayClick = -1;
      _this.bgW = index//he
      _this.isWrong = index;
      _this.isOnFocus = index;
      this.$store.commit('removeComKeyEvent')//he
    },
    addEnter(ite, index) {
      let _this = this;
      let targName = event.currentTarget;
      _this.isSavefTilte = true;
      _this.addChangeName(ite, index); //重命名设置;
      targName.blur();
    },
    addInput(ite, index) {
      let title = ite.name;
      let cc = this.judgeTitle(title, index);
    },
    addAbClick(ite, index) {
      let _this = this;
      let targName = event.currentTarget.previousElementSibling;
      targName.focus();
      ite.isInputShow = false;
      _this.isOnlayClick = -1;
      _this.bgW = index//he
      // _this.addListSet(index); //list图标数据设置;he
      _this.isSelect = false
      // _this.isWrong = index;//he
      // _this.isOnFocus = index;//he
    },
    addReNameAxios(ite, i) {
      let _this = this;
      let fid = ite.id;
      let fname = ite.name;
      let url
      if(zmEditor.$store.state.product.productUrl.indexOf('product') > -1){
          this.productType = '产品'
          url = '/product/webbuilder-api/product/updateProductInfoByParam'
      }else if(zmEditor.$store.state.product.productUrl.indexOf('service') > -1){
          this.productType = '服务'
          url = '/service/webbuilder-api/serviceNote/updateShopServiceInfoByParam'
      }
      this.$axios({
        method: 'post',
        url:url,
        headers:{"Content-Type": "application/x-www-form-urlencoded"},
        responseType:'json',
        params: {
            id:fid,
            newName:fname,
            newAdvertisementText:'',
            label:''
        }
      }).then((res)=>{
        console.log("数据提交成功-列表,轮播")
      }).catch(()=>{
        console.log("数据提交失败")
      })
      zmEditor.$store.state.component.selectList[0].settingData.productName = ite.name
      },
    addChangeName(ite, index) {
      let _this = this;
      let isShow = this.judgeTitle(ite.name, index);
      if (isShow) {
        _this.initData = ite.name;
        _this.addReNameAxios(ite, index); //重命名tilte;
      } else {
        ite.name = this.initData;
        _this.isNameOver = false;
        _this.isJiZhi = false;
        _this.isDubeName = false;
        _this.isonError = -1;
      }
    },
    judgeTitle(name, index) {
      let _this = this;
      let namelen = _this.fileGetLength(name); //字符长度计算;
      var tempKey = this.ratio.some(item => {
        return name == item;
      });
      if (tempKey) {
        _this.isDubeName = index;
        _this.isJiZhi = index;
        _this.isonError = index;
        _this.isOnFocus = -1;
        _this.errorTitle = "※禁止重名！";
        return false;
      } else {
        if (namelen > 60) {
          _this.isNameOver = index;
          _this.isJiZhi = index;
          _this.isonError = index;
          _this.isOnFocus = -1;
          return false;
        } else {
          _this.isNameOver = false;
          _this.isJiZhi = false;
          _this.isDubeName = false;
          _this.isonError = -1;
          _this.isOnFocus = index;
          return true;
        }
      }
    },
    fileGetLength(v) {
      let len = 0;
      for (let i = 0; i < v.length; i++) {
        let a = v.charAt(i);
        len = a.match(/[^\x00-\xff]/gi) != null ? len + 2 : len + 1;
      }
      return len;
    },
    clearSelections() {
      if (window.getSelection) {
        // 获取选中
        var selection = window.getSelection();
        // 清除选中
        selection.removeAllRanges();
      } else if (document.selection && document.selection.empty) {
        // 兼容 IE8 以下，但 IE9+ 以上同样可用
        document.selection.empty();
        // 或使用 clear() 方法
        // document.selection.clear();
      }
    },
    addDuiGou(ite, index) {
      let _this = this;
      _this.isSavefTilte = true;
      _this.addChangeName(ite, index); //重命名设置;
    },
    addSetting(ite, index) {
      // this.myNum = index//he
      let DOMRect = $(event.currentTarget)[0].getBoundingClientRect()
      this.objCss.left =  (DOMRect.left + 55) +'px'
      this.objCss.top =  DOMRect.top +'px'
      let _this = this;
      _this.num = index;

      // _this.top = index * 60 + "px";
      _this.top = index * 41 + "px";//he
      _this.isOnlayClick = index;
      for (let i = 0; i < _this.lists.length; i++) {
        if (i == index) {
          if (_this.isSelect) {
            _this.isSelect = !_this.isSelect;
          } else {
            _this.isSelect = !_this.isSelect;
            // _this.isSelect = true;
          }
        }
      }
    },
    addIconCha(index) {
      let _this = this;
      _this.isSelect = false;
      _this.num = index;
      _this.isWrong = -1;
      _this.isOnFocus = -1;
      _this.isOnlayClick = -1;
      _this.addListinit(index); //list图标数据类初始化;
      _this.clearSelections(); //取消选中状态;
    },
    addIconEyeOff(index) {
      let _this = this;
      _this.isSelect = false;
      _this.num = index;
      _this.isOnlayClick = -1;
      // zmEditor.$store.state.component.selectList[0].lists[
      //   index
      // ].isShowBlog = true;
      _this.addEyeInit(index);
    },
    addHidShow(index) {
      let _this = this;
      _this.isSelect = false;
      _this.num = index;
      // zmEditor.$store.state.component.selectList[0].lists[
      //   index
      // ].isShowBlog = false;
      _this.addEyeInit(index);
    },
    addReMove() {
      // this.num = this.myNum//he
      let _this = this;
      _this.lists.splice(_this.num, 1); //移除list 数据;

      this.isSelect = false; //小弹出框隐藏;
    },
    addReName() {
      // this.num = this.myNum//he

      let _this = this;
      let parClass =
        event.currentTarget.parentElement.previousElementSibling.children[0]
          .firstChild.firstChild.children[_this.num];
      let targName = parClass.children[2].firstChild;
      targName.focus();
      targName.select();
      _this.addListSet(_this.num); //list图标数据设置;
      _this.isOnlayClick = -1;
      _this.isWrong = _this.num;
      _this.isOnFocus = _this.num;
    },
    pageSetEnter() {
      this.a = true;
    },
    pageSetLeave() {
      this.a = false;
      this.isSelect = false;

      // this.lists[this.num].iconShezhi2 = false;//he
      this.bgW = this.num//he
    },
    addEyeInit(index) {
      let _this = this;
      for (let i = 0; i < _this.lists.length; i++) {
        _this.lists[index].iconShezhi2 = true;
        _this.lists[index].isIconCha = false;
        _this.lists[index].isIconDuigou1 = false;
        _this.lists[index].isIconEyeOff = true;
        if (i == index) {
          _this.lists[i].isIconEyeOn = !_this.lists[i].isIconEyeOn;
          _this.isKey = index;
          _this.lists[i].isEyeOff = !_this.lists[i].isEyeOff;
        }
      }
      _this.lists = Object.assign([], _this.lists);
    },
    addListinit(num) {
      let _this = this;
      for (let i = 0; i < _this.lists.length; i++) {
        _this.lists[num].isIconEyeOn = true;
        _this.lists[num].iconShezhi2 = true;
        _this.lists[num].isIconCha = false;
        _this.lists[num].isIconDuigou1 = false;
        _this.lists[num].isEyeOff = false;
        _this.lists[num].isIconEyeOff = true;
        _this.lists[num].isInputShow = true;
      }
      _this.lists = Object.assign([], _this.lists);
    },
    addListSet(num) {
      let _this = this;
      for (let i = 0; i < _this.lists.length; i++) {
        _this.lists[num].isIconEyeOn = false;
        _this.lists[num].iconShezhi2 = false;
        _this.lists[num].isIconCha = true;
        _this.lists[num].isIconDuigou1 = true;
        _this.lists[num].isEyeOff = false;
        _this.lists[num].isIconEyeOff = false;
        _this.lists[num].isInputShow = false;
      }
      _this.lists = Object.assign([], _this.lists);
    }
  },
};
</script>

