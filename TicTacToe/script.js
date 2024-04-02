// const iife = (function(){
//     gameboard = {
//     }
//     displayController;
//     return {gameboard, displayController};
// })()


// let tie = true;
let tie = true;
const module = (function () {
    game = {};
    player = {};
    const gameboard = [1,2,3,4,5,6,7,8,9];
    displayController
    return {gameboard}
  })();



//   game, player or gameboard objects

function checkGame(array, winArray) {

}
console.log(module.gameboard);

// gameover = true;
for (let i = 0; i < 9; i++) {
    if (gameover()){
        index = +prompt("index:");
        if (i%2==0){
            module.gameboard[index] = 'x';
        }else {
            module.gameboard[index] = 'o';
        }
    }
    else {
        console.log()
    }
}


console.log(module.gameboard);
if (tie) {
    console.log('tie');
}

function gameover () {
    switch (true) {
        case (
            module.gameboard[0] == module.gameboard[1] && module.gameboard[1] == module.gameboard [2] ||
            module.gameboard[0] == module.gameboard[4] && module.gameboard[4] == module.gameboard [8] ||
            module.gameboard[0] == module.gameboard[3] && module.gameboard[1] == module.gameboard [6] 
            ):
            console.log(module.gameboard[0] == 'x'? 'x wins' : 'y wins');
            console.log(0);
            tie = false;
            return false;
        case (    
            module.gameboard[2] == module.gameboard[4] && module.gameboard[4] == module.gameboard [6] ||
            module.gameboard[3] == module.gameboard[4] && module.gameboard[4] == module.gameboard [5] ||
            module.gameboard[1] == module.gameboard[4] && module.gameboard[4] == module.gameboard [7]
            ):
            console.log(module.gameboard[4] == 'x'? 'x wins' : 'y wins');
            console.log(4);
            tie = false;
            return false;
        case (    
            module.gameboard[2] == module.gameboard[5] && module.gameboard[5] == module.gameboard [8] ||
            module.gameboard[6] == module.gameboard[7] && module.gameboard[6] == module.gameboard [8]
            ):
            console.log(module.gameboard[8] == 'x'? 'x wins' : 'y wins');
            console.log(8);
            tie = false;
            return false;
        default:
            return true;
        
    }

// renderGame();
// update


//     if (
//         gameboard[0] == gameboard[1] && gameboard[1] == gameboard [2] ||
//         gameboard[0] == gameboard[4] && gameboard[4] == gameboard [8] ||
//         gameboard[0] == gameboard[3] && gameboard[1] == gameboard [6] 
//         ){
//             console.log(gameboard[0] == 'x'? 'x wins' : 'y wins');
//             console.log(0)
//         }
//     if (
//         gameboard[2] == gameboard[4] && gameboard[4] == gameboard [6] ||
//         gameboard[3] == gameboard[4] && gameboard[4] == gameboard [5] ||
//         gameboard[1] == gameboard[4] && gameboard[4] == gameboard [7]
//         ){

//             console.log(gameboard[0] == 'x'? 'x wins' : 'y wins');
//             console.log(0)
//         }
//     if (
//         gameboard[2] == gameboard[5] && gameboard[5] == gameboard [8] ||
//         gameboard[6] == gameboard[7] && gameboard[6] == gameboard [8]
//         ){

//             console.log(gameboard[0] == 'x'? 'x wins' : 'y wins');
//             console.log(0)
//         }
}

// if (
//     gameboard[0] == gameboard[1] && gameboard[1] == gameboard [2] ||
//     gameboard[0] == gameboard[4] && gameboard[4] == gameboard [8] ||
//     gameboard[0] == gameboard[3] && gameboard[1] == gameboard [6] ||
//     gameboard[2] == gameboard[5] && gameboard[5] == gameboard [8] ||

//     gameboard[6] == gameboard[7] && gameboard[6] == gameboard [8]

//     ){

//     }


// case gameboard[0] ==  gameboard[1] == n && gameboard[2] == gameboard[1]: return 1
// case gameboard[3] == n && gameboard[4] == n && gameboard[5] == n: return 1
// case gameboard[6] == n && gameboard[7] == n && gameboard[8] == n: return 1

// case gameboard[0] == n && gameboard[3] == n && gameboard[6] == n: return 1
// case gameboard[1] == n && gameboard[4] == n && gameboard[7] == n: return 1
// case gameboard[2] == n && gameboard[5] == n && gameboard[8] == n: return 1

// case gameboard[0] == n && gameboard[4] == n && gameboard[8] == n: return 1
// case gameboard[2] == n && gameboard[4] == n && gameboard[6] == n: return 1

function createPlayer(name, marker) {
    return {name, marker};
}

// const continaer = document.querySelector("#container");
// for (let i = 0; i < 9; i++) {
//     continaer.appendChild()
// }
// gameboard[0] == gameboard[3] == gameboard [6] ||
// gameboard[0] == gameboard[4] == gameboard [8]






