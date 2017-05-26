var textComp = require('../components/text/text.js'),
    titleComp =require('../components/title/title.js'),
    tileComp=require('../components/other_comp/tile.js');
module.exports={
    'Checking the properties of main title':function(browser){
       var text=browser.page.common(),signup=browser.page.signup(),
            mainClass=text.elements.mainTitleComp.selector,
            blockClass=text.elements.mainTitle.selector,
            size=browser.globals.size.widths,cssprops;
            signup.navigate()
                  .signInAsAdmin();
            browser.maximizeWindow();
            for(scr in size){
               browser.resizeWindow(size[scr].width, size[scr].height);
                cssprops=tileComp.text.mainTitle(scr),props=tileComp.text.mainBlock(scr);
                text.singleElem(browser,mainClass,cssprops);
                text.singleElem(browser,blockClass,props);
            }
    },
    'Checking the Image block properites':function(browser){
       var image=browser.page.common(),
           imageClass=image.elements.imageBlock.selector,
           size=browser.globals.size.widths,props;
        for(scr in size){
           props=tileComp.text.tileBlock(scr);
           browser.resizeWindow(size[scr].width, size[scr].height);
           image.singleElem(browser,imageClass,props);
        }
    },
    'Calling the Image component':function(browser){
       var image=browser.page.common(),
           imageClass=image.elements.image.selector,
           imgProps=browser.page.image(),
           props,size=browser.globals.size.widths,props;
           for(scr in size){
               props=imgProps.imageComp(scr);
               browser.resizeWindow(size[scr].width, size[scr].height);
               image.multiloop(browser,imageClass,props);
           }
    },
   /* 'Checking the Image component Width/Height':function(browser){
       var image=browser.page.image(),
           imageClass=image.elements.image.selector;
           image.imageloop(browser,imageClass);
    },*/
   'Checking the height of the content(title + text) + block margin top + CTA properties':function(browser){
        var cont=browser.page.common(),
             blockClass=cont.elements.mainBlock.selector,
             contClass=cont.elements.contentBlock.selector,
             props,size=browser.globals.size.widths,ctaprops,
            ctaClass=cont.elements.ctaComp.selector;
            for(scr in size){
               browser.resizeWindow(size[scr].width, size[scr].height);
               props=tileComp.text.contentHeight(scr),cssProps=tileComp.text.contentBlock(scr);
               cont.multiloop(browser,contClass,props);
               cont.singleElem(browser,blockClass,cssProps);
                if(scr=="sm"){
                   ctaprops=tileComp.text.ctaBlock(scr);
                   cont.multiloop(browser,ctaClass,ctaprops);
                }
                else if(scr=="xs"){
                   ctaprops=tileComp.text.ctaBlock(scr);
                   cont.multiloop(browser,ctaClass,ctaprops);
                }
            }
    },
    'Checking the property for title wrapper':function(browser){
        var cont=browser.page.common(),size=browser.globals.size.widths,
           titleClass=cont.elements.title.selector,props;
         for(scr in size){
               browser.resizeWindow(size[scr].width, size[scr].height);
                 if(scr=="lg" || scr=="md" || scr=="xs"){
                      props={'margin-top':'30px'};
                      cont.multiloop(browser,titleClass,props);
                 }
                else{
                   props={'margin-top':'40px'};
                    cont.multiloop(browser,titleClass,props);
                }
         }
    },
    'Checking the title component':function(browser){
       var text=browser.page.common(),
           props,size=browser.globals.size.widths,
           titleClass=text.elements.titleComp.selector;
           for(scr in size){
               props=titleComp.text.titleComp(scr)
               browser.resizeWindow(size[scr].width, size[scr].height);
               text.multiloop(browser,titleClass,props);
           }
    },
    'Checking for the text component':function(browser){
       var text=browser.page.common(),
           props,size=browser.globals.size.widths,stop=browser.globals.size.stop,
           textClass=text.elements.text.selector;
            for(scr in size){
               props=textComp.text.textComps(scr);
               browser.resizeWindow(size[scr].width, size[scr].height);
               text.multiloop(browser,textClass,props);  
            }
           browser.end();     
    }
         
};


