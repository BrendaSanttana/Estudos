const pessoa = {
    nome: 'Brenda do Nascimento Santana',
    dataDeNascimento: '01-10-1996',
    cpf: '863.438.055-67',
    cidade: 'Lauro de Freitas',
    logradouro: 'Rua Meire Teixeira',
}

const escola = {
    nome: 'Kenzie',
    cnpj: '12345',
    areaDeAtuacao: 'Escola de Programação',
    cidade: 'Curitiba',
    estado: 'Paraná',
    logradouro: 'Rua General Mario Tourinho',
    curso: 'Programação',
}

const curso = {
    curso: 'fullstack',
    duracao: '1 ano',
    turma: '17',
    modulo: 'M1',
}

const endereço = {
    cidade: 'Salvador',
    estado: 'Bahia',
    logradouro: '20 de agosto',
    cep: '40.310-610',
}

const figure = {
    name: 'Carl',
    classes: ['Warrior'],
    leader_trend: true,
    power: 6,
    allied: true,
}
function returnName() {
    return figure.name
}
console.log(returnName())

function verifyClasses() {
    if (figure.classes.length == 1) {
        return figure.classes[0]
    } else {
        return figure.classes
    }
}
console.log(verifyClasses())

function realPower() {
    if (figure.leader_trend) {
        figure.power **= 2
    }
    return figure.power
}
console.log(realPower())                   

function insertNewClass(newClass) {
    const validClasses = ['warrior', 'arch', 'hunter', 'survivor']
    if (figure.classes.length >= 3) {
        return 'Este personagem não pode estar em mais classes.'
    } else {
        if (validClasses.includes(newClass.toLowerCase())) {
            if (figure.classes.includes(newClass.toLowerCase())) {
                return `O personagem ja pertence à classe ${newClass}.`
            } else {
                figure.classes.push(newClass.toLowerCase())
                return `Classe ${newClass} inserida com sucesso.`
            }
        } else {
            return 'Classe não permitida'

        }


    }
}
console.log(insertNewClass('warrior'))

function noMoreBarbarious() {
    if (figure.allied && figure.classes.includes ('Barbarious')) {
        figure.allied = false
        return `O ${figure.name} agora é um inimigo.`
    }
}

console.log(noMoreBarbarious())