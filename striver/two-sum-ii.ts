function twoSum2(numbers: number[], target: number): number[] {
  let start = 0,
    end = numbers.length - 1;
  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) return [start + 1, end + 1];
    if (sum > target) end--;
    else start++;
  }
  return [-1, -1];
}
console.log(twoSum2([5, 25, 75], 100)); //[0,1]
