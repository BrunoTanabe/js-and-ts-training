// Declare diferentes variáveis utilizando os prefixos let, var e const e atribua números e palavras a cada uma delas.

// Constantes
const MAX_USERS = 100; // Número máximo de usuários permitidos

// Variáveis
let currentUsers = 0; // Contador atual de usuários
var appName = 'Aplicativo do EX Machina'; // Nome da aplicação

// Função para adicionar um usuário
function addUser(username) {
    // Verifica se o número máximo de usuários foi atingido
    if (currentUsers < MAX_USERS) {
        currentUsers++; // Incrementa o contador de usuários
        console.log(`User ${username} added. Total users: ${currentUsers}`);
    } else {
        console.log('Max users reached. Cannot add more users.');
    }
}

// Função para remover um usuário
function removeUser(username) {
    // Verifica se há usuários para remover
    if (currentUsers > 0) {
        currentUsers--; // Decrementa o contador de usuários
        console.log(`User ${username} removed. Total users: ${currentUsers}`);
    } else {
        console.log('No users to remove.');
    }
}

// Programa principal
function main() {
    console.log(`Welcome to ${appName}`); // Saudação inicial

    addUser('Alice'); // Adiciona o usuário Alice
    addUser('Bob'); // Adiciona o usuário Bob
    removeUser('Alice'); // Remove o usuário Alice

    // Testa o limite máximo de usuários
    for (let i = 0; i < 100; i++) {
        addUser(`User${i}`); // Tenta adicionar mais usuários
    }

    removeUser('NonexistentUser'); // Tenta remover um usuário inexistente
}

main(); // Executa o programa principal

// Output:
// Welcome to Aplicativo do EX Machina
// User Alice added. Total users: 1
// User Bob added. Total users: 2
// User Alice removed. Total users: 1
// User User0 added. Total users: 2
// User User1 added. Total users: 3
// User User2 added. Total users: 4
// User User3 added. Total users: 5
// User User4 added. Total users: 6
// User User5 added. Total users: 7
// User User6 added. Total users: 8
// User User7 added. Total users: 9
// User User8 added. Total users: 10
// ...
// User User91 added. Total users: 98
// User User92 added. Total users: 99
// User User93 added. Total users: 100
// Max users reached. Cannot add more users.
// User NonexistentUser removed. Total users 99.