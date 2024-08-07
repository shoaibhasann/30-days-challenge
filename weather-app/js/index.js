import {
  getLocationKey,
  getCurrentWeather,
  autoCompleteSearch,
  getHourlyForecast,
  getDailyForecast,
} from "./api.js";
import { debounce } from "./debounce.js";

async function updateWeather(cityName = "Delhi, India") {
  // find location key for city
  const locationKey = await getLocationKey(cityName);

  if (locationKey) {
    const weatherData = await getCurrentWeather(locationKey);

    // update hourly forecast
    await updateHourlyWeather(locationKey);

    // update 5-day forecast
    await updateFiveDayForecast(locationKey);

    if (weatherData) {
      // updating weather data into UI
      document.getElementById("city-temp").textContent =
        weatherData.temperature;
      document.getElementById("city-temp-text").textContent =
        weatherData.weatherText;
      document.getElementById("city-feels-like").textContent =
        weatherData.feelsLike;
      document.getElementById("precipitation").textContent =
        weatherData.precipitation;
      document.getElementById(
        "humidity"
      ).textContent = `${weatherData.humidity}%`;
      document.getElementById(
        "visibility"
      ).textContent = `${weatherData.visibility} Km`;
      document.getElementById(
        "windspeed"
      ).innerHTML = `${weatherData.windSpeed} Km/h`;

      // get icon url
      const iconUrl = getIconUrl(weatherData.iconNumber);

      // setting icon in img src
      document.getElementById("weather-icon").src = iconUrl;
    }
  }
}

// to get weather icon url
function getIconUrl(iconNumber) {
  const iconCode = iconNumber < 10 ? `0${iconNumber}` : iconNumber;
  const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconCode}-s.png`;
  return iconUrl;
}

// function to update search suggestions
async function updateSearchSuggestions(query) {
  const suggestions = await autoCompleteSearch(query);
  const limitedSuggestions = suggestions.slice(0, 5);
  const searchSuggestions = document.querySelector(".search-suggestions");

  // listing suggestions
  searchSuggestions.innerHTML = limitedSuggestions
    .map((suggestion) => `<li>${suggestion.LocalizedName}</li>`)
    .join("");
}

// on input
document.addEventListener("DOMContentLoaded", () => {
  updateWeather();

  const searchInput = document.getElementById("searchInput");
  const searchSuggestions = document.querySelector(".search-suggestions");
  const searchWrapper = document.querySelector(".search-wrapper");

  const debouncedSearchSuggestions = debounce(async (query) => {
    await updateSearchSuggestions(query);
  }, 300);

  // when user input in search field
  searchInput.addEventListener("input", async () => {
    const query = searchInput.value.trim();

    if (query) {
      searchSuggestions.style.display = "flex";
      searchWrapper.style.borderBottomLeftRadius = "0px";
      searchWrapper.style.borderBottomRightRadius = "0px";

      // update search suggestions
      debouncedSearchSuggestions(query);
    } else {
      searchSuggestions.style.display = "none";
      searchWrapper.style.borderBottomLeftRadius = "20px";
      searchWrapper.style.borderBottomRightRadius = "20px";
    }
  });

  // when user click on search suggestion
  searchSuggestions.addEventListener("click", async (e) => {
    if (e.target.tagName === "LI") {
      const selectedCity = e.target.textContent;
      searchInput.value = selectedCity;
      searchSuggestions.style.display = "none";
      await updateWeather(selectedCity);
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      searchSuggestions.style.display = "none";
      searchWrapper.style.borderBottomLeftRadius = "20px";
      searchWrapper.style.borderBottomRightRadius = "20px";
    }
  });
});

async function updateHourlyWeather(locationKey) {
  // fetch hourly weather data
  const hourlyData = await getHourlyForecast(locationKey);

  if (hourlyData) {
    const hourlySection = document.getElementById("hourly-section");

    // clear existing content
    hourlySection.innerHTML = "";

    hourlyData.forEach((hour) => {
      // create a new forecast card
      const forecastCard = document.createElement("div");
      forecastCard.className = "forecast-card hour";

      // format the time to display
      const date = new Date(hour.DateTime);
      const options = { hour: "numeric", minute: "numeric", hour12: true };
      const timeString = date.toLocaleTimeString([], options);

      // create card content
      forecastCard.innerHTML = `
        <h3>${timeString}</h3>
        <h2>${hour.Temperature.Value}<sup>o</sup></h2>
        <img src="${getIconUrl(hour.WeatherIcon)}" alt="">
      `;

      // append the card to the hourly section
      hourlySection.appendChild(forecastCard);
    });
  }
}

async function updateFiveDayForecast(locationKey) {
  // fetch 5-days weather data
  const forecastData = await getDailyForecast(locationKey);

  if (forecastData) {
    console.log("forecast 5 days", forecastData);
    const dailySection = document.getElementById("daily-section");

    dailySection.innerHTML = "";

    forecastData.forEach((day) => {
      // create a new card
      const forecastCard = document.createElement("div");
      forecastCard.className = "forecast-card daily";

      // format the date
      const date = new Date(day.Date);
      const options = { weekday: "short", month: "short", day: "numeric" };
      const dateString = date.toLocaleDateString([], options);

      // create card content
      forecastCard.innerHTML = `
        <h3>${dateString}</h3>
        <h2 id="daily-temp">${day.Temperature.Maximum.Value}<sup>o</sup>/${day.Temperature.Minimum.Value}<sup>o</sup></h2>
        <img src="${getIconUrl(day.Day.Icon)}" alt="${day.Day.IconPhrase}">
        <p>${day.Day.IconPhrase}</p>
      `;

      // append the forecast card to daily section
      dailySection.appendChild(forecastCard);
    });
  }
}
