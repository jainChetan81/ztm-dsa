//*========CLOSURE=============
//lexical scoping=>define how variable names are resolved in nested functions
//child scopes have access to parent scopes, but not vice versa
// a closure is created when we define a func, not when it is executed
const parent = () => {
	let val = 2;
	return () => console.log(val++);
};
const child = parent();
child(); // 1
child(); // 2

// *========DEBOUNCE=============
const debounce = (fn: Function, delay: number) => {
	let counter: undefined | number;
	return (...args: any[]) => {
		clearTimeout(counter);
		counter = setTimeout(() => fn(...args), delay);
	};
};
const debounceFn = debounce(() => console.log("debounce"), 1000);
debounceFn();

// *========THROTTLE=============
const throttle = (fn: Function, delay: number) => {
	let lastTime = 0;
	return (...args: any[]) => {
		const now = new Date().getTime();
		if (now - lastTime < delay) return;
		lastTime = now;
		fn(...args);
	};
};
const throttleFn = throttle(() => console.log("throttle"), 1000);
throttleFn();
throttleFn();
setTimeout(() => throttleFn(), 1000);

// *========HOISTING=============
// hoisting is a JS mechanism where variables and function declarations are moved to the top of their scope before code execution
// only declarations are hoisted, not initializations
// hoisting only works with var, not let or const
// hoisting is a side effect of how JS interprets code
// hoisting is a bad practice

// *========MEMOIZATION=============
// memoization is a technique used to improve performance by caching the results of expensive function calls and returning the cached result when the same inputs occur again
const memoize = (fn: Function) => {
	const cache = new Map();
	return (...args: any[]) => {
		const key = JSON.stringify(args);
		if (cache.has(key)) return cache.get(key);
		const result = fn(...args);
		cache.set(key, result);
		return result;
	};
};

// *========IMPLEMENT REDUCE AND AT=============
function reduce(cb: Function, acc: any) {
	for (let i = 0; i < this.length; i++) {
		acc = cb(acc, this[i]);
	}
	return acc;
}
function at(pos: number) {
	if (pos > this.length - 1 || pos < -this.length) return undefined;
	if (pos >= 0) {
		return this[pos];
	} else return this[this.length + pos];
}
Array.prototype.myReduce = reduce;
Array.prototype.myAt = at;
console.log([1, 2, 3].myAt(-3));
console.log([1, 2, 3].myAt(-6));

// *=================Prototype and Prototypal Inheritance==================
const arr = ["Akshay", "Aditya"];
const obj = {
	name: "Akshay",
	age: 24,
	getIntro: function () {
		return `My name is ${this.name} and I am ${this.age} years old`;
	}
};
// prototype: when creating an object,array the JS ,engine adds hidden property and function, these come via prototype
// prototype is a property of a function, object that is attached to every variable
// __proto__ is used to retrieve the prototype of an object that is already instantiated
// arr.__proto__ === Array.prototype, this is where JS is putting all the methods
// arr.__proto__.__proto__ === Object.prototype, this is where JS is putting all the methods
// everything in js is object with prototype attached
// using __proto__ is not a good practice, causes huge performance issues
// prototype is an object that is associated with every functions and objects by default in JS, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible
// prototype is not the prototype of the function, it's the prototype of all instances that are created through the constructor function
// prototype is not the same as __proto__
// prototype is used for inheritance ob2.__proto__ === ob1, now obj2 will have all the properties of obj1, creates a prototype chain
//overrides the this properties in object 1
