var section = document.querySelector('#satemple');
                        var request = new XMLHttpRequest();
                        request.open('GET', 'https://spencer995.github.io/assignments/the-temple-inn/scripts/temples-list.json', true);
                        request.responseType = 'json';
                        request.send();
                        request.onload = function() {
                          var townData = request.response;
                          townInfo(townData);
                        }
                        function townInfo(jsonItem) {
                           
                            var temple=jsonItem['temples'];
                            for(var i=0; i < temple.length; i++){
                                if(temple[i].name == 'Johannesburg'){
                                var article = document.createElement('article')
                                var heading = document.createElement('h3');
                                var myPara1 = document.createElement('p');
                                var eventList = document.createElement('ul');
                            
                                heading.textContent = 'Johannesburg, South-Africa Temple';
                                myPara1.textContent = 'Closure Dates:';
                                var closure = temple[i].closure-dates;
                                for(var j=0; j < closure.length; j++) {
                                var listItem = document.createElement('li');
                                listItem.textContent = temples[j];
                                eventList.appendChild(listItem);
                                }

                                article.appendChild(heading);
                                article.appendChild(myPara1);
                                article.appendChild(eventList);
                                section.appendChild(article);
                              }  
                        }
                        }