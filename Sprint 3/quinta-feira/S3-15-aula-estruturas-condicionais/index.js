let x = 5;


if (x < 4) {
    console.log("x é menor que 4")
} else {
    console.log("x não é menor que 4")
}


let y = 3;

if (y < 4) {
    console.log("y é menor que 4")
} else if (y === 4) {
    console.log("y é igual a 4")
}   else {
    console.log("y é maior que 4")
}


let carro = "Cobalt"

if (carro.length === 5 && carro === "Cobalt") {
  console.log(`O tamanho da variável é igual a ${carro.length} e seu valor é ${carro}.`)
} else if (carro.length === 6 || carro === "Ferrari") {
  console.log(`O tamanho da variável é igual a ${carro.length} e seu valor é ${carro}.`)
} else {
  console.log(`Carro não identificado.`)
}

function doubleCalculate() {
  let num = 2 * 10

  if (num / 3 < 7) {
      num = num * 2
  } 

  return num
}

doubleCalculate()