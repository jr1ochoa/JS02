/*calcular area del rectangulo 
base por altura  ,
El método toFixed() formatea un número usando notación de punto fijo.
*/
var base = prompt('Introducir la base del rectangulo','');
var altura = prompt('Introducir la altura del rectangulo','');
var area;
area = base*altura;
document.write("<header><h1>El area del rectangulo es : "+ area.toFixed(2) +"</h1><hr/><br/></header>");

