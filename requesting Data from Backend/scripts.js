// Access DOM elements
const reportSection = document.getElementById("weather-report");
const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city");

// xmlHtttpRequest object
let api_request = new XMLHttpRequest();

//to prepare and send our request
// the open() method sets the type of request and the URL it will be sent to,
// the send() method then sends the request.

//evenet listner
cityForm.addEventListener("submit", ($event) => {
  $event.preventDefault();
  const chosencity = cityInput.value;
  api_request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      chosencity +
      "&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e"
  );
  api_request.send();
});

// to handle dat when we get response
api_request.onreadystatechange = () => {
  if (api_request.readyState === 4) {
    const response = JSON.parse(api_request.response);
    reportSection.textContent =
      "The weather in " +
      response.name +
      " is " +
      response.weather[0].main +
      ".";
  }
};

const report = document.querySelector("section");
const city = document.getElementById("city");
const weatherform = document.getElementById("weather-form");

let apiRequest = new XMLHttpRequest();

weatherform.addEventListener("submit", ($event) => {
  $event.preventDefault();
  const city3=document.getElementById('city3');
  const cityin=city3.value;
  apiRequest.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityin +
      "&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e"
  );
  apiRequest.send();
});

apiRequest.onreadystatechange = () => {
    if (api_request.readyState === 4) {
        const result = JSON.parse(api_request.response);
        report.textContent =
          "The weather in " +
          result.name +
          " is " +
          result.weather[0].main +
          ".";
      }
    };