var a = 5;

{
	a = 6;
	let b = 8;
}

console.log(a);
console.log(b);

var a = {
	b: 7,
	func: () => {
		// this.b--;
		console.log(this);
	}
};

a.func();

var a = {},
	b = { key: "b" },
	c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

// implement Array reduce
type REDUCE = (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number;
class ImplArray {
	arr: number[] = [];
	constructor(a: number[]) {
		this.arr = a;
	}
	reduce(cb: REDUCE, initialValue: number): number {
		let acc = initialValue;
		for (let i = 0; i < this.arr.length; i++) {
			acc = cb(acc, this.arr[i], i, this.arr);
		}

		return acc;
	}
}

const arr = [1, 2, 3, 4, 5];
const reducedValue = arr.reduce((acc, item) => (acc -= item), 1);
const implArr = new ImplArray(arr);
const implReduce = implArr.reduce((acc, item) => (acc -= item), 1);
console.log(reducedValue, implReduce);

// Given an object, and a string, containing a dot-separated path to a key, eg. For an object {a: {b: {c:1}}} you got a string ‘a.b.c’, the expected answer is 1. Write a function getValue that receives the object and the path string as arguments and returns the value at that path, or undefined if no value was found at that path.
const OBJ = { a: { b: { c: 1 } } } as const;
function findObject<T>(obj: T, str: string): number | undefined {
	let temp = { ...obj };
	const keys = str.split(".");
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (!temp[key]) {
			return undefined;
		}
		temp = temp[key];
	}
	return temp;
}

console.log(findObject(OBJ, "a.b"));
