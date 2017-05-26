var template = require('../../branding/tick_comp/tick_nw_brand.js');

var cssProps={
     titleComp:function(size){
         var titleProp = {},property=template.nw_brand,
             titleProp={
                'color':property.tick_title_color,
                'line-height':property.$tick_title_lh,
                'font-size':property.$tick_title_fs,
                'font-family':property.$font_family_regular
            };
            if(size=="md"){
                titleProp['line-height'] = property.$tick_title_fs_l;
                titleProp['font-size'] = property.$tick_title_lh_l;
            }
            else if(size=="sm"){
                titleProp['line-height'] = property.$tick_title_fs_m;
                titleProp['font-size'] = property.$tick_title_lh_m;
            }
            else if(size=="xs"){
                titleProp['line-height'] = property.$tick_title_fs_s;
                titleProp['font-size'] = property.$tick_title_lh_s;
            }
         return titleProp;
     }
      
}

module.exports = {
    titleProps: cssProps
}

/*module.exports = {
	elements : {
		titleWrapper : {
			selector : '.tick-comp-wrapper .tick-comp-block .titleWrapper'
		},
		title : {
			selector : '.tick-comp-wrapper .tick-comp-block .titleWrapper .title-comp'
		},
		textWrapper : {
			selector : '.tick-comp-wrapper .tick-comp-block .textWrapper'
		},
		text : {
			selector : '.tick-comp-wrapper .tick-comp-block .textWrapper .text-comp'
		}
	},
	commands : [{
		titleWrapper : function(client,selector){
			client.elements('css selector',selector,titleWrapperTest);
			function titleWrapperTest(elems){
				elems.value.forEach(function(element,index){
					client.elementIdCssProperty(element.ELEMENT,"margin-bottom",function(result){
						this.assert.equal(result.value,"20px");
					});
					client.elementIdCssProperty(element.ELEMENT,"width",function(result){
						this.assert.equal(result.value,"372px");
					});
				});
			}
		},
		titleComp : function(client,selector){
			client.elements('css selector',selector,titleTest);
			function titleTest(elems){
				elems.value.forEach(function(element,index){
					var cssProps = ["font-size","line-height","color"];
					var cssVal = ["26px","34px","rgba(68, 14, 94, 1)"];
					for(var i=0;i<cssProps.length;i++){
						let j=i;
						client.elementIdCssProperty(element.ELEMENT,cssProps[i],function(result){
							this.assert.equal(result.value,cssVal[j]);
						});
					}
				});
			}
		},
		textWrapper : function(client,selector){
			client.elements('css selector',selector,textWrapperTest);
			function textWrapperTest(elems){
				elems.value.forEach(function(element,index){
					client.elementIdCssProperty(element.ELEMENT,"margin-bottom",function(result){
						this.assert.equal(result.value,"50px");
					});
					client.elementIdCssProperty(element.ELEMENT,"width",function(result){
						this.assert.equal(result.value,"372px");
					});
				});
			}
		},
		textComp : function(client,selector) {
			client.elements('css selector',selector,textTest);
			function textTest(elems){
				elems.value.forEach(function(element,index){
					var cssProps = ["font-size","line-height","color"];
					var cssVal = ["18px","26px","rgba(51, 51, 51, 1)"];
					for(var i=0;i<cssProps.length;i++){
						let j=i;
						client.elementIdCssProperty(element.ELEMENT,cssProps[i],function(result){
							this.assert.equal(result.value,cssVal[j]);
						});
					}
				});
			}
		}
	}]
}*/