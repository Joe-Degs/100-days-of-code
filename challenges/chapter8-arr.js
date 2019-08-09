/*const arr = [{name: "Susanna"}, {name: "Jim"}, {name: "Trevor"}, {name: "Amanda"}];
arr.sort();
const arr1 = arr.sort((a, b) => a.name[1] < b.name[1]);

console.log(arr1);*/

/*const arr = [1,17,16,5,4,16,10,3,49];
arr.find */
/*var x = '';
for(var i=0;i < 7;i++) {
	x = x +'#';
	console.log(x);
};
*/

/*for(let i = 0;i<100;i++) {
	if(i % 3 === 0) {
		console.log('Fizz'); 
	} 
	else if(i % 5 === 0) {
		console.log('Buzz');
	}
	else if(i % 3 === 0 && i % 5 === 0) {
		console.log('fizzBuzz');
	}
	else console.log(i) 
}*/

/*class Person {
	constructor(name) {
		this.name = name;
		this.id = Person.nextId++; 
	}
}
Person.nextId = 0;
const jamie = new Person('Jamie'),
	  jay = new Person('Jay'),
	  juliet = new Person('Juliet'),
	  peter = new Person('Peter');
console.log(jamie);
const arr = [jamie, jay, juliet, peter];
arr.find(p => p.id === jay.id)*/


/* const items = ['Widget', 'Gadget'];
const prices = [57.1, 718.3];
let cart = items.map((x, i) => ({name: x, price: prices[i]}));
console.log(cart); */


/*
let fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 3; i < 20; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
	
}

for(let i = 1; i < fibonacci.length; i++) {
	console.log(fibonacci[i]);
}


*/








const words = ['Beachball', 'Rodeo', 'Angel',
	'Aardvack', 'Xylophone', 'Chocolate', 'Papaya',
	'November', 'Chocolate', 'Papaya', 'Uniform', 'Clover',
	'Bali' ];
	
const longWord = words.reduce((a, w) => 
	w.length > 6? a+' '+w : a, '').trim();	
	
console.log(longWord);
	
const alpha = words.reduce((a, x) => {
	if(!a[x[0]]) {
		a[x[0]] = [ ];
		a[x[0]].push(x);
	}
	return a;
}, {});

console.log(alpha.__proto__.__proto__);
console.log(Array.prototype);