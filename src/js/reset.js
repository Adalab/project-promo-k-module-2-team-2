/* eslint-disable no-unused-vars */
'use strict';

//el value de input en el elemento de nombre
const inputName = document.querySelector('.js-input-name');
const name = document.querySelector ('.js-name');
const dataName = inputName.value;
name.innerHTML = dataName;
const reset = document.querySelector ('.js-reset');
const job = document.querySelector ('.js-job');

// //crear un objeto y sus propiedades
const resetButton1 = {};
resetButton1.name = 'Nombre Apellido';
resetButton1.job = 'Front-end developer';

// //funcion a cada propiedad
function changeName (){
  return name.innerHTML =  resetButton1.name;
}

// function changeJob (){
//   return job.innerHTML = resetButton1.job;
// }


// //evento sobre el botón.
reset.addEventListener ('click',changeName);
// reset.addEventListener ('click',changeJob);
