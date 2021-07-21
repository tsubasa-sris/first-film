window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

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
