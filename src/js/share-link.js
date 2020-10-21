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

  if (result.success) {
    cardLink.innerHTML =
      "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";
  } else {
    cardLink.innerHTML = "ERROR:" + result.error;
  }
}
