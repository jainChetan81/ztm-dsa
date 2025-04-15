function curry(fn: Function) {
	const store: any[] = [];
	return function curried(...args: any[]) {
		store.push(...args);
		if (store.length >= fn.length) return fn(...store);
		return function (...moreArgs: any[]) {
			return curried(...moreArgs);
		};
	};
}
function debouncHandle(fn: Function, delay: number) {
	let timer: number;
	return function (...args: any[]) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			// @ts-ignore
			fn.apply(this, args);
		}, delay);
	};
}

function throttleHandler(fn: Function, delay: number) {
	let lastRun = 0;
	return (...args: any[]) => {
		const now = new Date().getTime();
		if (now - lastRun < delay) return;
		lastRun = now;
		fn(...args);
	};
}

function greet(greeting: string, name: string, age: number) {
	return greeting + " " + name + " " + age;
}

var sayHelloTo = partial(greet, "hello");
console.log(sayHelloTo("fred"));
console.log(sayHelloTo(20));
// => 'hello fred'

// var divide = function (a: number, b: number) {
// 	return b / a;
// };
// var divideBy5 = partial(divide, 5);
// let result = divideBy5(10);

// console.log(result);

function partial(func: Function, ...args: any[]) {
	const store = args;
	return (...rest: any[]) => {
		store.push(rest);
		if (store.length === func.length) return func(...store);
	};
}


