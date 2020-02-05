/*
It is a list of elements called nodes that are connected together or linked together in a single file line.
*/

/*

There are two types of linked lists a singly linked list and a doubly linked list in a singly linked list.
Each node only has reference to the node after it or the next node in a doubly linked list.

*/

/*
   --HEAD--                      --TAL--
     -->NEXT --->NEXT ---->NEXT --->NEXT
     node ---- node ---- node ---- node
            <--- PREV<--- PREV<--- PREV   
*/

/*
         NODE
       value: 7
       next: nextNode
       prev: prevNode

*/

function LinkedList () {
  //set head and tail to null
  //this is done because we havent added any nodes
  this.head = null;
  this.tail = null;
  //head and tails are not pointing to anything
  
}

function Node (value, next, prev) {
  //we need to set the properties to each param 
  this.value = value;
  this.next = next;
  this.prev = prev;
  
}

//each node has a value property, next and previous properties
//Nodes will have a params (value, next, previous)
//

var LL = new LinkedList();
console.log(LL);
//output
/*
[object Object] {
  head: null,
  tail: null
}
*/

var userList = new LinkedList();
var todoList = new LinkedList();


//setting up nodes
//previous node is null because we do not have previous node
//this is 1st node

//So this object we just created is 
//an instance of the node constructor function.
var node1 = new Node(100, 'node2', null);

console.log(node1)
/*
[object Object] {
  next: "node2",
  prev: null,
  value: 100
}
*/
