////Você deve declarar uma função que recebe um array como parâmetro.
//Seu objetivo é percorrer a lista e encontrar a posição da agulha no palheiro,
//ou seja, retornar a posição da palavra "Agulha".

let palheiro = ["Palha", "Palha", "Palha", "Palha", "Agulha", "Palha", "Palha"];
 
function findPosition(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Agulha') {
            return i;
        }
    }
}
console.log(findPosition(palheiro));