const weatherApi = "/weather";
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const weatherIcon = document.querySelector(".weatherIcon i");
const weatherCondition = document.querySelector(".weatherCondition");
const tempElement = document.querySelector(".temperature span");
const locationElement = document.querySelector(".place");
const dateElement = document.querySelector(".date");

const currentDate = new Date();
const monthName = currentDate.toLocaleString("en-US", { month: "long" });
dateElement.textContent = `${new Date().getDate()}, ${monthName}`;

weatherForm.addEventListener("submit", handleFormSubmit);

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    getUserLocation,
    handleLocationError
  );
} else {
  console.error("Geolocation is not available in this browser.");
}

function handleFormSubmit(event) {
  event.preventDefault();
  const city = search.value;
  updateWeather(city);
}

function getUserLocation(position) {
  const { latitude, longitude } = position.coords;
  const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const city = data?.address?.city;
      if (city) {
        updateWeather(city);
      } else {
        console.error("City not found in location data.");
      }
    })
    .catch((error) => {
      console.error("Error fetching location data:", error);
    });
}

function handleLocationError(error) {
  console.error("Error getting location:", error.message);
}

function updateWeather(city) {
  locationElement.textContent = "Loading...";
  weatherIcon.className = "";
  tempElement.textContent = "";
  weatherCondition.textContent = "";

  getWeatherData(city, (result) => {
    if (result.cod == 200) {
      const { weather, name, main } = result;
      const description = weather[0].description.toLowerCase();

      if (description === "address is required") {
        locationElement.textContent = "Address is required";
        return;
      }

      const weatherIcons = {
        "clear sky": "wi wi-day-sunny",
        "few clouds": "wi wi-day-cloudy",
        "scattered clouds": "wi wi-day-cloudy",
        "broken clouds": "wi wi-day-cloudy",
        "shower rain": "wi wi-day-showers",
        rain: "wi wi-day-rain",
        thunderstorm: "wi wi-day-thunderstorm",
        snow: "wi wi-day-snow",
        mist: "wi wi-day-fog",
        "moderate rain": "wi wi-day-rain",
        "overcast clouds": "wi wi-day-cloudy",
      };

      const iconClass = weatherIcons[description];
      if (iconClass) {
        weatherIcon.className = iconClass;
      } else {
        console.error(
          "Icon class not found for weather condition:",
          description
        );
      }

      locationElement.textContent = name;
      tempElement.textContent = `${(main.temp - 273.5).toFixed(
        2
      )}${String.fromCharCode(176)}`;
      weatherCondition.textContent = description.toUpperCase();
    } else {
      locationElement.textContent = "City not found.";
    }
  });
}

function getWeatherData(city, callback) {
  const locationApi = `${weatherApi}?address=${city}`;
  fetch(locationApi)
    .then((response) => response.json())
    .then(callback)
    .catch((error) => console.error("Error fetching weather data:", error));
}
