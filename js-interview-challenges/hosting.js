var color="blue";
console.log(color)
//this will work


//this will fail
console.log(age)
var age = 23


function getName(name){
  return "Hello " + name;
}
console.log(getName("Alisa"))


//error hoisting
// console.log(getFName('Joanne', 'Myth'))
getFName = function (fName,lName) {
  return "Good morning, " + fName + ' ' + lName;
}

console.log(getFName('Mary', 'Smirth'))


