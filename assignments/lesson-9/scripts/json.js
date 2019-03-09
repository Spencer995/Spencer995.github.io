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
                            for(var i=0; i < town.length; i++);{
                               
                            
                                var article = document.createElement('article');
                                var h4Name = document.createElement('h4');
                                var h5Motto = document.createElement('h5')
                                var myPara1 = document.createElement('p');
                                var myPara2 = document.createElement('p');
                                var myPara3 = document.createElement('p');
                                h4Name.textContent = town[i].name;
                                h5Motto.textContent = town[i].motto;
                                myPara1.textContent = 'Year Founded: ' + town[i].yearFounded;
                                myPara2.textContent = 'Population: ' + town[i]. currentPopulation;
                                myPara3.textContent = 'Annual Rainfall: ' + town[i].averageRainfall
                            }
                                article.appendChild(h4Name);
                                article.appendChild(h5Motto);
                                article.appendChild(myPara1);
                                article.appendChild(myPara2);
                                article.appendChild(myPara3);
                                divide.appendChild(article);
                            
                        }
                        