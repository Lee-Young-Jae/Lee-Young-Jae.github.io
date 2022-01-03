const weatherName = document.querySelector('#weather span#name');
const weather = document.querySelector('#weather span#weather');
const weatherDescription = document.querySelector('#weather span#description');
const temp = document.querySelector('#weather span#temp');
const feelsLike = document.querySelector('#weather span#feelsLike');
const tempMin = document.querySelector('#weather span#tempMin');
const tempMax = document.querySelector('#weather span#tempMax');
const humidity = document.querySelector('#weather span#humidity');
const windDeg = document.querySelector('#weather span#windDeg');
const windSpeed = document.querySelector('#weather span#windSpeed');
// const longitudeSpan = document.querySelector("#weather span:last-child");

const WEATHER_API_KEY = '098bb38e1f95c13554b5e480f6e1af9d';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const name_ = data.name;
            const weather_ = data.weather[0].main;
            const weatherDescript_ = data.weather[0].description;
            const temp_ = data.main.temp;
            const feelsLike_ = data.main.feels_like;
            const tempMin_ = data.main.temp_min;
            const tempMax_ = data.main.temp_max;
            const humidity_ = data.main.humidity;
            const windDeg_ = data.wind.deg;
            const windSpeed_ = data.wind.speed;

            weatherName.innerText = name_;
            // weather.innerText = weather_;
            weatherDescription.innerText = weatherDescript_;
            temp.innerText = '\n 현재: ' + temp_ + '℃';
            feelsLike.innerText = '/ 체감: ' + feelsLike_ + '℃';
            tempMin.innerText = '\n최고 / 최저 (' + tempMin_ + '℃';
            tempMax.innerText = '/ ' + tempMax_ + '℃)';
            humidity.innerText = '\n습도: ' + humidity_ + '%';
            windDeg.innerText = '풍향: ' + windDeg_;
            windSpeed.innerText = '풍속: ' + windSpeed_;
        });
}
function onGeoErr() {
    alert("Can't find you. No weather for you.");
}

const nav = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);

// 한국 국가 코드  	410
