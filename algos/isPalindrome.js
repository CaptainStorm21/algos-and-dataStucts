//palindrome

function isPalindrome (string) {
	//we need this to === compare the strings
  string = string.toLowerCase();
  //now we need to split the string into characters
  var charactersArr = string.split('');
  //this is for comparason
  var validCharacters = 'abcdefghijklmnoprqstuwvyz'.split('');
  
  //an empty array to push the letters in 
  var lettersArr = [];
  
	//foreach loop
  charactersArr.forEach(char => {
  	if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('');
  
}


console.log(isPalindrome("alice found a key"))
console.log(isPalindrome("Madam, I'm Adam"))
console.log(isPalindrome('madamimadam'))
