$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn(500);
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut(500);
        return false;
    });
});

$( function(){
   $( 'img.lazy' ).lazyload({
       effect: "fadeIn",
       effect_speed: 1500,
       threshold: 200,
   }) ;
}) ;
