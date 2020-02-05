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
  
  /*
    now we need to compare 2 nodes 
    if a new node is lesser of a value it becomes the new head
    if not, then it becomes a new node
  */
  
  if(this.head) this.head.prev = newNode;
  
  /*
    this.head - THIS is referenced to LinkedList construction function
    not the NODE construction function
     now we need to write another else statemnt to write in a condition
     if there is no other nodes exist 
  */
  
  else this.tail = newNode;
  /* now we need to add another node */
  this.node = newNode;
}

  //we need to make sure that right head and tail nodes are indexed 
  //properly



var ll = new LinkedList();
  //we add the head and we pass in some data 
  //that we want our head node to have

ll.addToHead(100)
console.log(ll)

  /*
  Head and tail are the same 
  { 
  head: { value: 100, next: null, prev: null},
  tail: { value: 100, next: null, prev: null}
  }
  */

//add another node 
ll.addToHead(200);
console.log(ll);

//add another node 
ll.addToHead(300);
console.log(ll);

/*
LinkedList {
  head: null,
  tail: Node { value: 100, next: null, prev: null },
  node: Node { value: 100, next: null, prev: null } }
LinkedList {
  head: null,
  tail: Node { value: 200, next: null, prev: null },
  node: Node { value: 200, next: null, prev: null } }
LinkedList {
  head: null,
  tail: Node { value: 300, next: null, prev: null },
  node: Node { value: 300, next: null, prev: null } }
  */
