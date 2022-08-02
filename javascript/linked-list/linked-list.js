//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {

  }
  push() {
    throw new Error('Remove this statement and implement this function');
  }

  pop() {
    throw new Error('Remove this statement and implement this function');
  }

  shift() {
    throw new Error('Remove this statement and implement this function');
  }

  unshift() {
    throw new Error('Remove this statement and implement this function');
  }

  delete() {
    throw new Error('Remove this statement and implement this function');
  }

  count() {
    throw new Error('Remove this statement and implement this function');
  }
}

class Node {

  constructor(value) {
    this.value = value;
    this.prev = null
    this.next = null;
  }

  set next(node){
    this.next = node;
  }
}