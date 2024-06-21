// Declare diferentes variáveis utilizando os prefixos let, var e const e atribua números e palavras a cada uma delas.

<<<<<<< HEAD
// Programa principal em JavaScript que demonstra a declaração e uso de variáveis

// Declaração de uma variável usando 'let' (usada para variáveis que podem mudar de valor)
let numeroLet = 10; // número atribuído a 'numeroLet'
let palavraLet = "Hello"; // string atribuída a 'palavraLet'

// Declaração de uma variável usando 'var' (usada para variáveis de escopo global ou de função, menos recomendada em escopo de bloco)
var numeroVar = 20; // número atribuído a 'numeroVar'
var palavraVar = "World"; // string atribuída a 'palavraVar'

// Declaração de uma variável usando 'const' (usada para variáveis que não devem mudar de valor)
const numeroConst = 30; // número atribuído a 'numeroConst'
const palavraConst = "JavaScript"; // string atribuída a 'palavraConst'

// Exibindo os valores no console
console.log("Valores iniciais:");
console.log(`numeroLet: ${numeroLet}, palavraLet: ${palavraLet}`);
console.log(`numeroVar: ${numeroVar}, palavraVar: ${palavraVar}`);
console.log(`numeroConst: ${numeroConst}, palavraConst: ${palavraConst}`);

// Modificando valores das variáveis 'let' e 'var'
numeroLet = 40;
palavraLet = "Changed";
numeroVar = 50;
palavraVar = "Modified";

// Tentativa de modificação do valor da variável 'const' (descomente a linha abaixo para ver o erro)
// numeroConst = 60; // Isso causará um erro, pois 'numeroConst' é uma constante

console.log("Valores após modificações:");
console.log(`numeroLet: ${numeroLet}, palavraLet: ${palavraLet}`);
console.log(`numeroVar: ${numeroVar}, palavraVar: ${palavraVar}`);
console.log(`numeroConst: ${numeroConst}, palavraConst: ${palavraConst}`);
=======
// Constants
const MAX_USERS = 100; // Número máximo de usuários permitidos

// Variables
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
>>>>>>> b715401919fbb788f9aa8dc82a3efa9a2139c1bc
