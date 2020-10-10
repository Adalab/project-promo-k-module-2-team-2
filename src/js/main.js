"use strict";

const buttonArrowDesign = document.querySelector(
  ".js-form__box__button--design"
);
const buttonArrowFill = document.querySelector(".js-form__box__button--fill");
const buttonArrowShare = document.querySelector(".js-form__box__button--share");

const formBoxDesign = document.querySelector(".js-form__color");
const formBoxFill = document.querySelector(".form__data");
const formBoxShare = document.querySelector(".form__share--button");

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

const buttonSubmit = document.querySelector(".form__share--button");

function handleButtonSubmit(event) {
  buttonSubmit.classList.add("change-color");
  console.log("change color");

  event.preventDefault();
}

buttonSubmit.addEventListener("click", handleButtonSubmit());
