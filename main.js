
let index = 0
const totalWorkItems = $('.work-item').length;

$(document).ready(function() {

    // loading screen
    $(window).on('load', function() {
        $('.preloader').addClass('loaded');
    })

    // nav toggle
    $('.nav-toggle').click(function(){
        $('.header .nav').slideToggle()
    })
    $('.header .nav a').click(function() {
        if($(window).width() < 768) {
            $('.header .nav').slideToggle();
        }
    })

    // fixed header
    $(window).scroll(function() {
        if($(this).scrollTop() > 50){
            $('.header').addClass('fixed');
        }
        else{
            $('.header').removeClass('fixed');
        }
    })

    // Set lightbox img Max-height
    const wHeight = $(window).height();
    $('.lightbox-img').css('max-height',wHeight+'px');

    // lightbox
    $('.work-item-inner').click(function(){
        index = $(this).parent('.work-item').index();
        $('.lightbox').addClass('open');
        lightboxSlideShow();
    })
    $('.lightbox .prev').click(function(){
        if(index == 0){
            index = totalWorkItems-1
        }
        else{
            index--;
        }
        lightboxSlideShow();
    })
    $('.lightbox .next').click(function(){
        if(index == totalWorkItems-1){
            index = 0
        }
        else{
            index++;
        }
        lightboxSlideShow();
    })

    // close lightbox
    $('.lightbox-close').click(function(){
        $('.lightbox').removeClass('open');
    })

    // close lightbox when clicked outside of img-box
    $('.lightbox').click(function(event){
        if($(event.target).hasClass('lightbox')){
            $(this).removeClass('open');
        }
    })
})

function lightboxSlideShow() {
    const imgSrc = $('.work-item').eq(index).find('img').attr('data-large');
    const category = $('.work-item').eq(index).find('h4').html();
    $('.lightbox-img').attr('src',imgSrc);
    $('.lightbox-category').html(category);
    $('.lightbox-counter').html((index+1) + "/" + totalWorkItems);
}