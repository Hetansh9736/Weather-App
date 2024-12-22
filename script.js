const apikey = "cb29aa5561d18aaa73d218cd5abff37d"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=London"

async function CheckWeather(){
   const response = await fetch(apiurl + "&appid=" + apikey);
   let data = await response.json();
    console.log(data);
}
CheckWeather();