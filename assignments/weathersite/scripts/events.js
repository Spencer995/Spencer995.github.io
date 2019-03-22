// For Town Events Information [Preston]

 var section = document.querySelector('#events');
                        var request = new XMLHttpRequest();
                        request.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
                        request.responseType = 'json';
                        request.send();
                        request.onload = function() {
                          var townData = request.response;
                          townInfo(townData);
                        }
                        function townInfo(jsonItem) {
                           
                            var town=jsonItem['towns'];
                            for(var i=0; i < town.length; i++){
                                if(town[i].name == 'Preston'){
                            
                                var article = document.createElement('article');
                                var myPara1 = document.createElement('p');
                                var eventList = document.createElement('ul');
                            
                                myPara1.textContent = 'Town Events:';
                                var events = town[i].events;
                                for(var j=0; j < events.length; j++) {
                                var listItem = document.createElement('li');
                                listItem.textContent = events[j];
                                eventList.appendChild(listItem);
                                }
                                
                                article.appendChild(myPara1);
                                article.appendChild(eventList);
                                section.appendChild(article);
                              }  
                        }
                        }