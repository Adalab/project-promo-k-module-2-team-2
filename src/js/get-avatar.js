"use strict";

const fr = new FileReader();
const uploadBtn = document.querySelector(".js__profile-trigger");
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  fileField.removeAttribute("type", "file");
  fileField.setAttribute("type", "file");
  linkData.photo = `url(${fr.result})`;
  localStorage.setItem("photo", `url(${fr.result})`);
  fillImage();
  console.log(linkData);
}

function fillImage() {
  profilePreview.style.backgroundImage = profileImage.style.backgroundImage;
}

function fakeFileClick() {
  fileField.click();
}

uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);
