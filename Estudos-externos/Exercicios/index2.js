
let clientesCadastrados = ['Marta', 'Paulo', 'Alexandre', 'Ester'];
let sorvetes = ['morango', 'chocolate', 'flocos']
let clienteValido = false;
let sorveteValido = false;

function sorveteEscolhido (nome, sabor) {
    let clienteValido = false;
    let sorveteValido = false;
/* for (let index = 0; index < clientesCadastrados.length; index += 1) {
    if (clientesCadastrados[index] === nome) {
        clienteValido = true;
    }
}


for (let index = 0; index < sorvetes.length; index += 1) {
    if (sorvetes[index] === sabor) {
        sorveteValido = true;
    }
}
*/ 

if (clientesCadastrados.includes (nome) && sorvetes.includes(sabor)) {
    return nome  + ', pague seu sorvete de ' + sabor + ' no caixa';
} else {
    return 'Cliente e/ou sorvete não cadastrado';
}

}

console.log (sorveteEscolhido ('Marta', 'chocolate'));
console.log (sorveteEscolhido ('Paulo', 'morango'));
console.log (sorveteEscolhido ('Brenda', 'morango'));