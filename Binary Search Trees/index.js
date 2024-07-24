// Balanced bst: https://www.theodinproject.com/lessons/javascript-binary-search-trees
import { constructBST } from "./bst_builder.js"
import { prettyPrint, insert, deleteItem, find, levelOrder, inOrder, preOrder, postOrder } from "./bst_functions.js"
// import { constructBST } from "./linkedList.js";

// To-Do:
// for delete item manage case of deleting the root node it-self

let array = [4, 4, 1, 2, 3, 6, 7, 8, 8, 9];
let bstRoot = constructBST(array);

prettyPrint(bstRoot);
insert (bstRoot, 5);
prettyPrint(bstRoot);
// deleteItem (bstRoot, 2);
prettyPrint(bstRoot);
let requiredNode = find (bstRoot, 10)
console.log (requiredNode);


function greaterThanFour (value) {
    return value > 4;
}


let levelArray = levelOrder (bstRoot, greaterThanFour);
console.log (levelArray);

let inOrderArray = inOrder (bstRoot, greaterThanFour);
console.log (inOrderArray)

let preOrderArray = preOrder (bstRoot, greaterThanFour);
console.log (preOrderArray)

let postOrderArray = postOrder (bstRoot, greaterThanFour);
console.log (postOrderArray)