class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let poppedNode = this.tail;
    if (this.lengt === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    let oldhead = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldhead.next;
      this.head.prev = null;
      oldhead.next = null;
    }
    this.length--;
    return oldhead;
  }
  unshift(val) {
    newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        //23 34 45 56
        current = current.next;
        counter++;
      }
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
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
    if (index === this.length - 1) {
      this.push(val);
      return true;
    } else {
      let newNode = new Node(val);
      //23 34     52 212 34
      //      45
      let prevNode = this.get(index - 1);
      let afterNode = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      afterNode.prev = newNode;
      newNode.next = afterNode;
    }
    this.length++;
    return true;
  }
  remove(index) {
    let preNode = this.get(index - 1);
    let removalNode = preNode.next;
    let afterNode = removalNode.next;
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    } else {
      preNode.next = afterNode;
      removalNode.next = null;
      removalNode.prev = null;
      afterNode.prev = preNode;
    }
    this.length--;
    return removalNode;
  }
}

let list = new DoublyLinkedList();
list.push("Happy");
list.push("New");
list.push("year");
list.push("2023");
list.push("rabbit");

console.log(list.insert(3, "jonghyeon"));
console.log(list.get(3));
console.log(list.length);
list.remove(3);
console.log(list.get(3));
