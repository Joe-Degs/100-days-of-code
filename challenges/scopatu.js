/*var myGlobal = 10;

function fun1() {
	var oopsGlobal = 5;
}



function func2() {
	var output = '';
	if(typeof myGlobal != 'undefined') {
		output += 'myGlobal: ' + myGlobal;
	}
	if(typeof oopsGlobal != 'undefined') {
		output += 'oopsGlobal: ' + oopsGlobal;
	}
	console.log(output);
}
console.log('this is: ' + func2());*/







/*const person = {
	myName: "Bart",
	introduce: function() {
		return `Hi, am ${this.myName}`;
	}
};

const introducer = person.introduce;

console.log(introducer());

myName = "Catalin";

console.log(introducer())*/





/*let global = 'Global variable';

class Cat {
	constructor(name) {
		this.name = name;
		let local = 'Local to Cat.constructor()';
		console.log(local);
		console.log(global);
	}
	
	meow() {
		let local = 'Local to Cat.meow()';
		console.log(local);
		console.log(global);
		
		console.log(felix);
		console.log(this);
		console.log(this.name);
		console.log(this.local);
	}
}


let felix = new Cat('Felix');

console.log(felix.meow());*/





/*arr = [1,2,3,4,5,7,4,9,6];
arr1 = arr.map(x => x.toString());
console.log(arr1.parseInt());*/


const cards = [];
for(let suits of ['H', 'C', 'A', 'R']) {
	for(let value=1;value<=13;value++) {
		cards.push({suits, value});
	}
}

console.log(cards);
const arr1 = cards.filter(c => c.value === 2);
console.log(arr1);