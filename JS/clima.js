const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const weather = {};

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
    buscarCiudad();
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&lang=es`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

function displayWeather(){
    iconElement.innerHTML = `<img src="../img/icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});



function buscarCiudad(){
    const card = document.getElementById('card')

    const api = {
        key2: '9e122cd782b2d0333f5fe4e7fa192062',
        url2: `https://api.openweathermap.org/data/2.5/weather`
      }

const date = document.getElementById('date');
const range = document.getElementById('range');
console.log(api);

async function search(query) {
  try {
    const response = await fetch(`${api.url2}?q=${query}&appid=${api.key2}&lang=es`);
    const data = await response.json();
    card.style.display = 'block';
    locationElement.innerHTML = `${data.name}, ${data.sys.country}`;
    data.innerHTML = (new Date()).toLocaleDateString();
    tempElement.innerHTML = `${toCelsius(data.main.temp)}ºc`;
    descElement.innerHTML = data.weather[0].description;
    range.innerHTML = `MIN ${toCelsius(data.main.temp_min)}ºc / MAX ${toCelsius(data.main.temp_max)}ºc`;

    console.log(data.weather[0].main)
    switch (data.weather[0].main) {
        case 'Thunderstorm':
            iconElement.innerHTML = `<img src="../img/icons/11d.png"/>`;
          break;
        case 'Drizzle':
            iconElement.innerHTML = `<img src="../img/icons/09d.png"/>`;
          break;
        case 'Rain':
            iconElement.innerHTML = `<img src="../img/icons/10d.png"/>`;
          break;
        case 'Snow':
            iconElement.innerHTML = `<img src="../img/icons/13d.png"/>`;
          break;                        
        case 'Clear':
            iconElement.innerHTML = `<img src="../img/icons/01d.png"/>`;
          break;
        case 'wind':
            iconElement.innerHTML = `<img src="../img/icons/50d.png"/>`;
            break;  
        case 'Clouds':
            iconElement.innerHTML = `<img src="../img/icons/04d.png"/>`;
            break;  
        default:
            iconElement.innerHTML = `<img src="../img/icons/unknown.png"/>`;
      }
  } catch (err) {
  }
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }

function onSubmit(event) {
    event.preventDefault();
    search(searchbox.value);
  }
  
  const searchform = document.getElementById('search-form');
  const searchbox = document.getElementById('searchbox');
  searchform.addEventListener('submit', onSubmit, true);
  
}