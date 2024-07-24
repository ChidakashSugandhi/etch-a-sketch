export {constructBST};
import { uniq, Node } from "./helpers.js";

// creates a bst and returns the root node of the tree
function constructBST(arr) {

// sorting and removing duplicates from our array
  let array = uniq(arr.sort()); 

// a recursive function to build a balanced binary search tree from any given array
  function buildTree(array, start, end) {
    if (start > end) {
      return null;
    }
    let mid = parseInt((start + end) / 2);

    let node = Node(array[mid]);
    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);

    return node;
  }

  // constructing and returning the root node of bst
  return buildTree(array, 0, array.length - 1);
}
