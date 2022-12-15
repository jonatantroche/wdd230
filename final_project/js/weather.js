const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const tomorrowTemp = document.querySelector('#day_1');
const tomorrowTemp1 = document.querySelector('#day_2');
const url = "https://api.openweathermap.org/data/2.5/forecast?id=5334223&appid=57d16f210f6741a79b3b085f67258384";

//calling weather data from url
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

//display data 
function  displayResults(weatherData) {
    let tempN = weatherData.list[0].main.temp.toFixed(0);
    currentTemp.innerHTML = tempN;
    let humidity_data = weatherData.list[0].main.humidity.toFixed(0); 
    humidity.innerHTML = humidity_data 
    let text = weatherData.list[0].weather[0].description;
    captionDesc.innerHTML = text;

//forecast
    let day_1 = weatherData.list[8].main.temp.toFixed(0);
    tomorrowTemp.innerHTML = day_1;

    let day_2 = weatherData.list[16].main.temp.toFixed(0);
    tomorrowTemp1.innerHTML = day_2;

//icon 
   const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
   weatherIcon.setAttribute('src', iconsrc);
   weatherIcon.setAttribute('alt', desc);
   captionDesc.textContent = desc.toUpperCase(); //weather information in uppercase
    
}