const Stack = require('./stack.js');

class _Node {
    constructor (data, next){
      this.data = data,
      this.next = next;
    }
  }
class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  
  enqueue(val) {
    const n = new _Node(val);
    if (this.s2.top !== null) {
      // move the stack 2 back to stack 1
      let s2top = this.s2.pop();
      while (s2top !== null) {
        this.s1.push(s2top.data);
        // this is calling pop when top of stack is null 
        //s2top = this.s2.pop();
      }
    }
    this.s1.push(n);
  }
  
  dequeue() {
    if(this.s1.top.next === null){
      return this.s1.pop();
    }
    else {
      this.s2.push(this.s1.pop().data);
      this.dequeue();
    }
  }
}
  
const q = new Queue();
  
// add 1, add 2, add 3
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
// remove => should get 1 
q.dequeue();
// add 4, add 5
q.enqueue(4);
q.enqueue(5);
// remove => 2
q.dequeue(2);
  
q;