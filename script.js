let currentPlayer = 'X';
let nextPlayer = 'O';

let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

/*const handleClick = function(event) {
    const cell = event.target
    console.log(cell.id);
}*/
const handleClick = function (event) {
    const cell = event.target;

    cell.innerHTML = currentPlayer;

    if (currentPlayer === 'X' ) {
        playerSelections = playerXSelections;
        nextPlayer = 'O';
    } else {
        playerSelections = playerOSelections;
        nextPlayer = 'X';
    }

    playerSelections.push(Number(cell.id));

    // Swap players
    currentPlayer = nextPlayer;
}
const cells = document.querySelectorAll('td');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}
function checkWinner() {
   // Verifica para cada combinação  se o jogador tem todos os valores
   for each winning combination
       matches = 0
       for each cell in combination
           if player has cell
               matches++
           else break // vai para a próxima combinação
           if there are 3 matches
               return true

   // Se nós percorremos todas as combinações sem retornar true
   // então o jogador não venceu
   return false
}



function checkDraw() {
   return (playerOSelections.length + playerXSelections.length) >= cells.length;
}



