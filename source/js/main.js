var navButton = document.querySelector('.page-nav__toggle');
var menuShow = document.querySelector('.page-nav__wrapper');
var svgBurger = document.querySelector('.page-nav__svg--burger');
var svgCross = document.querySelector('.page-nav__svg--cross');
var productionNav = document.querySelector('.nav-list__item:nth-child(3)');
var subNavProduction = document.querySelector('.subnav');

//var linkPr = document.querySelectorAll('a');

/*for (let i = 0; i < linkPr.length; i++) {
    const element = linkPr[i];
    element.addEventListener('click', function(e) {
        e.preventDefault();
    })
}*/

navButton.addEventListener('click', function(evt) {
    menuShow.classList.toggle('page-nav__wrapper--show');
    svgBurger.classList.toggle('svg-show');
    svgCross.classList.toggle('svg-show');
});

productionNav.addEventListener('click', function(evt) {
    subNavProduction.classList.toggle('subnav--show');
})