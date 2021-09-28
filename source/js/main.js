var navButton = document.querySelector('.page-nav__toggle');
var menuShow = document.querySelector('.page-nav__wrapper');
var svgBurger = document.querySelector('.page-nav__svg--burger');
var svgCross = document.querySelector('.page-nav__svg--cross');
var productionNav = document.querySelector('.nav-list__item:nth-child(3)');
var subNavProduction = document.querySelector('.subnav');
var instructionButton = document.querySelector('.instruction__item-button');
var instructionListShow = document.querySelector('.instruction__list--show');
var instructionNavButtons = document.querySelectorAll('.instruction__nav-button');
var instructionTextLists = document.querySelectorAll('.instruction__list');

navButton.addEventListener('click', function(evt) {
    menuShow.classList.toggle('page-nav__wrapper--show');
    svgBurger.classList.toggle('svg-show');
    svgCross.classList.toggle('svg-show');
});

productionNav.addEventListener('click', function(evt) {
    subNavProduction.classList.toggle('subnav--show');
});

for (let k = 0; k < instructionNavButtons.length; k++) {
    instructionNavButtons[k].addEventListener('click', function(evt) {
        evt.preventDefault();
        for (let y = 0; y < instructionTextLists.length; y++) {
            if (instructionNavButtons[k].dataset.parents === instructionTextLists[y].dataset.parents) {
                instructionTextLists[y].classList.add('instruction__list--show');
                instructionButton.classList.add('instruction__item-button--show');
                instructionButton.addEventListener('click', function(evt) {
                    evt.preventDefault();
                    var activeElement =  instructionTextLists[y].querySelector('.is-active');
                    var instructionItems = instructionTextLists[y].querySelectorAll('.instruction__item');
                    for (let i = 0; i < instructionItems.length; i++) {
                        if (activeElement == instructionItems[0]) {
                            instructionItems[0].classList.remove('is-active');
                            instructionItems[1].classList.add('is-active');
                        } else if (activeElement == instructionItems[1]) {
                            instructionItems[1].classList.remove('is-active');
                            instructionItems[2].classList.add('is-active');
                        } else if (activeElement == instructionItems[2]) {
                            instructionItems[2].classList.remove('is-active');
                            instructionItems[0].classList.add('is-active');
                        }
                    }
                })
            } else if (instructionNavButtons[k].dataset.parents !== instructionTextLists[y].dataset.parents) {
                instructionTextLists[y].classList.remove('instruction__list--show');
                instructionButton.classList.add('instruction__item-button--show');
            }

        }
    })

}
