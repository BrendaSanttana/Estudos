function exercicio1(arg) {
    if (arg) {
        return "P"
    }
    return "N"
}
//console.log(exercicio1(2))

function exercicio2(numero) {
    // const resultado = String (numero).length
    // return resultado
    return String(numero).length
}
//console.log(exercicio2(133))

function exercicio3(a, b) {
    // let mensagem = null;
    if (a > b) {
        // mensagem = `o primeiro número ${a} é maior que o segundo numero ${b}`
        return `o primeiro número ${a} é maior que o segundo numero ${b}`
    } else {
        // mensagem = `o primeiro número ${a} não é menor que o segundo ${b}`
        return `o primeiro número ${a} não é menor que o segundo ${b}`
    }
    // return mensagem
}
// console.log(exercicio3(7, 1))

function exercicio4(palavra, letra) {
    const resultado = palavra[0] === letra;
    if (resultado) {
        return true
    }
    return false
}
// console.log(exercicio4("Brenda", "B"))

function exercicio5(inicio, termino) {
    const resultado = inicio >= 11 && termino <=18;
    if (resultado) {
        return `O /pergunta está em horário em horário de funcionamento`
    }
    return `O /pergunta não está em horario de funcionamento`
}
//console.log(exercicio5(11, 18))

let movie = "O Senhor dos Anéis"; 

function marvelFan(){ 
 movie = "Os Vingadores" 
 return movie; 
} 

console.log(movie); 
marvelFan(); 
console.log(movie);