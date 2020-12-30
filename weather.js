const weather_temp = document.querySelector(".js-weather__temp");
const weather_place = document.querySelector(".js-weather__place");
const icon = document.querySelector("i");

const API_KEY = "7556e151a5567c98f8c38de66e8342d0";
const COORDS = "coords";
const CLEAN_I = "wi-day-sunny";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = Math.round(json.main.temp);
      const place = json.name;
      const iconVal = json.weather[0].icon;
      weather_temp.innerText = `${temperature}°`;
      weather_place.innerText = `${place} .Korea`;
      console.log(iconVal);
      if (iconVal === "01n" || "01d") {
        icon.classList.add(CLEAN_I);
      }
    });
}

function saveCoords(coordsobj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsobj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsobj = {
    latitude,
    longitude,
  };
  saveCoords(coordsobj);
  getWeather(latitude, longitude);
}

function handleGeoErro() {
  console.log("can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
