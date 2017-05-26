var template = require('../../branding/natwest_personal.js');

var textProps={
     textComps:function(size){
         var textProp = {}, property=template.props,
             textProp={
                'color':property.$winks_textcolor,
                'display':property.$winks_display_xl,
                'text-align':"center",
                'line-height':property.$winks_text_lh_xl,
                'font-size':property.$winks_text_fs_xl,
                'font-family':property.$font_family_regular,
                'margin-top':"20px",
                'letter-spacing':"0.2px"
            };
             if(size=="sm"){
                textProp['margin-top'] = "30px";
            }           
        return textProp;
    }
      
};
module.exports = {
    text: textProps
}