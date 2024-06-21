//Como o Do While não é frequentemente usado seja criativo e crie um exemplo de uso para ele

// Função para encontrar o primeiro número negativo em um array
function findFirstNegative(numbers) {
    let index = 0;
    let foundNegative = false;

    // Usando do...while para iterar até encontrar um número negativo
    do {
        const number = numbers[index];
        console.log(`Analisando número: ${number}`);
        
        if (number < 0) {
            foundNegative = true;
            console.log(`Encontrado número negativo: ${number}`);
        }
        
        index++;
    } while (!foundNegative && index < numbers.length);
}

// Função principal para execução do programa
function main() {
    // Array de números
    const numbers = [10, 5, 3, 8, -4, 7, -2];

    // Chama a função para encontrar o primeiro número negativo
    findFirstNegative(numbers);
}

// Execução do programa principal
main();

// Output:
// Analisando número: 10
// Analisando número: 5
// Analisando número: 3
// Analisando número: 8
// Analisando número: -4
// Encontrado número negativo: -4