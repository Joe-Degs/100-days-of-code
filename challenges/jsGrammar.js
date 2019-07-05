
function computeGrains () {
	var numberOfGrains=1;
	var squareNumber;
	var output= '';
	
	while(numberOfGrains < 65){
		squareNumber = 2 * numberOfGrains;
		output = console.log(`Number ${numberOfGrains} : ${squareNumber} grains`);
		numberOfGrains++
	}
return output;
}


console.log(computeGrains());