var natwest = require('../../branding/natwest_personal.js'),
    rbs = require('../../branding/rbs_personal.js');
var cssProps={
     mainTitle:function(size){
        var mtitleProp = {},property=natwest.props;
          mtitleProp = {
                'color':property.$stand_alone_title_color,
                'line-height':property.$winks_sildertit_lh_xl,
                'font-size':property.$winks_sildertit_fs_xl,
                'font-family':property.$winks_sildertit_font,
                'margin':"0px"
            };      
            if(size=="md"){
                mtitleProp['font-size'] = property.$winks_sildertit_fs_l;
                mtitleProp['line-height'] = property.$winks_sildertit_lh_l;
            }
            else if(size=="sm"){
                mtitleProp['line-height'] = property.$winks_sildertit_lh_m;
                mtitleProp['font-size'] = property.$winks_sildertit_fs_m;
            }
            else if(size=="xs"){
                mtitleProp['line-height'] = property.$winks_sildertit_lh_s;
                mtitleProp['font-size'] = property.$winks_sildertit_fs_s;
            }
         return mtitleProp;
    },
    mainBlock:function(size){
        var mblockProp = {},property=natwest.props;
          mblockProp = {
                'margin-top':property.$winks_margtop_xl
            };      
            if(scr=="md"){
               mblockProp['margin-top'] = property.$winks_margtop_l;
            }
            else if(scr=="sm"){
               mblockProp['margin-top'] = property.$winks_margtop_m; 
            }
            else if(scr=="xs"){
               mblockProp['margin-top'] = property.$winks_margtop_s; 
            }
      return mblockProp;
    },
    tileBlock:function(size){
        var tileProp = {},property=natwest.props,
            tileProp={
                'padding':property.$winks_slideritem_space,
                'text-align':"center",
                'height':property.$winks_slider_col_hgt_xl
            }; 
        
            if(size=="md"){
                tileProp['padding'] = property.$winks_slideritem_space_l;
                tileProp['height'] = property.$winks_slider_col_hgt_l;
            }
            else if(size=="sm"){
                tileProp['padding'] = property.$winks_slideritem_space_m;
                tileProp['height'] = property.$winks_slider_col_hgt_m;
            }
            else if(size=="xs"){
                tileProp['padding'] = property.$winks_slideritem_space_s;
                tileProp['height'] = property.$winks_slider_col_hgt_s;
            }      
         return tileProp;
    },
    contentHeight:function(size){
        var cblockProp = {},property=natwest.props;
          cblockProp = {
                'height':property.natwest_image_theight_xl
            };      
            if(scr=="md"){
               cblockProp['height'] = property.natwest_image_theight_l;
            }
            else if(scr=="sm"){
               cblockProp['height'] = property.natwest_image_theight_m; 
            }
            else if(scr=="xs"){
               cblockProp['height'] = property.natwest_image_theight_s; 
            }
      return cblockProp;
    },
    contentBlock:function(size){
        var cblockProp = {},property=natwest.props;
          cblockProp = {
                'margin-top':property.$winks_margtop_item_xl
            };      
            if(scr=="md"){
               cblockProp['margin-top'] = property.$winks_margtop_item_l;
            }
            else if(scr=="sm"){
               cblockProp['margin-top'] = property.$winks_margtop_item_m; 
            }
            else if(scr=="xs"){
               cblockProp['margin-top'] = property.$winks_margtop_item_s; 
            }
      return cblockProp;
    },
    ctaBlock:function(size){
        var cblockProp = {},property=natwest.props;
          cblockProp = {
                'padding-top':"40px",
                'padding-bottom':"20px"
            };      
            if(scr=="xs"){
               cblockProp['padding-top'] ="50px";
               cblockProp['padding-bottom'] = "22px";
            }
            
      return cblockProp;
    }
}

module.exports = {
    text: cssProps
}