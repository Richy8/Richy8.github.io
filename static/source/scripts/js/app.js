(function ($) {
    "use strict"

    /* Animation Effects
   ===================*/
    new WOW().init({
        mobile: true
    });

    /* Handle Form Resubmission
   ===================*/
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }


    /* PRELOADER
   ===================*/
   let $window = $(window);
   $window.on('load', function () {
       $('#preloader').fadeOut('slow', () =>  $(this).remove());
   });

  
    /*  HANDLE VIEW OF SIDEBAR ON CLICK
   ======================================*/
   $('.navbar-toggler').on('click', () => $('.mobile-nav').animate({width: '100%'}, 500));
   $('.close-icon').on('click', () => $('.mobile-nav').animate({width: '0%'}, 500));


   
    /*  SKILL SET
    ===============*/
    $('#skills').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '65%'} );


    /* PORTFOLIO SECTION
    ========================*/
    let portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-filters .filter').on( 'click', function() {
        $(".portfolio-filters .filter").removeClass('filter-active');
        $(this).addClass('filter-active');
        console.log('clicked');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    /* PORTFOLIO MAGNIFIC POPUP
    =============================*/
    $('.portfolio-item').magnificPopup({
        delegate: '.lightbox',
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: 'title'
        }
    });

    /* CLIENT CAROUSEL SECTION
    =============================*/
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 2000,
        responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
        }
    });


    /* TESTIMONIAL CAROUSEL SECTION
    =============================*/
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        nav: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

     /* BACK TO TOP
    =================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.scroll-up').fadeIn('slow');
        } else {
          $('.scroll-up').fadeOut('slow');
        }
    });
    $('.scroll-up').click(function(){
        $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
        return false;
    });

    
    /* BLOG SEARCH FORM
    =====================*/
    const $search = $('.search-block');
    $(document).on('mouseup', function(e){
        if(e.target.parentElement.classList.contains('search-block')){
            $search.addClass('box-shadow');
        }else if(!e.target.classList.contains('search-block')){
            $search.removeClass('box-shadow');
        }
    })

})(jQuery);