/*
var function scoped
    global scoped
    function scope


let and const are blocke scoped
      global scoped
      function scope  
      block scope
        (for loop  if else statement  while loop)
*/



// function getTotal () {
//   console.log(multiplier);
//   console.log(total);

//   let total = 0;
//   for (var i = 0; i<10; i++){
//     let valueToAdd = i;
//     var multiplier = 2;
//     total += valueToAdd * multiplier
//   }

//   return total;
// }

// getTotal();
//error

function getTotal() {
  let total;
  var multiplier;
  
  total = 0;
  
  for(var i = 0; i < 10; i++) {
    // let valueToAdd;
    
     let valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();
