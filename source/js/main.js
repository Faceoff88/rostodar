var navButton = document.querySelector('.page-nav__toggle');
var menuShow = document.querySelector('.page-nav__wrapper');
var svgBurger = document.querySelector('.page-nav__svg--burger');
var svgCross = document.querySelector('.page-nav__svg--cross');
var productionNav = document.querySelector('.nav-list__item:nth-child(3)');
var subNavProduction = document.querySelector('.subnav');
var instructionButton = document.querySelector('.instruction__item-button');
var soilTreatment = document.querySelector('.soil-treatment');
var seedTreatment = document.querySelector('.seed-treatment');
var growingseasonTreatment = document.querySelector('.growingseason-treatment');
var instructionItems = document.querySelectorAll('.instruction__item');


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
});

instructionButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    for (let i = 0; i < instructionItems.length; i++) {
        var element = instructionItems[i];
        var activeElement =  .querySelector('.is-active');
        if (activeElement = instructionItems[0]) {
            activeElement.classList.remove('is-active');
            instructionItems[1].classList.add('is-active');
        } else if (activeElement = instructionItems[1]) {
            activeElement.classList.remove('is-active');
            instructionItems[2].classList.add('is-active');
        } else if (activeElement = instructionItems[2]) {
            activeElement.classList.remove('is-active');
            instructionItems[0].classList.add('is-active');
        } else {
            instructionItems[0].classList.add('is active');
        }
    }
})
