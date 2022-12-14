const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const tomorrowTemp = document.querySelector('#day_1');
const url_1 = "https://api.openweathermap.org/data/2.5/weather?id=5334223&units=imperial&appid=57d16f210f6741a79b3b085f67258384";
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


async function apiFetch1() {
    try {
    const response_1 = await fetch(url_1);
    if (response_1.ok) {
        const data1= await response_1.json();
        console.log(data1); // this is for testing the call
        displayResults(data1);
    } else { 
        throw Error(await response_1.text());
    }
    } catch (error) {
        console.log(error);
    }
}
apiFetch1();

//display data 
function  displayResults(weatherData) {
    let tempN = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML = tempN;
    humidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`; 
    

//icon 
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase(); //weather information in uppercase

    
}

// 3 days forecast
//function  displayResults(weatherData) {
//    day_1.innerHTML = `${weatherData.list[4].main.temp.toFixed(0)}`;
//}