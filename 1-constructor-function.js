/*
a construction function is simply a function that crates 
and object class and allows you to create multiple 
instances of that class very easily. which means they 
allows you to crate a lot of objects very quicky and 
these object will all have the same properties and the 
same functionality because they are part of the same class

*/

// constructor function with capital letter
function User (firstName, lastName, age, gender){
  this.firstName  = firstName.charAt(0).toUpperCase() + lastName.slice(1);
  this.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  this.age = age;
  this.gender = gender.charAt(0).toUpperCase() + lastName.slice(1);
}

//"this" keyword refers to each of those objects

var user1 = new User ("John", "Smith", "23", "male");
console.log(user1);

var user2 = new User ("Ana", "Voville", "11", "female")
console.log(user2);

var user3 = new User ("Mary", "poppins", "32", "female");
console.log(user3)


/*
this refers to the object 
if i use this constructor function to create an object 
make sure tha tthe properties and the objects are 
first name age gender

*/
