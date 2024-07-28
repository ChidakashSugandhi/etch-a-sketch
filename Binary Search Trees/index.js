// Balanced bst: https://www.theodinproject.com/lessons/javascript-binary-search-trees
// check all the results in the console of a browser.
import { constructBST } from "./bst_builder.js";
import {
  prettyPrint,
  insert,
  deleteItem,
  find,
  levelOrder,
  inOrder,
  preOrder,
  postOrder,
  height,
  depth,
  isBalanced,
  rebalance,
} from "./bst_functions.js";

// To-Do:
// for delete item manage case of deleting the root node it-self

// Building a Binary Search Tree

let array = [4, 4, 1, 2, 3, 6, 7, 8, 8, 9];
let bstRoot = constructBST(array);
prettyPrint(bstRoot);

// Testing all the bst fucntions

// Insert funciton (tree balance is not consideered)
insert(bstRoot, 5);
insert(bstRoot, 10);
prettyPrint(bstRoot);

// delete function
deleteItem(bstRoot, 2);
prettyPrint(bstRoot);

// find the node containing the sprcified data
let requiredNode = find(bstRoot, 10);
console.log(requiredNode);

// level order traversal
let levelArray = levelOrder(bstRoot);
console.log(levelArray);

// inOrder traversal
let inOrderArray = inOrder(bstRoot);
console.log(inOrderArray);

// preOrder traversal
let preOrderArray = preOrder(bstRoot);
console.log(preOrderArray);

// postOrder traversal
let postOrderArray = postOrder(bstRoot);
console.log(postOrderArray);

// Height of the tree, uses maxDepth.
let treeHeight = height(bstRoot);
console.log(treeHeight);

// Find the depth of any given node value
let nodeDepth = depth(bstRoot, 9);
console.log(nodeDepth);

// check if tree is balanced, function returns -1 if the tree is not balanced
let isTreeBalanced = isBalanced(bstRoot);
console.log(isTreeBalanced);

// re-balance any given binary tree
bstRoot = rebalance(bstRoot);
prettyPrint(bstRoot);
