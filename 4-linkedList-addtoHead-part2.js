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
  
}

/*
the head pointer is now pointing at this new node because
it will be the new head node
so let's put a function on our Linked List prototype that 
will allow us to do this.
We will say LinkedList.prototype.addToHead will have a function 
*/
