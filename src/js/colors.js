"use strict";

// Card class selector
const palette = document.querySelector(".js-palette");

// Palette array
const colorPalette = [0, 1, 2, 3];

// Palette change function

function paletteChange() {
  // Card class remove
  for (let colorPaletteElement in colorPalette) {
    palette.classList.remove(`palette${colorPaletteElement}`);
  }

  //Default palette
  const defaultPalette = document.querySelector(`.js-color${colorPalette[0]}`);
  palette.classList.add(`palette${colorPalette[0]}`);
  if (defaultPalette.checked === false) {
    defaultPalette.checked = true;
  }

  function colorChange(ev) {
    // Options
    for (let colorPaletteElement in colorPalette) {
      palette.classList.remove(`palette${colorPaletteElement}`);
      const colorChoice = document.querySelector(
        `.js-color${colorPaletteElement}`
      );
      if (ev.currentTarget.classList.contains(`js-col${colorPaletteElement}`)) {
        colorChoice.checked = true;
        palette.classList.add(`palette${colorPaletteElement}`);
      }
    }
  }

  // Event listener

  for (let colorPaletteElement of colorPalette) {
    const colorChoiceCheck = document.querySelector(
      `.js-col${colorPaletteElement}`
    );
    // console.log(colorChoiceCheck);
    colorChoiceCheck.addEventListener("click", colorChange);
  }
}
