/*var nw = require('../../branding/tick_comp/nw-brand.js');
var rbs = require('../../branding/tick_comp/rbs-brand.js');
var natwest=nw.nw_brand;
var royalbank=rbs.rbs_brand;*/
var titleComps = require('../tick_title/title.js');
/*if(test.name=="nw"){
	var cssProps = {
		"margin-top" : natwest.tick_shelf_margin_top
	}
}*/
module.exports = {
	"Tick component test" : function(client){
		client.maximizeWindow();
		client.url(client.globals.urls.url);
		client.url();
		var titleObj = client.page.tick_page_obj();
		var titleCompCls = titleObj.elements.titleComp.selector;
		var size = client.globals.size.widths,titleProps;
		for(scr in size){
			client.resizeWindow(size[scr].width, size[scr].height);
			titleProps = titleComps.titleProps.titleComp(scr);
			titleObj.singleElem(client,titleCompCls,titleProps);
		}
		client.end();
	}
}



/*"Tick component block" : function(client){
		function tickBlockTest(elems){
			elems.value.forEach(function(element,index){
				var cssProps = ["width","position","float"];
				var cssVal = ["594px","relative","left"];
				for(var i=0;i<cssProps.length;i++){
					let j=i;
					client.elementIdCssProperty(element.ELEMENT,cssProps[i],function(result){
						this.assert.equal(result.value,cssVal[j]);
					});
				}
			});
		};
		client.elements('css selector','.tick-comp-wrapper .tick-comp-block',tickBlockTest);
	},
	"Icon test" : function(client){
		function iconTest(elems){
			elems.value.forEach(function(element,index){
				var cssProps = ["width","height"];
				var cssVal = ["25px","19px"];
				for(var i=0;i<cssProps.length;i++){
					let j=i;
					client.elementIdCssProperty(element.ELEMENT,cssProps[i],function(result){
						this.assert.equal(result.value,cssVal[j]);
					});
				}
			});
		};
		client.elements('css selector','.tick-comp-wrapper .tick-comp-block .imageWrapper .tick-icon svg',iconTest);		
	},
	"Title component" : function(client){
		var titleObj = client.page.title();		
		var titleWrapperSelector = titleObj.elements.titleWrapper.selector;
		var titleSelector = titleObj.elements.title.selector;
		titleObj.titleWrapper(client,titleWrapperSelector);		
		titleObj.titleComp(client,titleSelector);
	},
	"Text component" : function(client){
		var titleObj = client.page.title();		
		var textWrapperSelector = titleObj.elements.textWrapper.selector;
		var textSelector = titleObj.elements.text.selector;
		titleObj.textWrapper(client,textWrapperSelector);
		titleObj.textComp(client,textSelector);
		client.end();
	}*/