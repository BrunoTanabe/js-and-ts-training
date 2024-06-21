//Declare um objeto para representar seu personagem favorito
//Seja criativo com as propriedades

//Transforme os dois vetores de Arrays.js em um objeto
//Cada matéria representará uma propriedade do objeto,
//com sua nota correspondente sendo o valor associado a essa propriedade.

// Declaração do objeto Bart Simpson
let bartSimpson = {
    name: "Bart Simpson",
    age: 10,
    grade: 4,
    favoriteQuote: "Eat my shorts!",
    hobbies: ["Skateboarding", "Pranks", "Watching TV"],
    isTroublemaker: true
};

// Declaração dos arrays de matérias e notas
let subjects = ['Programação WEB', 'Algoritmos e Estrutura de Dados II', 'Arquitetura de Computadores', 'Engenharia de Software II', 'Introdução a Economia'];
let grades = [10, 9.5, 9, 7.5, 8];

// Transformar arrays em objeto de notas
let bartGrades = {};

// Preencher o objeto bartGrades com matérias e notas
for (let i = 0; i < subjects.length; i++) {
    bartGrades[subjects[i]] = grades[i];
}

// Função para exibir propriedades e valores de um objeto
function displayObjectProperties(object, objectName) {
    console.log(`${objectName}:`);
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            console.log(`  ${property}: ${object[property]}`);
        }
    }
}

// Programa principal
function main() {
    // Exibir propriedades do objeto Bart Simpson
    displayObjectProperties(bartSimpson, 'Bart Simpson');

    // Exibir propriedades do objeto bartGrades
    displayObjectProperties(bartGrades, 'Bart\'s Grades');
}

main(); // Executa o programa principal

// Output:
// Bart Simpson:
//   name: Bart Simpson
//   age: 10
//   grade: 4
//   favoriteQuote: Eat my shorts!
//   hobbies: Skateboarding, Pranks, Watching TV
//   isTroublemaker: true
// Bart's Grades:
//   Programação WEB: 10
//   Algoritmos e Estrutura de Dados II: 9.5
//   Arquitetura de Computadores: 9
//   Engenharia de Software II: 7.5
//   Introdução a Economia: 8
