// Balanced bst: https://www.theodinproject.com/lessons/javascript-binary-search-trees

// Node factory
function Node (data) {
    return {left: null, data: data, right: null};
}

// Tree factory 
function Tree (array) {
    // sorting and removing duplicates from our array
    array = uniq (array.sort());
    function buildTree(array) {
        var half_length = Math.ceil(arrayName.length / 2);    
        var leftSide = arrayName.slice(0,half_length);
        buildTree (leftArray);
        buildTree (rightArray);
        if () {
            return root;
        }
    }

    // internal funcitons
    // remove any duplicates from the array:
    function uniq(array) {
        let seen = {};
        return array.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }
}


