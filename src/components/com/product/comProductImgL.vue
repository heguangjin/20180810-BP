<template>
    <!-- PC端 -->
    <div v-if="isComputer" :id="id" class="zm-component-single" :style="{overflow:'hidden',position: 'absolute', width: style.width+'px',height: style.height+'px',left: style.left+'px',top: style.top+'px',zIndex: style.zIndex,boxShadow:settingData.boxShadow}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
        <!-- 单一商品图片在上 -->
        <div v-if='settingData.productLayout==1' :productSource='dataSource' :productId='settingData.productId' ref='product1' class="zm-component-product" :style="{backgroundColor:settingData.backgroundColor.value,width:style.width+'px'}">
            
            <div class="imgBox" :style="{overflow:'hidden',width:settingData.imgCss.imgW,height:settingData.imgCss.imgH}">
                <div class="zm-component-product-img" @click.stop='productLink(settingData.productHref)'  ref='img' :class="{image_magnify2:settingData.enlarge,image_shiftLeft2:settingData.leftMove,image_shiftTop2:settingData.topMove,image_emptiness2:settingData.blur}" :style="{backgroundSize:settingData.bgSize.value,backgroundPosition:settingData.bgPosition.value,width:settingData.imgCss.imgW,height:settingData.imgCss.imgH,backgroundImage:'url('+settingData.productImg+')'}">
                </div>
            </div>
            <div class="zm-component-product-title" :style="{height:settingData.cssObj.titleHeight + 'px',padding:settingData.cssObj.padding+'px',paddingTop:settingData.cssObj.paddingTop+'px'}">
                <div class="zm-component-product-title-text" @click.stop='productLink(settingData.productHref)' :style="{boxOrient:'vertical',marginRight:settingData.TitMarginRight.value,textIndent:settingData.TitTextIndent.value,textAlign:settingData.tit,marginBottom:settingData.marginBottom.value,lineHeight:settingData.lineHeight.value+'em',marginTop:settingData.TitmarginTop.value,fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}">{{settingData.productName}}</div>
                <div class="zm-component-product-title-type" v-if="settingData.productBanner && settingData.productBanner.length>0" v-show="settingData.bannerSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.bannerMarginRight.value,textIndent:settingData.bannerTitTextIndent.value,textAlign:settingData.bannertit,paddingBottom:settingData.bannermarginBottom.value,lineHeight:settingData.bannerlineHeight.value+'em',paddingTop:settingData.bannerTitmarginTop.value,fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{settingData.productBanner}}</div>
                <div class="zm-component-product-title-line">{{settingData.productBanner}}></div>
                <div class="zm-component-product-title-price" v-show="settingData.retailSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.retailmarginRight.value,textIndent:settingData.retailTitTextIndent.value,textAlign:settingData.retailtit,marginBottom:settingData.retailmarginBottom.value,paddingTop:settingData.retailTitmarginTop.value,fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{settingData.productPrice}}</div>
                <div class="zm-component-product-title-details" v-show="settingData.btnSwitchShow.value" :style="{marginTop:settingData.btnmarginTop.value,height:settingData.btnheight.value}"><span @click.stop='productLink(settingData.productHref)' class="zm-component-product-title-detailsp" :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
            </div>
            
        </div>

        <!-- 单一商品图片在下 -->
        <div v-if='settingData.productLayout==2' :productSource='dataSource' :productId='settingData.productId' ref='product1' class="zm-component-product" :style="{backgroundColor:settingData.backgroundColor.value,width:style.width+'px'}">
        
            <div class="zm-component-product-title" :style="{height:settingData.cssObj.titleHeight + 'px',padding:settingData.cssObj.padding+'px',paddingTop:settingData.cssObj.paddingTop+'px'}">
                <div class="zm-component-product-title-text" @click.stop='productLink(settingData.productHref)' :style="{boxOrient:'vertical',marginRight:settingData.TitMarginRight.value,textIndent:settingData.TitTextIndent.value,textAlign:settingData.tit,marginBottom:settingData.marginBottom.value,lineHeight:settingData.lineHeight.value+'em',marginTop:settingData.TitmarginTop.value,fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}">{{settingData.productName}}</div>
                <div class="zm-component-product-title-type" v-if="settingData.productBanner && settingData.productBanner.length>0" v-show="settingData.bannerSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.bannerMarginRight.value,textIndent:settingData.bannerTitTextIndent.value,textAlign:settingData.bannertit,paddingBottom:settingData.bannermarginBottom.value,lineHeight:settingData.bannerlineHeight.value+'em',paddingTop:settingData.bannerTitmarginTop.value,fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{settingData.productBanner}}</div>
                <div class="zm-component-product-title-line">{{settingData.productBanner}}></div>
                <div class="zm-component-product-title-price" v-show="settingData.retailSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.retailmarginRight.value,textIndent:settingData.retailTitTextIndent.value,textAlign:settingData.retailtit,marginBottom:settingData.retailmarginBottom.value,paddingTop:settingData.retailTitmarginTop.value,fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{settingData.productPrice}}</div>
                <div class="zm-component-product-title-details" v-show="settingData.btnSwitchShow.value" :style="{marginTop:settingData.btnmarginTop.value,height:settingData.btnheight.value}"><span @click.stop='productLink(settingData.productHref)' class="zm-component-product-title-detailsp" :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
            </div>
            <div class="imgBox" :style="{overflow:'hidden',width:settingData.imgCss.imgW,height:settingData.imgCss.imgH}">
                <div class="zm-component-product-img" @click.stop='productLink(settingData.productHref)'  ref='img' :class="{image_magnify2:settingData.enlarge,image_shiftLeft2:settingData.leftMove,image_shiftTop2:settingData.topMove,image_emptiness2:settingData.blur}" :style="{backgroundSize:settingData.bgSize.value,backgroundPosition:settingData.bgPosition.value,width:settingData.imgCss.imgW,height:settingData.imgCss.imgH,backgroundImage:'url('+settingData.productImg+')'}">
                </div>
            </div>

        </div>

        <!-- 单一商品图片在右 -->
        <div v-show='settingData.productLayout==3' :productSource='dataSource' :productId='settingData.productId' ref='product2' class="zm-component-product-x" :style="{backgroundColor:settingData.backgroundColor.value}">
            
            <div class="zm-component-product-title" :style="{height:settingData.cssObj.XtitleH+'px',width:settingData.cssObj.XtitleW+'px',padding:settingData.cssObj.padding+'px',paddingTop:settingData.cssObj.paddingTop+'px'}">
                <div class="zm-component-product-title-text" @click.stop='productLink(settingData.productHref)' :style="{boxOrient:'vertical',marginRight:settingData.TitMarginRight.value,textIndent:settingData.TitTextIndent.value,textAlign:settingData.tit,marginBottom:settingData.marginBottom.value,lineHeight:settingData.lineHeight.value+'em',marginTop:settingData.TitmarginTop.value,fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}">{{settingData.productName}}</div>
                <div class="zm-component-product-title-type" v-if="settingData.productBanner && settingData.productBanner.length>0" v-show="settingData.bannerSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.bannerMarginRight.value,textIndent:settingData.bannerTitTextIndent.value,textAlign:settingData.bannertit,paddingBottom:settingData.bannermarginBottom.value,lineHeight:settingData.bannerlineHeight.value+'em',paddingTop:settingData.bannerTitmarginTop.value,fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{settingData.productBanner}}</div>
                <div class="zm-component-product-title-line" v-show="settingData.DivisionSwitchShow.value" :style="{height:settingData.lineH.value,backgroundColor:settingData.lineBg.value,width:settingData.lineWidth.value +'%'}"></div>
                <div class="zm-component-product-title-price" v-show="settingData.retailSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.retailmarginRight.value,textIndent:settingData.retailTitTextIndent.value,textAlign:settingData.retailtit,marginBottom:settingData.retailmarginBottom.value,paddingTop:settingData.retailTitmarginTop.value,fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{settingData.productPrice}}</div>
                <div class="zm-component-product-title-details" v-show="settingData.btnSwitchShow.value" :style="{marginTop:settingData.btnmarginTop.value,height:settingData.btnheight.value}"><span @click.stop='productLink(settingData.productHref)' :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
            </div>
            <div class="imgBox" :style="{overflow:'hidden',height:settingData.cssObj.XimgH+'px',width:settingData.cssObj.XimgW+'px'}">
                <div class="zm-component-product-img" @click.stop='productLink(settingData.productHref)' :style="{backgroundSize:settingData.bgSize.value,backgroundPosition:settingData.bgPosition.value,height:settingData.cssObj.XimgH+'px',width:settingData.cssObj.XimgW+'px',backgroundImage:'url('+settingData.productImg+')'}" ref="Ximg" :class="{image_magnify2:settingData.enlarge,image_shiftLeft2:settingData.leftMove,image_shiftTop2:settingData.topMove,image_emptiness2:settingData.blur}">
                </div>
            </div>
        
        </div>

        <!-- 单一商品图片在左 -->
        <div v-show='settingData.productLayout==4' :productSource='dataSource' :productId='settingData.productId' ref='product2' class="zm-component-product-x" :style="{backgroundColor:settingData.backgroundColor.value}">
            
            <div class="imgBox" :style="{overflow:'hidden',height:settingData.cssObj.XimgH+'px',width:settingData.cssObj.XimgW+'px'}">
                <div class="zm-component-product-img" @click.stop='productLink(settingData.productHref)' :style="{backgroundSize:settingData.bgSize.value,backgroundPosition:settingData.bgPosition.value,height:settingData.cssObj.XimgH+'px',width:settingData.cssObj.XimgW+'px',backgroundImage:'url('+settingData.productImg+')'}" ref="Ximg" :class="{image_magnify2:settingData.enlarge,image_shiftLeft2:settingData.leftMove,image_shiftTop2:settingData.topMove,image_emptiness2:settingData.blur}">
                </div>
            </div>
            <div class="zm-component-product-title" :style="{height:settingData.cssObj.XtitleH+'px',width:settingData.cssObj.XtitleW+'px',padding:settingData.cssObj.padding+'px',paddingTop:settingData.cssObj.paddingTop+'px'}">
                <div class="zm-component-product-title-text" @click.stop='productLink(settingData.productHref)' :style="{boxOrient:'vertical',marginRight:settingData.TitMarginRight.value,textIndent:settingData.TitTextIndent.value,textAlign:settingData.tit,marginBottom:settingData.marginBottom.value,lineHeight:settingData.lineHeight.value+'em',marginTop:settingData.TitmarginTop.value,fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}">{{settingData.productName}}</div>
                <div class="zm-component-product-title-type" v-if="settingData.productBanner && settingData.productBanner.length>0" v-show="settingData.bannerSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.bannerMarginRight.value,textIndent:settingData.bannerTitTextIndent.value,textAlign:settingData.bannertit,paddingBottom:settingData.bannermarginBottom.value,lineHeight:settingData.bannerlineHeight.value+'em',paddingTop:settingData.bannerTitmarginTop.value,fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{settingData.productBanner}}</div>
                <div class="zm-component-product-title-line" v-show="settingData.DivisionSwitchShow.value" :style="{height:settingData.lineH.value,backgroundColor:settingData.lineBg.value,width:settingData.lineWidth.value +'%'}"></div>
                <div class="zm-component-product-title-price" v-show="settingData.retailSwitchShow.value" :style="{boxOrient:'vertical',marginRight:settingData.retailmarginRight.value,textIndent:settingData.retailTitTextIndent.value,textAlign:settingData.retailtit,marginBottom:settingData.retailmarginBottom.value,paddingTop:settingData.retailTitmarginTop.value,fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{settingData.productPrice}}</div>
                <div class="zm-component-product-title-details" v-show="settingData.btnSwitchShow.value" :style="{marginTop:settingData.btnmarginTop.value,height:settingData.btnheight.value}"><span @click.stop='productLink(settingData.productHref)' :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
            </div>
        
        </div>

    </div>
    <!-- 移动端 -->
    <div v-else-if="(!isComputer && settingData.mobileComIsHide)" :id="id" class="zm-component-single" :style="{overflow:'hidden',position: 'absolute', width: '100%',height:'auto',left: mobileStyle.left+'px',top: mobileStyle.top+'px',zIndex: mobileStyle.zIndex,boxShadow:settingData.boxShadow}" @mousedown.stop.left="other($event),mousedown($event)" @contextmenu.stop.prevent="other($event),openMenu($event)">
        <!-- 单一商品图片在上 -->
        <div v-if='settingData.productLayout==1' :productSource='dataSource' :productId='settingData.productId' ref='product1' class="zm-component-product" :style="{backgroundColor:settingData.backgroundColor.value,width:'auto',height:'auto'}">
            
            <div class="imgBox" :style="{overflow:'hidden',width:'320px',height:'185px'}">
                <div class="zm-component-product-img" @click.stop='productLink(settingData.productHref)'  ref='img' :class="{image_magnify2:settingData.enlarge,image_shiftLeft2:settingData.leftMove,image_shiftTop2:settingData.topMove,image_emptiness2:settingData.blur}" :style="{backgroundSize:settingData.bgSize.value,backgroundPosition:settingData.bgPosition.value,width:'100%',height:'100%',backgroundImage:'url('+settingData.productImg+')'}">
                </div>
            </div>
            <div class="zm-component-product-title" :style="{height:settingData.cssObj.titleHeight + 'px',padding:settingData.cssObj.padding+'px',paddingTop:settingData.cssObj.paddingTop+'px'}">
                <div class="zm-component-product-title-text" @click.stop='productLink(settingData.productHref)' :style="{lineClamp:['-webkit',2],boxOrient:'vertical',marginTop:'10px',fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:parseInt(settingData.font3.value.fontSize)>16?'16px':settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}">{{settingData.productName}}</div>
                <div class="zm-component-product-title-type" v-if="settingData.productBanner && settingData.productBanner.length>0" v-show="settingData.bannerSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'5px',fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{settingData.productBanner}}</div>
                <div class="zm-component-product-title-line">{{settingData.productBanner}}></div>
                <div class="zm-component-product-title-price" v-show="settingData.retailSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'5px',fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:parseInt(settingData.retailfont3.value.fontSize)>16?'16px':settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{settingData.productPrice}}</div>
                <div class="zm-component-product-title-details" v-show="settingData.btnSwitchShowM.value" :style="{marginTop:'5px',height:settingData.btnheight.value}"><span @click.stop='productLink(settingData.productHref)' class="zm-component-product-title-detailsp" :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:parseInt(settingData.btnfont3.value.fontSize)>16?'16px':settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
            </div>
            
        </div>

        <!-- 单一商品图片在下 -->
        <div v-if='settingData.productLayout==2' :productSource='dataSource' :productId='settingData.productId' ref='product1' class="zm-component-product" :style="{backgroundColor:settingData.backgroundColor.value,width:'auto',height:'auto'}">
            <div class="zm-component-product-title" :style="{height:settingData.cssObj.titleHeight + 'px',padding:settingData.cssObj.padding+'px',paddingTop:settingData.cssObj.paddingTop+'px'}">
                <div class="zm-component-product-title-text" @click.stop='productLink(settingData.productHref)' :style="{lineClamp:['-webkit',2],boxOrient:'vertical',marginTop:'10px',fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:parseInt(settingData.font3.value.fontSize)>16?'16px':settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}">{{settingData.productName}}</div>
                <div class="zm-component-product-title-type" v-if="settingData.productBanner && settingData.productBanner.length>0" v-show="settingData.bannerSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'5px',fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{settingData.productBanner}}</div>
                <div class="zm-component-product-title-line">{{settingData.productBanner}}></div>
                <div class="zm-component-product-title-price" v-show="settingData.retailSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'5px',fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:parseInt(settingData.retailfont3.value.fontSize)>16?'16px':settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{settingData.productPrice}}</div>
                <div class="zm-component-product-title-details" v-show="settingData.btnSwitchShowM.value" :style="{marginTop:'5px',height:settingData.btnheight.value}"><span @click.stop='productLink(settingData.productHref)' class="zm-component-product-title-detailsp" :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:parseInt(settingData.btnfont3.value.fontSize)>16?'16px':settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
            </div>
            <div class="imgBox" :style="{overflow:'hidden',width:'320px',height:'185px'}">
                <div class="zm-component-product-img" @click.stop='productLink(settingData.productHref)'  ref='img' :class="{image_magnify2:settingData.enlarge,image_shiftLeft2:settingData.leftMove,image_shiftTop2:settingData.topMove,image_emptiness2:settingData.blur}" :style="{backgroundSize:settingData.bgSize.value,backgroundPosition:settingData.bgPosition.value,width:'100%',height:'100%',backgroundImage:'url('+settingData.productImg+')'}">
                </div>
            </div>
        </div>

        <!-- 单一商品图片在右 -->
        <div v-show='settingData.productLayout==3' :productSource='dataSource' :productId='settingData.productId' ref='product2' class="zm-component-product-x" :style="{backgroundColor:settingData.backgroundColor.value}">
            
            <div class="zm-component-product-title" :style="{height:'166px',width:'166px',padding:settingData.cssObj.padding+'px',paddingTop:settingData.cssObj.paddingTop+'px'}">
                <div class="zm-component-product-title-text" @click.stop='productLink(settingData.productHref)' :style="{lineClamp:['-webkit',2],boxOrient:'vertical',marginTop:'10px',fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:parseInt(settingData.font3.value.fontSize)>16?'16px':settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}">{{settingData.productName}}</div>
                <div class="zm-component-product-title-type" v-if="settingData.productBanner && settingData.productBanner.length>0" v-show="settingData.bannerSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'10px',fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:parseInt(settingData.bannerfont3.value.fontSize)>16?'16px':settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{settingData.productBanner}}</div>
                <div class="zm-component-product-title-line" v-show="settingData.DivisionSwitchShowM.value" :style="{marginTop:'5px',height:settingData.lineH.value,backgroundColor:settingData.lineBg.value,width:settingData.lineWidth.value +'%'}"></div>
                <div class="zm-component-product-title-price" v-show="settingData.retailSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'5px',fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:parseInt(settingData.retailfont3.value.fontSize)>16?'16px':settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{settingData.productPrice}}</div>
                <div class="zm-component-product-title-details" v-show="settingData.btnSwitchShowM.value" :style="{marginTop:'10px',height:'30px'}"><span @click.stop='productLink(settingData.productHref)' :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:parseInt(settingData.btnfont3.value.fontSize)>16?'16px':settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
            </div>
            <div class="imgBox" :style="{overflow:'hidden',height:'166px',width:'166px'}">
                <div class="zm-component-product-img" @click.stop='productLink(settingData.productHref)' :style="{backgroundSize:settingData.bgSize.value,backgroundPosition:settingData.bgPosition.value,height:'100%',width:'100%',backgroundImage:'url('+settingData.productImg+')'}" ref="Ximg" :class="{image_magnify2:settingData.enlarge,image_shiftLeft2:settingData.leftMove,image_shiftTop2:settingData.topMove,image_emptiness2:settingData.blur}">
                </div>
            </div>
        
        </div>

        <!-- 单一商品图片在左 -->
        <div v-show='settingData.productLayout==4' :productSource='dataSource' :productId='settingData.productId' ref='product2' class="zm-component-product-x" :style="{backgroundColor:settingData.backgroundColor.value}">
            
            <div class="imgBox" :style="{overflow:'hidden',height:'166px',width:'166px'}">
                <div class="zm-component-product-img" @click.stop='productLink(settingData.productHref)' :style="{backgroundSize:settingData.bgSize.value,backgroundPosition:settingData.bgPosition.value,height:'100%',width:'100%',backgroundImage:'url('+settingData.productImg+')'}" ref="Ximg" :class="{image_magnify2:settingData.enlarge,image_shiftLeft2:settingData.leftMove,image_shiftTop2:settingData.topMove,image_emptiness2:settingData.blur}">
                </div>
            </div>
            <div class="zm-component-product-title" :style="{height:'166px',width:'166px',padding:settingData.cssObj.padding+'px',paddingTop:settingData.cssObj.paddingTop+'px'}">
                <div class="zm-component-product-title-text" @click.stop='productLink(settingData.productHref)' :style="{lineClamp:['-webkit',2],boxOrient:'vertical',marginTop:'10px',fontWeight:settingData.font3.value.fontWeight,fontFamily:settingData.font3.value.fontFamily,fontSize:parseInt(settingData.font3.value.fontSize)>16?'16px':settingData.font3.value.fontSize,color:settingData.font3.value.color,fontStyle:settingData.font3.value.fontStyle}">{{settingData.productName}}</div>
                <div class="zm-component-product-title-type" v-if="settingData.productBanner && settingData.productBanner.length>0" v-show="settingData.bannerSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'10px',fontWeight:settingData.bannerfont3.value.fontWeight,fontFamily:settingData.bannerfont3.value.fontFamily,fontSize:parseInt(settingData.bannerfont3.value.fontSize)>16?'16px':settingData.bannerfont3.value.fontSize,color:settingData.bannerfont3.value.color,fontStyle:settingData.bannerfont3.value.fontStyle}">{{settingData.productBanner}}</div>
                <div class="zm-component-product-title-line" v-show="settingData.DivisionSwitchShowM.value" :style="{marginTop:'5px',height:settingData.lineH.value,backgroundColor:settingData.lineBg.value,width:settingData.lineWidth.value +'%'}"></div>
                <div class="zm-component-product-title-price" v-show="settingData.retailSwitchShowM.value" :style="{lineClamp:['-webkit',1],boxOrient:'vertical',marginTop:'5px',fontWeight:settingData.retailfont3.value.fontWeight,fontFamily:settingData.retailfont3.value.fontFamily,fontSize:parseInt(settingData.retailfont3.value.fontSize)>16?'16px':settingData.retailfont3.value.fontSize,color:settingData.retailfont3.value.color,fontStyle:settingData.retailfont3.value.fontStyle}">{{settingData.productPrice}}</div>
                <div class="zm-component-product-title-details" v-show="settingData.btnSwitchShowM.value" :style="{marginTop:'10px',height:'30px'}"><span @click.stop='productLink(settingData.productHref)' :style="{marginLeft:settingData.btnmarginLeft.value,marginRight:settingData.btnmarginRight.value,lineHeight:settingData.btnheight.value,backgroundColor:settingData.btnBg.value,margin:settingData.btnP.value,float:settingData.btnPosition.value,width:settingData.btnWidth.value +'%',fontWeight:settingData.btnfont3.value.fontWeight,fontFamily:settingData.btnfont3.value.fontFamily,fontSize:parseInt(settingData.btnfont3.value.fontSize)>16?'16px':settingData.btnfont3.value.fontSize,color:settingData.btnfont3.value.color,fontStyle:settingData.btnfont3.value.fontStyle}">{{settingData.btnText}}</span></div>
            </div>

        </div>

    </div>

</template>
<script>
import configy from './configSingleP.js'
import singleProduct from './singleProduct.js'
export default {
  name:'com-product',
  mixins:[configy,singleProduct],
  props: {
    prop: {
        type:Object,
        required:true
    },
    index:{
        type:[String,Number],
        required:true
    }
  },
  data () {
      return {
            /*(以下这些属性主要用于在点击布局样式设置项切换样式时只记录产品的内容其他设置项的数据忘记掉，样式返回初始化时的样式以及图片比例)
            * settingData.productLayout:1代表图片在下，2代表图片在上，3代表图片在左，4代表图片在右（同时表示默认选中布局样式中第几个图标）
            * settingData.oldPictureScale.row,settingData.oldPictureScale.row和settingData.nowProportion，settingData.nowProportion：它们之间对应的值要相同，代表在初始化的时候
            * 图片的比例大小以及在点击布局样式设置项的时候，图片的比例大小还是初始化时的比例
            * style.width:只有图片在纵(Y)轴方向上时才用到
            * style.height:只有图片在横(X)轴方向上时才用到
            * settingData.oldStyleW:记录初始化时图片的宽（即style.width），只有图片在纵(Y)轴方向上时才用到
            * settingData.oldStyleW:记录初始化时图片的高（与style.width相等），只有图片在横(X)轴方向上时才用到
            * settingData.XtitleW：文字区域的宽度，只有图片在横(X)轴方向上时才用到
            * settingData.titleHeight：文字区域的高度，只有图片在横(X)轴方向上时才用到
            */
          }
  }

 }
</script>
<style scoped>
    @import url('./style/singleProduct.css');
</style>