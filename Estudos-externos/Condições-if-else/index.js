/* Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) 
*/

let valor1 = 50;
let valor2 = 30;
let valor3 = 40;

/*console.log('soma:' + (valor1 + valor2))
console.log ('subratação:' + (valor1 - valor2))
console.log ('multiplicação:' + (valor1 * valor2))
console.log ('divisão:' + (valor1 / valor2))
console.log ('modulo:' + (valor1 % valor2))

if (valor1 > valor2) {
    console.log(" VALOR 1 É MAIOR QUE O VALOR 2");
} else {
    console.log("VALOR 2 É MAIOR QUE VALOR 1 ");
}


if (valor1 > valor2 && valor1 > valor3) {
    console.log("o maior valor é o valor 1");
} else if (valor2 > valor1 && valor2 > valor3) {
    console.log("o maior valor é o valor 2");
} else {
    console.log("o maior valor é o valor 3");
} 1

let number = 0.1;

if (number > 0) {
    console.log ("positivo")
} else if ( number < 0 )  {
    console.log ("negativo")
} else {
    console.log("zero")
}
*/


let angulo1 = 65;
let angulo2 = 100;
let angulo3 = 15;
let soma123 = angulo1 + angulo2 + angulo3;
let angulos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(angulos) {
    if (soma123 === 180) {
        console.log(true)
    } else {
        console.log(false);
    };
}