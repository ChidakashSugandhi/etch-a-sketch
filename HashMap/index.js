import { createNode, linkedList } from "./linkedList.js";

//https://www.theodinproject.com/lessons/javascript-hashmap

// things remaining:
// 1. expand the hashmap properely when checking load factor - done
// 2. replace the old value when data with matching key is entered - done
// 3. Handle the last value getting lost, "lion" in the bellow example - done
// 4. Fix issue where when updating a key value pair, the set function is running load balacning - fixed.

// HashMap factory
function HashMap() {
  // Internal Variables
  let noOfEntries = 0;
  let currentCapacity = 16;
  const loadFactor = 0.75;
  let hashMap = new Array(currentCapacity);

  // add a key value pair to hash map
  const set = function (key, value) {
    loadBalance();
    let data = { key, value };
    let index = getIndex(key, currentCapacity);

    if (!hashMap[index]) {
      hashMap[index] = new linkedList(data);
      noOfEntries += 1;
    } else {
      if (hashMap[index].append(data) === "Created a new node") {
        noOfEntries += 1;
      }
      // the above if statement is appending and also checking if key already exists
    }
  };

  const get = function (key) {
    let index = getIndex(key, currentCapacity);
    if (hashMap[index]) {
      console.log("test");
      return hashMap[index].getValue(key);
    }
    return "The specified key doesn't exist";
  };

  const has = function (key) {
    let index = getIndex(key, currentCapacity);
    if (hashMap[index]) {
      return hashMap[index].containsKey(key);
    }
    return false;
  };
  const remove = function (key) {
    // two cases, we are removing the head where we will have to update the head itsef.
    let index = getIndex(key, currentCapacity);

    if (hashMap[index]) {
      if (hashMap[index].removeData(key)) {
        hashMap[index] = null;
        return true;
      }
      return false;
    }

    return false;
  };

  const length = function () {
    let keyCount = 0;

    for (let index = 0; index < currentCapacity; index++) {
      if (hashMap[index]) {
        keyCount += hashMap[index].size();
      }
    }
    return keyCount;
  };

  const clear = function () {
    hashMap = new Array(capacity);
  };

  const getKeys = function () {
    let keyArray = [];
    for (let index = 0; index < currentCapacity; index++) {
      if (hashMap[index]) {
        let indexArray = hashMap[index].keyArray();
        keyArray = keyArray.concat(indexArray);
      }
    }

    return keyArray;
  };

  const getValues = function () {
    let valuesArray = [];
    for (let index = 0; index < currentCapacity; index++) {
      if (hashMap[index]) {
        let indexArray = hashMap[index].valueAray();
        valuesArray = valuesArray.concat(indexArray);
      }
    }
    return valuesArray;
  };

  const getEntries = function () {
    let entriesArray = [];
    for (let index = 0; index < currentCapacity; index++) {
      if (hashMap[index]) {
        let indexArray = hashMap[index].dataArray();
        entriesArray = entriesArray.concat(indexArray);
      }
    }
    return entriesArray;
  };

  // Internal Functions

  // check load and grow the hashmap array if needed .
  function loadBalance() {
    if (noOfEntries > currentCapacity * loadFactor) {
      let newCapacity = currentCapacity * 2;
      let entriesArray = getEntries();
      let newHashMap = new Array(newCapacity);

      for (const array of entriesArray) {
        internalSet(array[0], array[1], newCapacity, newHashMap);
      }

      hashMap = newHashMap;
      currentCapacity = newCapacity;
    }
  }

  // same as set function but withiout the loadBalance call, and not changing entries variable.
  function internalSet(key, value, capacity, map) {
    let data = { key, value };

    const hashCode = hash(key);
    let index = hashCode % capacity;

    if (!map[index]) {
      map[index] = new linkedList(data);
    } else {
      map[index].append(data);
    }
  }

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  function getIndex(key, capacity) {
    let hashCode = hash(key);
    return hashCode, hashCode % capacity;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    getKeys,
    getValues,
    getEntries,
    clear,
    loadBalance,
  };
}

// testing hashmap logic:

const test = new HashMap(); // or HashMap() if using a factory

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

test.set("lion", "blue");
test.set("kite", "yellow");
test.set("frog", "green");
test.set("grape", "green");
