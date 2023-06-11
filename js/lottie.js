$(function(){

var loader = document.getElementsByClassName("icon-intro");

function loadAnimation(loader) {
  var animation = lottie.loadAnimation({
    container: loader,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../images/json/intro.json"
  });
  loader.addEventListener("mouseenter", function() {
    animation.setDirection(1);
    animation.play();

  });
  loader.addEventListener("mouseleave", function() {
    animation.setDirection(-1);
    animation.play();
  });
}

for (var i = 0; i < loader.length; i++) {
  loadAnimation(loader[i]);
}

});

$(function(){

var loader = document.getElementsByClassName("icon-blender");

function loadAnimation(loader) {
  var animation = lottie.loadAnimation({
    container: loader,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../images/json/blender.json"
  });
  loader.addEventListener("mouseenter", function() {
    animation.setDirection(1);
    animation.play();

  });
  loader.addEventListener("mouseleave", function() {
    animation.setDirection(-1);
    animation.play();
  });
}

for (var i = 0; i < loader.length; i++) {
  loadAnimation(loader[i]);
}

});

$(function(){

var loader = document.getElementsByClassName("icon-photos");

function loadAnimation(loader) {
  var animation = lottie.loadAnimation({
    container: loader,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "../images/json/photos.json"
  });
  loader.addEventListener("mouseenter", function() {
    animation.setDirection(1);
    animation.play();

  });
  loader.addEventListener("mouseleave", function() {
    animation.setDirection(-1);
    animation.play();
  });
}

for (var i = 0; i < loader.length; i++) {
  loadAnimation(loader[i]);
}

});
