'use strict';

const introName = document.querySelector('.js-intro-name');
const prevName = document.querySelector('.js-preview-name');
const introJob = document.querySelector('.js-intro-job');
const prevJob = document.querySelector('.js-preview-job');
const introPhone = document.querySelector('.js-phone');
const prevPhone = document.querySelector('.js-preview-phone');
const introMail = document.querySelector('.js-mail');
const prevMail = document.querySelector('.js-preview-mail');

function putName(){
  prevName.innerHTML = introName.value;
}

function putJob(){
  prevJob.innerHTML = introJob.value;
}

function putPhone(){
  prevPhone.innerHTML = introPhone.href;
}

function putMail(){
  prevMail.innerHTML = introMail.href;
}

introName.addEventListener('keyup',putName);
introJob.addEventListener('keyup',putJob);
introPhone.addEventListener('keyup',putPhone);
introMail.addEventListener('keyup',putMail);

