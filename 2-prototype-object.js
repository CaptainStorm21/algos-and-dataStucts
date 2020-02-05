
function User (firstName, lastName, age, gender){
  this.firstName  = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

//"this" keyword refers to each of those objects

var user1 = new User ("John", "Smith", "23", "male");
console.log(user1);

var user2 = new User ("Ana", "Voville", "11", "female")
console.log(user2);

var user3 = new User ("Mary", "poppins", "32", "female");
console.log(user3)


//prototype 
User.prototype.email = "@javascript.edu"

console.log(user1);
//prototype makes all objects to have the key value pair added to each object 
//the value is inside of __proto__ Object

console.log(user2.email);
//output "@javascript.edu"


User.prototype.getEmailAddress = function (){
  return this.firstName + '_' + this.lastName + this.email;
}

console.log(user1)
console.log(user3.getEmailAddress());
//"Mary_poppins@javascript.edu"

console.log(user1.getEmailAddress());
//"John_Smith@javascript.edu"



//first letter capitalize
//.charAt(0).toUpperCase() + lastName.slice(1);
