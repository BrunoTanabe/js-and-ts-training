//a) Operadores Unários
//Crie uma variável chamada "num" e atribua a ela um valor numérico qualquer.
// Utilize os operadores unários para incrementar e decrementar o valor da variável "num".
// Imprima o valor final da variável "num" no console.
//b) Operadores Ternários
// Utilize o operador ternário para verificar se um numero é impar ou par.

// Função para modificar um número	
function modifyNumber() {
    // Cria uma variável chamada 'num' e atribui um valor inicial
    let num = 10;
    console.log(`Initial value of num: ${num}`);
    
    // Incrementa 'num' usando o operador unário de incremento
    num++;
    console.log(`After incrementing: ${num}`);
    
    // Decrementa 'num' usando o operador unário de decremento
    num--;
    console.log(`After decrementing: ${num}`);
    
    // Retorna o valor final de 'num'
    return num;
}

// Função para verificar se um número é ímpar ou par
function checkOddOrEven(number) {
    // Usa o operador ternário para verificar se o número é ímpar ou par
    return (number % 2 === 0) ? 'Even' : 'Odd';
}

// Função principal
function main() {
    // Modifica o número e obtém o valor final
    const finalNum = modifyNumber();
    
    // Verifica se o número final é ímpar ou par
    const result = checkOddOrEven(finalNum);
    
    // Imprime o resultado
    console.log(`The number ${finalNum} is ${result}.`);
}

main(); // Executa o programa principal

// Output:
// Initial value of num: 10
// After incrementing: 11
// After decrementing: 10
// The number 10 is Even.
