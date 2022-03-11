// Update the page content with a random advice got from API

function showAdvice(response) {
  let adviceId = document.querySelector("#advice-number");
  adviceId.innerHTML = `${response.data.slip.id}`;

  let adviceQuote = document.querySelector("#advice-quote");
  adviceQuote.innerHTML = `"${response.data.slip.advice}"`;
}

// Get info from API

function getAdvice() {
  let endpoint = "https://api.adviceslip.com/advice";
  axios.get(endpoint).then(showAdvice);
}

// Generate a new advice when the user click on the dice button

function newAdvice(event) {
  event.preventDefault();
  getAdvice();
}

// Show an advice when the user loads the page

function welcomeAdvice() {
  getAdvice();
}

// Page interactions: click on button + welcome message

let adviceButton = document.querySelector("#advice-button");
adviceButton.addEventListener("click", newAdvice);

welcomeAdvice();
