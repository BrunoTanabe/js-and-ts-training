//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente

// Vetor de matérias
const subjects = [
    'Programação WEB',
    'Algoritmos e Estrutura de Dados II',
    'Arquitetura de Computadores',
    'Engenharia de Software II',
    'Introdução a Economia'
];

// Vetor de notas
const grades = [10, 9.5, 9, 7.5, 8];

// Função para calcular a média das notas
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

// Função para imprimir matérias e notas correspondentes
function printSubjectsAndGrades(subjects, grades) {
    for (let i = 0; i < subjects.length; i++) {
        console.log(`${subjects[i]}: ${grades[i]}`);
    }
}

// Função principal para execução do programa
function main() {
    // Calcula a média das notas
    const average = calculateAverage(grades);

    // Imprime a média das notas
    console.log(`A média das notas é: ${average}`);

    // Imprime as matérias e as notas correspondentes
    printSubjectsAndGrades(subjects, grades);
}

// Execução do programa principal
main();

// Output:
// A média das notas é: 8.6
// Programação WEB: 10
// Algoritmos e Estrutura de Dados II: 9.5
// Arquitetura de Computadores: 9
// Engenharia de Software II: 7.5
// Introdução a Economia: 8
