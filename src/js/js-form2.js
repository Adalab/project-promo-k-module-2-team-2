'use strict';
debugger;
const introName = document.querySelector('.js-intro-name');
const prevName = document.querySelector('.js-preview-name');
const introJob = document.querySelector('.js-intro-job');
const prevJob = document.querySelector('.js-preview-job');

function putName(){
  prevName.innerHTML = introName.value;
}

function putJob(){
  prevJob.innerHTML = introJob.value;
}

introName.addEventListener('keyup',putName);
introJob.addEventListener('keyup',putJob);


