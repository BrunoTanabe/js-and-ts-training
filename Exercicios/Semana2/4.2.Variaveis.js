// Declare diferentes variáveis utilizando os prefixos let, var e const e atribua números e palavras a cada uma delas.

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
