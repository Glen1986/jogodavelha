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

const cells = document.querySelectorAll('td');

/*const handleClick = function(event) {
    const cell = event.target
    console.log(cell.id);
}*/
function resetGame() {
   playerXSelections = new Array();
   playerOSelections = new Array();
   for (let i = 0; i < cells.length; i++) {
       cells[i].innerHTML = '';
   }
}
const checkWinner = function(e){
   winningCombinations.forEach((winerVal, winerIn, wnerArr) =>{
    let match = 0;
       winerVal.forEach((winVal, winIn, winArr)=>{

           if(playerSelections.includes(winVal)){
               match++;
           }
           if( match === 3 ){
             alert('Player ' + currentPlayer + ' wins!');
             resetGame();
           }
         });
    });
}

function checkDraw() {
   return (playerOSelections.length + playerXSelections.length) >= cells.length;
}
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

     if (checkWinner(playerSelections)) {
       alert('Player ' + currentPlayer + ' wins!');
       resetGame();
     }
     if (checkDraw()) {
       alert('Draw!');
       resetGame();
     }
        // Swap players
    currentPlayer = nextPlayer;
}


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}



