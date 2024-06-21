// Tipo que representa um quadrado do campo minado
type Square = {
    row: number;
    column: number;
    state: "closed" | "opened" | "flagged"; // Pode ser: closed, opened, flagged
    hasMine: boolean;
    nearMines: number; // Número de minas em volta
};

// Função que cria a matriz do campo minado
function createMinefield(rows: number, columns: number): Square[][] {
    const minefield: Square[][] = [];
    
    for (let row = 0; row < rows; row++) {
        const rowArray: Square[] = [];
        for (let column = 0; column < columns; column++) {
            rowArray.push({
                row: row,
                column: column,
                state: "closed", // Pode ser: closed, opened, flagged
                hasMine: false,
                nearMines: 0 // Número de minas em volta
            });
        }
        minefield.push(rowArray);
    }
    
    return minefield;
}

// Função que sorteia as minas no campo minado
function placeMines(minefield: Square[][], numberOfMines: number): void {
    const rows = minefield.length;
    const columns = minefield[0].length;
    let minesPlaced = 0;
    
    while (minesPlaced < numberOfMines) {
        const row = Math.floor(Math.random() * rows);
        const column = Math.floor(Math.random() * columns);
        
        if (!minefield[row][column].hasMine) {
            minefield[row][column].hasMine = true;
            minesPlaced++;
        }
    }
}

// Função que conta as minas vizinhas de um quadrado específico
function countNearMines(minefield: Square[][], row: number, column: number): void {
    const directions: number[][] = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],         [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1]
    ];
    
    let nearMines = 0;
    
    directions.forEach(direction => {
        const newRow = row + direction[0];
        const newColumn = column + direction[1];
        
        if (newRow >= 0 && newRow < minefield.length && 
            newColumn >= 0 && newColumn < minefield[0].length && 
            minefield[newRow][newColumn].hasMine) {
            nearMines++;
        }
    });
    
    minefield[row][column].nearMines = nearMines;
}

// Função que conta as minas vizinhas para todos os quadrados do campo minado
function countAllMines(minefield: Square[][]): void {
    for (let row = 0; row < minefield.length; row++) {
        for (let column = 0; column < minefield[row].length; column++) {
            countNearMines(minefield, row, column);
        }
    }
}

// Função que imprime a matriz no console
function printMinefield(minefield: Square[][]): void {
    for (let row = 0; row < minefield.length; row++) {
        let rowString = "";
        for (let column = 0; column < minefield[row].length; column++) {
            const square = minefield[row][column];
            if (square.hasMine) {
                rowString += "[*]";
            } else {
                rowString += `[${square.nearMines > 0 ? square.nearMines : ' '}]`;
            }
        }
        console.log(rowString);
    }
}

function tests(): void {
    // Criando a matriz do campo minado
    const minefield = createMinefield(5, 5);

    // Criando uma cópia profunda da matriz do campo minado
    const minefieldCopy: Square[][] = JSON.parse(JSON.stringify(minefield));

    // Sorteando minas na cópia do campo minado
    placeMines(minefieldCopy, 5);

    // Contando as minas vizinhas na cópia do campo minado
    countAllMines(minefieldCopy);

    // Imprimindo a matriz original e a matriz com minas e contagens
    console.log("Campo Minado Original:");
    printMinefield(minefield);

    console.log("\nCampo Minado com Minas e Contagens:");
    printMinefield(minefieldCopy);
}

tests(); // Execução dos testes
