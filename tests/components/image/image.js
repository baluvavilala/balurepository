var template = require('../../branding/natwest_personal.js');
module.exports = {
  url: 'https://rbs-retail-test-61.adobecqms.net/content/natwest_com/en_uk/responsive-personal/demopage.html?wafsdadfsd%27',
   elements: {
       image:{
           selector:'.what_need_to_know_shelf .slider-col .image-wrapper .image-wrap'
       }
  },
  commands:[{
    imageloop:function(client,selector,props){
        var defProps={
            'width':['194px','112px','190px','auto'],
            'height':['209px','216px','178px','auto']
            },
            props= props || defProps,
            size=client.globals.size.widths,
            sizeLen = Object.keys(size).length,
            keys=Object.keys(size);
        for(scr in size){
          let currentSize=scr;
          client.resizeWindow(size[scr].width, size[scr].height);
            if(currentSize=="lg"){
                client.elements('css selector',selector,function(result){
                    imageCheck(result,client,props);
                });
            }
        }
    },
    imageComp:function(size){
        var imageProp = {},property=template.props,
            imageProp={
                'width':property.natwest_image_width,
                'height':property.natwest_image_height,
                'padding':property.natwest_image_padding
            };
            if(size=="md"){
                imageProp['width'] = property.natwest_image_width_l;
                imageProp['height'] = property.natwest_image_height_l;
            }
            else if(size=="sm"){
                imageProp['width'] = property.natwest_image_width_m;
                imageProp['height'] = property.natwest_image_height_m;
            }
            else if(size=="xs"){
                imageProp['width'] = property.natwest_image_width_s;
                imageProp['height'] = property.natwest_image_height_s;
            }    
        return imageProp;
    }
  }]    
};

var imageCheck=function(res,client,props){
     var sizeLen = Object.keys(props).length,keys=Object.keys(props);
    res.value.forEach(function(element,index){
        for(key in props){
          let currentVal=props[key];
          //  console.log(key);
            client.elementIdCssProperty(element.ELEMENT,key,function(result) {
                this.assert.equal(result.value, currentVal[index]);
            });
        }
   });
    
};