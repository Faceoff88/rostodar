var navButton = document.querySelector('.page-nav__toggle');
var menuShow = document.querySelector('.page-nav__wrapper');
var svgBurger = document.querySelector('.page-nav__svg--burger');
var svgCross = document.querySelector('.page-nav__svg--cross');

navButton.addEventListener('click', function(evt) {
    menuShow.classList.toggle('page-nav__wrapper--show');
    svgBurger.classList.toggle('svg-show');
    svgCross.classList.toggle('svg-show');
});