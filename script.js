
const apikey = "cb29aa5561d18aaa73d218cd5abff37d"
const apiurl = "https://api.openweathermap.org/data/2.5/weather"


async function CheckWeather() {
    const city = document.getElementById("city").value;
    const response = await fetch(apiurl + `?q=${city}` + `&units=metric&appid=${apikey}`);
    let data = await response.json();

    if (!data) return;
    document.querySelector("#cityName").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humiditylevel").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";

}
