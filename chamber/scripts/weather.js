const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const humidity = document.createElement("p");
const sunrise = document.createElement("p");
const sunset = document.createElement("p");

const weatherContainer = document.getElementById("weatherContainer");

const weatherForecastContainer = document.getElementById(
  "weatherForecastContainer"
);

weatherContainer.append(humidity);
weatherContainer.append(sunrise);
weatherContainer.append(sunset);

const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?lat=-33.89&lon=-60.57&units=metric&appid=1a8b3655e7f30981b5dc4994bae68c0c";

// Wheather Forecast 5 days 3 hours..

const forthDayTemp = document.getElementById("todayTemp");

const tomorrowPara = document.getElementById("tomorrowTemp");

const thirdDayTemp = document.getElementById("thirdTemp");

const weatherForecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-33.89&lon=-60.57&units=metric&appid=1a8b3655e7f30981b5dc4994bae68c0c";

const getWeatherAPI = async () => {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
      /*
      const text = response.text(
        "The file was not founder or it not solve the convertion to json format"
      );
      console.log(text);
      */
    }
  } catch (error) {
    console.log(error);
  }
};

const getWeatherForecastAPI = async () => {
  try {
    const response = await fetch(weatherForecastURL);
    if (response.ok) {
      const data = await response.json();
      displayWeatherForecast(data);
    } else {
      throw Error(await response.text());
      /*
      const text = response.text(
        "The file was not founder or it not solve the convertion to json format"
      );
      console.log(text);
      */
    }
  } catch (error) {
    console.log(error);
  }
};

const displayWeather = (data) => {
  currentTemp.innerHTML = `<strong>${parseInt(data.main.temp)}°C</strong>;`;

  //const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  let desc = data.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  captionDesc.textContent = `${desc}`;

  const sunriseUnix = data.sys.sunrise;
  const sunsetUnix = data.sys.sunset;

  const sunriseDate = new Date(sunriseUnix * 1000);
  const sunsetDate = new Date(sunsetUnix * 1000);

  const sunriseTime = sunriseDate.toLocaleString("es-AR", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/Argentina/Buenos_Aires",
  });

  const sunsetTime = sunsetDate.toLocaleString("es-Ar", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/Argentina/Buenos_Aires",
  });
  humidity.innerHTML = `Humidity: ${parseInt(data.main.humidity)}%`;
  sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
  sunset.innerHTML = `Sunset: ${sunsetTime}`;
};

const displayWeatherForecast = (weatherData) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const temperatures = [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Recorremos la lista de predicciones del JSON
  weatherData.list.forEach((entry) => {
    const entryDate = new Date(entry.dt * 1000); // Convert dt to date Object

    // Verificamos si la hora es 12:00
    if (entryDate.getHours() === 12) {
      const diffDays = Math.floor((entryDate - today) / (1000 * 60 * 60 * 24));

      // Guardamos las temperaturas de hoy, mañana y pasado mañana
      if (diffDays >= 0 && diffDays <= 2) {
        temperatures.push({
          day: weekdays[entryDate.getDay()],
          temperature: entry.main.temp,
          weatherIcon: entry.weather[0].icon,
          weatherDescription: entry.weather[0].description,
          humidity: entry.main.humidity,
        });
      }
    }
  });

  temperatures.forEach((weatherDay) => {
    const weatherIconForecast = document.createElement("img");
    const weatherFigureContainer = document.createElement("figure");
    const weatherFigCaption = document.createElement("figcaption");
    const tempPara = document.createElement("p");
    const humidity = document.createElement("p");
    const divContainer = document.createElement("div");

    
    tempPara.innerHTML = `<strong>${weatherDay.day}: ${parseInt(
      weatherDay.temperature
    )}°C`;
    humidity.innerHTML = `Humidity: ${/*parseInt()*/ weatherDay.humidity}%`;

    const weatherIcon = `https://openweathermap.org/img/wn/${weatherDay.weatherIcon}.png`;

    let figCaption = weatherDay.weatherDescription;

    weatherIconForecast.setAttribute("src", weatherIcon);
    weatherIconForecast.setAttribute("alt", figCaption);
    weatherFigCaption.innerHTML = figCaption;

    weatherFigureContainer.appendChild(weatherIconForecast);
    weatherFigureContainer.appendChild(weatherFigCaption);
    divContainer.appendChild(tempPara);
    divContainer.appendChild(weatherFigureContainer);
    divContainer.appendChild(humidity);
    weatherForecastContainer.appendChild(divContainer);
  });
  /*
  tomorrowPara.innerHTML = `${temperatures[0].day}: <strong> ${parseInt(
    temperatures[0].temperature
  )}°C</strong>`;
  thirdDayTemp.innerHTML = `${temperatures[1].day}: <strong> ${parseInt(
    temperatures[1].temperature
  )}°C</strong>`;

  forthDayTemp.innerHTML = `${temperatures[2].day}:<strong>${parseInt(
    weatherData.list[0].main.temp
  )}°C</strong>`;

  */
};

getWeatherAPI();

getWeatherForecastAPI();
