// const iife = (function(){
//     gameboard = {
//     }
//     displayController;
//     return {gameboard, displayController};
// })()


gameboard = {
    x: [],
    y: []
}

gameover = true;
for (let i = 0; i < 9; i++) {
    index = +prompt("index:");
    if (i%2==0){
        gameboard.x.push(index);
    }else {
        gameboard.y.push(index);
    }
    console.log(gameboard.x, gameboard.y)

}

console.log(gameboard);
switch (true) {
    case (gameboard[0] == gameboard[1] && gameboard[1] == gameboard [2]):
        console.log(gameboard[0] == 'x'? 'x wins' : 'y wins');
        break
    
}

function createPlayer(name, marker) {
    return {name, marker};
}

// const continaer = document.querySelector("#container");
// for (let i = 0; i < 9; i++) {
//     continaer.appendChild()
// }
// gameboard[0] == gameboard[3] == gameboard [6] ||
// gameboard[0] == gameboard[4] == gameboard [8]






