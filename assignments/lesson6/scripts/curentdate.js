
var dt = new Date();
var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("date").innerHTML = daysArray[dt.getDay()] + ", " + dt.getDate() + " " + monthsArray[dt.getMonth()] + " " + dt.getFullYear();