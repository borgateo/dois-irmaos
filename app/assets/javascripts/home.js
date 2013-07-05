$(function() {
  
  $("body").removeClass("preload");
  $('.loading').removeClass('loading');

  if( $('#multimedia').length > 0 ) {
    
    $('.group h3').on('click', function() {
      var content = $(this).closest('.group').children('.group-content');
      var img     = content.find("img");

      if ( content.hasClass('active') ) {
        content.slideUp().removeClass('active');
      } else {
        content.slideDown(function() {
          img.unveil();
        }).addClass('active');
      }
    })
  
  }
  
});