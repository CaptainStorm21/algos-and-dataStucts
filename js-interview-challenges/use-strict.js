'use strict';


city = "London"
console.log(city)

const city1 = "London"
console.log(city1)

//use strict prevents undeclared variables 


'use strict';

function (a, a, b) {
  console.log(a, a, b)
}

console.log(1, 2, 3)
//error because a, a params are the same


/*
no error 
function (a, a, b) {
  console.log(a, a, b)
}

console.log(1, 2, 3)
//error because a, a params are the same

*/


'use strict';

// use strict 
delete Object.prototype;
//error 
