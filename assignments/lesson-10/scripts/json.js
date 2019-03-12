 var divide = document.querySelector('#townInfo');
                        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
                        var request = new XMLHttpRequest();
                        request.open('GET', requestURL);
                        request.responseType = 'json';
                        request.send();
                        request.onload = function() {
                          var townData = request.response;
                          townInfo(townData);
                        }
                        function townInfo(jsonItem) {
                           
                            var town=jsonItem['towns'];
                            for(var i=0; i < town.length; i++){
                                if(town[i].name =='Fish Haven' || town[i].name == 'Preston'  || town[i].name == 'Soda Springs'){
                            
                                var article = document.createElement('article');
                                var h3Name = document.createElement('h3');
                                var h4Motto = document.createElement('h4')
                                var townDiv = document.createElement('div');
                                var townPhoto = document.createElement('img');
                                var myPara1 = document.createElement('p');
                                var myPara2 = document.createElement('p');
                                var myPara3 = document.createElement('p');
                                h3Name.textContent = town[i].name;
                                h4Motto.textContent = town[i].motto;
                                myPara1.textContent = 'Year Founded: ' + town[i].yearFounded;
                                myPara2.textContent = 'Population: ' + town[i].currentPopulation;
                                myPara3.textContent = 'Annual Rainfall: ' + town[i].averageRainfall + "in";
                                
                                if(town[i].name == 'Fish Haven'){
                                  townPhoto.setAttribute("src", "images/fishhaven.jpeg");
                                  townPhoto.setAttribute("height", "300");
                                  townPhoto.setAttribute("width", "auto");
                                  townPhoto.setAttribute("alt", "Fish Haven Photo");
                                  townDiv.appendChild(townPhoto);

                                }
                                if(town[i].name == 'Preston'){
                                  townPhoto.setAttribute("src", "images/preston.jpeg");
                                  townPhoto.setAttribute("height", "300");
                                  townPhoto.setAttribute("width", "auto");
                                  townPhoto.setAttribute("alt", "Preston Photo");
                                  townDiv.appendChild(townPhoto);

                                }
                                if(town[i].name == 'Soda Springs'){
                                  townPhoto.setAttribute("src", "images/sodaspring.jpeg");
                                  townPhoto.setAttribute("height", "300");
                                  townPhoto.setAttribute("width", "auto");
                                  townPhoto.setAttribute("alt", "Soda Springs Photo");
                                  townDiv.appendChild(townPhoto);

                                }
                            
                                article.appendChild(h3Name);
                                article.appendChild(h4Motto);
                                article.appendChild(myPara1);
                                article.appendChild(myPara2);
                                article.appendChild(myPara3);
                                article.appendChild(townDiv);
                                divide.appendChild(article);
                              }  
                        }
                        }