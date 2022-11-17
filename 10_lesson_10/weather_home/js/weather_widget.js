// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const minTemp = document.querySelector('#min-temp');
const maxTemp = document.querySelector('#max-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind_speed');
const url = "https://api.openweathermap.org/data/2.5/weather?id=3911925&units=imperial&appid=57d16f210f6741a79b3b085f67258384";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

//  ------------------------------- Display data -------------------------------------------

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    minTemp.innerHTML = `${weatherData.main.temp_min.toFixed(0)}`;
    maxTemp.innerHTML = `${weatherData.main.temp_max.toFixed(0)}`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`; 

// --------------------------------- icon --------------------------------------------------
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase(); //weather information in uppercase
  }


let speed1 = parseFloat(minTemp.textContent);
console.log(speed1);