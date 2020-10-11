'use strict';

//Linkedin function
const linkedinIcon = document.querySelector('.js-linkedin ');
const introLinkedin = document.querySelector('.js-input-linkedin');
function changeLinkedin (){
  linkedinIcon.href = introLinkedin.value;
}

//Email function
// const emailIcon = document.querySelector('.js-email');
// const introMail = document.querySelector('.js-input-mail');
// function changeEmail (){
//   emailIcon.href = introMail.value;
// }

//Mobile function
// const phoneIcon = document.querySelector ('.js-mobile');
// const introPhone = document.querySelector ('.js-input-phone');
// function changePhone (){
//   phoneIcon.href = introPhone.value;
// }

//Github function
const githubIcon = document.querySelector ('js-github');
const introGithub = document.querySelector ('js-github');
function changeGithub () {
  githubIcon.href = 'https://github.com/' + introGithub.value;
}


//events
introGithub.addEventListener('keyup',changeGithub);
introLinkedin.addEventListener('keyup',changeLinkedin);
// introMail.addEventListener('keyup', changeEmail);
// introPhone.addEventListener('keyup', changePhone);
