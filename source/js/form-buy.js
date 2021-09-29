var productionList = document.querySelector('.production__list');
var productionItems = document.querySelectorAll('.production__item');
var productionBuyButton = document.querySelectorAll('.production__button');
var formBuy = document.querySelector('.form-buy');
var formBuyClose = formBuy.querySelector('.form-buy__close');
var formSubmit = formBuy.querySelector('.form-buy__submit');
var credentialsLabel = formBuy.querySelectorAll('.form-buy .credentials__data');
var modalFailure = formBuy.querySelector('.modal-failure');
var modalSucces = formBuy.querySelector('.modal-succes');
var modalSuccesButton = modalSucces.querySelector('.modal-succes__button');
var modalFailureButton = modalFailure.querySelector('.modal-failure__button');

for (let i = 0; i < productionItems.length; i++) {
  const element = productionItems[i];
  var productionBuyButton = element.querySelector('.production__button');
  console.log(productionBuyButton);

  productionBuyButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    var valueLabel = this.parentNode.querySelector('.production__name').textContent;
    var formBuyProductName = formBuy.querySelector('.form-buy__product-name');
    formBuy.classList.add('form-buy--show');
    formBuyProductName.value = valueLabel;
    console.log(this.parentNode.querySelector('.production__name').textContent);
    formBuyClose.addEventListener('click', function(evt) {
      formBuy.classList.remove('form-buy--show');
    })
  })
}

formSubmit.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (let i = 0; i < credentialsLabel.length; i++) {
    const element = credentialsLabel[i];
    if (element.value == "") {
      modalFailure.classList.add('modal-failure--show');
    } else if (credentialsLabel[1].value !== "" && credentialsLabel[2].value !== "" && credentialsLabel[3].value !== "") {
      modalSucces.classList.add('modal-succes--show');
    }
  }
})

modalFailureButton.addEventListener('click', function(evt) {
  modalFailure.classList.remove('modal-failure--show');
})

modalSuccesButton.addEventListener('click', function (evt) {
  modalSucces.classList.remove('modal-succes--show');
})



