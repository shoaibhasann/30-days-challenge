const apiKey = import.meta.env.VITE_ACCUWEATHER_API_KEY;

// Function to return location key for particular city
async function getLocationKey(cityName = "Delhi") {
  try {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`;
    const response = await fetch(url);
    const data = await response.json();
    const key = data[0].Key;
    return key;
  } catch (error) {
    console.error("Error fetching location key:", error);
  }
}

// Function to get current weather details
async function getCurrentWeather(locationKey) {
  try {
    const response = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
    );
    const data = await response.json();
    const weatherDetails = data[0];

    // Extract specific weather details
    const temperature = weatherDetails.Temperature.Metric.Value;
    const feelsLike = weatherDetails.RealFeelTemperature.Metric.Value;
    const humidity = weatherDetails.RelativeHumidity;
    const dewPoint = weatherDetails.DewPoint.Metric.Value;
    const visibility = weatherDetails.Visibility.Metric.Value;
    const windSpeed = weatherDetails.Wind.Speed.Metric.Value;
    const precipitation =
      weatherDetails.PrecipitationSummary.Past12Hours.Metric.Value;
    const weatherText = weatherDetails.WeatherText;
    const iconNumber = weatherDetails.WeatherIcon; // This corresponds to the weather icon

    return {
      temperature,
      feelsLike,
      weatherText,
      iconNumber,
      humidity,
      dewPoint,
      visibility,
      windSpeed,
      precipitation,
    };
  } catch (error) {
    console.error("Error fetching current weather:", error);
  }
}

// to get search suggestions for city
async function autoCompleteSearch(query) {
  if (!query) {
    console.log("Query is invalid");
    return -1;
  }

  try {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching autocomplete results: ", error);
  }
}

// to get hourly forecast data
async function getHourlyForecast(locationKey) {
  const url = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apiKey}&metric=true`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching hourly forecast data:", error);
  }
}

// to get 5 days weather forecast data
async function getDailyForecast(locationKey) {
  const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.DailyForecasts;
  } catch (error) {
    console.log("Error while fetching daily forecast: ", error);
  }
}

export {
  getLocationKey,
  getCurrentWeather,
  autoCompleteSearch,
  getHourlyForecast,
  getDailyForecast,
};
