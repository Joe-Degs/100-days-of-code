const kojo = {
	name: 'KOJO SIMPSONS'
}

const kofi = {
	name: 'KOFI DOGOOD'
}

function greet() {
	return `My name is ${this.name}`;
}

function update (birthYear, occupation) {
	this.birthYear = birthYear;
	this.occupation = occupation;
}
var a = greet.call(kojo);
var b = update.apply(kofi, ['1835', 'farming']);
var c = update.apply(kojo, ['1865', 'Doctor']);

console.log(a, b, c);