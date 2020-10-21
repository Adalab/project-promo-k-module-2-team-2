/* eslint-disable no-unused-vars */
'use strict';

//crear variables con los elementos del listener y los que queremos cambiar en la tarjeta
const reset = document.querySelector('.js-reset');

// //funcion a cada propiedad
const paletteReset = document.querySelector('.js-palette');

function resetCard() {
  for (let formDataReset in formData) {
    const inputReset = document.querySelector(`.js-intro-${formDataReset}`);
    inputReset.value = '';
  }
  profileImage.style.backgroundImage = '';

  for (let colorPaletteElement in colorPalette) {
    palette.classList.remove(`palette${colorPaletteElement}`);
  }
  palette.classList.add('palette0');

  updateCard();
  paletteChange();

}

//evento sobre el botón.
reset.addEventListener('click', resetCard);
