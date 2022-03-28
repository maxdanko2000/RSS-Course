
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const error = document.querySelector('.weather-error');


async function getWeather() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=e9a723378810120089ea3f148856a131&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`;
    weatherDescription.textContent = data.weather[0].description;

}
getWeather();


function selectCity(e) {
    if (e.code === 'Enter') {
        getWeather();
        city.blur();
        weatherIcon.style.display = 'flex';
        temperature.style.display = 'flex';
        wind.style.display = 'flex';
        humidity.style.display = 'flex';
        weatherDescription.style.display = 'flex';
    }
    if (!city.value) {
        error.textContent = 'Error! Nothing to geocode for !';
        error.style.display = 'flex';
        weatherIcon.style.display = 'none';
        temperature.style.display = 'none';
        wind.style.display = 'none';
        humidity.style.display = 'none';
        weatherDescription.style.display = 'none';

    } else {
        error.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', selectCity);


function setLocalStorage() {
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}
window.addEventListener('load', getLocalStorage);