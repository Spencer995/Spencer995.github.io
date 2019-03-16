let weatherapi = new XMLHttpRequest;
weatherapi.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=09cad4cd3e9b2194a02b2c79698e72d2', true)
weatherapi.send();

weatherapi.onload = function() {
    let getWeather = JSON.parse(weatherapi.responseText);
    console.log(getWeather);


    document.getElementById("humid").innerHTML = getWeather.main.humidity;
    document.getElementById("temp").innerHTML = getWeather.main.temp;
    document.getElementById("sunny").innerHTML = getWeather.weather[0].main;
    document.getElementById("speed").innerHTML = getWeather.wind.speed;

    // Wind chill Calculation

    var Temp = getWeather.main.temp; // get curr temp
        var speed = getWeather.wind.speed; // get curr wind speed
        var power = Math.pow(speed,0.16)
        var first = 35.74 + (0.6215*Temp);
        var second = 35.75 * power;
        var third = 0.4275 * (Temp*power);
        var math = first - second + third;
        var rounded = Math.round(math*100)/100;
        document.getElementById("chill").innerHTML = rounded.toFixed(1);

        // For Handling Precipiatiion/ Rainfall

        if (!getWeather.hasOwnProperty("rain.1h")) {
            document.getElementById('curr-rain').innerHTML = 'no data available';
            } else {
            tempObj = getWeather.rain;
            if (!tempObj.hasOwnProperty("1h"))
            document.getElementById('curr-rain').innerHTML = 'no data available';
            else
            document.getElementById('curr-rain').innerHTML = jsonRespObj.rain["1h"];
            }       
            
}

