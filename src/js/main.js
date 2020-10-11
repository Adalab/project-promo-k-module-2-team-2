"use strict";

// drop-down menu

const buttonArrowDesign = document.querySelector(
  ".js-form__box__button--design"
);
const buttonArrowFill = document.querySelector(".js-form__box__button--fill");
const buttonArrowShare = document.querySelector(".js-form__box__button--share");

const formBoxDesign = document.querySelector(".form__color--container");
const formBoxFill = document.querySelector(".form__data");
const formBoxShare = document.querySelector(".form__share--container");

function handleButtonArrowClick(event) {
  const openedButton = event.currentTarget;
  openedButton.classList.toggle("btn-rotate");
  console.log("rotate");

  if (buttonArrowDesign.classList.contains("btn-rotate") === true) {
    formBoxDesign.classList.add("visible");
    console.log("visible");
  } else if (buttonArrowDesign.classList.contains("btn-rotate") === false) {
    formBoxDesign.classList.remove("visible");
  }

  if (buttonArrowFill.classList.contains("btn-rotate") === true) {
    formBoxFill.classList.add("visible");
    console.log("visible");
  } else if (buttonArrowFill.classList.contains("btn-rotate") === false) {
    formBoxFill.classList.remove("visible");
  }

  if (buttonArrowShare.classList.contains("btn-rotate") === true) {
    formBoxShare.classList.add("visible");
    console.log("visible");
  } else if (buttonArrowShare.classList.contains("btn-rotate") === false) {
    formBoxShare.classList.remove("visible");
  }

  event.preventDefault();
}

buttonArrowDesign.addEventListener("click", handleButtonArrowClick);
buttonArrowFill.addEventListener("click", handleButtonArrowClick);
buttonArrowShare.addEventListener("click", handleButtonArrowClick);

// share box

const buttonSubmit = document.querySelector(".js-form__share--button");

function handleButtonSubmit(event) {
  buttonSubmit.classList.add("change-color");
  console.log("change color");

  if (buttonSubmit.classList.contains("change-color")) {
    const shareMessageBox = document.querySelector(".form__share--message");
    shareMessageBox.classList.add("js-show-form__share--message");
  }

  event.preventDefault();
}

buttonSubmit.addEventListener("click", handleButtonSubmit);
