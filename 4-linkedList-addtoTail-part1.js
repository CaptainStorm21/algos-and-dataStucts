function LinkedList(){
  this.head = null;
  this.head = null;
}

function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.node = newNode;
}
var ll = new LinkedList();

ll.addToHead(100)
console.log(ll)

ll.addToHead(200);
console.log(ll);


ll.addToHead(300);
console.log(ll);


//adding the tail
LinkedList.prototype.addToTail = function (value){
  var newNode = new Node (value, null, this.tail);
  //if the value is not empty
  if(this.tail) this.tail.next = newNode;
  //if there is only 1 node it becomes tail and head
  else (this.head) = newNode;
  this.tail = newNode;
}
console.log("\n")
console.log('new node');
//testing a new set of nodes
var myLL = new LinkedList();
myLL.addToTail(19);
console.log(myLL);

/*
output 
new node
LinkedList {
  head: Node { value: 19, next: null, prev: undefined },
  tail: Node { value: 19, next: null, prev: undefined } }
*/

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
// console.log(myLL);

console.log("\n")
console.log(myLL.tail.prev);
//output value 20

/*
Node {
  value: 20,
  next: Node { value: 30, next: null, prev: [Circular] },
  prev:
   Node {
     value: 10,
     next: [Circular],
     prev: Node { value: 19, next: [Circular], prev: undefined } } 
*/

