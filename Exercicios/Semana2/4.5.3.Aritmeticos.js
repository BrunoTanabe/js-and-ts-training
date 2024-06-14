//Realize diversas operações aritméticas utilizando os operadores vistos na capacitação.

// Declaração de variáveis para operações aritméticas
let num1 = 10;
let num2 = 5;

// Função para exibir resultados de operações aritméticas
function displayArithmeticOperations() {
    console.log('Arithmetic Operations:');

    // Adição
    let addition = num1 + num2;
    console.log(`${num1} + ${num2} = ${addition}`);

    // Subtração
    let subtraction = num1 - num2;
    console.log(`${num1} - ${num2} = ${subtraction}`);

    // Multiplicação
    let multiplication = num1 * num2;
    console.log(`${num1} * ${num2} = ${multiplication}`);

    // Divisão
    let division = num1 / num2;
    console.log(`${num1} / ${num2} = ${division}`);

    // Módulo
    let modulo = num1 % num2;
    console.log(`${num1} % ${num2} = ${modulo}`);

    // Exponenciação
    let exponentiation = num1 ** num2;
    console.log(`${num1} ** ${num2} = ${exponentiation}`);

    // Incremento
    let increment = num1;
    increment++;
    console.log(`Increment: ${num1}++ = ${increment}`);

    // Decremento
    let decrement = num2;
    decrement--;
    console.log(`Decrement: ${num2}-- = ${decrement}`);
}

// Programa principal
function main() {
    displayArithmeticOperations(); // Exibe os resultados das operações aritméticas
}

main(); // Executa o programa principal

// Output:
// Arithmetic Operations:
// 10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
// 10 / 5 = 2
// 10 % 5 = 0
// 10 ** 5 = 100000
// Increment: 10++ = 11
// Decrement: 5-- = 4

