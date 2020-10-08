'use strict';

const preview = {
  name: 'name',
  job: 'job',
};

const inputName = document.querySelector('.form__data__input');
const previewName = document.querySelector('.preview__card__title__name');
function putName(){
  previewName.innerHTML = inputName.value;
}
inputName.addEventListener('keyup', putName);