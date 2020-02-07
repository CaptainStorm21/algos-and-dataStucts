/*
tripleAdd(10)(20)(30);
returns total of all 3 numbers added together 
*/

function tripleAdd(num1){
  return function(num2){
    return function(num3){
      return num1 + num2 + num3;
    }
  }
}

console.log(tripleAdd(10)(20)(30));

function tripleAdd1 (num1, num2, num3){
  return num1 + num2 + num3;
}

console.log(tripleAdd1(10, 20, 30));
