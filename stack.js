class _Node {
  constructor (data, next){
    this.data = data,
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data){
    //If the stack is empty, then the node will be the top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    //If the stack is not empty, then create a new node, add data to the new node and have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    //Point the pointer to the next item and that next item becomes the top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  peek() {
    return this.top ? this.top.value : null;
  }
}
module.exports = Stack;
//2. Useful methods for a stack
//allows you to look at the top of the stack without removing it
function peek(stack){
  const node = stack.top;
  return node.data;
}
// allows you to check if the stack is empty or not
function isEmpty(stack){
  if (stack.top === null) return 'This stack is empty';
  else return 'This stack is not empty';
}
//to display the stack - what is the 1st item in your stack?
function display(stack){
  let currNode = stack.top;
  let arr = [];
  while (currNode){
    arr.push(currNode.data);
    currNode = currNode.next;
  }
  //console.log(arr);
}
//3. Check for palindromes using a stack
function is_palindrome(s){
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
  const stringStack = new Stack ();
  for (let i = 0; i < s.length; i++){
    stringStack.push(s[i]);
  }
  const reverseStack = new Stack();
  for (let i = s.length -1 ; i >= 0; i--){
    reverseStack.push(s[i]);
  }
  while(stringStack.top !==null){
    if (stringStack.top.data !== reverseStack.top.data) {return false;}
    
    stringStack.top = stringStack.top.next;
    reverseStack.top = reverseStack.top.next;
  }
  return true;
}
//4.Matching parentheses in an expression
function parentheses(str){
  str = str.replace(/[^()]/g, '');

  const stack = new Stack();
  
  for (let char of str) {
    if (char === '(') stack.push('(');
    else if (stack.peek() === null) {
      console.log('missing (');
      return;
    }
    else stack.pop();
  }
  
  stack.peek() !== null ? console.log('missing )') : console.log('no errors');
}
//5.stort stack
function sort(stack){
  const tempStack = new Stack();
  let node;
  //first push top in stack into a temp
  tempStack.push(stack.pop());
  //check if stack top is not empty then save it into a node
  while (stack.peek() !== null){
    node = stack.pop();
    while ((tempStack.peek() !==null) && (node < tempStack.peek()))
      stack.push(tempStack.pop()); 
    tempStack.push(node);
  }
  return tempStack;
}
//1. Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

function main(){
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop('McCoy');
  //console.log(peek(starTrek));
  //console.log(isEmpty(starTrek));
  //   console.log(is_palindrome('dad'));
  //   console.log(is_palindrome('A man, a plan, a canal: Panama'));
  //   console.log(is_palindrome('1001'));
  //   console.log(is_palindrome('Tauhidat'));
  //console.log(parentheses('((   ))'));
  //console.log(parentheses('(((())'));
  console.log(sort('1001'));
  //display(starTrek);
  //console.log(JSON.stringify(starTrek, null, 2));
}
main();

