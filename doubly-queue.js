class _Node {
  constructor(value, next, prev) {
    this.value=value,
    this.next=next,
    this.prev = prev;
  }
}

class DQueue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    let newNode = new _Node(data, null, this.last);
    
    if(this.last !== null){
      this.last.prev = newNode;
    }
    this.last = newNode;
    if(this.first === null){
      this.first = newNode;
    }
  }
  dequeue(data){
    if(!this.first) {
      return null;
    }
    let current = this.first;
    while(current.value !== data){
      current = current.next;
      if(current === null){
        console.log('Data to remove is not in the queue');
        return null;
      }
    }
    if(current === this.first){
      this.first = current.next;
    } else {
      current.prev.next = current.next;
    }
    if(current === this.last){
      this.last = current.prev;
    } else {
      current.next.prev = current.prev;
    }
  }
}
function main(){
  const starTrekQ = new DQueue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.dequeue('Spock');
  console.log(starTrekQ);
}
main();