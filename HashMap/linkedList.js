export { createNode, linkedList };

function createNode(data) {
  this.data = data;
  this.next = null;
}

function linkedList(headData) {
  let head = new createNode(headData);
  let tail = head;

  const size = function () {
    let current = head;
    let size = 1;
    while (current.next != null) {
      size += 1;
      current = current.next;
    }
    return size;
  };

  const append = function (data) {
    let node = new createNode(data);

    // checking if the key already exists in the linked list:
    let current = head;
    do {
      if (current.data.key == data.key) {
        current.data.value = data.value;
      }
      current = current.next;
    } while (current != null);
    // default case where the key doesn't exist:
    tail.next = node;
    tail = node;
  };

  // Get the current head of the linked list, temp function remove it later
  const currentHeadValue = function () {
    return head.data.value;
  };

  // function to check if a key exits in the linked list
  const containsKey = function (key) {
    let current = head;
    do {
      if (current.data.key == key) {
        return true;
      }
      current = current.next;
    } while (current != null);

    return false;
  };

  // function to return the value given the key
  const getValue = function (key) {
    let current = head;

    do {
      if (current.data.key == key) {
        return current.data.value;
      }
      current = current.next;
    } while (current != null);

    return "Error: the key value pair doesn't exist";
  };

  const removeData = function (key) {
    if (head.data.key == key) {
      head = null;
      return true;
    }

    if (tail.data.key == key) {
      let current = head;
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
      tail = current;
      return true;
    }

    let current = head;

    do {
      if (current.data.key == key) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    } while (current != null);

    return false;
  };

  const keyArray = function () {
    let array = [];

    let size = this.size();
    let current = head;

    for (let i = 1; i <= size; i++) {
      array.push(current.data.key);
      current = current.next;
    }
    return array;
  };

  const valueAray = function () {
    let array = [];

    let size = this.size();
    let current = head;

    for (let i = 1; i <= size; i++) {
      array.push(current.data.value);
      current = current.next;
    }
    return array;
  };

  const dataArray = function () {
    let array = [];

    let size = this.size();
    let current = head;

    for (let i = 1; i <= size; i++) {
      array.push([current.data.key, current.data.value]);
      console.log(array);
      current = current.next;
    }
    return array;
  };

  return {
    append,
    size,
    currentHeadValue,
    getValue,
    containsKey,
    removeData,
    keyArray,
    valueAray,
    dataArray,
  };
}
