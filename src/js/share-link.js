'use strict';

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(localStorage),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    });
}

function showURL(result) {
  const cardLink = document.querySelector('.js-card-link');

  if (result.success === true) {
    cardLink.innerHTML =
      '<a href=' +
      result.cardURL +
      ' target="_blank"' + ' class="card-link js-card-link2 txt-bright txt-xs"' +
      '>' +
      result.cardURL +
      '</a>';
  } else {
    cardLink.innerHTML = 'ERROR:' + result.error;
  }
}

// button twitter

function createTwitterLink(result) {
  const buttonTwitter = document.querySelector('.js-twitter');
  const twitterText = encodeURIComponent(
    "¡He creado mi tarjeta con Catrina's profile cards!"
  );
  
  const twitterURL = document.querySelector(".js-card-link2").href;
  // const twitterURL = result.cardURL;
  console.log(twitterURL);
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterURL}`;
}
