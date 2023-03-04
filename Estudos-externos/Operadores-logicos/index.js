// Operador AND

let currentHour = 15;
let message = "";


if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!"
} else {
    message = "Hmmm, cheiro de café recém-passado"
}

console.log(message)

// Operador OR 

let weekDay = "sabado"
let message1 = ""

 if (weekDay ==="segunda-feira"|| weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay ==="sexta-feira") {
    message1 = "Oba, mais um dia de aprendizado na Trybe >:D"
 } else {
    message1 = "Finalmente, descaso merecido"
 }

 console.log(message1)

 // Operador NOT
 