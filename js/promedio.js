var firstp = prompt('Ingrese la nota obtenida en el primer periodo','');
var seconp = prompt('ingrese la nota obtenida en el segundo periodo','');
var trip = prompt('Ingrese la nota obtenida en el tercer periodo','');
var promedio;
var pp = firstp*0.30;
var sp = seconp*0.35;
var tp = trip*0.35;
var operacion = pp+sp+tp;
document.write("<div class='money'><h1>Promedio final:</h1><p>  " + operacion.toFixed(2) + "</p></div>");