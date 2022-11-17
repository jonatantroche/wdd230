// select HTML elements in the document
const weather = document.querySelector('.weather')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=57d16f210f6741a79b3b085f67258384";

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
    let title=document.createElement("h1");
    let city=document.createElement("h2");
    let temp=document.createElement("p");
    let minTemp =  document.createElement("p");
    let maxTemp =  document.createElement("p");

    // ------------------ add content ------------------
    city.textContent=`Fairbanks, Alaska`;
    weather.appendChild(city);

    title.textContent=`OpenWeatherMap.org API Test`;
    weather.appendChild(title);

    temp.textContent=`The current temperature is: ${weatherData.main.temp.toFixed(0)}`;
    weather.appendChild(temp);

    minTemp.textContent=`Min Temp is: ${weatherData.main.temp_min.toFixed(0)}`;
    weather.appendChild(minTemp);

    maxTemp.textContent=`Max Temp is: ${weatherData.main.temp_max.toFixed(0)}`;
    weather.appendChild(maxTemp);


// --------------------------------- icon --------------------------------------------------
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase(); //weather information in uppercase
  }