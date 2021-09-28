var modalFailure = document.querySelector('.modal-failure');
var modalSucces = document.querySelector('.modal-succes');
var modalSuccesButton = modalSucces.querySelector('.modal-succes__button');
var consultationForm = document.querySelector('.consultation__form');
var credentialsLabel = consultationForm.querySelectorAll('.credentials__data');
var formSubmit = consultationForm.querySelector('.consultation__submit');
var modalFailureButton = modalFailure.querySelector('.modal-failure__button');


formSubmit.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (let i = 0; i < credentialsLabel.length; i++) {
    const element = credentialsLabel[i];
    if (element.value == "") {
      modalFailure.classList.add('modal-failure--show');
    } else if (credentialsLabel[0].value !== "" && credentialsLabel[1].value !== "" && credentialsLabel[2].value !== "") {
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
