/* eslint-disable no-unused-vars */
'use strict';

//crear variables con los elementos del listener y los que queremos cambiar en la tarjeta
const name = document.querySelector('.js-name');
const reset = document.querySelector('.js-reset');
const job = document.querySelector('.js-job');
const introMail = document.querySelector('.js-mail');
const prevMail = document.querySelector('.js-preview-mail');

// //crear un objeto y sus propiedades
const resetButton1 = {};
resetButton1.name = 'Nombre Apellido';
resetButton1.job = 'Front-end developer';

// //funcion a cada propiedad
const paletteReset = document.querySelector('.js-palette');


function changeName() {
  for (let formDataReset in formData) {
    const inputReset = document.querySelector(`.js-intro-${formDataReset}`);
    inputReset.value = '';
  }
  profileImage.style.backgroundImage = '';

  updateCard();

  //name.innerHTML =  resetButton1.name;
  // introName.value = '';
  // profilePreview.style.backgroundImage = '';

  //job.innerHTML = resetButton1.job;
  // introJob.value = '';
  // introPhone.value = '';
  // intMail.value = '';ˆ
  // introGithub.value = '';
  // introLinkedin.value = '';
}

function putMail() {
  prevMail.value = 'www.google.es';
}

function colorReset() {
  const colorOption1 = document.querySelector('.js-color1');
  if (paletteReset.classList.contains('palette1') === false) {
    paletteReset.classList.add('palette1');
    paletteReset.classList.remove('palette2');
    paletteReset.classList.remove('palette3');
  }
  if (colorOption1.checked === false) {
    colorOption1.checked = true;
  }
  // eslint-disable-next-line no-console
  console.log(colorOption1);
}

//evento sobre el botón.
reset.addEventListener('click', changeName);
reset.addEventListener('click', colorReset);
