function f(x) {
	console.log(`inside f x = ${x}`);
	x = 5;
	console.log(`inside f x = ${x}(after assignment)`);
}
console.log(`before calling f:x=${x}`)
let x = 3;
console.log(`after calling x = ${x}`); 

