// // game, player or gameboard objects
const displayController = (() => {
    const renderMessage = (message) => {
        document.querySelector('#result-message').innerHTML = message;
    }
    return {renderMessage}
}) ();


const gameboard = (() => {
    const gameboard = ["", "", "", "", "", "", "", "", ""];
    const renderBoard = function() {
    {  
        let squareElement = "";  
        gameboard.forEach((square, index) =>  {
            // console.log(square);
            // squareElement = document.createElement.
            squareElement += `<div class = 'square-default' id = 'square-${index}'> ${square} </div>`
        })
        document.querySelector('.container').innerHTML = squareElement;
        const squareArray = Array.from(document.querySelectorAll('.square-default'));
        squareArray.map(square => {
            square.addEventListener ("click", Game.handleClick);
        })
    }}  

    const updateBoard = (index, marker) => {
        gameboard[index] = marker;
        // since we have changed the array, we are just re rendering the board with the updated array.
        renderBoard();
    }
    
    const getGameboard = () => {
        return gameboard;
    }

    return {renderBoard, updateBoard, getGameboard}
}) ();



function createPlayer(name, marker) {
    return {name, marker}
}



const Game = (() => {
    let players = [];
    let currentPlayer = 0;
    let gameOver = false;

    const start = () => {
        players = [
            createPlayer (document.querySelector('#player-1').value, "x"),
            createPlayer (document.querySelector('#player-2').value, "o")
        ];
        currentPlayer = 0;
        gameOver = false;
        gameboard.renderBoard();
    }

    const handleClick = (event) => {
        if (gameOver) {
            return
        }
        let index = + event.target.id.split('-')[1];
        // if the sqare is already marked, array contains a marker, it will just return not run updateBoard funciton.
        if (gameboard.getGameboard()[index]) { 
            alert('already marked')
            currentPlayer = currentPlayer === 0 ? 1:0;
            return;
        }
        gameboard.updateBoard(index, players[currentPlayer].marker);
        // Checking for 
        if (CheckGameOver(gameboard.getGameboard())){
            gameOver = true;
            displayController.renderMessage(`${players[currentPlayer].name} won!`);
        }
        if (checkTie(gameboard.getGameboard())){
            gameOver = true;
            displayController.renderMessage(`Its a tie!`);
        }

        currentPlayer = currentPlayer === 0 ? 1:0;
    }

    const restart = () => {
        for (let i = 0; i< 9; i++){
            gameboard.updateBoard(i, "");
        }
        
        gameOver = false;
        displayController.renderMessage(``);
        currentPlayer = 0;
    }

    return {start, handleClick, restart}
}) ();


function CheckGameOver(gameboard) {
    let winningCombo = [
        [0, 1, 2],
        [2, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i <winningCombo.length; i++) {
        const  [a, b, c] = winningCombo[i];
        if (gameboard[a] && gameboard[a] === gameboard[b] && gameboard[b] === gameboard[c]){
            return true;
        }
    }
    return false;
}

function checkTie(gameboard) {
    return gameboard.every(square => square != "");
}



const startButton = document.querySelector("#star-button")
startButton.addEventListener('click', () => { 
    Game.start();
    // gameboard.start();
}) 

const restartButton = document.querySelector('#restart-button')
restartButton.addEventListener('click', () => {
    // alert("restart")
    Game.restart();
})



// Leassons learnt:
// 1. Initiall for rendering the board, I was using apend child every loop I used innerHtml and did not need ot call dom contaner every time it loops.




// Very rudementry but working game of tictactoe:


// module = {
//     gameboard : [1,2,3,4,5,6,7,8,9],
// }
// player = 1;
// const container = document.querySelector('.container')
// function renderGame() {
//     for (let i = 0; i < 9; i++){
//         const square = document.createElement('div');
//         square.classList.add('square-default');
//         square.setAttribute("id", i);
//         container.appendChild(square);
//     }
// }
// renderGame();
// const squareArray = Array.from(document.querySelectorAll('.square-default'));
// squareArray.map((square) => 
//     {
//         square.addEventListener('click', () => 
//             {
//                 if (player == '1'){
//                     square.classList.add('square-red');
//                     module.gameboard[+square.id] = 'red';
//                     player = '2';
//                 }
//                 else {
//                     square.classList.add('square-default');
//                     square.classList.add('square-blue');
//                     module.gameboard[+square.id] = 'blue';
//                     player = '1';
//                 }
//                 gameState = gameOver();
//                 if (gameState.gameover) {
//                     document.querySelector(".winner-display").innerHTML = `<p>${gameState.winner}</p>`
//                 }
//                 console.log(module.gameboard);
//             })
    
//     })
// function gameOver () {
//     let gameover = false;
//     let winner;
//     if (
//         module.gameboard[0] == module.gameboard[1] && module.gameboard[1] == module.gameboard [2] ||
//         module.gameboard[0] == module.gameboard[4] && module.gameboard[4] == module.gameboard [8] ||
//         module.gameboard[0] == module.gameboard[3] && module.gameboard[3] == module.gameboard [6] 
//         )
//             {
//             console.log(module.gameboard[0] == 'red'? 'red wins' : 'blue wins');
//             winner = module.gameboard[0] == 'red'? 'red wins' : 'blue wins';
//             console.log(0);
//             tie = false;
//             gameover = true;
//             }
//     if (    
//         module.gameboard[2] == module.gameboard[4] && module.gameboard[4] == module.gameboard [6] ||
//         module.gameboard[3] == module.gameboard[4] && module.gameboard[4] == module.gameboard [5] ||
//         module.gameboard[1] == module.gameboard[4] && module.gameboard[4] == module.gameboard [7]
//         )
//         {
//             console.log(module.gameboard[4] == 'red'? 'red wins' : 'blue wins');
//             winner = module.gameboard[4] == 'red'? 'red wins' : 'blue wins';
//             console.log(4);
//             tie = false;
//             gameover = true;
//         }
//     if (    
//         module.gameboard[2] == module.gameboard[5] && module.gameboard[5] == module.gameboard [8] ||
//         module.gameboard[6] == module.gameboard[7] && module.gameboard[6] == module.gameboard [8]
//         )
//         {
//         console.log(module.gameboard[8] == 'red'? 'red wins' : 'blue wins');
//         winner =  module.gameboard[8] == 'red'? 'red wins' : 'blue wins';
//         console.log(8);
//         tie = false;
//         gameover = true;
//         }
//     return {gameover, winner};
// }


