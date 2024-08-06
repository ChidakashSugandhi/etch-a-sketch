// build a Adjacency matrix containing all of the moves the knight can move



// function Node(pos, path) {
//     if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
//       return null;
//     }
//     return { pos, path };
//   }
  
//   function knightMoves([x, y], [a, b]) {
//     let q = [Node([x, y], [[x, y]])];
//     console.log (q)
//     let currentNode = q.shift();
//     while (currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
  
//       console.log (q)
//       currentNode = q.shift();
//     }
//     console.log(
//       `=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`
//     );
//     currentNode.path.forEach((pos) => {
//       console.log(pos);
//     });
//   }
//   knightMoves([0, 0],[7,7]);



// [3, 3] => 
//     [5, 2], [5, 4], 
//     [4, 1], [4, 5], 
//     [2, 1], [2, 5], 
//     [1, 2], [1, 4]

function inBounds (array) {
  if ( array[0] < 0 || array[0] > 7 || array[1] < 0 || array[1] > 7) {
    return null;
  }
  return (array)
}

function possibleMoves (position) {
  let possibleMovesArray = 
  [
    [position[0] + 2, position[1] - 1],
    [position[0] + 2, position[1] + 1],
    [position[0] - 2, position[1] - 1],
    [position[0] - 2, position[1] + 1],
    [position[0] + 1, position[1] - 2],
    [position[0] + 1, position[1] + 2],
    [position[0] - 1, position[1] - 2],
    [position[0] - 1, position[1] + 2],
  ]

  return possibleMovesArray.filter (inBounds);
}


// console.log (possibleMoves ([0, 0]))


function knightMoves(start, target) {

  let current = start

  while (current !== target) {
    let availableMoves = possibleMoves (current).map (possibleMoves);
    

  }




}

Base case:
- Start and end are same.