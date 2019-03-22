let forcastapi = new XMLHttpRequest;
forcastapi.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=09cad4cd3e9b2194a02b2c79698e72d2', true)
forcastapi.send();

forcastapi.onload = function() {
     getForcast = JSON.parse(forcastapi.responseText);
    console.log(getForcast);

    var forecastList = getForcast.list;
    for(var i=0; i < forecastList.length; i++){
       var timeStamp = forecastList[i].dt_txt;
       if(timeStamp.search('18:00:00') != -1){
           var tableData = document.querySelector('#tData');
           var data = document.createElement('td');
           data.innerHTML = '<img src="https://openweathermap.org/img/w/' + getForcast.list[i].weather[0].icon + '.png" alt="icon"> <br />' + forecastList[i].main.temp.toFixed(1) + '&deg;F';
           tableData.appendChild(data);
       }
       
    }
}