//a) Escreva um programa que verifica se um número digitado pelo usuário é positivo e par.
//Se o número atender a essas duas condições, exiba a mensagem 'O número é positivo e par', caso contrário, exiba a mensagem 'O número não é positivo e par'.
//b) Agora, teste se ele é positivo ou par, mas não ambos. Se o número atender a uma das condições, exiba a mensagem 'O número é positivo ou par', caso contrário, exiba a mensagem 'O número não é positivo ou par'.
//c) Por fim, teste se as variáveis do da letra a e b são iguais. Se forem, exiba a mensagem 'Os números são iguais', caso contrário, exiba a mensagem 'Os números são diferentes'.

// Função para verificar se um número é positivo e par
function isPositiveAndEven(number) {
    return number > 0 && number % 2 === 0;
}

// Função para verificar se um número é positivo ou par
function isPositiveOrEven(number) {
    return number > 0 || number % 2 === 0;
}

// Função para comparar se duas variáveis são iguais
function areNumbersEqual(a, b) {
    return a === b;
}

// Função principal para execução do programa
function main() {
    // Definindo o número para verificar
    const number = 33; // Altere este valor para testar diferentes números
    const number2 = -4; // Altere este valor para testar diferentes números

    // Verifica se o número é positivo e par
    if (isPositiveAndEven(number)) {
        console.log('O número é positivo e par');
    } else {
        // Verifica se o número é positivo ou par
        if (isPositiveOrEven(number)) {
            console.log('O número é positivo ou par');
        } else {
            console.log('O número não é positivo ou par');
        }
    }

    // Compara se as variáveis a e b são iguais
    if (areNumbersEqual(number, number2)) {
        console.log('Os números são iguais');
    } else {
        console.log('Os números são diferentes');
    }
}

main(); // Executa o programa principal

// Output:
// O número é positivo ou par
// Os números são diferentes
