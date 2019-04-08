var section = document.querySelector('#satemple');
                        var request = new XMLHttpRequest();
                        request.open('GET', 'https://spencer995.github.io/assignments/the-temple-inn/scripts/temples-list.json', true);
                        request.responseType = 'json';
                        request.send();
                        request.onload = function() {
                          var templeData = request.response;
                          templeInfo(templeData);
                        }
                        function templeInfo(jsonItem) {
                           
                            var temple=jsonItem['temples'];
                            for(var i=0; i < temple.length; i++){
                                if(temple[i].name == 'Johannesburg'){

                                var heading = document.createElement('h3');
                                var myPara1 = document.createElement('p');
                                var closureList = document.createElement('ul');
                            
                                heading.textContent = 'Johannesburg, South-Africa Temple';
                                myPara1.textContent = 'Closure Dates:';
                                var closure = temple[i].closure;
                                for(var j=0; j < closure.length; j++) {
                                var listItem = document.createElement('li');
                                listItem.textContent = temple[j];
                                closureList.appendChild(listItem);
                                }

                                section.appendChild(heading);
                                section.appendChild(myPara1);
                                section.appendChild(closureList);
                    
                              }  
                        }
                        }