var sect2 = document.querySelector('#laketemple');
                        var lakerequest = new XMLHttpRequest();
                        lakerequest.open('GET', 'https://spencer995.github.io/assignments/the-temple-inn/scripts/temples-list.json', true);
                        lakerequest.responseType = 'json';
                        lakerequest.send();
                        lakerequest.onload = function() {
                          var templeDat = lakerequest.response;
                          templeInf2(templeDat);
                        }
                        function templeInf2(jsonInfo) {
                           
                            var temple=jsonInfo['temples'];
                            for(var i=0; i < temple.length; i++){
                                if(temple[i].name == 'SaltLake'){

                                var heading = document.createElement('h3');
                                var myPara1 = document.createElement('p');
                                var closureList = document.createElement('ul');
                            
                                heading.textContent = 'Salt-Lake City, Utah Temple';
                                myPara1.textContent = 'Closure Dates:';
                                var closure = temple[i].closure;
                                for(var j=0; j < closure.length; j++) {
                                var listItem = document.createElement('li');
                                listItem.textContent = closure[j];
                                closureList.appendChild(listItem);
                                }

                                sect2.appendChild(heading);
                                sect2.appendChild(myPara1);
                                sect2.appendChild(closureList);
                    
                              }  
                        }
                        }
// For Temple Town Weather Info
let weatherkey2 = new XMLHttpRequest;
weatherkey2.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Utah,us&units=imperial&APPID=09cad4cd3e9b2194a02b2c79698e72d2', true)
weatherkey2.send();

weatherkey2.onload = function() {
let Weather2 = JSON.parse(weatherkey2.responseText);
console.log(Weather2);


document.getElementById("weatherPara3").innerHTML = "Current Weather:" + " " + Weather2.weather[0].main + "</br>"  + "Temperature:" + " " + Weather2.main.temp + " " + "&deg;F";
    
            
}
