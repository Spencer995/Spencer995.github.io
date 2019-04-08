var section = document.querySelector('#satemple');
                        var request = new XMLHttpRequest();
                        request.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);
                        request.responseType = 'json';
                        request.send();
                        request.onload = function() {
                          var townData = request.response;
                          townInfo(townData);
                        }
                        function townInfo(jsonItem) {
                           
                            var town=jsonItem['temples'];
                            for(var i=0; i < town.length; i++){
                                if(temples[i].name == 'Johannesburg'){
                            
                                var heading = document.createElement('h3');
                                var myPara1 = document.createElement('p');
                                var eventList = document.createElement('ul');
                            
                                heading.textContent = 'Johannesburg, South-Africa Temple';
                                myPara1.textContent = 'Closure Dates:';
                                var events = temples[i].closuredates;
                                for(var j=0; j < closuredates.length; j++) {
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