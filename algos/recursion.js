/*
  factorrial (!)
 4! = 4 * 3 * 2 *1 = 24
 3! = 3 * 2 * 1  = 6

*/

function factorial (num){
  if(num === 1) {
    return num;
  } else {
    return num * factorial (num -1);
  }
}

console.log(factorial(4))
//24
