/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */
!function(t){t.fn.unveil=function(i){function e(){r=a.filter(function(){var i=t(this),e=o.scrollTop(),n=e+o.height(),r=i.offset().top,s=r+i.height();return s>=e-u&&n+u>=r}),n=r.trigger("unveil"),a=a.not(n)}var n,r,s,o=t(window),u=i||0,c=window.devicePixelRatio>1,h=c?"data-src-retina":"data-src",a=this;return this.one("unveil",function(){s=this.getAttribute(h),s=s||this.getAttribute("data-src"),s&&this.setAttribute("src",s)}),o.scroll(e),o.resize(e),e(),this}}(jQuery);