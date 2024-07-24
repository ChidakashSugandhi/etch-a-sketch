// All functions related to get data, print from or modify a binary search tree
// most of the function here use recurssion, because of the consistent properties of a binary tree
// most funcions require a root node to modify data

export { prettyPrint, insert, deleteItem, find, levelOrder, inOrder, preOrder, postOrder };
import { Node, minValue } from "./helpers.js";
// pretty print the array in console
function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

// returns root of the updated binary tree
function insert(root, value) {
  if (root == null) {
    root = Node(value);
    return root;
  }

  if (value < root.data) {
    root.left = insert(root.left, value);
  } else {
    root.right = insert(root.right, value);
  }

  return root;
}

function deleteItem(root, value) {
  // Base case
  if (root === null) {
    return root;
  }

  // If the key to be deleted is smaller than the root's key, then it lies in the left subtree
  if (value < root.data) root.left = deleteItem(root.left, value);
  // If the key to be deleted is greater than the root's key, then it lies in the right subtree
  else if (value > root.data) root.right = deleteItem(root.right, value);
  // If key is same as root's key, then this is the node to be deleted
  else {
    // Node with only one child or no child
    if (root.left === null) return root.right;
    else if (root.right === null) return root.left;

    // Node with two children: Get the inorder successor (smallest in the right subtree)
    // (we only care about the right subtree to maintain bst rules, value needs to greater than left subtree)
    root.data = minValue(root.right);

    // Delete the inorder successor
    root.right = deleteItem(root.right, root.value);
  }
  return root;
}


function find (root, value) {
// base case
  if (root === null) {
    return "Specified value deosn't exist in the tree";
  }
// 3 cases possible:
  if (value < root.data) {
    root = find (root.left, value);
    return root;
  }
  else if (value > root.data) {
    root = find (root.right, value);
    return root;
  }
  else {
    return root;
  }
}
//https://www.youtube.com/watch?v=86g8jAQug04
function levelOrder(root, callback = (value) => value) {
  if (root == null) {
    return;
  }
  const array = [];
  const queue = [root];

  while (queue.length != 0) {
    let currentValue = queue[0].data;
    let callBackResult = callback (currentValue);
    array.push (callBackResult);

    if (queue[0].left != null ) {
      queue.push (queue[0].left);
    }
    if (queue[0].right != null ) {
      queue.push (queue[0].right);
    }
    queue.shift();
  }
  return array;
}

function inOrder (root, callback = (value) => value) {
  return root ? [...inOrder(root.left), callback (root.data), ...inOrder(root.right)] : [];
}

function preOrder (root, callback = (value) => value) {
  return root ? [callback (root.data), ...preOrder(root.left), ...preOrder(root.right)] : [];
}

function postOrder (root, callback = (value) => value) {
  return root ? [...postOrder(root.left), ...postOrder(root.right), callback (root.data)] : [];
}