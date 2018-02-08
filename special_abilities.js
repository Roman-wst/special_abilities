(function ($) {
	"use strict";
	Drupal.behaviors.special_abilities = {
		attach: function (context, settings) {
    
      $.fn.removeClassWild = function(mask) {
        return this.removeClass(function(index, cls) {
          var re = mask.replace(/\*/g, '\\S+');
          return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
      };
   
      $('.block-special-abilities', context).once('special-abilities', function() {
        if ($.cookie('special_abilities')) {
          $('html').addClass('special-abilities-' + $.cookie('special_abilities'));
        } else {
          $('html').addClass('special-abilities-off');
        }
        if ($.cookie('special_abilities_size'))   {$('html').addClass('special-abilities-' + $.cookie('special_abilities_size'));}
        if ($.cookie('special_abilities_color'))  {$('html').addClass('special-abilities-' + $.cookie('special_abilities_color'));} 
        //if ($.cookie('special_abilities_img'))    {$('html').addClass('special-abilities-' + $.cookie('special_abilities_img'));}        
        
        $('.special-abilities-link-on', this).click(function(e) {
          $('html').removeClass('special-abilities-off').addClass('special-abilities-on special-abilities-size-1 special-abilities-color-1');
          $.cookie('special_abilities', 'on', { path: '/' });
          $.cookie('special_abilities_size', 'size-1', { path: '/' });
          $.cookie('special_abilities_color', 'color-1', { path: '/' });
          //$.cookie('special_abilities_img', img-visible, { path: '/' });
          e.preventDefault();
        });
        
        $('.special-abilities-link-off', this).click(function(e) {
          $('html').removeClassWild('special-abilities-*').addClass('special-abilities-off');
          $.cookie('special_abilities', null, { path: '/' });
          $.cookie('special_abilities_size', null, { path: '/' });
          $.cookie('special_abilities_color', null, { path: '/' });
          //$.cookie('special_abilities_img', null, { path: '/' });
          e.preventDefault();
        });    
        
        $('.property.font-size .btn', this).click(function(){
          var $size = $(this).attr('data-size');      
          $.cookie('special_abilities_size', null, { path: '/' });
          $('html').removeClassWild('special-abilities-size-*').addClass('special-abilities-size-' + $size);
          $.cookie('special_abilities_size', 'size-' + $size, { path: '/' });
        });

        $('.property.color-scheme .btn', this).click(function(){
          var $color = $(this).attr('data-color');      
          $.cookie('special_abilities_color', null, { path: '/' });
          $('html').removeClassWild('special-abilities-color-*').addClass('special-abilities-color-' + $color);
          $.cookie('special_abilities_color', 'color-' + $color, { path: '/' });
        });     
        
        /*$img_visible.click(function(){
          $.cookie('special_abilities_img', null, { path: '/' });         
          $('html').removeClass('special-abilities-img-hide').addClass('special-abilities-img-visible');
          $.cookie('special_abilities_img', 'img-visible', { path: '/' });
        });     
        
        $img_hide.click(function(){
          $.cookie('special_abilities_img', null, { path: '/' });       
          $('html').removeClass('special-abilities-img-visible').addClass('special-abilities-img-hide');
          $.cookie('special_abilities_img', 'img-hide', { path: '/' });
        });*/

      });
		}
	}
})(jQuery);