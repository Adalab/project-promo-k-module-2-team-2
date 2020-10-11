/* eslint-disable no-unused-vars */
'use strict';

//el value de input en el elemento de nombre
// const inputName = document.querySelector('.js-input-name');
// const name = document.querySelector ('.js-name');
// const inputJob = document.querySelector ('.js-input-job');
// name.innerHTML = inputName.value;


//crear variables con los elementos del listener y los que queremos cambiar en la tarjeta
const reset = document.querySelector ('.js-reset');
const job = document.querySelector ('.js-job');
const introMail = document.querySelector('.js-mail');
const prevMail = document.querySelector('.js-preview-mail');

// //crear un objeto y sus propiedades
const resetButton1 = {};
resetButton1.name = 'Nombre Apellido';
resetButton1.job = 'Front-end developer';

//funcion para que aparezca el value en el name (h2)


// //funcion a cada propiedad
const paletteReset = document.querySelector('.js-palette');
function changeName (){
  return name.innerHTML =  resetButton1.name;
}


function colorReset (){
  paletteReset.classList.add('default-palette');
  paletteReset.classList.remove ('palette1');
  paletteReset.classList.remove ('palette2');
  paletteReset.classList.remove ('palette3');
}

// function changeJob (){
//   return job.innerHTML = resetButton1.job;
// }

function putMail(){
  prevMail.value = 'www.google.es';
}
// //evento sobre el botón.
// reset.addEventListener ('click',changeName);
reset.addEventListener ('click',colorReset);
// reset.addEventListener ('click',changeJob);
