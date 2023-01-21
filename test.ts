function changeStuff(a: number, b, c) {
	a = a * 10;
	b.item = "changed";
	c = { item: "changed" };
}

let num = 10;
let obj1 = { item: "unchanged" };
let obj2 = { item: "unchanged" };

changeStuff(num, obj1, obj2);

// console.log(num); //10
// console.log(obj1.item); //changed
// console.log(obj2.item); //unchanged

const arr = [2, 5, 6, 7, 45, 6, 7, 8];
function rotateArray(arr: number[], rotate: number) {
	let initial = arr[rotate < 8 ? rotate : arr.length - rotate];
	for (let i = 0; i < arr.length; i++) {
		const rotationIndex = i + rotate < 8 ? i + rotate : arr.length - rotate - i;
		console.log(i, rotationIndex);
		const temp = arr[rotationIndex];
		arr[rotationIndex] = arr[i];
		arr[i] = initial;
		initial = temp;
	}
	return arr;
}
// console.log(rotateArray(arr, 1));

// 345678345
// 468435735

// 6;
// 40 + 6;
// 460;
function splitEvenOdd(num: number): number {
	let even = 0;
	let odd = 0;

	while (num !== 0) {
		const temp = num % 10;
		num = Math.floor(num / 10);
		if (temp % 2 === 0) {
			console.log("temp", temp, "even", even);
			if (even === 0) even = temp;
			else even = even * 10 + temp;
			console.log("even", even);
		} else {
			odd = odd * 10 + temp;
		}
	}
	console.log(even, odd);
}

console.log(splitEvenOdd(345678345));
