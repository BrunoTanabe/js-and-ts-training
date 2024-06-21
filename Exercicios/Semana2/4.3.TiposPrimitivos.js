// Crie uma variável para cada tipo primitivo em JavaScript: string, number, boolean, null e undefined.
// Atribua um valor a cada variável de acordo com o tipo correspondente.
// Em seguida, utilize o console.log para exibir o valor e o tipo de cada variável.

// String
let myString = "Hello, World!"; // Texto

// Number
let myNumber = 42; // Número

// Boolean
let myBoolean = true; // Valor booleano (verdadeiro ou falso)

// Null
let myNull = null; // Valor nulo

// Undefined
let myUndefined; // Valor indefinido (não inicializado)

// Função para exibir o valor e o tipo de uma variável
function displayValueAndType(variable, variableName) {
    console.log(`${variableName}:`, variable); // Exibe o valor da variável
    console.log(`Type of ${variableName}:`, typeof variable); // Exibe o tipo da variável
}

// Programa principal
function main() {
    // Exibir valores e tipos das variáveis primitivas
    displayValueAndType(myString, 'myString');
    displayValueAndType(myNumber, 'myNumber');
    displayValueAndType(myBoolean, 'myBoolean');
    displayValueAndType(myNull, 'myNull');
    displayValueAndType(myUndefined, 'myUndefined');
}

main(); // Executa o programa principal

// Output:
// myString: Hello, World!
// Type of myString: string
// myNumber: 42
// Type of myNumber: number
// myBoolean: true
// Type of myBoolean: boolean
// myNull: null
// Type of myNull: object
// myUndefined: undefined
// Type of myUndefined: undefined