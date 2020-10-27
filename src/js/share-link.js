"use strict";

// API request function
function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(linkData),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    });
}

// Set URL function
function showURL(result) {
  // Link
  const cardLink = document.querySelector(".js-card-link");

  if (result.success === true) {
    cardLink.innerHTML = result.cardURL;
    cardLink.href = result.cardURL;
  } else if (result.error === undefined) {
    cardLink.innerHTML = "Creando tu link";
  } else {
    cardLink.innerHTML = "ERROR: " + result.error;
  }

  // Twitter
  const buttonTwitter = document.querySelector(".js-twitter");
  const twitterText = encodeURIComponent(
    "¡He creado mi tarjeta con Catrina's profile cards!"
  );
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${result.cardURL}`;
}
