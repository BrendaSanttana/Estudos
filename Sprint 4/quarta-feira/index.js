
function helloWorld() {
    console.log("Hello World")
}

function criteriosDeAprovacao(entregas, entrevistas, presencas) {
    let resultadoEntregas = entregas >= 100;
    let resultadoEntrevistas = entrevistas >= 100;
    let resultadoPresencas = presencas >= 100;

    if (resultadoEntregas && resultadoEntrevistas && resultadoPresencas) {
        console.log("Possível monitor(a)");
    } else {
        console.log("Selecionar outro(a) aluno(a)");
    }
}

helloWorld()
criteriosDeAprovacao(98, 100, 100)

function valorMaior(arg1, arg2, arg3) {
    if (arg1 > arg2 && arg1 > arg3) {
        console.log(`o numero é ${arg1} maior`)
    } else if (arg2 > arg1 && arg2 > arg3) {
        console.log(`o numero é ${arg2} maior`)
    } else {
        console.log(`o numero é ${arg3} maior`)
    }
}

valorMaior(1, 2, 3)

function dados (nomeSobrenome, idade) {
     console.log (`Meu nome é ${nomeSobrenome} e tenho ${idade} anos`)
}

dados ("Brenda Santana", 26);
