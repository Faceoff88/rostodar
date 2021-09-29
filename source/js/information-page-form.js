var impactButton = document.querySelector('.impact__callback');
var informConsult = document.querySelector('.information-page .consultation');

impactButton.addEventListener('click', function(evt) {
  informConsult.classList.add('consultation--show');
})
