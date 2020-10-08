"use strict";

const colorOption1 = document.querySelector(".js-color1");
const colorOption2 = document.querySelector(".js-color2");
const colorOption3 = document.querySelector(".js-color3");

function colorChange() {
  const name = document.querySelector(".js-name");
  const border = document.querySelector(".js-border");
  const circle = document.querySelector(".js-circ");

  name.classList.remove("txt-dark");
  border.classList.remove("brd");
  circle.classList.remove("circ");

  if (colorOption1.checked === true) {
    name.classList.add("nm-op1");
    name.classList.remove("nm-op2");
    name.classList.remove("nm-op3");

    border.classList.add("bd-op1");
    border.classList.remove("bd-op2");
    border.classList.remove("bd-op3");

    circle.classList.add("cr-op1");
    circle.classList.remove("cr-op2");
    circle.classList.remove("cr-op3");
  }
  if (colorOption2.checked === true) {
    name.classList.add("nm-op2");
    name.classList.remove("nm-op1");
    name.classList.remove("nm-op3");

    border.classList.add("bd-op2");
    border.classList.remove("bd-op1");
    border.classList.remove("bd-op3");

    circle.classList.add("cr-op2");
    circle.classList.remove("cr-op1");
    circle.classList.remove("cr-op3");
  }
  if (colorOption3.checked === true) {
    name.classList.add("nm-op3");
    name.classList.remove("nm-op1");
    name.classList.remove("nm-op2");

    border.classList.add("bd-op3");
    border.classList.remove("bd-op1");
    border.classList.remove("bd-op2");

    circle.classList.add("cr-op3");
    circle.classList.remove("cr-op1");
    circle.classList.remove("cr-op2");
  }
  console.log(name);
  console.log(border);
  console.log(circle);
}

colorOption1.addEventListener("click", colorChange);
colorOption2.addEventListener("click", colorChange);
colorOption3.addEventListener("click", colorChange);
