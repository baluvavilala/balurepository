module.exports = {
  url: 'http://10.249.91.29:4504/content/natwest_com/en_uk/responsive-personal/furtherassistance/wniks.html?wcmmode=disabled',
   elements: {
      title:{
          selector:'.what_need_to_know_shelf .slider-col .title-wrapper'  
      },
      titleComp:{
          selector:'.what_need_to_know_shelf .slider-col h3.title-comp'  
      },
      text:{
          selector:'.what_need_to_know_shelf .slider-col .text-wrapper' 
      },
      image:{
         selector:'.what_need_to_know_shelf .slider-col .image-wrapper'  
      },
      imageBlock:{
        selector:'.what_need_to_know_shelf .slider-col.tile-block'
      },
      contentBlock:{
        selector:'.what_need_to_know_shelf .slider-col .contentheight'
      },
      mainBlock:{
          selector:'.what_need_to_know_shelf .row.responsiveSlider' 
      },
      mainTitle:{
          selector:'.what_need_to_know_shelf .slidertitle'
      },
      mainTitleComp:{
          selector:'.what_need_to_know_shelf .slidertitle h3.title-comp'
      },
      ctaComp:{
          selector:'.what_need_to_know_shelf .slider-col .cta-wrapper' 
      },
      dotClass:{
           selector:'.what_need_to_know_shelf .row.responsiveSlider .slick-dots'
       },
      prevClass:{
          selector:'.what_need_to_know_shelf .row.responsiveSlider .slick-arrow'
      },
      nextClass:{
          selector:'.what_need_to_know_shelf .row.responsiveSlider .slick-next'
      },
      imgCheck:{
          selector:'.what_need_to_know_shelf .image-wrapper .comp-img-generic img'
      }
  },
  commands:[{
    multiloop:function(client,selector,props){
                client.elements('css selector',selector,function(result){
                    titleCheck(result,client,selector,props);
                });
    },
    singleElem:function(client,selector,props){
        var sizeLen = Object.keys(props).length;
        for(var i=0;i<sizeLen;i++){
            let currentSize=Object.keys(props)[i];
            client.getCssProperty(selector, currentSize, function(result) {
                this.verify.equal(result.value, props[currentSize],"Property "+currentSize+" equals to"+props[currentSize]);
            });
        }
    }
  }]    
};
var titleCheck=function(res,client,sel,props){
     var sizeLen = Object.keys(props).length,keys=Object.keys(props);
    res.value.forEach(function(element){
        for(key in props){
          let currentVal=props[key];
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.verify.equal(result.value, currentVal);
            });
        }
   });
};