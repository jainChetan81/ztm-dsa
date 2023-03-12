const a = "a";
let abc = "av";
// primitive datatypes
// string number, boolean , symbol, null ,undefined, bigint
//passed by values
// a = "c";
abc = "1";
// datatypes reference, array, obj, map, set etc

//they are block scoped

if (true) {
	const arr = [1.2, 2];
	var abcVar = "a";
}
var abcVar = "b";
// console.log(abcVar);
// console.log(abcVar);
// console.log(name);
// console.log(arrow);

function name() {}
const arrow = () => {};

// =========================================

function sum(a, b) {
	console.log(a, b);
	return a + b;
}

function appendStr(a, b) {
	return `${a}${b}`;
}

const curryFn = (fn) => {
	const store = [];
	function rec(...args) {
		if (args.length === 1) store.push(...args);
		console.log("a", args, store.length);
		if (store.length === 2) return fn(...store);
		return (...args2) => {
			return rec(...args2);
		};
	}
	return rec;
};

const sumNew = curryFn(sum);
const appendStrNew = curryFn(appendStr);

console.log(sumNew(1)(2));
console.log(sumNew(1)()()()(2));
console.log(sumNew()(1)(2));

// console.log(appendStrNew()(2)(1));
// console.log(appendStrNew(1)(2)(1));
// console.log(appendStrNew(1)()()(2));
