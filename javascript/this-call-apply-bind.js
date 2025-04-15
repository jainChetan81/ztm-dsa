"use strict";
function async1() {
	let x = 0;
	console.log(this);
}

async1();

class Name {
	x = 1;
	constructor() {
		console.log(this);
	}
}
new Name();

const objFunc = {
	a: "a",
	fn: function () {
		console.log(this);
	},
	arr: () => {
		console.log(this);
	}
};
objFunc.fn();
objFunc.arr();

function Person(name) {
	this.name = name;
	console.log(this);
}

new Person("John");
console.log("================================================");

function showThis(a, b) {
	console.log("sdfsd", a, b);
	console.log(this);
}
const obj1 = { name: "John" };

showThis.call(obj1, 1, 2); // { name: 'John' }
showThis.apply(obj1, [1, 2]); // { name: 'John' }

console.log("================================================");

const obj2 = { name: "John" };

const boundFunc = showThis.bind(obj2);
boundFunc();

const obj = {
	name: "John",
	showThis: function () {
		const arrowFunc = () => {
			console.log(this);
		};
		arrowFunc();
	}
};

obj.showThis(); // { name: 'John', showThis: ƒ }

const showThisStandalone = obj.showThis;
showThisStandalone(); // In non-strict mod

const bindFunc = obj.showThis.bind(obj);
bindFunc();

function logThis() {
	console.log(this);
}

const obj3 = {
	name: "Example",
	method: logThis,
	arrowMethod: () => console.log("arrow", this),
	nestedMethod() {
		function inner() {
			console.log("nested", this);
		}
		inner();
	}
};

obj3.method();
obj3.arrowMethod();
obj3.nestedMethod();

console.log("--------------------------------");

function createCounter() {
	this.count = 0;

	this.increment = function () {
		this.count++;
		console.log(this.count);
	};

	this.decrement = () => {
		this.count--;
		console.log(this.count);
	};

	return {
		count: 100,
		increment: this.increment,
		decrement: this.decrement,
		getCallbacks: function () {
			return {
				increment: this.increment,
				decrement: this.decrement
			};
		}
	};
}

const counter = new createCounter();
counter.increment();
counter.decrement();

function add(a, b) {
	return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
