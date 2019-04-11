var sect = document.querySelector('#engtemple');
                        var engrequest = new XMLHttpRequest();
                        engrequest.open('GET', 'https://spencer995.github.io/assignments/the-temple-inn/scripts/temples-list.json', true);
                        engrequest.responseType = 'json';
                        engrequest.send();
                        engrequest.onload = function() {
                          var templeDat = engrequest.response;
                          templeInf(templeDat);
                        }
                        function templeInf(jsonInfo) {
                           
                            var temple=jsonInfo['temples'];
                            for(var i=0; i < temple.length; i++){
                                if(temple[i].name == 'London'){

                                var heading = document.createElement('h3');
                                var myPara1 = document.createElement('p');
                                var closureList = document.createElement('ul');
                            
                                heading.textContent = 'London, England Temple';
                                myPara1.textContent = 'Closure Dates:';
                                var closure = temple[i].closure;
                                for(var j=0; j < closure.length; j++) {
                                var listItem = document.createElement('li');
                                listItem.textContent = closure[j];
                                closureList.appendChild(listItem);
                                }

                                sect.appendChild(heading);
                                sect.appendChild(myPara1);
                                sect.appendChild(closureList);
                    
                              }  
                        }
                        }
// For Temple Town Weather Info
let weatherkey = new XMLHttpRequest;
weatherkey.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID=09cad4cd3e9b2194a02b2c79698e72d2', true)
weatherkey.send();

weatherkey.onload = function() {
let Weather = JSON.parse(weatherkey.responseText);
console.log(Weather);


document.getElementById("weatherPara1").innerHTML = "Current Weather:" + " " + Weather.weather[0].main + "</br>"  + "Temperature:" + " " + Weather.main.temp + " " + "&deg;F";
    
            
}
