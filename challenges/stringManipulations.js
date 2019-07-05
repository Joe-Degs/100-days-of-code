var firstName = "Joseph";
var lengthOfFirstName = firstName.length;

//Setup
var lastName = "Norkplim";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);
console.log(lengthOfFirstName)

//post and pre increment
let x = 2;
const r2 = x++ + x++;
const r3 = ++x + ++x;
let y = 10
const r4 = y-- + y--;
const r5 = --y + --y;
console.log(r2, r3, r4, r5);

//comparing numbers  
let n = 0;
while(true) {
	n += 0.1;
	if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);


function avg(a, b) {
	return (a + b)/ 2;
	
}

let a = 10, b = 30;
console.log(avg(a, b));