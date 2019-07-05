function reversedFaster(string) {
	let result = "";
	
	for(let i = string.length; i > 0; result += string[--i]);
	
	return result;
}

console.log(reversedFaster("kOMLA"));