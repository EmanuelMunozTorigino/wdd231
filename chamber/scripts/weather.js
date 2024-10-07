const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const highTemp = document.createElement("p");
const lowTemp = document.createElement("p");
const humidity = document.createElement("p");
const sunrise = document.createElement("p");
const sunset = document.createElement("p");

const weatherContainer = document.getElementById("weatherContainer");

weatherContainer.append(highTemp);
weatherContainer.append(lowTemp);
weatherContainer.append(humidity);
weatherContainer.append(sunrise);
weatherContainer.append(sunset);

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=-33.89&lon=-60.57&units=metric&appid=1a8b3655e7f30981b5dc4994bae68c0c";

const getWeatherAPI = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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

  highTemp.innerHTML = `High: ${parseInt(data.main.temp_max)}°C`;
  lowTemp.innerHTML = `Low: ${parseInt(data.main.temp_min)}°C`;
  humidity.innerHTML = `Humidity: ${parseInt(data.main.humidity)}%`;
  sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
  sunset.innerHTML = `Sunset: ${sunsetTime}`;
};

getWeatherAPI();
