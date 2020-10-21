function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(localStorage),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  const cardLink = document.querySelector(".js-card-link");

  if (result.success === true) {
    cardLink.innerHTML =
      "<a href=" +
      result.cardURL +
      ' target="_blank"' +
      ">" +
      result.cardURL +
      "</a>";
  } else {
    cardLink.innerHTML = "ERROR:" + result.error;
  }
}

// button twitter

function createTwitterLink(result) {
  const buttonTwitter = document.querySelector(".js-twitter");
  const twitterText = encodeURIComponent(
    "¡He creado mi tarjeta con Catrina's profile cards!"
  );
  const twitterURL = result.cardURL;
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterURL}`;
}
