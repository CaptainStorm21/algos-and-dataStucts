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
  this.head = newNode;
}

//adding the tail
LinkedList.prototype.addToTail = function (value){
  var newNode = new Node (value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}


//remove head
LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  var val = this.head.value;
    //we have a new HEAD
  this.head = this.head.next;
 if (this.head) this.head.prev = null;
 else this.tail = null;
 return val;
};



//remove tail
LinkedList.prototype.removeTail = function(){
  //if the tail is empty
  if(!this.tail) return null;
  //if it is not empty
  //store a value in the Tail node
  var val = this.tail.value;
  this.tail = this.tail.prev;
  //if the list is not empty now
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.search = function (searchValue) {
  var currentNode = this.head;
  var counter = 0;
  while ( currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};

var ll = new LinkedList();
ll.search();

ll.addToHead(100)
ll.addToHead("world")
ll.addToHead(9000)
ll.addToTail(300)
ll.addToTail(800)
ll.addToTail("hello")

console.log(ll.search(10)) //null not found
console.log(ll.search(300)) //300

//search method traditional
// LinkedList.prototype.search = function (searchValue) {
//   var currentNode = this.head;
//   var counter = 0;
//   while (counter  < 10) {
//     console.log(counter);
//     counter++;
//   }
// };


// var ll = new LinkedList();
// ll.search();
// ll.addToHead('one');
// ll.addToHead('two');
// ll.addToHead('three');
// ll.addToHead('four');

// console.log(ll.removeTail())
