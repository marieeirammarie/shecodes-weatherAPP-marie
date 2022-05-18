// Function 1: Load current Date & Time
function loadDate(now) {
  let date = now.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${date} ${month} ${hours} : ${minutes}`;
}

// Alert Function 1: Load current Date & Time
let currentTime = document.querySelector("#current-time");
let now = new Date();
currentTime.innerHTML = loadDate(now);

// Function 3: Show current Status (Position & Weather)
function showCurrentStatus(response) {
  let location = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let cityName = document.querySelector("#chosen-city");
  cityName.innerHTML = `${location}`;
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}`;
}

// Function 2: Load current Position & Weather
function loadCurrentStatus(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "3b0dd576d30fcc1cc16ccaf31a91c33f";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;
  let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrentStatus);
}

// Alert Function 2 & 3: Load current Location
navigator.geolocation.getCurrentPosition(loadCurrentStatus);

// Function 5
function showSearchedTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = temperature;
}

// Function 4
function loadSearchedCity(event) {
  event.preventDefault();
  let userCity = document.querySelector("#city-input");
  let apiKey = "3b0dd576d30fcc1cc16ccaf31a91c33f";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;
  let apiUrl = `${apiEndpoint}q=${userCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showSearchedTemperature);
  let city = document.querySelector("#chosen-city");
  if (userCity.value) {
    city.innerHTML = userCity.value;
  } else {
    alert(showCurrentStatus);
  }
}

// Alert Function 4 & 5: Search current Location/ User types in desired city name & API sends info to weather app
let searchCity = document.querySelector("#submit-city");
searchCity.addEventListener("click", loadSearchedCity);

// Function 7:

// Function 6:
// function loadCurrentStatus(position){
// let latitude = position.coords.latitude;
// let longitude = position.coords.longitude;
// let apiKey = "3b0dd576d30fcc1cc16ccaf31a91c33f";
// let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?`;
// let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
// axios.get(apiUrl).then(showCurrentStatus);}

// Alert Function 6 & 7: Show Current Location & Weather again after search ended
// let searchCurrentLocation = document.querySelector("#current-location");
// searchCurrentLocation.addEventListener("click", navigator.geolocation.getCurrentPosition(loadCurrentStatus);
