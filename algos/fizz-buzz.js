//lets rawk it
//log the numbers from 1 through 20 usuing fizz buzz
function fizzBuzz(num) {


    //we ned a modulus operatior because we do not want residual

    //first we need to write a for loop that kloops through all if elese statements
    for (var i = 1; i <= num; i++) {
        //if each number is divisibe by 3, output is fizz
        if (i % 3 === 0) console.log("fizz");
        //if each number is divisible by 5, output is buzz
        else if (i % 5 === 0) console.log('buzz')

        //if each number is divizible by 3 and 5, output is fizzbuzz
        else if (i % 5 === 0 && i % 3 === 0) console.log('fizzbuzz')

    }
}

fizzBuzz(20);
