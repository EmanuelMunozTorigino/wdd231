const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.77&lon=6.63&units=metric&appid=1a8b3655e7f30981b5dc4994bae68c0c";

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
  currentTemp.innerHTML = `<strong>${data.main.temp}°C</strong>;`;

  currentTemp.style.color = "gray";

  //const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  let desc = data.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  captionDesc.textContent = `${desc}`;
};

getWeatherAPI();
