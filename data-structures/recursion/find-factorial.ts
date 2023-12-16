export const findFactorial = (num: number): number => {
	if (num <= 1) return num;
	return num * findFactorial(num - 1);
};

console.log(findFactorial(120));
