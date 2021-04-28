let timeNow = new Date();

let hourNow = document.querySelector("#current-time");

let hour = timeNow.getHours();
if (hour < 10) {
  hour = `0 ${hour}`;
}
let minute = timeNow.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[timeNow.getDay()];

hourNow.innerHTML = `${day}, ${hour}:${minute}`;

function citySearch(event) {
  event.preventDefault();
  let cityImput = document.querySelector("#city-input");
  let city = document.querySelector("#city-id");
  city.innerHTML = cityImput.value;
}

let changeCity = document.querySelector("#city-form");
changeCity.addEventListener("submit", citySearch);


 

function showTemperature(response){
  let temperature= Math.round(response.data.main.temp);
  let cityTemp= response.data.name;
  let cityId= document.querySelector("#city-id");
  cityId.innerHTML= `${cityTemp}`;
  let realTemp= document.querySelector("#temp-display");
  realTemp.innerHTML= `${temperature}`;

  
}
let apiKey = "166250c85e8d3dfc0b7a447a4106a883";

function searchCity(event) {
  event.preventDefault();
  let units= "metric";
  let cityInput = document.querySelector("#city-input");
  let cityD= document.querySelector("#city-id");
  cityD.innerHTML= `${cityInput.value}`;
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=${units}&appid=${apiKey}`;
  
  axios.get(apiUrl).then(showTemperature);
  
}


let searchBtn= document.querySelector("#search");

searchBtn.addEventListener("click", searchCity);

let cityForm= document.querySelector("#city-form");
cityForm.addEventListener("submit", searchCity);

function positionNow(position){
  let units= "metric";
  let apiKey= "166250c85e8d3dfc0b7a447a4106a883";
  let latitude = position.coords.latitude;
  let longitude= position.coords.longitude;
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}


  navigator.geolocation.getCurrentPosition(positionNow);


let weatherNow = document.querySelector("#your-location");
weatherNow.addEventListener("click", positionNow);