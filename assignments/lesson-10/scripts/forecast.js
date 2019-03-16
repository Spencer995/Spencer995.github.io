let forcastapi = new XMLHttpRequest;
forcastapi.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=09cad4cd3e9b2194a02b2c79698e72d2', true)
forcastapi.send();

forcastapi.onload = function() {
     getForcast = JSON.parse(forcastapi.responseText);
    console.log(getForcast);

    document.getElementById('mon').innerHTML = '<img src="http://openweathermap.org/img/w/' + getForcast.list[0].weather[0].icon + '.png" alt="icon"> <br />' + Math.round(parseFloat(getForcast.list[0].main.temp)) + '&deg;F';
	document.getElementById('tue').innerHTML = '<img src="http://openweathermap.org/img/w/' + getForcast.list[1].weather[0].icon + '.png" alt="icon"> <br />' + Math.round(parseFloat(getForcast.list[1].main.temp)) + '&deg;F';
	document.getElementById('wed').innerHTML = '<img src="http://openweathermap.org/img/w/' + getForcast.list[2].weather[0].icon + '.png" alt="icon"> <br />' + Math.round(parseFloat(getForcast.list[2].main.temp)) + '&deg;F';
	document.getElementById('thur').innerHTML = '<img src="http://openweathermap.org/img/w/' + getForcast.list[3].weather[0].icon + '.png" alt="icon"> <br />' + Math.round(parseFloat(getForcast.list[3].main.temp)) + '&deg;F';
	document.getElementById('fri').innerHTML = '<img src="http://openweathermap.org/img/w/' + getForcast.list[4].weather[0].icon + '.png" alt="icon"> <br />' + Math.round(parseFloat(getForcast.list[4].main.temp)) + '&deg;F';
}