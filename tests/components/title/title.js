var template = require('../../branding/natwest_personal.js');

var cssProps={
     titleComp:function(size){
         var titleProp = {},property=template.props,
             titleProp={
                'color':property.$stand_alone_title_color,
                'line-height':property.$winks_title_lh_xl,
                'font-size':property.$winks_title_fs_xl,
                'font-family':property.$font_family_regular,
                'margin':"0px"
            };
            if(size=="md"){
                titleProp['line-height'] = property.$winks_title_lh_l;
                titleProp['font-size'] = property.$winks_title_fs_l;
            }
            else if(size=="sm"){
                titleProp['line-height'] = property.$winks_title_lh_m;
                titleProp['font-size'] = property.$winks_title_fs_m;
            }
            else if(size=="xs"){
                titleProp['line-height'] = property.$winks_title_lh_s;
                titleProp['font-size'] = property.$winks_title_fs_s;
            }
         return titleProp;
     }
      
}

module.exports = {
    text: cssProps
}