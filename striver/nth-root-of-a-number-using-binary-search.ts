function nthRoot(n: number, m: number): number {
	function linearSearch(left: number, right: number) {
		const mid = Math.floor((left + right) / 2);
		const ans = formula(n, mid);

		if (ans === m) return mid;
		else if (ans > m) return linearSearch(left, mid);
		else return linearSearch(mid, right);
	}

	return linearSearch(0, m);
}
function formula(n: number, m: number) {
	let pow = m;
	let res = 1;
	while (pow > 0) {
		if (pow % 2 !== 0) {
			res = res * n;
			pow--;
		} else {
			n *= n;
			pow = pow / 2;
		}
	}
	return res;
}

console.log(nthRoot(3, 27)); //3
