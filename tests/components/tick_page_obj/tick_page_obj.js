module.exports = {
	elements : {
		tickWrapper : {
			selector : '.tick-comp-wrapper'
		},
		tickCompBlock : {
			selector : '.tick-comp-wrapper .tick-comp-block'
		},
		imageWrapper : {
			selector : '.tick-comp-wrapper .tick-comp-block .imageWrapper'
		},
		tickIcon : {
			selector : '.tick-comp-wrapper .tick-comp-block .imageWrapper .tick-icon'
		},
		tickIconSvg : {
			selector : ".tick-comp-wrapper .tick-comp-block .imageWrapper .tick-icon svg"
		},
		titleWrapper : {
			selector : '.tick-comp-wrapper .tick-comp-block .titleWrapper'
		},
		titleComp : {
			selector : '.tick-comp-wrapper .tick-comp-block .titleWrapper h3.title-comp'
		},
		textWrapper : {
			selector : '.tick-comp-wrapper .tick-comp-block .textWrapper'
		},
		textComp : {
			selector : '.tick-comp-wrapper .tick-comp-block .textWrapper .text-comp'
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