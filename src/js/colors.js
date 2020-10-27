"use strict";

//Data array
const linkData = {};

function setData() {
  let cardImage = document.querySelector(".js__profile-image").style
    .backgroundImage;
  cardImage = cardImage.slice(5, cardImage.length, 1);
  linkData.photo = cardImage;
}

// Card class selector
const palette = document.querySelector(".js-palette");

// Palette array
const colorPalette = [0, 1, 2, 3];

// Palette change function

function paletteChange() {
  function colorChange(ev) {
    // Options
    for (let colorPaletteElement in colorPalette) {
      const colorPaletteItem = colorPalette[colorPaletteElement];
      palette.classList.remove(`palette${colorPaletteItem}`);
      const colorChoice = document.querySelector(
        `.js-color${colorPaletteItem}`
      );
      if (ev.currentTarget.classList.contains(`js-col${colorPaletteItem}`)) {
        colorChoice.checked = true;
        palette.classList.add(`palette${colorPaletteItem}`);
        localStorage.setItem("palette", JSON.stringify(colorPaletteElement));
        linkData.palette = colorPaletteItem + 1;
      }
    }
  }

  // Event listener

  for (let colorPaletteElement of colorPalette) {
    const colorChoiceCheck = document.querySelector(
      `.js-col${colorPaletteElement}`
    );
    colorChoiceCheck.addEventListener("click", colorChange);
  }
}

// Startup

function startPalette() {
  if (palette.classList.contains("palettenull")) {
    palette.classList.add("palette0");
    palette.classList.remove("palettenull");
    const colorCheck = document.querySelector(".js-color0");
    colorCheck.checked = true;
  }
}

function startPhoto() {
  const previewPhoto = document.querySelector(".js__profile-image");
  const storedPhoto = localStorage.getItem("palette");
  if (storedPhoto === null) {
    previewPhoto.style.backgroundImage = "none";
  }
}
