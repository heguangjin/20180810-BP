export default {
    data () {
        return {
          id: this.prop.id,
          type:"product",
          mold:"commonProduct",
          style:this.prop.style,
          settingData:this.prop.settingData,
        }
      }, 
      methods:{
          productLink(href){//点击查看详情
            // location.href = href
            window.open(href, "_blank")
          },
          newData() {//最新数据;
              //单一产品数据请求=============================================================start
            //   let url = '/product-api/getProductList';//获取产品数据
              let url = "/product_web/product-api/getProductList"
              if(url.indexOf('product') > -1){
                  this.dataSource='productData'//数据来源类型，分产品(productData)和服务(serviceData)
              }else if(url.indexOf('service') > -1){
                  this.dataSource='serviceData'//数据来源类型，分产品(productData)和服务(serviceData)
              }
              let data={};
              let that = this
              this.$axios.post(url,{},
                  {
                  headers: {
                      "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                      "X-Requested-With": "XMLHttpRequest"
                  }}).then(function(response){
                    console.log('预览模式数据请求成功------------------')
                      let result = response.data.data;
                      let newArr=[]
                      result.forEach((element,index)=>{
                          if(element.childItem && (element.childItem.length > 0)){
                          // if(element.childItem.length != 0){
                              // newArr.push(...element.childItem)
                          }else{
                              newArr.push(element)
                          }
                      })
                      newArr.forEach((element,index)=>{
                              let re
                              // if(that.settingData.productLayout == 1){
                              //     re = newArr[that.settingData.productLayout-1]
                              // }else if(that.settingData.productLayout == 2){
                              //     re = newArr[that.settingData.productLayout-1]
                              // }else if(that.settingData.productLayout == 3){
                              //     re = newArr[that.settingData.productLayout-1]
                              // }else if(that.settingData.productLayout == 4){
                              //     re = newArr[that.settingData.productLayout-1]
                              // }

                              re = newArr[0]
                              // that.dataSource='productData'//数据来源类型，分产品(productData)和服务(serviceData)
                              that.settingData.productImg = re.mainImage
                              that.settingData.productName = re.name
                              that.settingData.productBanner = re.advertisementText
                              that.settingData.productHref = re.url
                              that.settingData.productId = re.id
                              that.settingData.productPrice = re.priceStr
                              that.settingData.productSku = re.productSku
                              
                          // }
                      })
                  }).catch( function(response) {
                      // 这里是处理错误的回调
                      console.log('数据请求失败',response)
              });
              //单一产品数据请求=============================================================end
          },
          ValidData(url, ValidID,businessType) {//指定数据过滤下架数据;
            let _this = this;
            let nowData = _this.settingData.nowData
            _this.$axios
                .post(url, "idListStr=" +JSON.stringify(ValidID)+"&businessType="+businessType, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                }
                })
                .then(function(response) {
                    var data = response.data.data;
                    console.log('data------------',data)
                    if(data[0].status == 0 && data[0].id == nowData[0].id){
                        // console.log("realValidData-------",realValidData)
                        _this.settingData.productImg = nowData[0].mainImage
                        _this.settingData.productName = nowData[0].name
                        _this.settingData.productBanner = nowData[0].advertisementText
                        _this.settingData.productHref = nowData[0].url
                        _this.settingData.productId = nowData[0].id
                        _this.settingData.productPrice = nowData[0].priceStr
                        _this.settingData.productSku = nowData[0].productSku
                    }else{
                        _this.settingData.productImg = ''
                        _this.settingData.productName = ''
                        _this.settingData.productBanner = ''
                        _this.settingData.productHref = ''
                        _this.settingData.productId = ''
                        _this.settingData.productPrice = ''
                        _this.settingData.productSku = ''

                        // _this.oldProductIfo.productImg = nowData[0].mainImage
                        // _this.oldProductIfo.productName = nowData[0].name
                        // _this.oldProductIfo.productBanner = nowData[0].advertisementText
                        // _this.oldProductIfo.productId = nowData[0].id
                        // _this.oldProductIfo.productHref = nowData[0].url
                        // _this.oldProductIfo.productPrice = nowData[0].priceStr
                        // _this.oldProductIfo.productSku = nowData[0].productSku
                    }
                })
                .catch(function(err) {
                    console.log('指定数据请求失败');
                });
        },
      },
      created() {
        let ValidData = this.settingData.ValidData
        // let typeID = this.settingData.typeId;
        let typeName = this.settingData.ValidDataType
        let url;
        switch (typeName) {
            case "指定产品":
            case "指定服务":
                let businessType
                if(typeName == "指定产品"){
                    businessType = 10
                }else if(typeName == "指定服务"){
                    businessType = 20
                }
                url = "/website-api/check-data/queryValidity"//获取过滤下架数据的数据;
                this.ValidData(url,ValidData,businessType)
                break;
            default:
                this.newData()
                break;
        }
      },
}