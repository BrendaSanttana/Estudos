let listPessoas = [
    {
        nome: 'Brenda',
        idade: 26,
        endereco: {
            rua: 'nova',
            bairro: 'velho',
            numero: 0
        },
        temCarro: true
    }
]

listPessoas.push({
    nome: 'Ediberto',
    idade: 33,
    endereco: {
        rua: 'nova',
        bairro: 'velho',
        numero: 0
    },
    temCarro: false
})

//criar

listPessoas[0].endereco.referencia = 'Ao lado da sorveteria'
console.log(listPessoas[0])

// alterar 

listPessoas[1].temCarro = true
console.log(listPessoas[1])

//remover

delete listPessoas[0].endereco.referencia
console.log(listPessoas[0])

/* console.log(listPessoas)
console.log(listPessoas[0].nome)
console.log(listPessoas[0].idade) */