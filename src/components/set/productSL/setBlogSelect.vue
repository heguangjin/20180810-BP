<template>
    <div class="zm-dialog-sortord1">
        <span class="zm-dialog-Icon-titleType">商品类型:</span>
        <div class="zm-dialog-Icon" @click="addSelClass()" v-bind:class="{'zmicon_hover':isHover}">
            <span class="number">{{RandomSN}}</span>
            <i class="iconfont icon-sanjiao-copy icon_triangle"></i>
        </div>
        <div class="bline" style="width:256px;height:1px;background-color:#d7d7d7;position:absolute;top:52px;"></div>
        <ul class="zm-dialog-random" v-show="isShow">
            <li data-type="random" @click.stop="selectF(0)"><span class="random">产品</span></li>
            <li data-type="time" @click.stop="selectF(1)"><span class="time">服务</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"set-blog-select",
    props:['prop'],
    data(){
        return {
            isShow:false,
            isHover:false,
            RandomSN:""
        }
    },
    created(){
        let nowVue = zmEditor.$store.state.component.selectList[0]
        let index = nowVue.typeIndex 
        if(index == 0){
            this.RandomSN = "产品"
        }else if(index == 1){
            this.RandomSN = "服务"
        }
        // this.RandomSN = nowVue.RandomSN
    },
    methods:{
        selectF(index){
            let nowVue = zmEditor.$store.state.component.selectList[0]
            nowVue.typeIndex = index
            this.$emit("selectProduct",index)
            
            if(index == 0){
                this.RandomSN = "产品"
            }else if(index == 1){
                this.RandomSN = "服务"
            }
            nowVue.RandomSN = this.RandomSN
            this.isShow = false
        },
        addSelClass(){
            let _this = this;
                _this.isShow = !_this.isShow;
                _this.isHover = ! _this.isHover;
        },
    }
}
</script>
