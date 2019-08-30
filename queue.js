class _Node {
  constructor(value) {
    this.value=value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }
    //make the new node the last item in the queue
    this.last = node;
  }
  dequeue(){
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}
function peek(q){
  const node = q.first;
  return node.value;
}
function isEmpty(q){
  if (q.first === null) return 'This queue is empty';
  else return 'This queue is not empty';
}
function display(q){
  let node = q.first;
  let arr = [];
  while (node) {
    arr.push(node.value);
    node = node.next;
  }
  console.log(arr);
}

function squareDancePairing(arr){
  const male = new Queue();
  const female = new Queue();

  for(let i = 0; i < arr.length; i++){
    if (arr[i][0]==='M') {
      male.enqueue(arr[i]);
    }
    else if (arr[i][0]==='F'){
      female.enqueue(arr[i]);
    }
  }
  let result = [];
  while(male.first && female.first){
  
    result.push([female.dequeue(), male.dequeue()]);
    console.log(result);
  }
  console.log('Waiting: ', display(male), display(female));
  return result;
}
const name = ['F Jane', 'M Frank', 'M John', 'M Sherlock', 'F Madonna', 'M David', 'M Christopher', 'F Beyonce'];
squareDancePairing(name);

function OphidianBank(){

}
function main(){
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.dequeue('Spock');
  //console.log(JSON.stringify(starTrekQ));
  //console.log(peek(starTrekQ));
  //console.log(isEmpty(starTrekQ));
  //display(starTrekQ);
  //console.log(squareDancePairing());
}
main();