//Declare um array que contenha todas suas matérias do semestre
//e outro que contenha todas as notas que você tirou nelas.

// Array de matérias
let subjects = ['Programação WEB', 'Algoritmos e Estrutura de Dados II', 'Arquitetura de Computadores', 'Engenharia de Software II', 'Introdução a Economia'];

// Array de notas
let grades = [10, 9.5, 9, 7.5, 8];

// Função para exibir os valores de um array
function displayArrayValues(array, arrayName) {
    console.log(`${arrayName}:`);
    for (let i = 0; i < array.length; i++) {
        console.log(`  ${i + 1}. ${array[i]}`);
    }
}

// Programa principal
function main() {
    // Exibir valores dos arrays
    displayArrayValues(subjects, 'Subjects');
    displayArrayValues(grades, 'Grades');
}

main(); // Executa o programa principal
// Output:
// Subjects:
//   1. Programação WEB
//   2. Algoritmos e Estrutura de Dados II
//   3. Arquitetura de Computadores
//   4. Engenharia de Software II
//   5. Introdução a Economia
// Grades:
//   1. 10
//   2. 9.5
//   3. 9
//   4. 7.5
//   5. 8
