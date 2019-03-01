var Temp =parseFloat(document.getElementById("temp").innerHTML);
 var speed = parseFloat(document.getElementById("speed").innerHTML);
  var power = Math.pow(speed,0.16)
    var first = 35.74 + (0.6215*Temp);
   var second = 35.75 * power;
  var third = 0.4275 * (Temp*power);
 var math = first - second + third;
var rounded = Math.round(math*100)/100;

document.getElementById("chill").innerHTML = rounded.toFixed(1);
     
    