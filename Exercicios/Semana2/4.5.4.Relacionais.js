//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.

// Declaração do objeto Person
function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

// Criação de duas instâncias de Person com valores diferentes
let person1 = new Person('Alice', 25, 1.65);
let person2 = new Person('Bob', 30, 1.75);

// Função para comparar propriedades de person1 e person2
function comparePeople(p1, p2) {
    console.log('Comparing person1 and person2:');

    // Comparação de nome
    console.log(`Name: ${p1.name} === ${p2.name} -> ${p1.name === p2.name}`);
    console.log(`Name: ${p1.name} !== ${p2.name} -> ${p1.name !== p2.name}`);

    // Comparação de idade
    console.log(`Age: ${p1.age} > ${p2.age} -> ${p1.age > p2.age}`);
    console.log(`Age: ${p1.age} < ${p2.age} -> ${p1.age < p2.age}`);
    console.log(`Age: ${p1.age} >= ${p2.age} -> ${p1.age >= p2.age}`);
    console.log(`Age: ${p1.age} <= ${p2.age} -> ${p1.age <= p2.age}`);
    console.log(`Age: ${p1.age} === ${p2.age} -> ${p1.age === p2.age}`);
    console.log(`Age: ${p1.age} !== ${p2.age} -> ${p1.age !== p2.age}`);

    // Comparação de altura
    console.log(`Height: ${p1.height} > ${p2.height} -> ${p1.height > p2.height}`);
    console.log(`Height: ${p1.height} < ${p2.height} -> ${p1.height < p2.height}`);
    console.log(`Height: ${p1.height} >= ${p2.height} -> ${p1.height >= p2.height}`);
    console.log(`Height: ${p1.height} <= ${p2.height} -> ${p1.height <= p2.height}`);
    console.log(`Height: ${p1.height} === ${p2.height} -> ${p1.height === p2.height}`);
    console.log(`Height: ${p1.height} !== ${p2.height} -> ${p1.height !== p2.height}`);
}

// Programa principal
function main() {
    comparePeople(person1, person2); // Compara e exibe os resultados
}

main(); // Executa o programa principal

// Output:
// Comparing person1 and person2:
// Name: Alice === Bob -> false
// Name: Alice !== Bob -> true
// Age: 25 > 30 -> false
// Age: 25 < 30 -> true
// Age: 25 >= 30 -> false
// Age: 25 <= 30 -> true
// Age: 25 === 30 -> false
// Age: 25 !== 30 -> true
// Height: 1.65 > 1.75 -> false
// Height: 1.65 < 1.75 -> true
// Height: 1.65 >= 1.75 -> false
// Height: 1.65 <= 1.75 -> true
// Height: 1.65 === 1.75 -> false
// Height: 1.65 !== 1.75 -> true