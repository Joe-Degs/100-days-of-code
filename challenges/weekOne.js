/*
    //CHALLENGE 1 
let integers = [1, 7, 3, 4, 8, 2];

function sumArrItems(arr) {
	let sum = 0;
	for(let i = 0; i<arr.length; i++) {
	sum = sum + arr[i]
	}
	return sum;
}

console.log(sumArrItems(integers));
*/




/*

    //CHALLENGE 2
let str = "The quick brown fox jumps over the lazy dog"

function wordCounter(str) {
	let arr = str.split(" ");
	
	return arr.length;
}
 console.log(wordCounter(str));
 
 */
 
 
 
 
 
 
 /*
          //CHALLENGE 3
function sumInRange(range) {
	let sum = 0;
	let arr = range.split("-");
	
	for(let i = arr[0]; i <= arr[1]; i++) {
		sum += parseInt(i);
	}
	return sum;
}

console.log(sumInRange("1-4"));
*/





         //CHALLENGE 4
/*
function adder(number) {
	let sum = 0;
	let arr = number.split('');
	for(let i=arr[0]; i<=arr.length; i++) {
		sum += parseInt(i);
	}
	return sum;
}

console.log(adder('123'))
*/

/*
function adder(num) {
	let sum = 0;
	let arr = num.toString().split("");
	
	//for (let i = arr[0]; i <= arr.length; i++) {
	//	sum += parseInt(i);
	//}
	for (let el of arr) {
		sum += parseInt(el)8
	}
	return sum;
	
}

console.log(adder(1234))
*/

       
       
/*       
       //CHALLENGE 5
       
  function bouncer(arr) {
  	let result = [];
  	for (let item of arr) {
  		if (item) {
  			result.push(item);
  		}
  	}
  	return result;g
  } 
console.log(bouncer([0,2,1,'kofi',false,'ama',null,67,undefined]));
*/



/*
//CHALLENGE 6
function reverseStr(str) {
	var x= [];
	let arr=str.split("");
	for (let i=arr.length; i>=0; i--) {
		x.push(arr[i]);
	}
	return x.join('');
}
console.log(reverseStr("Hello Ghana"))

*/


//CHALLENGE 7
function palindrome(str) {
	let reversed = str.split("").reverse().join("");
	return reversed === str;
}
console.log(palindrome('aba'));