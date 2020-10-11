'use strict';


// Color input selectors

const colorOption1 = document.querySelector('.js-color1');
const colorOption2 = document.querySelector('.js-color2');
const colorOption3 = document.querySelector('.js-color3');

if (colorOption1.checked === false){
  colorOption1.checked = true;
}


//Color change function

function colorChange() {

  // Card class selector

  const palette = document.querySelector('.js-palette');

  // Card class remove

  palette.classList.remove('palette1');
  palette.classList.remove('palette2');
  palette.classList.remove('palette3');

  // Option 1

  if (colorOption1.checked === true) {

    //Palette 1
    palette.classList.add('palette1');
  }

  // Option 2

  if (colorOption2.checked === true) {

    //Palette 2
    palette.classList.add('palette2');
  }

  // Option 3

  if (colorOption3.checked === true) {

    //Palette 3
    palette.classList.add('palette3');

  }
}

// Event listeners on input

colorOption1.addEventListener('click', colorChange);
colorOption2.addEventListener('click', colorChange);
colorOption3.addEventListener('click', colorChange);
