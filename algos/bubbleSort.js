//bubble sort 
//sort  array [6000, 34, 203, 3, 746, 200, 984, 198, 764, 9, 1]
//the main concerpt is run through all the numbers first  -- forloop
//then using if statement move each number betwen 2 
//1 is lower than 6000 so the 1 goes first
//then array looks for in the array next number that is higher than index 0 = 1 but lower 
//than everything else then that number loops through and places as index 1 = 
//in this case 3 takes place of index 1
function bubbleSort(array) {

    //for loop since this is user enntered array we need to use array.length
    for (var i = array.length; i > 0; i++) {
    	for (var j = 0; j<i ; j++){
        //2nd forloop - this actually grind through all the numbers
        if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
    }
}

return array;
}

console.log(bubbleSort([6000, 203, 3, 746, 200, 984, 198, 764, 9, 1]))
