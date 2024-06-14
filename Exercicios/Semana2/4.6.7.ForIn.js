//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria

//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota

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

// Função para imprimir matérias e notas correspondentes
function printSubjectsAndGradesForIn(subjects, grades) {
    for (let index in subjects) {
        console.log(`${subjects[index]}: ${grades[index]}`);
    }
}

// Função principal para execução do programa
function main() {

    // Imprime matérias e notas correspondentes
    console.log("Matérias e Notas:");
    printSubjectsAndGradesForIn(subjects, grades);
}

// Execução do programa principal
main();
