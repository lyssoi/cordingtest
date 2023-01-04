class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(num) {
    if (num < 0 || num >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != num) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(num, val) {
    let plusval = this.get(num);
    if (plusval) {
      plusval.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    let newNode = new Node(val);
    let preNode = this.get(index - 1);
    let nextNode = preNode.next;
    preNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      this.shift();
      return this.shift;
    }
    if (index === this.length - 1) {
      this.pop();
      return this.pop();
    }
    let preNode = this.get(index - 1);
    let dleNode = preNode.next;
    preNode.next = dleNode.next;
    this.length--;
    return dleNode;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let nextNode;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = current.next;
      current.next = prevNode;
      prevNode = current;
      current = nextNode;

      // nextLevel.next = current;
      // current = current.next;
      // nextLevel = nextLevel.next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList();

list.push("sol!");
list.push("Hi!");
list.push("I");
list.push("love");
list.push("you");

list.reverse();
console.log(list.print());
