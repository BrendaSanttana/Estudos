/*let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let sum = ;
let result = 0;

 for (let index = 0; index < numeros.length; index +=1) {
    console.log(numeros[index]);


for (let index =0; index < numeros.length; index += 1) {
    result += numeros[index];

}
console.log(result)
*/

let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index =0; index < numeros.length; index += 1) {
    soma += numeros[index];
}

let average = soma / numeros.length;
console.log(average)