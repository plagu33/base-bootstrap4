$('.slick-mini').slick({
   autoplay: true,
   autoplaySpeed: 3000,
   arrows: false,
   dots: true,
   pauseOnDotsHover:true
});

window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "//platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };

      return t;
}(document, "script", "twitter-wjs"));