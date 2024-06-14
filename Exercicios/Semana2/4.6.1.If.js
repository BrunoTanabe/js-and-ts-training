//Crie um condição para verificar se o Ex é o melhor projeto da unifei
//Use a variável abaixo:

const ExMelhorProjeto = true;

// Função para verificar se o Ex é o melhor projeto
function isBestProject(isBest) {
    // Usa uma condição para verificar se 'isBest' é verdadeiro
    if (isBest) {
        return "Ex é o melhor projeto da UNIFEI!";
    } else {
        return "Ex não é o melhor projeto da UNIFEI.";
    }
}

// Programa principal
function main() {
    // Define a variável 'ExMelhorProjeto' como verdadeira
    const ExMelhorProjeto = true;

    // Verifica se 'Ex' é o melhor projeto
    const result = isBestProject(ExMelhorProjeto);

    // Imprime o resultado
    console.log(result);
}

main(); // Executa o programa principal

// Output:
// Ex é o melhor projeto da UNIFEI!

