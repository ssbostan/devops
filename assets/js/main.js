(function ($) {
  "use strict";

  $(window).on("load", function () {
    /*Page Loader active
    ========================================================*/
    $("#preloader").fadeOut();

    // Sticky Nav
    // $(window).on("scroll", function () {
    //   if ($(window).scrollTop() > 1000) {
    //     $(".header").addClass("fixed");
    //   } else {
    //     $(".header").removeClass("fixed");
    //   }
    // });

    /* ==========================================================================
       countdown timer 
       ========================================================================== */
    jQuery("#clock").countdown("2024/02/02 12:00", function (event) {
      var $this = jQuery(this).html(
        event.strftime(
          "" +
            '<div class="row counters-wrapper countdown"><div class="col-sm-3"><div class="counter-block counter-block-no-border has-separator"><div class="counter-box"><div class="counter-content"><span class="count">%-D</span><p class="title">روز</p></div></div></div></div>' +
            '<div class="row counters-wrapper countdown"><div class="col-sm-3"><div class="counter-block counter-block-no-border has-separator"><div class="counter-box"><div class="counter-content"><span class="count">%H</span><p class="title">ساعت</p></div></div></div></div>' +
            '<div class="row counters-wrapper countdown"><div class="col-sm-3"><div class="counter-block counter-block-no-border has-separator"><div class="counter-box"><div class="counter-content"><span class="count">%M</span><p class="title">دقیقه</p></div></div></div></div>' +
            '<div class="row counters-wrapper countdown"><div class="col-sm-3"><div class="counter-block counter-block-no-border has-separator"><div class="counter-box"><div class="counter-content"><span class="count">%S</span><p class="title">ثانیه</p></div></div></div></div>'
        )
      );
    });

    /* slicknav mobile menu active  */
    $(".mobile-menu").slicknav({
      prependTo: ".navbar-header",
      parentTag: "liner",
      allowParentLinks: true,
      duplicate: true,
      label: "",
    });
    /*================================= 
      coutUp 
    =================================*/
    $(".count").countTo();
    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false,
    });
    wow.init();
  });
})(jQuery);

const preloaderMask = document.querySelector(".preloader-mask");

document.addEventListener("DOMContentLoaded", () => {
  preloaderMask.classList.add("hidden");
});

function handleIntersection(entries, observer) {
  const header = document.querySelector(".header");
  entries.forEach((entry) => {
    if (entry.target.id === "about" && entry.isIntersecting) {
      header.classList.add("fixed");
    } else if (entry.target.id === "hero" && entry.isIntersecting) {
      header.classList.remove("fixed");
    }
  });
}

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, options);

const about = document.querySelector("#about");
const hero = document.querySelector("#hero");

observer.observe(about);
observer.observe(hero);
