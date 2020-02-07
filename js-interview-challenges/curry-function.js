// function getProduct(num1, num2) {
//   return num1 * num2;
//}

//currying 
function getProduct (num1){
  return function (num2){
    return num1 * num2
  }
}

getProduct(10)(20)
//200

// function getProduct(num1, num2) {
//   return num1 * num2;
//}

//currying 
// function getProduct (num1){
//   return function (num2){
//     return num1 * num2
//   }
// }

// getProduct(10)(20)


//set the distance as perm
function getTravelTime(distance){
  return function (speed){
    return distance /  speed;
  }
}

const travelTimeBosNY = getTravelTime(400);
const travelTimeLABur = getTravelTime(100);
console.log(travelTimeBosNY(200))
console.log(travelTimeLABur(80))
