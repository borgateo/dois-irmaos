$(function() {
  $('.fancybox').fancybox({
        prevEffect : 'elastic',
        nextEffect : 'elastic',

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

