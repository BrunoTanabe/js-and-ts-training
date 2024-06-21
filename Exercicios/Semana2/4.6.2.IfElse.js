//Faça um condicional para verificar se a nota de calculo deu para passar

// DESAFIO: dado um valor em R$, verificar se você precisa de moedas ou não
// Dica: tenta ver as casas decimais

// Função para verificar se a nota é suficiente para passar
function checkPassingGrade(grade) {
    // Verifica se a nota é maior ou igual a 5 para passar
    return (grade >= 6) ? 'Passou' : 'Não passou';
}

// Função para verificar se é necessário usar moedas
function checkIfNeedsCoins(value) {
    // Converte o valor para string e verifica se há casas decimais
    const hasDecimals = value.toString().includes('.');
    
    // Retorna 'Precisa de moedas' se houver casas decimais, caso contrário, 'Não precisa de moedas'
    return hasDecimals ? 'Precisa de moedas' : 'Não precisa de moedas';
}

// Programa principal
function main() {
    // Exemplo de verificação de nota
    const grade = 7.5;
    const passResult = checkPassingGrade(grade);
    console.log(`A nota ${grade} ${passResult}.`);
    
    // Exemplo de verificação de necessidade de moedas
    const value = 10.50;
    const coinResult = checkIfNeedsCoins(value);
    console.log(`O valor R$${value} ${coinResult}.`);
}

main(); // Executa o programa principal

// Output:
// A nota 7.5 Passou.
// O valor R$10.5 Precisa de moedas.
