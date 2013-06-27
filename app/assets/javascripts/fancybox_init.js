$(function() {
  $('.fancybox').fancybox({
        prevEffect : 'fade',
        nextEffect : 'fade',

        closeBtn  : true,
        arrows    : true,
        nextClick : true,

        helpers : {
          thumbs : {
            width  : 50,
            height : 50
          }
        }
      });
});

