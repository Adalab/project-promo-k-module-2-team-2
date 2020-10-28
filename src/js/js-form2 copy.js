"use strict";

// Form array

const formData = {
  name: {
    placeholder: "Catrina de Guadalupe",
    property: "innerHTML",
    prefix: "",
    remove: false,
  },
  job: {
    placeholder: "Calavera Garbancera",
    property: "innerHTML",
    prefix: "",
    remove: false,
  },
  phone: {
    placeholder: "",
    property: "href",
    prefix: "tel:",
    remove: false,
  },
  email: {
    placeholder: "",
    property: "href",
    prefix: "mailto:",
    remove: false,
  },
  linkedin: {
    placeholder: "",
    property: "href",
    prefix: "https://linkedin.es/in/",
    remove: true,
  },
  github: {
    placeholder: "",
    property: "href",
    prefix: "https://github.com/",
    remove: true,
  },
};

// Fill card function
function fillCard() {
  for (let formDataElement in formData) {
    const input = document.querySelector(`.js-intro-${formDataElement}`);
    const inputId = input.id;
    let inputValue = input.value;
    const previewCardElement = document.querySelector(`.js-preview-${inputId}`);
    const previewCardElementProperty = formData[inputId].property;
    const previewCardElementPlaceholder = formData[inputId].placeholder;
    const previewCardElementPrefix = formData[inputId].prefix;
    const previewCardElementRemove = formData[inputId].remove;
    debugger;
    if (inputValue === "") {
      previewCardElement[
        previewCardElementProperty
      ] = previewCardElementPlaceholder;
      previewCardElement.removeAttribute("href");
    } else {
      if (previewCardElementRemove === true) {
        inputValue = inputValue.replace(previewCardElementPrefix, "");
        inputValue = inputValue.replace("@", "");
        inputValue = inputValue.replace("/", "");
      }
      previewCardElement[previewCardElementProperty] =
        previewCardElementPrefix + inputValue;
    }
  }
}

// Form local storage
function setDataInLocalStorage() {
  for (let formDataElement in formData) {
    const input = document.querySelector(`.js-intro-${formDataElement}`);
    let inputValue = input.value;
    localStorage.setItem(formDataElement, JSON.stringify(inputValue));
    linkData[`${formDataElement}`] = inputValue;
  }
}

// Get from local function
function getDataFromLocalStorage() {
  // Form data
  for (let formDataElement in formData) {
    const savedData = JSON.parse(localStorage.getItem(formDataElement));
    const input = document.querySelector(`.js-intro-${formDataElement}`);
    input.value = savedData;
  }

  // Color palette
  const savedColor = JSON.parse(localStorage.getItem("palette"));
  const palette = document.querySelector(".js-palette");
  palette.classList.add(`palette${savedColor}`);
  linkData.palette = parseInt(savedColor) + 1;
  for (const col in colorPalette) {
    const colorCheck = document.querySelector(`.js-color${col}`);
    if (colorCheck.classList.contains(`js-color${savedColor}`)) {
      colorCheck.checked = true;
    }
  }

  // Image
  const savedPhoto = localStorage.getItem("photo");
  const cardPhoto = document.querySelector(".js__profile-image");
  cardPhoto.style.backgroundImage = savedPhoto;
}

// Update card function
function updateCard() {
  startPalette();
  fillCard();
  paletteChange();
  fillImage();
  setDataInLocalStorage();
  setData();
}

// Input event listeners
for (let formDataElement in formData) {
  const inputClass = document.querySelector(`.js-intro-${formDataElement}`);
  inputClass.addEventListener("keyup", updateCard);
}

getDataFromLocalStorage();
updateCard();
