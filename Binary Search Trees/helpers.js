// Helper factories and functions not need by the user
export { uniq, Node, minValue };
// a function to remove all dublicate elements from the array
function uniq(array) {
  let seen = {};
  return array.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

// a fucntion to get the minimum in the tee given the node
function minValue(node) {
    let minv = node.data;
    while (node.left !== null) {
        minv = node.left.key;
        node = node.left;
    }
    return minv;
}


// a factory create nodes containing data and linked nodes
function Node(data) {
    return { left: null, data: data, right: null };
}
  
