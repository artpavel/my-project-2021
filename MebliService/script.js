$(document).ready(function() {
    // acordeon
    $('.single h3').on('click', function() {
        if ($(this).hasClass('activeAcordeon')) {
            $(this).next().slideToggle();
            $(this).toggleClass('activeAcordeon');
        } else {
            $('.single h3.activeAcordeon').next().slideUp();
            $('.single h3.activeAcordeon').removeClass('activeAcordeon');
            $(this).next().slideDown();
            $(this).addClass('activeAcordeon');
        }
    })

    // slider

    $('.slider-for').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });









});