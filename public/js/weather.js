console.log("started");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let condition = document.getElementById("condition");
let weatherImg = document.getElementById("weather-img");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async position => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      let url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
      let res = await fetch(url);
      let response = await res.json();

      console.log(response);
      city.innerHTML = response.name;
      condition.innerHTML = response.weather[0].main;
      temperature.innerHTML = `${response.main.temp} degrees C`;
      weatherImg.src = response.weather[0].icon;
    });
  }
};

getLocation();
