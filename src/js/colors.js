"use strict";

// Card class selector
const palette = document.querySelector(".js-palette");

// Palette array
const colorPalette = [0, 1, 2];

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
    // Card class remove
    for (let colorPaletteElement in colorPalette) {
      palette.classList.remove(`palette${colorPaletteElement}`);
    }
    // Options
    for (let colorPaletteElement in colorPalette) {
      const colorChoice = document.querySelector(
        `.js-color${colorPaletteElement}`
      );
      if (
        ev.currentTarget.classList.contains === `.js-col${colorPaletteElement}`
      ) {
        // colorChoice.checked = true;
        console.log("el if");
        palette.classList.add(`palette${colorPaletteElement}`);
        colorChoice.checked = true;
      }

      //   if (colorChoice.checked === true)
      //     palette.classList.add(`palette${colorPaletteElement}`);
    }
  }

  // Event listener

  for (let colorPaletteElement in colorPalette) {
    let colorChoiceCheck = document.querySelector(
      `.js-color${colorPaletteElement}`
    );
    colorChoiceCheck.addEventListener("click", colorChange);
  }
}
