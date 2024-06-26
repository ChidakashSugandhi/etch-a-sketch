// run the code: node .\index.js

function createNode(value) {
  this.value = value;
  this.next =  null;
}

// a constructor to create linked lists
// index starts from one
function linkedList(headValue) {
  let head = new createNode(headValue);
  let tail = head;

  this.currentHead = function () {
    return head.value;
  }

  this.currentTail = function () {
    return tail.value;
  }

  this.size = function () {
    let current = head;
    let size = 1;
    while (current.next != null) {
      size += 1;
      current = current.next;
    }
    return size;
  }

  this.append = function (value) {
    let node = new createNode(value);
    tail.next = node;
    tail = node;
  }

  this.pop = function () {
    let current = head;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
    tail = current;
  }

  this.prepend = function (value) {
    let node = new createNode(value);
    node.next = head;
    head = node;
  }
  
  this.at = function (index) {
    let size = this.size();
    if (index > size || index <= 0) {
      return ("Error: please enter a valid index");
    }

    let current = head;
    for (let i = 1; i < index; i ++) {
      current = current.next;
    }
    return current.value;
  }

  this.contains = function (value) {
    let current = head;
    while (current.next != null) {
      if (current.value === value) {
        return (`List contains the specified value`);
      }
      current = current.next;
    }
    return (`List does not contain the value ${value}`);
  }

  this.find = function (value) {
    let current = head;
    let index = 1;
    while (current.next != null) {
      if (current.value === value) {
        return (index);
      }
      current = current.next;
      index += 1;
    }
    return ("Value node found")
  }

  this.toString = function () {
    let size = this.size();
    let current = head;
    let nodeString = "";
    for (let i = 1; i <= size; i++) {
      nodeString  = nodeString.concat (` (${current.value}) ->`);
      current = current.next;
    }
    nodeString = nodeString.concat (` null`);
    return nodeString;
  }

  this.insertAt = function (value, index) {
    let size = this.size();
    if (index >= size || index <= 0) {
      return ("Error: please enter a valid index");
    }
    let node = new createNode (value);
    current = head;

    for (let i = 1; i < index; i ++) {
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }

  this.removeAt = function (index) {
    let size = this.size();
    if (index >= size || index <= 0) {
      return ("Error: please enter a valid index");
    }

    current = head;
    for (let i = 1; i < index; i ++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
}


let linkedList1 = new linkedList ("first");
linkedList1.append ("second");
linkedList1.append ("third");
linkedList1.append ("fourth");
linkedList1.append ("fifth");
linkedList1.append ("sixth");
linkedList1.pop();


console.log(linkedList1.size());
console.log(linkedList1.currentHead());
console.log(linkedList1.currentTail());
console.log(linkedList1.contains("second"));
console.log(linkedList1.at(5));
console.log(linkedList1.find("second"));
console.log(linkedList1.toString());
linkedList1.insertAt("four 1/2", 4);
console.log(linkedList1.toString());
linkedList1.removeAt(4);
console.log(linkedList1.toString());


// handle case of no input provided for index in the insertAt function.














