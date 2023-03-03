


function validacao (email, senha) {
    const emailValido = "brenda.nsantana@outlook.com"
    const senhaValida = "brendasantana"

    if (emailValido === email && senhaValida === senha) {
        return true
    } 
    return false
}

console.log(validacao("brenda.nsantana@outlook.com", "brendasantana"))