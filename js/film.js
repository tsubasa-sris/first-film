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

const checkToggle = document.getElementById('js_mode_toggle');
const rotateIcon = document.getElementById('js_rotate');
const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const keyLocalStorage = 'fujilogicKey';
const localTheme = localStorage.getItem(keyLocalStorage);
let nowRotate = 0;
if (localTheme === 'light') {
  rotateInfinite();
  changeMode('light');
} else if (localTheme === 'dark') {
  changeMode('dark');
} else if (isLight) {
  rotateInfinite();
  changeMode('light');
}
checkToggle.addEventListener('change', function (e) {
  rotateInfinite();
  if (e.target.checked) {
    changeMode('light');
    localStorage.setItem(keyLocalStorage, 'light');
  } else {
    changeMode('dark');
    localStorage.setItem(keyLocalStorage, 'dark');
  }
});

function changeMode(mode) {
  if (mode === 'light') {
    document.documentElement.setAttribute('data-theme-mode', 'light')
    checkToggle.checked = true;
  } else if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme-mode', 'dark')
    checkToggle.checked = false;
  }
}

function rotateInfinite() {
  nowRotate += 180;
  rotateIcon.style.transform = 'rotate(' + nowRotate + 'deg)';
}
