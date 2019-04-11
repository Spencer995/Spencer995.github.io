var sect1 = document.querySelector('#rometemple');
                        var romrequest = new XMLHttpRequest();
                        romrequest.open('GET', 'https://spencer995.github.io/assignments/the-temple-inn/scripts/temples-list.json', true);
                        romrequest.responseType = 'json';
                        romrequest.send();
                        romrequest.onload = function() {
                          var templeDat = romrequest.response;
                          templeInf1(templeDat);
                        }
                        function templeInf1(jsonInfo) {
                           
                            var temple=jsonInfo['temples'];
                            for(var i=0; i < temple.length; i++){
                                if(temple[i].name == 'Rome'){

                                var heading = document.createElement('h3');
                                var myPara1 = document.createElement('p');
                                var closureList = document.createElement('ul');
                            
                                heading.textContent = 'Rome, Italy Temple';
                                myPara1.textContent = 'Closure Dates:';
                                var closure = temple[i].closure;
                                for(var j=0; j < closure.length; j++) {
                                var listItem = document.createElement('li');
                                listItem.textContent = closure[j];
                                closureList.appendChild(listItem);
                                }

                                sect1.appendChild(heading);
                                sect1.appendChild(myPara1);
                                sect1.appendChild(closureList);
                    
                              }  
                        }
                        }
// For Temple Town Weather Info
let weatherkey1 = new XMLHttpRequest;
weatherkey1.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Rome,it&units=imperial&APPID=09cad4cd3e9b2194a02b2c79698e72d2', true)
weatherkey1.send();

weatherkey1.onload = function() {
let Weather1 = JSON.parse(weatherkey1.responseText);
console.log(Weather1);


document.getElementById("weatherPara2").innerHTML = "Current Weather:" + " " + Weather1.weather[0].main + "</br>"  + "Temperature:" + " " + Weather1.main.temp + " " + "&deg;F";
    
            
}
