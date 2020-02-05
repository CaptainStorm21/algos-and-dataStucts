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

var ll = new LinkedList();
ll.addToHead('one');
ll.addToHead('two');
ll.addToHead('three');
ll.addToHead('four');

console.log(ll.removeTail())


//output is "one"
