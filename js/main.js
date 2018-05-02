(function ($) {

    "use strict";

    // Sticky Nav
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation 
    $('.main-navigation').onePageNav({
        currentClass: 'active'
    });

    $(window).on('load', function () {

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            } else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });

        $.getJSON("data/MyTeam.json", function (data) {
            $(data.team).each(function () {
                var html = '<div class="col-lg-3 col-md-6 col-xs-12"> '
                    + '<div class="single-team"> '
                    + '<img src="' + this.image + '" alt="' + this.name + '"> '
                    + '<div class="team-details">'
                    + '<div class="team-inner">'
                    + '<h4 class="team-title">' + this.name + '</h4>'
                    + '<p>' + this.title + '</p> '
                    + '<ul class="social-list">'
                    + '<li class="tel"><a href="tel:' + this.tel + '"><i class="fas fa-phone"></i></a></li> '
                    + '<li class="mail"><a href="mailto:' + this.mail + '"><i class="fas fa-envelope"></i></a></li> '
                    + '<li class="qq"><a href="tencent://message/?uin=' + this.qq + '&Site=400301.com&Menu=yes"><i class="fab fa-qq"></i></a></li> '
                    + '<li class="wechat"><a href="weixin://dl/chat?' + this.wechat + '"><i class="fab fa-weixin"></i></a></li> '
                    + '</ul> '
                    + '</div>'
                    + '</div>'
                    + '</div>'
                    + '</div>';
                $(html).appendTo("#MyTeamArrayList");
            });
        });

        $.getJSON("data/Blogs.json", function (data) {
            $(data.blogs).each(function () {
                var html = '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item">'
                    + '<div class="blog-item-wrapper"> '
                    + '<div class="blog-item-img"> '
                    + '<a href="' + this.url + '"> '
                    + '<img src="' + this.cover + '" alt="">'
                    + '</a>'
                    + '</div>'
                    + '<div class="blog-item-text">'
                    + '<div class="meta-tags"> '
                    + '<span class="date"><i class="lnrlnr-clock"></i>' + this.releasedate + '</span>'
                    + '<span class="comments"><a href="#"><i class="lnr lnr-pencil"></i>' + this.person + '</a></span>'
                    + '</div>'
                    + '<h3>'
                    + '<a href="' + this.url + '">' + this.titel + '</a>'
                    + '</h3> '
                    + '<p> '
                    + this.text 
                    + '</p>'
                    + '<a href="' + this.url + '" class="btn-rm">Read More <i class="lnr lnr-arrow-right"></i></a> '
                    + '</div>'
                    + '</div>'
                    + '</div>';
                $(html).appendTo("#MyBlogArray");
            });
        });
    });

    // Slick Nav 
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'span',
        allowParentLinks: true,
        duplicate: false,
        label: '',
        closeOnClick: true
    });


    /* 
       CounterUp
       ========================================================================== */
    $('.counter').counterUp({
        time: 1000
    });

    /* 
       MixitUp
       ========================================================================== */
    $('#portfolio').mixItUp();

    /* 
       Touch Owl Carousel
       ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 3,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [1024, 2],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

    /* 
       Sticky Nav
       ========================================================================== */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

    /* 
       VIDEO POP-UP
       ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });


    /* 
     SMOOTH SCROLL
     ========================================================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';

    $('a.scrollto').on('bind', 'click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });

    /* 
       Back Top Link
       ========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    })

    /* Nivo Lightbox
      ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });


    /* stellar js
      ========================================================*/
    $.stellar({
        horizontalScrolling: true,
        verticalOffset: 40,
        responsive: true
    });

    /* 
       Page Loader
       ========================================================================== */
    $('#loader').fadeOut();

}(jQuery));

