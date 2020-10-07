"use strict";

const buttonArrowDesign = document.querySelector(".form__box__button--design");
const buttonArrowFill = document.querySelector(".form__box__button--fill");
const buttonArrowShare = document.querySelector(".form__box__button--share");

function handleButtonArrowClick(event) {
  const openedButton = event.currentTarget;
  openedButton.classList.toggle("btn-rotate");
  console.log("rotate");

  //   const formBoxDesign = document.querySelector(".form__color");
  //   const formBoxFill = document.querySelector(".form__data");
  //   const formBoxShare = document.querySelector(".form__share--button");

  //   const showContent = event.currentTarget;
  //   showContent.classList.toggle("visible");
  //   console.log("visible");
}

buttonArrowDesign.addEventListener("click", handleButtonArrowClick);
buttonArrowFill.addEventListener("click", handleButtonArrowClick);
buttonArrowShare.addEventListener("click", handleButtonArrowClick);
