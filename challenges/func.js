const reverseString = (str) =>  {
	const splitLetters = str.split('');
	const reversedArray = splitLetters.reverse();
	const reverseString = reversedArray.join('');
	
   return reverseString;
}

console.log(reverseString('kOMLA'));


function reverseUnicode(string) {
	let result = "";
	for(const char of string) {
		result = char + result;
	}
	return result;
}

console.log(reverseUnicode("Joseph"))