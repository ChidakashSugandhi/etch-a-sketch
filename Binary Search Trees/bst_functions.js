// All functions related to get data, print from or modify a binary search tree
// most of the function here use recurssion, because of the consistent properties of a binary tree
// most funcions require a root node to modify data

export {
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
};
import { Node, minValue } from "./helpers.js";
import { constructBST } from "./bst_builder.js";
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

// returns root of the updated binary tree, doesn't check if tree is balanced just inserts the node.
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

function find(root, value) {
  // base case
  if (root === null) {
    return "Specified value deosn't exist in the tree";
  }
  // 3 cases possible:
  if (value < root.data) {
    root = find(root.left, value);
    return root;
  } else if (value > root.data) {
    root = find(root.right, value);
    return root;
  } else {
    return root;
  }
}
//https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/
// this approach uses an approach called maxDepth, read the above aritcle.
function height(root) {
  if (root == null) return 0;
  else {
    /* compute the depth of each subtree */
    let lDepth = height(root.left);
    let rDepth = height(root.right);

    /* use the larger one */
    if (lDepth > rDepth) return lDepth + 1;
    // this is for lDepth < rDepth and also lDepth == rDepth
    else return rDepth + 1;
  }
}

function depth(root, value) {
  if (root === null || value === null) {
    // root can only reach null if the node deosn't exist
    return "Specified node deosn't exist in the tree";
  }

  if (root.data > value) {
    return 1 + depth(root.left, value);
  } else if (root.data < value) {
    return 1 + depth(root.right, value);
  } else {
    // when the value is found
    return 1;
  }
}

// returns height of the tree if it is balanced, returns -1 is the tree is unbalannced
function isBalanced(root) {
  //difference between heights of the left subtree and the right subtree of every node is not more than 1.

  if (root === null) {
    return 0;
  }

  let lDepth = isBalanced(root.left);
  let rDepth = isBalanced(root.right);

  if (Math.abs(lDepth - rDepth) > 1) {
    return -1;
  } else {
    // calculate height of the tree using the maxDepth approach used in height funciton
    return Math.max(lDepth, rDepth) + 1;
  }
}

// requires any traversal function and constructBST functions
function rebalance(root) {
  let array = inOrder(root);
  return constructBST(array);
}

//https://www.youtube.com/watch?v=86g8jAQug04
function levelOrder(root) {
  if (root == null) {
    return;
  }
  const array = [];
  const queue = [root];

  while (queue.length != 0) {
    let currentValue = queue[0].data;
    array.push(currentValue);

    if (queue[0].left != null) {
      queue.push(queue[0].left);
    }
    if (queue[0].right != null) {
      queue.push(queue[0].right);
    }
    queue.shift();
  }
  return array;
}

function inOrder(root) {
  return root
    ? [...postOrder(root.left), root.data, ...postOrder(root.right)]
    : [];
}

function preOrder(root) {
  return root
    ? [root.data, ...preOrder(root.left), ...preOrder(root.right)]
    : [];
}

function postOrder(root) {
  return root
    ? [...postOrder(root.left), ...postOrder(root.right), root.data]
    : [];
}
