
const apikey = "cb29aa5561d18aaa73d218cd5abff37d"
const apiurl = "https://api.openweathermap.org/data/2.5/weather"


async function CheckWeather() {

    const city = document.getElementById("text").value;
    const response = await fetch(apiurl + `?q=${city}` + `&units=metric&appid=${apikey}`);
    const weathericon = document.querySelector("#wetherImges");
    let data = await response.json();
    console.log(data);
    console.log(data.status);
    document.querySelector("#cityName").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humiditylevel").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
        weathericon.src = "imgs/cloud.png";
    } else if (data.weather[0].main === "Rain") {
        weathericon.src = "imgs/rain.png";
    } else if (data.weather[0].main === "Clear") {
        weathericon.src = "imgs/sun.png";
    } else if (data.weather[0].main === "Snow") {
        weathericon.src = "imgs/storm.png";
    }
    
    let cityName = document.getElementsByClassName("text")
    document.addEventListener("DOMContentLoaded", () => {
        cityName[0].addEventListener("keyup", function (e) {
            if (e.key === "Enter") {
                CheckWeather();
            }
        })
    });

    
}
