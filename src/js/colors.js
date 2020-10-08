"use strict";

const colorOption1 = document.querySelector(".js-color1");
const colorOption2 = document.querySelector(".js-color2");
const colorOption3 = document.querySelector(".js-color3");

function colorChange() {
  const name = document.querySelector(".js-name");
  name.classList.remove("txt-dark");
  if (colorOption1.checked === true) {
    name.classList.add("first-option");
    name.classList.remove("second-option");
    name.classList.remove("third-option");
  }
  if (colorOption2.checked === true) {
    name.classList.add("second-option");
    name.classList.remove("first-option");
    name.classList.remove("third-option");
  }
  if (colorOption3.checked === true) {
    name.classList.add("third-option");
    name.classList.remove("first-option");
    name.classList.remove("second-option");
  }
  console.log(name);
}

colorOption1.addEventListener("click", colorChange);
colorOption2.addEventListener("click", colorChange);
colorOption3.addEventListener("click", colorChange);
