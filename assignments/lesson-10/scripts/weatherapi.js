let weatherapi = new XMLHttpRequest;
weatherapi.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=09cad4cd3e9b2194a02b2c79698e72d2', true)
weatherapi.send();

weatherapi.onload = function() {
    let getWeather = JSON.parse(weatherapi.responseText);
    console.log(getWeather);

    var round = newFunction(getWeather);

    document.getElementById("name").innerHTML = getWeather.name;
    document.getElementById("current-temp").innerHTML = round;
}

function newFunction(getWeather) {
    var math = getWeather.main.temp;
    var math2 = math - 273.15;
    var math3 = math2 * (9 / 5) + 32;
    var round = math3.toFixed(2);
    return round;
}
