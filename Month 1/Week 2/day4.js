class Node {
    constructor(data, next = null) {
     this.data = data;
     this.next = next;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
    }
    insertFirst(data) {
      const node = new Node(data, this.head);
      this.head = node;
    }
    
    size() {
      let counter = 0;
      let node = this.head;
      while (node) {
       counter++;
       node = node.next;
      }
      return counter;
    }
    
    getFirst() {
      return this.head.data;
    }
    
    getLast() {
      if (!this.head) {
        return null;
      }
      let node = this.head;
      while (node) {
       if (!node.next) {
        return node;
       }
       node = node.next;
      }
    }
    
    clear() {
      this.head = null;
    } 
    
    removeFirst() { 
      if (!this.head) {
       return;
      }
      this.head = this.head.next;
     }
  }
  const list = new LinkedList();
  list.insertFirst("a");
  // list.insertFirst("b");
  list.removeFirst();
  console.log(list.size()); // returns 0 after removing first element

  //remove last
  class Node {
    constructor(data, next = null) {
     this.data = data;
     this.next = next;
    }
  }
  class LinkedList {
    constructor() {
      this.head = null;
    }
  insertFirst(data) {
      const node = new Node(data, this.head);
      this.head = node;
    }
    
    size() {
      let counter = 0;
      let node = this.head;
      while (node) {
       counter++;
       node = node.next;
      }
      return counter;
    }
    
    getFirst() {
      return this.head.data;
    }
    
    getLast() {
      if (!this.head) {
        return null;
      }
      let node = this.head;
      while (node) {
       if (!node.next) {
        return node;
       }
       node = node.next;
      }
    }
    
    clear() {
      this.head = null;
    } 
    
    removeFirst() { 
      if (!this.head) {
       return;
      }
      this.head = this.head.next;
     }
  removeLast() {
      if (!this.head) {
        return;
      }
     
      if (!this.head.next) {
       this.head = null;
      }
     
      let previous = this.head;
      let node = this.head.next;
     
      while (node.next) {
        previous = node;
        node = node.next;
      }
      
      previous.next = null;
     }
  }
  const list = new LinkedList();
  list.insertFirst("a");
  list.insertFirst("b");
  list.removeLast();
  console.log(list.size()); //returns 1
  console.log(list.getLast()); //returns node with data of 'b' 