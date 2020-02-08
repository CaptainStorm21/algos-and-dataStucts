// Exponential runtime - Big O Notation: "O (n^2)"
function addAndLog(array) {
 for (var i = 0; i < array.length; i++) {
   for (var j = 0; j < array.length; j++) {
     console.log(array[i] + array[j]);
   }
 } 
}
 
addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out
