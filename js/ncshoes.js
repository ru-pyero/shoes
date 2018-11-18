$(document).ready(function () {
  'use strict';
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $('nav.navbar').addClass('shrink');
    } else {
      $('nav.navbar').removeClass('shrink');
    }
  });

  $('.menu nav a').click(function (e) {
    e.preventDefault();
    $(this).tab('fadeIn');
  });
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    autoplay:true,
    smartSpeed: 1500,
    autoplayTimeout: 3000,
    navText: [
      "<i class='icon-arrow-left'></i>",
      "<i class='icon-arrow-right'></i>"
    ],
    margin: 15,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      757: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
    
  $('input, textarea').focus(function () {
    $(this).parent('label').addClass('active');
  });
  $('input, textarea').blur(function () {
    $(this).parent('label').removeClass('active');
  });
    
  $('body').scrollspy({
    target: '.navbar',
    offset: 80
  });

  $('.navbar-nav a, #scroll-down').bind('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
  });

  $('#scrollTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1500) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  });
    
  lightbox.option({
    'resizeDuration': 400,
    'fadeDuration': 400,
    'alwaysShowNavOnTouchDevices': true
  });

  var Page = (function () {
    var $navArrows = $('#nav-arrows'),
      $nav = $('#nav-dots > span'),
        slitslider = $('#slider').slitslider({
          onBeforeChange : function (slide, pos) {
            $nav.removeClass('nav-dot-current');
            $nav.eq(pos).addClass('nav-dot-current');
          }
        }),
        init = function () {
          initEvents();
        },
        initEvents = function () {
          $navArrows.children(':last').on('click', function () {
            slitslider.next();
            return false;
          });
          $navArrows.children(':first').on('click', function () {
            slitslider.previous();
            return false;
          });
          $nav.each(function (i) {
            $(this).on('click', function (event) {
              var $dot = $(this);
              if (!slitslider.isActive()) {
                $nav.removeClass('nav-dot-current');
                $dot.addClass('nav-dot-current');
              }
              slitslider.jump(i + 1);
              return false;
            });
          });
        };
      return { init : init };
    })();
    
    Page.init();
});