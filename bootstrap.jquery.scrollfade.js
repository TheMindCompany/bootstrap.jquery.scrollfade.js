/* Title: Bootstrap Plugin for Scrollfade (bootstrap.jquery.scrollfade.js)
   Author: Brandon L. Clark

   Description:  
   	This is a plugin for those who wish to use the navbar component of Bootstrap because they are using the Scrollfade 
   plugin for jquery.  It acts like scrollspy() but because of the way Scrollfade embeds data to perform its visual effect
   scrollspy will not work.  It also adds a smooth scroll effect for same page navigation.
   
   Requirements:
     Jquery 2.1.1     : http://code.jquery.com/jquery-2.1.1.js
     Bootstrap 3.2.0  : https://github.com/twbs/bootstrap/tree/v3.2.0
     Scrollfade 0.1.4 : https://github.com/gdbate/jquery-scrollfade/tree/0.1.4
*/

// Fix for auto activate of last nav item on load.
$(window).load(function () {
  $('nav li').removeClass('active');
  $('nav li:first-child').addClass('active');
});

$(function(){
  //
  $.fn.scrollfadeBootstrap = function( target ){    
    $('#scroll-fade-scroll').scroll(function(e){
      $(target + ':in-viewport').each(function() {
        var valueId = this.id;
        $('nav li').removeClass('active');
        $('nav li a[href*=#' + valueId + ']').parent().addClass('active');
      });
    });
    $('nav a[href*=#]:not([href=#])').on('click',function(e){ 
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        e.preventDefault();
        var valueId = e.target;
        valueId = $(valueId).attr('href');
        $('#scroll-fade-scroll').scrollTo(valueId);
        window.location.hash = this.hash;      
      }
    });

    //
    $.fn.scrollTo = function( target, options, callback ){
      if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
      var settings = $.extend({
        scrollTarget  : target,
        offsetTop     : 50,
        duration      : 500,
        easing        : 'swing'
      }, options);
      return this.each(function(){
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
          if (typeof callback == 'function') { callback.call(this); }
        });
      });
    }
  }
});
