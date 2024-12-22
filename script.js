
const apikey = "cb29aa5561d18aaa73d218cd5abff37d"
const apiurl = "https://api.openweathermap.org/data/2.5/weather"


async function CheckWeather() {

    const city = document.getElementById("text").value;
    const response = await fetch(apiurl + `?q=${city}` + `&units=metric&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    console.log(data.status);
    

  
    document.querySelector("#cityName").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humiditylevel").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";

    switch(data.weather[0].main)
    {
        case "Clear":
            document.querySelector("#wetherImges").src = "/imgs/sun.png";
         
            break;
        case "Clouds":
            document.querySelector("#wetherImges").src = "/imgs/cloud.png";
            break;
        case "Rain":
            document.querySelector("#wetherImges").src = "/imgs/rain.png";
          
            break;
        case "Drizzle":
           
            break;
        case "Thunderstorm":
            document.querySelector("#wetherImges").src = "/imgs/storm.png";
            break;
        default:
            document.querySelector("#wetherImges").src = "/imgs/404.png";

    }
}

let cityName = document.getElementsByClassName("text")
document.addEventListener("DOMContentLoaded",()=>{
    cityName[0].addEventListener("keyup", function(e) {
        if(e.key === "Enter")
        {
            CheckWeather();

        }
    })
    
    
    
    
})
