<template>
    <div class="zm-productH" :style="{width: style.width+'px',height: style.height+'px',left: style.left,top: style.top,marginLeft:style.mL,marginTop:style.mT}">
        <div class="productH" @mousedown.stop="mousedown22($event)">
            <span class="productT">{{productType}}列表</span>
            <span class="productC iconfont icon-close" @click.stop="closeP"></span>
        </div>
        <div class="productB">
            <div class="productB-L">
                <div class="productB-LH">
                    <div class="productB-LHL">
                        <span class="ld iconfont icon-fcstubiao25"></span>
                        <span class="ldt">拖拽顺序可以调整产品位置！</span>
                    </div>
                    <div class="productB-LHR" @click.stop="addProduct">添加{{productType}}</div>
                </div>
                <!-- 滚动条插件 -->
                <EasyScrollbar>
                    <div id="wrapper" style="height: 555px;">
                        <div class="productB-LB">
                            <ul class="color-list">
                                <li @mouseout.stop="removeBoxH" @mousemove.stop="removeBoxS"  @click.stop='isSelectF(index)' class="color-item" v-for="(item,index) in productList" :key='index' v-dragging="{ item: item, list: productList, group: 'color' }">
                                    <div class="imgBox" :style="{backgroundImage:'url('+item.mainImage+')'}">
                                        <span class="ImgIndex">{{index}}</span>
                                        <span v-show='item.isSelect' class="dg iconfont icon-check"></span>
                                        <span v-show='item.isSelect' class="imgVien"></span>
                                        <span class="removeBox" ><span @click.stop="removeProduct(index)" class="removeIcon iconfont icon-delete"></span></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </EasyScrollbar>
            </div>

            <div class="productB-R">
                <EasyScrollbar>
                    <div id="wrapper" style="height: 600px;">
                        <div class="productB-RC">
                            <productName @tagb="productN" :prop="productType" :list="listA" :oldText="oldText"></productName>
                            <productBanner @tagb="productBn" :list="listA" :oldText="oldText"></productBanner>
                            <onOff @tagb="tagN" :prop="productType" :list="listA" :oldText="oldText"></onOff>
                            <div v-for="(item,i) in isSilder" :key="i" :prop="item.props" :is="item.com"></div>
                        </div>
                    </div>
                </EasyScrollbar>
            </div>
        </div>
        <div class="productF">
            <span class="commit" @click="commitF" :class="{rubberBand:addbounceIn,animated:addbounceIn}">完成</span>
        </div>
        <div class="info" v-show="infoS" :class="{shake:addShake,animated:addShake}">
            <div class="infoH">
                <span class="ts">提示</span>
                <span class="infoC iconfont icon-close" @click.stop="closeI"></span>
            </div>
            <div class="infoB">
                <div class="sleNum">{{addF}}最多选择<span>{{count}}</span>条{{productType}}</div>
                <span class="iKnow" @click="iKnow">我知道了</span>
            </div>
        </div>

        <!-- <div class="info" v-show="infoS2" :class="{shake:addShake,animated:addShake}"> -->
            <!-- <div class="infoH">
                <span class="ts">提示</span>
                <span class="infoC iconfont icon-close" @click.stop="closeI2"></span>
            </div> -->
            <!-- <div class="infoB">
                <div class="sleNum">请在左侧选择您要修改的产品或者服务</div>
                <span class="iKnow" @click="iKnow2">我知道了</span>
            </div> -->
        <!-- </div> -->
    </div>
</template>
<script>
import productCommon from './productCommon.js'
import productName from './productName.vue'
import onOff from './switch.vue'
import productBanner from './productBanner.vue'
    export default {
        name:'productBufferPool',
          components: {
            productName,
            productBanner,
            onOff,
        },
        data(){
            return {
                inNum:0,
                addShake:false,
                addbounceIn:false,
                count:100,
                addF:'请先添加商品,',
                productT:"产品",
                productType:'产品',
                infoS:false,
                infoS2:false,
                components:[
                    productName,
                    productBanner,
                    onOff,
                ],
                isSilder:[],
                settingData:{
                    title:"aa",
                    attr:{
                        value:null
                    },
                    NameHoverColor:{
                        value:'#f90'
                    }
                },
                // myProBarOption:{
                //     barColor:"red",
                //     autohidemode:false,//自动隐藏模式
                // },
                // myBarOption2:{
                //     barWidth:6,//滚动条宽度
                //     autohidemode:true,//自动隐藏模式
                // },
                showV:true,
                bottom:-23,
                width:1250,
                height:700,
                backgroundColor:'#eee',
                style: {
                    width: 1250,
                    height: 700,
                    left: '50%',
                    top: '50%',
                    mL:'-625px',
                    mT:'-350px',
                },
                lists:[
                    {
                        name:"",
                        advertisementText:"",
                        fLabel:""
                    }
                ],
                productList:[
                    // {
                    //     advertisementText:"",
                    //     fLabel:"",
                    //     id:"978836138439741440",
                    //     mainImage:"http://image.zuma.com/upload/973916109061925764.jpg?_=0.7968846346723106",
                    //     name:"松香门第 书柜 实木书柜书架书橱 松木组合书柜带门wwe",
                    //     priceStr:"￥2.00",
                    //     productSku:"1",
                    //     url:"http://www.zuma.com/productInfo/productInfo?fId=978836138439741440",
                    // },
                ],
                setData:{
                    name:'',
                    advertisementText:'',
                    fLabel:'',
                },
                oldText:{
                    oldProductName:'',
                    oldadver:'',
                    oldfLabel:''
                },
                changeN:false,
                changeF:false,
                newPlist:[]

            }
        },
        computed:{
            listA(){
                if(this.lists.length == 0){
                    this.lists = [
                        {
                            name:"",
                            advertisementText:"",
                            fLabel:""
                        }
                    ]
                }
                // console.log
                return this.lists
            }
        },
        watch:{
            productList:{
                handler(){
                    this.lists = []
                    // this.productList = zmEditor.$store.state.product.assignData ? zmEditor.$store.state.product.assignData : this.productList
                    if(zmEditor.$store.state.product.productUrl.indexOf('product') > -1){

                        this.productType = '产品'
                        this.productList = zmEditor.$store.state.component.selectList[0].settingData.assignProductData ? zmEditor.$store.state.component.selectList[0].settingData.assignProductData:this.productList

                    }else if(zmEditor.$store.state.product.productUrl.indexOf('service') > -1){

                        this.productType = '服务'
                        this.productList = zmEditor.$store.state.component.selectList[0].settingData.assignServerData ? zmEditor.$store.state.component.selectList[0].settingData.assignServerData:this.productList
                    }
                    this.productList.forEach((element,index) => {
                        if(element.isSelect){
                            this.lists.push(element)
                        }
                    })
                    this.lists = [...new Set(this.lists)];
                    if(this.productList.length > 100){
                        this.productList.splice(100)//只获取最新的100条数据
                        this.infoS = true
                    }

                    if(zmEditor.$store.state.product.productUrl.indexOf('product') > -1){

                        zmEditor.$store.state.component.selectList[0].settingData.isProductAssign = true//设置指定数据面板显示;
                        zmEditor.$store.state.component.selectList[0].settingData.assignProductData = this.productList
                        // zmEditor.$store.commit("setAssignData",this.productList); //设置指定产品数据;
                    }else if(zmEditor.$store.state.product.productUrl.indexOf('service') > -1){
                        // if(zmEditor.$store.state.product.productUrl.indexOf('service') > -1)
                        zmEditor.$store.state.component.selectList[0].settingData.isServerAssign = true//设置指定数据面板显示;
                        zmEditor.$store.state.component.selectList[0].settingData.assignServerData = this.productList
                    }

                    zmEditor.$store.state.component.selectList[0].lists = this.productList;
                    zmEditor.$store.state.component.selectList[0].lists = Object.assign(
                        [],
                        zmEditor.$store.state.component.selectList[0].lists
                    );
                    
                    zmEditor.$store.state.component.selectList[0].settingData.ValidData = []
                    this.productList.forEach((element,index)=>{
                        let obj = {
                            id:element.id
                        }
                        zmEditor.$store.state.component.selectList[0].settingData.ValidData.push(obj)
                    })
                },
                deep:true,
            }
        },
        created(){
            let that = this;

            if(zmEditor.$store.state.product.productUrl.indexOf('product') > -1){
                this.productType = '产品'
                this.productList = zmEditor.$store.state.component.selectList[0].settingData.assignProductData ? zmEditor.$store.state.component.selectList[0].settingData.assignProductData:this.productList
            }else if(zmEditor.$store.state.product.productUrl.indexOf('service') > -1){
                this.productType = '服务'
                this.productList = zmEditor.$store.state.component.selectList[0].settingData.assignServerData ? zmEditor.$store.state.component.selectList[0].settingData.assignServerData:this.productList
            }
            // this.productList = zmEditor.$store.state.product.assignData ? zmEditor.$store.state.product.assignData:this.productList
            this.productList.forEach(element => {
                element.isSelect = false
            });
            let file = '/set/sliders.vue';
            const component = () => import('../../../../../components' + file);
            this.isSilder.push({com:component,props:{
                                            title: '标签颜色',
                                            attr: 'fLabelBgColor',
                                            param: 'color',
                                            minVal: 0,
                                            maxVal: 100,
                                            value:zmEditor.$store.state.component.selectList[0].settingData.fLabelBgColor.value,
                                            decimalNum: 0,
                                        }},{com:component,props:{
                                            title: '文字颜色',
                                            attr: 'fLabelTColor',
                                            param: 'color',
                                            minVal: 0,
                                            maxVal: 100,
                                            value:zmEditor.$store.state.component.selectList[0].settingData.fLabelTColor.value,
                                            decimalNum: 0,
                                        }});

        },
        methods:{
            mousedown22(e) {
                const downX = e.clientX;
                const downY = e.clientY;
                const sourceX = this.$el.offsetLeft;
                const sourceY = this.$el.offsetTop;
                // const oldIndex = this.style.zIndex;
                // this.style.zIndex = 10000;
                document.onmousemove = _.throttle(e => {
                    const movX = e.clientX;
                    const movY = e.clientY;
                    const left = movX - downX + sourceX;
                    const top = movY - downY + sourceY;
                    this.style.left = left + 'px'
                    this.style.top = top + 'px'
                    this.style.mL = ''
                    this.style.mT = ''
                }, 100)
                document.onmouseup = (e) => {
                    document.onmousemove = null;
                    document.onmouseup = null;
                    // this.style.zIndex = oldIndex;
                }
            },
            dialog71(){
                /*
                    modules 模块product service
                    nowLength 当前多少条数据
                    totalLenght 达到多少条数据报警告
                    multiple  true是多选 false是单选
                    warningText 警告文字
                    callBack 回调函数
                */
                let _this = this;
                let m
                if(this.productType == '产品'){
                    m = 'product'
                }else if(this.productType == '服务'){
                    m = 'service'
                }
                let warn = '最多选择'+this.count+'条产品'
                productCommon.choiceModules({
                    nowLength: this.productList.length,
                    totalLenght: 100,
                    multiple: true,
                    warningText: warn,
                    modules: m,
                    callBack: _this.productC
                }); //7-1选择产品或服务数据;
            },
            iKnow(){
                this.infoS = false
                // this.dialog71()
            },
            iKnow2(){
                this.infoS2 = false
            },
            closeI(){
                this.infoS = false
            },
            closeI2(){
                this.infoS2 = false
            },
            productBn(v){
                this.changeF = true
                this.setData.advertisementText = v
            },
            productN(v){
                this.changeN = true
                this.setData.name = v
            },
            tagN(v){
                this.setData.fLabel = v
            },
            commitF(){
                this.infoS = false

                this.addbounceIn = true
                setTimeout(()=>{
                        this.addbounceIn = false
                },500)
                if(this.lists.length == 0 || this.lists[0].id == undefined){
                    // alert("请在左侧选择您要修改的产品")
                    // if(this.productList.length != 0){
                    //     this.infoS2 = true
                    //     this.addF = '请先添加商品,'
                    // }else{
                    //     this.infoS = true
                    // }
                    
                    // this.addShake = true
                    // setTimeout(()=>{
                    //     this.addShake = false
                    // },500)
                }else{
                    let [id,name,advertisementText,fLabel] = [this.lists[0].id,this.setData.name,this.setData.advertisementText,this.setData.fLabel]
                    let url
                    if(this.productType == '产品'){
                        // url = '/product/webbuilder-api/product/updateProductInfoByParam'
                        url = '/product-api/updateProductInfoByParam'
                    }else if(this.productType == '服务'){
                        url = '/service/webbuilder-api/serviceNote/updateShopServiceInfoByParam'
                    }
                    let that = this
                    this.$axios({
                        method: 'post',
                        url:url,
                        headers:{"Content-Type": "application/x-www-form-urlencoded","X-Requested-With": "XMLHttpRequest"},
                        responseType:'json',
                        params: {
                            id,
                            newName:name,
                            newAdvertisementText:advertisementText,
                            label:fLabel
                        }
                    }).then((res)=>{
                        console.log("数据提交成功")
                        // zmEditor.$store.commit("setAssignData", that.productList); //设置指定数据;
                        if(zmEditor.$store.state.product.productUrl.indexOf('product') > -1){
                            // this.productType = '产品'
                            zmEditor.$store.state.component.selectList[0].settingData.assignProductData = that.productList
                        }else if(zmEditor.$store.state.product.productUrl.indexOf('service') > -1){
                            // this.productType = '服务'
                            zmEditor.$store.state.component.selectList[0].settingData.assignServerData = that.productList
                        }
                        that.productList.forEach((element,index)=>{
                            if(element.id == id){
                                if(that.changeN){
                                    element.name = name
                                }else{
                                    element.name = that.oldText.oldProductName
                                }
                                if(that.changeF){
                                    element.advertisementText = advertisementText
                                }else{
                                    element.advertisementText = that.oldText.oldadver
                                }
                                element.fLabel = fLabel
                            }
                        })
                        zmEditor.$store.state.component.selectList[0].lists = that.productList;
                        zmEditor.$store.state.component.selectList[0].lists = Object.assign(
                            [],
                            zmEditor.$store.state.component.selectList[0].lists
                        );

                        that.addbounceIn = true
                        setTimeout(()=>{
                            that.addbounceIn = false
                        },100)
                    }).catch((res)=>{
                        console.log("数据提交失败")
                    })
                }
            },
            addProduct(){
                this.infoS2 = false
                this.addF = ''
                // if(this.inNum == 0 || this.productList.length == 0){
                //     // this.infoS = true
                //     this.addShake = true
                //     setTimeout(()=>{
                //         this.addShake = false
                //     },500)
                // }else if(this.inNum == 1 && this.productList.length > 0){
                //     this.dialog71()
                // }
                this.addShake = true
                setTimeout(()=>{
                    this.addShake = false
                },500)
                this.dialog71()
  
            },
            productC(v){
                let newA = []
                for(let i =0;i<v.length;i++){
                //   if(v[i].hasPupupChild == 0){//如果只有母体没有子体就不添加该母体数据，只添加子体数据

                //     }else{
                //         newA.push(v[i])
                //   }
                    newA.push(v[i])
                }
                v = newA
                let lenA = this.productList.length
                let lenA2 = v.length
                for(let i=0;i<lenA;i++){
                    for(let j=0;j<lenA2;j++){
                        if(v[j].id == this.productList[i].id){
                            v.splice(j,1)
                            lenA2--
                        }
                    }
                }
                v.forEach((element,index)=>{
                    element.isSelect = false
                    if(this.productType == '产品'){
                        element.dataSourse = 'product'
                    }else if(this.productType == '服务'){
                        element.dataSourse = 'service'
                    }
                    this.productList.push(element)
                })
                this.inNum = 1
                console.log('成功添加产品------',this.productList)
            },
            closeP(){
                // $(event.currentTarget).parent().parent().remove()
                // zmEditor.$store.commit("setBufferPoll",false);//关闭产品缓冲池
                zmEditor.$store.commit('changeCustomerPaneData',{key: 'paneType',value: false}) //true为打开 false 为关闭
                zmEditor.$store.commit('changeCustomerPaneData',{key: 'paneMode',value: '/com/product/productManage/productAssign/productBufferPool.vue'})
            },
            isSelectF(i){
                this.lists = []
                this.productList.forEach((element,index) => {
                    if(index == i){
                        element.isSelect = !element.isSelect
                    }else{
                        element.isSelect = false
                    }
                    if(element.isSelect){
                        this.lists.push(element)
                    }
                })
                this.lists = [...new Set(this.lists)] 
                this.oldText.oldProductName = this.lists[0]?this.lists[0].name :''
                this.oldText.oldadver = this.lists[0]?this.lists[0].advertisementText:''
            },
            removeBoxS(){
                this.bottom = 0
            },
            removeBoxH(){
               this.bottom = -23
            },
            removeProduct(index){
                this.lists = []
                this.productList.splice(index,1)
                this.productList.forEach((element,index) => {
                    if(element.isSelect){
                        this.lists.push(element)
                    }
                })
                this.lists = [...new Set(this.lists)]; 
            }
        },
    }
</script>
<style scoped lang="less">
    .zm-productH{
        border-radius:10px;
        box-shadow: 0px 0px 5px #A9A9A9;
        background-color: #fff;
        position: absolute;
    }
    .info{
        position: absolute;
        width: 280px;
        height: 150px;
        background-color: #eee;
        border-radius: 10px;
        left: 40%;
        top:50%;
        margin-left: -140px;
        margin-top:-75px;
        
    }
    .infoH{
        width:100%;
        height: 38px;
        box-sizing: border-box;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        background-color: #3089D5;
        line-height: 38PX;
    }
    .ts{
        margin-left: 10PX;
        color: #FFF;
        font-size: 14px;
    }
    .infoC{
        position: absolute;
        right: 7px;
        top: 5px;
        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        background-color: hsla(0,0%,100%,.5);
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
    }
    .infoB{
        width:100%;
        height: 112px;
        box-sizing: border-box;
        border-bottom-left-radius:10px;
        border-bottom-right-radius:10px;
        background-color: #fff;
        box-shadow: 0px 0px 5px #A9A9A9;
        /* line-height: 38PX; */
    }
    .sleNum{
        padding-top:10px;
        margin-left:10px;
        color: #797979;
    }
    .sleNum span{
        /* color: #9900CC; */
    }
    .iKnow{
        width: 80px;
        height: 22px;
        border-radius:2px;
        background-color: #3089D5;
        line-height: 22px;
        text-align: center;
        color: #fff;
        font-size: 12px;
        margin:0  auto;
        margin-top:50px;
        cursor: pointer;
        display: block;
    }
    .productH{
        width:100%;
        height:50px;
        background-color:#3089D5;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        position: relative;
        cursor:move;
    }
    .productC{
        position: absolute;
        right: 20px;
        top: 10px;
        width: 26px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        background-color: rgba(255,255,255,.5);
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
    }
    .productC:hover{
        background-color: rgba(255,255,255,.8);
    }
    .productT{
        position: absolute;
        left: 23px;
        top: 13px;
        font-size: 18px;
        font-weight: 500;
        color:#fff;
        font-size: 16px;
    }
    .productB{
        width:100%;
        height: 600px;
        /* background-color: #563452; */
        border-left: 1px solid #D7D7D7;
        border-right: 1px solid #D7D7D7;
        border-bottom: 1px solid #D7D7D7;
    }
    .productB-L,.productB-R{
        height: 600px;
        display: inline-block;
        
    }
    .productB-L{
        width:942px;
        /* background-color: #ca6d6d; */
        border-right: 1px solid #D7D7D7;
        
    }
    .productB-LH{
        width:100%;
        height:45px;
        border-bottom: 1px solid #D7D7D7;
        /* background-color: green; */
        line-height: 45px;
        position: relative;
    }
    .ld{
        width: 15px;
        height: 17px;
        color:#FF6600;
    }
    .ldt{
        color:#797979;
        margin-left:5px;
        font-size: 12px;
    }
    .productB-LHL,.productB-LHR{
        display: inline-block;
    }
    .productB-LHL{
        /* width: 100px; */
        height: 30px;
        line-height: 30px;
        position:absolute;
        left: 20px;
        top: 50%;
        margin-top:-15px;
        /* background-color: #308985; */
    }
    .productB-LHR{
        width: 100px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color:#fff;
        border-radius:5px;
        background-color: #3089D5;
        text-align: center;
        position:absolute;
        right:10px;
        top: 50%;
        margin-top:-15px;
        cursor: pointer;

    }
    .productB-LB{
        width:100%;
        height:auto;
        /* background-color: #fff; */
        padding:20px;
        overflow: hidden;
    }
    .productB-LB > ul >li{
        margin-left:10px;
        float: left;
        cursor: pointer;
    }
    .productB-LB > ul >li:nth-child(n+8){
        margin-top:10px;
    }
    /* .productB-LB > ul >li:nth-child(-n+7){
        margin-left:0px;
    } */
    .productB-LB > ul >li:nth-child(7n+1){
        margin-left:0px;
    }
    .imgBox{
        width: 120px;
        height: 120px;
        background-size: cover;
        position:relative;
        overflow: hidden;
    }
    /* .imgBox::before{

    } */
    .ImgIndex{
        position:absolute;
        left:5px;
        top:5px;
        width:18px;
        height:18px;
        border-radius:50%;
        background-color:rgba(255,255,255,.8);
        font-size:10px;
        line-height:18px;
        text-align:center;
        transition: all 0.5
    }
    .dg{
        position:absolute;
        right:5px;
        top:5px;
        width:20px;
        height:20px;
        border-radius:2px;
        background-color: #3089D5;
        line-height:20px;
        text-align:center;
        color:#fff;
        z-index: 5;
    }
    .imgVien{
        position:absolute;
        left:0px;
        top:0px;
        width:100%;
        height:100%;
        background-color: rgba(48, 152, 213, 0.3);
    }
    .removeBox{
        position:absolute;
        left:0px;
        bottom:-23px;
        width:100%;
        height:23px;
        background-color: rgba(0,0,0,.5);
        transition: all 0.5
    }
    .imgBox:hover .removeBox{
        /* transform: translateY(0) */
        bottom:0px;
    }
    .removeIcon{
        position:absolute;
        right:3px;
        bottom:5px;
        width:14px;
        height:14px;
        color: #fff;
    }
    .productB-R{
        width:300px;
    }
    .productF{
        width:100%;
        height: 50px;
        position: relative;
        line-height: 50px;
    }
    .commit{
        position: absolute;
        right:20px;
        top:9px;
        width: 100px;
        height: 28px;
        line-height:28px;
        text-align: center;
        color: #fff;
        font-size: 13px;
        background-color: #3089D5;
        border-radius:4px;
        cursor: pointer;
    }
    .productB-RC{
        width:100%;
        height:auto;
        overflow: hidden;
    }
    /* 点击添加产品、服务按钮动画========================================end */
    .animated {
        -webkit-animation-duration: 0.8s;
        animation-duration: 0.8s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    @-webkit-keyframes shake {
        from,
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }

        10%,
        30%,
        50%,
        70%,
        90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
        }

        20%,
        40%,
        60%,
        80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
        }
    }

    @keyframes shake {
        from,
        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }

        10%,
        30%,
        50%,
        70%,
        90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
        }

        20%,
        40%,
        60%,
        80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
        }
    }

    .shake {
        -webkit-animation-name: shake;
        animation-name: shake;
    }
    /* 点击添加产品、服务按钮动画========================================end */

    /* 点击完成按钮动画========================================start */
    /* 点击完成按钮动画2 */
    @-webkit-keyframes rubberBand {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }

        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
        }

        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
        }

        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
        }

        65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
        }

        75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        }

        @keyframes rubberBand {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }

        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
        }

        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
        }

        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
        }

        65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
        }

        75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
        }

        .rubberBand {
            -webkit-animation-name: rubberBand;
            animation-name: rubberBand;
        }
    /* 点击完成按钮动画========================================end */
</style>

