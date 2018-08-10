<template>
    <div class="pN">
        <div class="n">{{prop}}{{name}}</div>
        <textarea @blur="tBlur" @focus="tFocus" @input="nameC" :class="{nT2:ntS}"  class="nT" maxlength="200" v-model="list[0].name"></textarea>
        <div class="bottomW"></div>
    </div>
</template>
<script>
    export default {
        name:'productName',
        props: ["prop","list","oldText"],
        data(){
            return {
                ntS:false,
                name:"名称",
                nameText:"经典女款短袖t恤韩版女装圆领印花时尚美女无袖",
                oldProductName:null,
                initList:[
                    {
                        name:"",
                        advertisementText:"",
                        fLabel:""
                    }
                ]
            }
        },
        computed:{
            listA(){
   
                this.list = this.list[0]?this.list[0]:this.initList[0]
        
                return this.list
            }
        },
        created(){

            this.list = this.list[0]?this.list:this.initList
        },
        methods:{
            nameC(){
                
                if(event.currentTarget.value.trim().length == 0){
                    // this.list[0].name = this.oldProductName
                    this.list[0].name = this.oldText.oldProductName
                }else{
                    this.list[0].name = event.currentTarget.value
                }
                // this.$emit('productn',this.list[0].name)
                this.$emit('tagb',this.list[0].name)

            },
            tBlur(){
                this.ntS = false
            },
            tFocus(){
                this.ntS = true
            }
        },
    }
</script>
<style scoped>
    .bottomW{
        position: absolute;
        bottom: 0px;
        width: 260px;
        height: 1px;
        background-color: #d7d7d7;
    }
    .pN{
        width:100%;
        height: 120px;
        /* background-color: #eee; */
        padding: 0px 20px;
        font-size: 14px;
        color:#797979;
        position: relative;
    }
    .n{
        padding-top: 10px;
        color:#797979;
        font-size: 12px;
    }
    textarea{
        font-size:12px;
    }
    .nT{
        width: 260px;
        height: 70px;
        margin-top: 10px;
        padding: 5px;
        resize: none;
        border: none;
        color:#797979;
    }
    .nT:hover{
        border:1px solid #3089D5;
        border-radius:2px;
        /* box-shadow: 0px 0px 5px #3089D5; */
    }
    .nT2{
        border:1px solid #3089D5;
        border-radius:2px;
        box-shadow: 0px 0px 5px #3089D5;
    }

</style>

