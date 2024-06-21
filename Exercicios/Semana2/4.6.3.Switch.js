//Faça uma estrutura de switch para dado o código da sua matéria desse semestre
//ela irá imprimir no console o nome completo da materia

// Função para retornar o nome completo da matéria baseado no código
function getSubjectName(code) {
    let subjectName;

    switch (code) {
        case 'WEB':
            subjectName = 'Programação WEB';
            break;
        case 'AEDII':
            subjectName = 'Algoritmos e Estrutura de Dados II';
            break;
        case 'ACI':
            subjectName = 'Arquitetura de Computadores I';
            break;
        case 'ESII':
            subjectName = 'Engenharia de Software II';
            break;
        case 'IE':
            subjectName = 'Introdução a Economia';
            break;
        default:
            subjectName = 'Código de matéria não encontrado';
    }

    return subjectName;
}

// Função principal para execução do programa
function main() {
    // Definição dos códigos para teste
    const testCodes = ['WEB', 'AEDII', 'ACI', 'ESII', 'IE', 'UNKNOWN'];

    // Itera sobre os códigos de teste e exibe o nome completo da matéria ou mensagem de erro
    testCodes.forEach(code => {
        const subjectName = getSubjectName(code);
        console.log(`Código: ${code} - Matéria: ${subjectName}`);
    });
}

main(); // Execução do programa principal

// Output:
// Código: WEB - Matéria: Programação WEB
// Código: AEDII - Matéria: Algoritmos e Estrutura de Dados II
// Código: ACI - Matéria: Arquitetura de Computadores I
// Código: ESII - Matéria: Engenharia de Software II
// Código: IE - Matéria: Introdução a Economia
// Código: UNKNOWN - Matéria: Código de matéria não encontrado


