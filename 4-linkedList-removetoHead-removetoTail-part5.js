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

//adding the tail
LinkedList.prototype.addToTail = function (value){
  var newNode = new Node (value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

console.log("\n\n\n")
// console.log("Removing nodes")
//remove head

LinkedList.prototype.removeHead = function () {
  //if there is no head / list is empty
  if (!this.head) return null;
  //save head in a value
  var val = this.head.value;
    //we have a new HEAD
  this.head = this.head.next;
 if (this.head) this.head.prev = null;
 else this.tail = null;
 return val;
};

var ll_list = new LinkedList();

ll_list.addToHead (1000);
console.log("\n\n\n 1000")
console.log(ll_list)
ll_list.addToHead (2000);
console.log("\n\n\n 2000")
console.log(ll_list)
ll_list.addToTail (3000);
console.log("\n\n\n 3000")
console.log(ll_list)
console.log("\n\n\n")
console.log(ll_list)
console.log("\n\n\n")
console.log(ll_list.removeHead())
console.log("\n\n\n")
console.log(ll_list)

/*
LinkedList {
  head: null,
  tail: Node { value: 1000, next: null, prev: null },
  node: Node { value: 1000, next: null, prev: null } }
LinkedList {
  head: null,
  tail: Node { value: 2000, next: null, prev: null },
  node: Node { value: 2000, next: null, prev: null } }
LinkedList {
  head: null,
  tail:
   Node {
     value: 3000,
     next: null,
     prev: Node { value: 2000, next: [Circular], prev: null } },
  node:
   Node {
     value: 2000,
     next: Node { value: 3000, next: null, prev: [Circular] },
     prev: null } }
LinkedList {
  head: null,
  tail:
   Node {
     value: 3000,
     next: null,
     prev: Node { value: 2000, next: [Circular], prev: null } },
  node:
   Node {
     value: 2000,
     next: Node { value: 3000, next: null, prev: [Circular] },
     prev: null } }
null
LinkedList {
  head: null,
  tail:
   Node {
     value: 3000,
     next: null,
     prev: Node { value: 2000, next: [Circular], prev: null } },
  node:
   Node {
     value: 2000,
     next: Node { value: 3000, next: null, prev: [Circular] },
     prev: null } }


*/
