function myFunc() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}
 
console.log(myFunc());
 
const instanceOne = myFunc();
const instanceTwo = myFunc();

//1 
console.log('instanceOne: ', instanceOne());
//2
console.log('instanceOne: ', instanceOne());
//3
console.log('instanceOne: ', instanceOne()); 
//1
console.log('instanceTwo: ', instanceTwo());
//2
console.log('instanceTwo: ', instanceTwo());
//4
console.log('instanceOne: ', instanceOne());
