let weatherapi = new XMLHttpRequest;
weatherapi.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=09cad4cd3e9b2194a02b2c79698e72d2', true)
weatherapi.send();

weatherapi.onload = function() {
    let getWeather = JSON.parse(weatherapi.responseText);
    console.log(getWeather);


    document.getElementById("name").innerHTML = getWeather.name;
    document.getElementById("current-temp").innerHTML = getWeather.main.temp;
}
