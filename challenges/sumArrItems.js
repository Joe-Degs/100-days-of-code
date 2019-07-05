let integers = [1, 7, 3, 4, 8, 2];

function sumArrItems(arr) {
	let sum = 0;
	for(let i = 0; i<arr.length; i++) {
	sum = sum + arr[i]
	}
	return sum;
}

console.log(sumArrItems(integers));