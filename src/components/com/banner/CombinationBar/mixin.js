export default {
    data(){
        return {
            style: {
                width: '100%',
                height: '100%',
            },
            dx:0,
            dw:0,
            totalPer:0,
            totalTwoWidth:0,
            nowElWidth:0,
            nowElWidth2:0,
            nextElPer:0,
            nextElWidth2:0,
            preElWidth:0,
            preElWidth2:0,
            preElPer:0,
            DOMRect:null
        }
    },
    methods:{
        bannerOneClick(){//组合横条中每一列的单击事件
          let obj
          let ColumnLabel = $(event.currentTarget).find(".banner-Column-label")
          let DOMRect = $(event.currentTarget)[0].getBoundingClientRect()
          this.$emit("titleChanged",this.index,obj,this.$refs.video,ColumnLabel,DOMRect)
        },
        dblclick(){//双击弹出设置项
          if(!this.isComputer) return
          this.bannerTitle = "横条设置"
          this.nowIndex = 1;
          zmEditor.$store.commit('setBackgroundData', {key: 'comType', value: 'banner'});
          zmEditor.$store.commit('changePaneData', {key: 'paneType', value: true});
          zmEditor.$store.commit('changePaneData', {key: 'paneTitle', value: this.bannerTitle});
          zmEditor.$store.commit('changePaneData', {key: 'paneIcon', value: ''});
          zmEditor.$store.commit('changePaneData', {key: 'paneMode', value: "/editor/pane/backgroundPreview.vue"});
          zmEditor.$store.commit('setBackgroundData', {key: 'nowShowStyle', value: 'img'});
          this.backgroundArr[this.index].tabIndex = this.nowIndex;
        },
        resizedown(str){//左右拖动按钮拖动事件
          let that = this
          this.dx = event.clientX;//当你第一次单击的时候，存储x轴的坐标。
          this.nowElPer = (parseFloat(this.items[this.index].width)/100).toFixed(4)
          this.nextElPer = this.items[this.index+1]?(parseFloat(this.items[this.index+1].width)/100).toFixed(4):0
          this.preElPer = this.items[this.index-1]?(parseFloat(this.items[this.index-1].width)/100).toFixed(4):0
          this.totalPer = parseFloat(this.nowElPer) + parseFloat(this.nextElPer)
          this.totalTwoWidth = parseFloat((this.totalWidth*this.totalPer).toFixed(4))
          
          this.nowElWidth = parseFloat(this.nowElPer*this.totalWidth)
          this.nextElWidth = parseFloat(this.nextElPer*this.totalWidth)
          this.preElWidth = parseFloat(this.preElPer*this.totalWidth)
          document.onmousemove = function (event) {
            if(str.trim() == 'right'){
              that.dw = event.clientX - that.dx
              that.nowElWidth2 = that.dw + parseFloat(that.nowElWidth)
              that.nextElWidth2 = parseFloat(that.nextElWidth) - that.dw
              if (that.nowElWidth2 <= 50) {//当盒子缩小到一定范围内的时候(现在设置最小宽度为横条宽度的0.05倍(即5%))，让他保持一个固定值，不再继续改变
                  that.nowElWidth2 = 50
                  that.nextElWidth2 = (that.nowElWidth -50) + that.nextElWidth
              }
              if (that.nextElWidth2 <= 50) {
                  that.nowElWidth2 = that.nowElWidth + (that.nextElWidth -50)
                  that.nextElWidth2 = 50
              }
              that.nowElPer = that.nowElWidth2 /parseFloat(that.totalWidth)
              that.nextElPer = that.nextElWidth2/parseFloat(that.totalWidth)
              that.$emit("widthChange",str,that.index,that.nowElPer,that.nextElPer)
              that.$emit("ColumnResizeShow",that.index,str)
            }else if(str.trim() == 'left'){
              that.dw = that.dx - event.clientX 
              that.nowElWidth2 = that.dw + parseFloat(that.nowElWidth)
              that.preElWidth2 = parseFloat(that.preElWidth) - that.dw
              if (that.nowElWidth2 <= 50) {//当盒子缩小到一定范围内的时候(现在设置最小宽度为横条宽度的0.05倍(即5%))，让他保持一个固定值，不再继续改变
                  that.nowElWidth2 = 50
                  that.preElWidth2 = (that.nowElWidth -50) + that.preElWidth
              }
              if (that.preElWidth2 <= 50) {
                  that.nowElWidth2 = that.nowElWidth + (that.preElWidth -50)
                  that.preElWidth2 = 50
              }
              that.nowElPer = that.nowElWidth2 /parseFloat(that.totalWidth)
              that.preElPer = that.preElWidth2/parseFloat(that.totalWidth)
              that.$emit("widthChange",str,that.index,that.nowElPer,that.preElPer)
              that.$emit("ColumnResizeShow",that.index,str)
            }
          }
          document.onmouseup = function (event) {
            document.onmousedown = null
            document.onmousemove = null
            // that.$emit("widthChange2")
            that.$emit("ColumnResizeShow",that.index)
          }
        },
        resizedownMb(){//移动端拖动事件
            let that = this
            let nowElHeight = this.items[this.index].height
            this.dx = event.clientY;//当你第一次单击的时候，存储x轴的坐标。
            document.onmousemove = function (event) {
                let totleHeight = 0
                that.dw = event.clientY - that.dx
                totleHeight = that.dw + nowElHeight
                // that.$emit("heightChange",that.index,that.dw)
                that.$emit("widthChange2",that.index,that.dw,totleHeight)
            }
            document.onmouseup = function (event) {
                document.onmousedown = null
                document.onmousemove = null
            }
        }
    },
    mounted:function(){
        console.log('isComputer------------',this.isComputer)
        this.$emit("videoT",this.$refs.video,this.index)
    }
}
