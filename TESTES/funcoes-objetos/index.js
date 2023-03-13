

const user = {
    username: 'Brenda',
    password: '1234',
};

function alterName(newName) {
    user.username = newName;
}
function alterPass(newPass) {
    user.password = newPass;
}

 function logIn(newUser) {
    if (user.username == newUser.username &&
        user.password == newUser.password) {
        console.log('Logou');
    } else {
        console.log('Usuário Inválido');
    }
} 

// outra forma de fazer

/* function logIn({password, username}) {
    if (user.username == username &&
        user.password == password) {
        console.log('Logou');
    } else {
        console.log('Usuário Inválido');
    }
}
   
// alterar nome do usuário e/ou senha
/* alterPass('bre')
alterName('Caroline')
 */

const userAcess = {
    username: 'Brenda',
    password: '1234',
};

logIn(userAcess);