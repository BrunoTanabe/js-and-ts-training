/*
Exercício de Destructuring em JavaScript

1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];

a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variavel d.

2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.

*/

// Parte 1: Destructuring em Arrays

// Array de números
const numbers = [1, 2, 3, 4, 5];

// a) Atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente
const [a, b, c] = numbers;

// b) Atribuir os valores 4 e 5 a uma variável d
const [, , , ...d] = numbers;

// Parte 2: Destructuring em Objetos

// Objeto person
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// a) Atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente
const { name, age, city } = person;

// b) Atribuir o valor 'John' e o valor 30 à variável personResume
const { name: personName, age: personAge } = person;
const personResume = `${personName}, ${personAge}`;

// Função para exibir os resultados
function displayResults() {
    // Resultados do destructuring em arrays
    console.log('Array Destructuring:');
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    console.log(`d: ${d}`);

    // Resultados do destructuring em objetos
    console.log('\nObject Destructuring:');
    console.log(`name: ${name}, age: ${age}, city: ${city}`);
    console.log(`personResume: ${personResume}`);
}

// Programa principal
function main() {
    displayResults(); // Exibe os resultados
}

main(); // Executa o programa principal

// Output:
// Array Destructuring:
// a: 1, b: 2, c: 3
// d: 4,5
//
// Object Destructuring:
// name: John, age: 30, city: New York
// personResume: John, 30