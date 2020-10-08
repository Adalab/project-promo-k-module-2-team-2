"use strict";

const buttonArrowDesign = document.querySelector(".form__box__button--design");
const buttonArrowFill = document.querySelector(".form__box__button--fill");
const buttonArrowShare = document.querySelector(".form__box__button--share");

const formBoxDesign = document.querySelector(".form__color");
const formBoxFill = document.querySelector(".form__data");
const formBoxShare = document.querySelector(".form__share--button");

function handleButtonArrowClick(event) {
  const openedButton = event.currentTarget;
  openedButton.classList.toggle("btn-rotate");
  console.log("rotate");

  if (openedButton.classList.contains("btn-rotate") === true) {
    formBoxShare.classList.add("visible");
    console.log("visible");
  } else if (openedButton.classList.contains("btn-rotate") === false) {
    formBoxShare.classList.remove("visible");
  }

  event.preventDefault();
}

buttonArrowDesign.addEventListener("click", handleButtonArrowClick);
buttonArrowFill.addEventListener("click", handleButtonArrowClick);
buttonArrowShare.addEventListener("click", handleButtonArrowClick);
