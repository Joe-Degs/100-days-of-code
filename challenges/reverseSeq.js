const reverseSeq = (n) => {
	let x = []; 
	
	debugger;
	
	//This for-loop iterates over the number(n) to get the preceding 
	//number each in turn until it reaches [1] 
	for(let i = n; i > 0; i--) { 
		x.push(i); 
	}
	return x;
}

console.log(reverseSeq(5));