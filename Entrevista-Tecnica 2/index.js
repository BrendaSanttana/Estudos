/**Passo a passo:**

- Declare duas variáveis globais que armazenem os dados: valor de um produto e saldo em carteira.
- Crie uma função que recebe dois valores por parâmetro, preço do produto e valor na carteira
- Verifique se os valores recebidos na função são compatíveis com a regra de negócio. (é possível comprar este produto com este saldo? Haverá troco?)
- Use o retorno para retornar as frases em cada situação: “saldo insuficiente“ , “compra realizada não há troco a receber“ ou “Compra realizada, pegue seu troco no caixa”.
- Chame a função a fim de realizar testes e imprimir o resultado no console, lembre de cobrir todas as possibilidades.

*/
let valorProduto1 = 10;
let saldoCarteira1 = 5;
let valorProduto2 = 5;
let saldoCarteira2 = 10;
let valorProduto3 = 10;
let saldoCarteira3 = 10;


function valideCompra(valorProduto, saldoCarteira) {
    if(saldoCarteira > valorProduto) {
        return "saldo insuficiente"

    }
    else if(saldoCarteira === valorProduto) {
        return "compra realizada não há troco a receber"

    } else {

        return "compra realizada, pegue seu troco no caixa"
    }

    
/*if (valorProduto === produto && saldoCarteira === carteira) {
    } else if (saldoCarteira >= produto ) {
        console.log("saldo insuficiente")
    } else {
        console.log ("Compra realizada, pegue seu troco no caixa")
*/
/*     if (valorProduto1 > saldoCarteira) {
    } else if (saldoCarteira1 === valorProduto && valorProduto1 === saldoCarteira ) {
        console.log("compra realizada não há troco a receber")
    } else {
    } */
}


console.log(valideCompra(valorProduto1, saldoCarteira1))
console.log(valideCompra(valorProduto2, saldoCarteira2))
console.log(valideCompra(valorProduto3, saldoCarteira3))

