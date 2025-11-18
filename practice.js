const cells = document.querySelectorAll(".cell"); // every cell div is selected
const statusText = document.getElementById("status");
const resetBtn = document.getElementById('resetBtn');

let board = ["","","","","","","","",""]
let currentPlayer = "X";
let gameIsActive = true

// All possibel winning combinations
const winPatters= [
    [0,1,2],//rpows
    [3,4,5],
    [6,7,8],
    [0,3,6], // columns
    [1,4,7],
    [2,5,8],
    [0,4,8], // diagnols
    [2,4,6]
];

function checkWin(){
    return winPatters.some(([a,b,c])=> {
        return board[a] && board[a] === board[b] && board[b] === board[c];
    })
}

function checkDraw() {
    return board.every((cell) => cell !== "");
}

function updatePlayerPosition(index){
    board[index] = currentPlayer;
}
// showMove is a method that will be called
function showMove(cell,index) {
    cell.textContent = board[index];
}

function playerTurn(cell, index){
    updatePlayerPosition(index);
    showMove(cell,index);
}
function showStatusMessage(message){
    statusText.textContent = message;
}

function switchPlayer() {
    if (currentPlayer === "X"){
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
    showStatusMessage(`It is ${currentPlayer}'s turn`);
}

function endGame(message){
    gameIsActive = false;
    showStatusMessage(message);
}

function checkResult() {
    if (checkWin()) {
        endGame(`Player ${currentPlayer} win!`)
    }
    else if (checkDraw()) {
        endGame("It's a draw!");
    }
    else {
        switchPlayer();
    }
}

function isMoveAllowed(index) {
    return board[index] === "" && gameIsActive;
}

function onCellClick(event) {
    const index = parseInt(event.target.getAttribute("data-index"));
    if (!isMoveAllowed(index)) return;
    playerTurn(event.target, index);
    checkResult();
}
function resetGame() {
    board = ["","","","","","","","",""];
    currentPlayer = "X";
    gameIsActive = true;

    cells.forEach((cell) => {
        cell.textContent = "";
    });
    showStatusMessage(`It's ${currentPlayer}'s turn`);
}

function setupEventListeners(){
    cells.forEach((cell) => {
        cell.addEventListener("click", onCellClick);
    });
    resetBtn.addEventListener("click",resetGame);
}

function startGame() {
    setupEventListeners();
    showStatusMessage(`It's ${currentPlayer}'s turn`);
}

startGame()


