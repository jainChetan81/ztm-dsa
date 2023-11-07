// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]
function dailyTemperatures(temperatures: number[]): number[] {
	const result: number[] = [];
	const stack = [0];
	for (let i = 1; i < temperatures.length; i++) {
		while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
			result[stack[stack.length - 1]] = i - stack[stack.length - 1];
			stack.pop();
		}
		stack.push(i);
	}
	for (let i = 0; i < stack.length; i++) {
		result[stack[i]] = 0;
	}
	return result;
}

// example 1
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
// example 2
console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
// example 3
console.log(dailyTemperatures([30, 60, 90])); // [1,1,0]
