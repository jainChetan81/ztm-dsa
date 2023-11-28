function curry(fn) {
	const inbuild = (...arr) => {
		if (arr.length === 3) {
			return fn(arr[0], arr[1], arr[2]);
		}
		if (arr.length === 2) {
			return (a) => fn(arr[0], arr[1], a);
		}
		if (arr.length === 1) {
			return (b, c) => fn(arr[0], b, c);
		}
	};
	return inbuild;
}

const join = (a, b, c) => {
	return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'
