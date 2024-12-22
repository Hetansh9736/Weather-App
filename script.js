
const apikey = "cb29aa5561d18aaa73d218cd5abff37d"
const apiurl = "https://api.openweathermap.org/data/2.5/weather&units=metric"


async function CheckWeather(city) {
    const response = await fetch(apiurl + `?q=${city}` + `&appid=${apikey}` );
    let data = await response.json();
    
    console.log(data);

    // document.querySelector("#cityName").innerHTML = data.name
    // // document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    // document.querySelector(".humiditylevel").innerHTML = data.main.humidity + "%";
    // document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";

}
document.addEventListener ("DOMContentLoaded", ()=>{
    const search = document.querySelector(".search input");
    const searchbtn = document.querySelector(".search button");
    searchbtn.addEventListener("click", ()=>{
        
        CheckWeather("new york");
    })
    
})
