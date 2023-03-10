/**Passo a passo:**

- Declare duas variáveis globais que armazenem os dados: valor de um produto e saldo em carteira.
- Crie uma função que recebe dois valores por parâmetro, preço do produto e valor na carteira
- Verifique se os valores recebidos na função são compatíveis com a regra de negócio. (é possível comprar este produto com este saldo? Haverá troco?)
- Use o retorno para retornar as frases em cada situação: “saldo insuficiente“ , “compra realizada não há troco a receber“ ou “Compra realizada, pegue seu troco no caixa”.
- Chame a função a fim de realizar testes e imprimir o resultado no console, lembre de cobrir todas as possibilidades.

*/
let valorProduto1 = 10;
let saldoCarteira1 = 5;


function valideCompra(precoProduto, valorCarteira) {
    if(valorCarteira > precoProduto) {
        return "saldo insuficiente"

    }
    else if(valorCarteira === precoProduto) {
        return "compra realizada não há troco a receber"

    } else {

        return "compra realizada, pegue seu troco no caixa"
    }
}

console.log(valideCompra(5, 10))
console.log(valideCompra(10, 10))
console.log(valideCompra(10, 2))