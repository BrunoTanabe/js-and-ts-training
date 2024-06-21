//Crie um while para decrementar a variável abaixo até 0

const valor = 100;

// Função principal para execução do programa
function main() {
    // Declaração e inicialização da variável valor
    let valor = 100;

    // Loop while para decrementar a variável até 0
    while (valor > 0) {
        console.log(`Valor atual: ${valor}`);
        valor--; // Decrementa a variável valor
    }

    // Mensagem final quando valor chega a 0
    console.log('Valor chegou a 0');
}

main(); // Execução do programa principal

// Output:
// Valor atual: 100
// Valor atual: 99
// Valor atual: 98
// ...
// Valor atual: 1
