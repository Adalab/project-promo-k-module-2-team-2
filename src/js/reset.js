"use strict";

// Query selectors
const reset = document.querySelector(".js-reset");
const paletteReset = document.querySelector(".js-palette");

// Reset function
function resetCard() {
  for (let formDataReset in formData) {
    const inputReset = document.querySelector(`.js-intro-${formDataReset}`);
    inputReset.value = "";
  }
  profileImage.style.backgroundImage = "";

  for (let colorPaletteElement in colorPalette) {
    palette.classList.remove(`palette${colorPaletteElement}`);
  }
  palette.classList.add("palette0");
  const colorChoice = document.querySelector(`.js-color0`);
  colorChoice.checked = true;

  updateCard();
  paletteChange();
  localStorage.clear();
}

// Button event
reset.addEventListener("click", resetCard);
