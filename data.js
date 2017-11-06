'use strict';
/*
Fill in your own code where you see "your code here".
You can insert new lines at those locations, but you
will not need to edit the lines above and below them.
*/

//-----------------------------------------
// Stacks

function Stack () {
  // your code here
  this.stack = [];
  // return this.stack;
}

Stack.prototype.add = function (item) {
  // your code here
  this.stack.push(item);

  return this; // for chaining, do not edit
};

Stack.prototype.remove = function () {
  // your code here

  var popped = this.stack.pop()
  return popped;
};

//-----------------------------------------
// Queues

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

function Queue () {
  // your code here
  this.head = 0;
  this.tail = 0;
  this.arr = [];
}

Queue.prototype.add = function (item) {
  // your code here
  this.arr.push(item)
  return this; // for chaining, do not edit
};

Queue.prototype.remove = function () {
  var removed = this.arr.shift();
  return removed;
  // your code here
};

//-----------------------------------------
// Linked lists

// EXTRA CREDIT: remove the `pending` line in the spec to attempt.

function LinkedList () {
  this.head = this.tail = null;
}

function ListNode (item, prev, next) {
  this.item = item;
  this.next = next || null;
  this.prev = prev || null;
}

LinkedList.prototype.addToTail = function (item) {
  // your code here
  if (this.tail === null && this.head === null){
    this.tail = new ListNode(item, null, null);
    this.head = this.tail;
  } else {
    var oldTail = this.tail;
    this.tail = new ListNode(item, oldTail, null);
    oldTail.next = this.tail;
  }
  
  return this; // for chaining, do not edit
};

LinkedList.prototype.removeFromTail = function () {
  // your code here
  if (this.tail){
    var currentTail = this.tail;
    this.tail = currentTail.prev;
    this.tail.next = null;
    return currentTail.item
  } else if (this.head === null){
    return undefined;
  } else {
    this.head = null;
    this.tail = null;
  }
};

LinkedList.prototype.forEach = function (iterator) {
  // your code here
  if (this.head.next === null){
    return iterator(this.head.item)
  }
  if (this.head && this.head.next != null){
    return iterator(this.head.item);
  }

};

//-----------------------------------------
// Association lists

function Alist () {
  // your code here
  this.head = null;
}

function AlistNode (key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

Alist.prototype.set = function (key, value) {
  // your code here

  if (this.head === null){
    this.head = new AlistNode(key, value);
  }
  if (this.head != null){
    var node = this.head;
    this.head = new AlistNode(key, value, node);
  }
  //adding on 'color' twice....why
     // for chaining; do not edit
  if (!value){
    this.value = undefined;
  }
  return this;
  
};

Alist.prototype.get = function (key) {
  // your code here

  console.log(this.head)
  if(this.head){
    var currentHead = this.head
    this.head = currentHead.next;
    return currentHead.value
  }


    //returning value in wrong order, can't figure out if related to .set func 
};


//"getting" the key/values in the wrong order
//something to do with setting?
//reset head?


//-----------------------------------------
// Hash tables

function hash (key) {
  var hashedKey = 0;
  for (var i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % 20;
}

function HashTable () {
  this.buckets = Array(20);
  this.hashedBuckets = new Alist();
  var hashed = hash(this.hashedBuckets)
  console.log(hashed)
  // hash(new Alist)
  // console.log(this.hashedBuckets)
  this.buckets.push(this.hashedBuckets)
  console.log(this.buckets)
  // your code here
  
}




HashTable.prototype.set = function (key, value) {
  // your code here. DO NOT simply set a prop. on an obj., that is cheating.
  console.log(this.buckets.head)
  return this; // for chaining, do not edit
};

HashTable.prototype.get = function (key) {
  // your code here. DO NOT simply get a prop. from an obj., that is cheating.
};

//-----------------------------------------
// Binary search trees

function BinarySearchTree (val) {
  // your code here
  this.value = val;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (val) {
  // your code here
  if (this.value > val && this.left === null){
    this.left = new BinarySearchTree(val);
  }
  else if (this.value > val && this.left != null){
    this.left.insert(val);
  }
  else if (this.value < val && this.right === null){
    this.right = new BinarySearchTree(val);
  }
  else {
    this.right.insert(val);
  }
  return this; // for chaining, do not edit
};

BinarySearchTree.prototype.min = function () {
  // your code here
  // console.log(this.value)
  // console.log(this.left.value)
  // console.log(this.left)
  if (this.left === null){
    var newLeft = this.value;
    //below is returning 5;
    // console.log(this.value);
    // console.log(newLeft)
    //console.log(this.left.value)
    return newLeft;
  }
  if (this.left && this.left != null){
    //console.log(this.left)
    var findLeft = this.left.min();
    return findLeft;
    // console.log("func", func)
  }
};

BinarySearchTree.prototype.max = function () {
  // your code here
    if (this.right === null){
    var newright = this.value;
    //below is returning 5;
    // console.log(this.value);
    // console.log(newright)
    //console.log(this.right.value)
    return newright;
  }
  if (this.right && this.right != null){
    //console.log(this.right)
    var findRight = this.right.max();
    return findRight;
    // console.log("func", func)
  }
};

BinarySearchTree.prototype.contains = function (val) {
  // your code here
  var bool = true;
  if (bool){
    if (this.value === val){
      bool = true;
    } else if (this.value < val){
      if(this.right === null){
        bool = false;
      } else {
        var right = this.right.contains(val);
        if (right === false){
          return false
        }
      }
    } else if (this.value > val){
      if (this.left === null){
        bool = false;
      } else {
        var left = this.left.contains(val);
        if (left === false){
          return false;
        }
      }
    } else {
      bool = false;
    }
  }
  return bool;

};

BinarySearchTree.prototype.traverse = function (iterator) {
  // your code here
  if (this.left){
    this.left.traverse(iterator)
  }
  iterator(this.value);
  if(this.right){
    this.right.traverse(iterator)
  }
};
