"use strict";

// Color input selectors

const colorOption1 = document.querySelector(".js-color1");
const colorOption2 = document.querySelector(".js-color2");
const colorOption3 = document.querySelector(".js-color3");

//Color change function

function colorChange() {

  // Card selectors

  const name = document.querySelector(".js-name");
  const border = document.querySelector(".js-border");
  const circle = document.querySelector(".js-circ");
  const icon = document.querySelector(".js-ico");
  const palette = document.querySelector(".js-palette");

  // Card default class remove

  name.classList.remove("txt-dark");
  border.classList.remove("brd");
  circle.classList.remove("circ");

  palette.classList.remove("palette1");
  palette.classList.remove("palette2");
  palette.classList.remove("palette3");
  
  name.classList.remove("nm-op2");
  name.classList.remove("nm-op3");

  border.classList.remove("bd-op2");
  border.classList.remove("bd-op3");
  
  circle.classList.remove("cr-op2");
  circle.classList.remove("cr-op3");
  
  icon.classList.remove("ico-op2");
  icon.classList.remove("ico-op3");

  // Option 1

  if (colorOption1.checked === true) {

    //Palette 1
    palette.classList.add("palette1");
  }

  // Option 2

  if (colorOption2.checked === true) {

    //Name 2
    name.classList.add("nm-op2");

    //Border 2
    border.classList.add("bd-op2");

    //Circle 2
    circle.classList.add("cr-op2");

    // Icon 2
    icon.classList.add("ico-op2");
  }

// Option 3

  if (colorOption3.checked === true) {

    //Name 3
    name.classList.add("nm-op3");

    //Border 3
    border.classList.add("bd-op3");

    //Circle 3
    circle.classList.add("cr-op3");

    // Icon 3
    icon.classList.add("ico-op3");
  }

  // Console log
  console.log(name);
  console.log(border);
  console.log(circle);
  console.log(icon);
}

// Event listeners on input

colorOption1.addEventListener("click", colorChange);
colorOption2.addEventListener("click", colorChange);
colorOption3.addEventListener("click", colorChange);
