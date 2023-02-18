export const findFactorial = (num: number): number => {
	if (num === 1) return 1;
	if (num === 2) return 2;
	return num * findFactorial(num - 1);
};

console.log(findFactorial(120));
