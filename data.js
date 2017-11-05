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
}

Queue.prototype.add = function (item) {
  // your code here
  return this; // for chaining, do not edit
};

Queue.prototype.remove = function () {
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
  return this; // for chaining, do not edit
};

LinkedList.prototype.removeFromTail = function () {
  // your code here
};

LinkedList.prototype.forEach = function (iterator) {
  // your code here
};

//-----------------------------------------
// Association lists

function Alist () {
  // your code here
  this.head = null;
  this.tail = null;
}

function AlistNode (key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

Alist.prototype.set = function (key, value) {
  // your code here
  if (this.head === null){
    this.head = new AlistNode(key,value);
    // console.log("null", this.head);
  } else if (this.head != null){
    console.log('******')
    console.log("not null", this.head);
    var newNode = this.head;
    this.head = new AlistNode(key,value)
    newNode.next = this.head
    console.log('end', this.head)

  }

    return this; // for chaining; do not edit
  
};

Alist.prototype.get = function (key) {
  // your code here
    if(this.head){
      console.log('%%%%%%%%%%')
      console.log(this.head)
      var currentHead = this.head;
      // console.log(currentHead)
      this.head = currentHead.next;
      // console.log(this.head)
      console.log(currentHead.value)
      return currentHead.value;
    }  else {
      this.head = null;
    }
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
  // your code here
}

HashTable.prototype.set = function (key, value) {
  // your code here. DO NOT simply set a prop. on an obj., that is cheating.
  return this; // for chaining, do not edit
};

HashTable.prototype.get = function (key) {
  // your code here. DO NOT simply get a prop. from an obj., that is cheating.
};

//-----------------------------------------
// Binary search trees

function BinarySearchTree (val) {
  // your code here
}

BinarySearchTree.prototype.insert = function (val) {
  // your code here
  return this; // for chaining, do not edit
};

BinarySearchTree.prototype.min = function () {
  // your code here
};

BinarySearchTree.prototype.max = function () {
  // your code here
};

BinarySearchTree.prototype.contains = function (val) {
  // your code here
};

BinarySearchTree.prototype.traverse = function (iterator) {
  // your code here
};
