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
      console.log(result);
      console.log(result.error);
    });
}

// Set URL function
function showURL(result) {
  // Link
  const cardLink = document.querySelector(".js-card-link");
  // Twitter
  const buttonTwitter = document.querySelector(".js-twitter");
  const twitterText = encodeURIComponent(
    "¡He creado mi tarjeta con Catrina's profile cards!"
  );
  const twitterHashtag = "Catrinas,Team2,Adalab,PromoKizzy";
  const twitterVia = "&via=yanira_fr,@Chopper_hat,@teresaurio_,@Sus_G1";

  if (result.success === true) {
    cardLink.innerHTML = result.cardURL;
    cardLink.href = result.cardURL;
    buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${result.cardURL}&hashtags=${twitterHashtag}${twitterVia}`;
    buttonTwitter.style.display = "unset";
    buttonTwitter.innerHTML = `<i class="fab fa-twitter"></i> Compartir en twitter</a>`;
  } else if (result.error === undefined) {
    cardLink.innerHTML = `Creando tu link</br><i class="fas fa-spinner"></i>`;
    buttonTwitter.innerHTML = `<i class="fas fa-spinner"></i>`;
    cardLink.removeAttribute("href");
    buttonTwitter.removeAttribute("href");
    buttonTwitter.style.display = "none";
  } else {
    cardLink.innerHTML = `ERROR: ${result.error}`;
    cardLink.removeAttribute("href");
    buttonTwitter.removeAttribute("href");
    buttonTwitter.style.display = "none";
  }
}
