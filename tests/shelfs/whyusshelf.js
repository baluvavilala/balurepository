module.exports={
   'Calling the Title component':function(browser){
        var title=browser.page.title(),
            titleClass=title.elements.title.selector,
            mainHeader=title.elements.main.selector;;
       browser.maximizeWindow();
        title.navigate()
             .title()
             .titleloop(browser,titleClass)
       // title.titleloop(browser,mainHeader,propsMain)
        
    },
    'Calling the text component':function(browser){
       var text=browser.page.text(),
           textClass=text.elements.text.selector;
            text.textloop(browser,textClass,propsText)
           
    },
    'Calling the Image Component':function(browser){
          var image=browser.page.image(),
              imageClass=image.elements.image.selector;
         image.imageloop(browser,imageClass);
        browser.end();
    }
};





// Properties other than default we can pass 
var propsTitle={
    'font-size':"20px"
},
propsText={
'color':"rgba(255, 255, 255, 1)",
'font-size':'18px',
'line-height':'26px'
},
propsImage={
    'height':['53px','48px','48px','47px']
},
propsMain={
    'padding':'64px 0px'
};