// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.
// Example 1:
// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:
// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
function findKthPositive(arr: number[], k: number): number {
  let totalMissingNumber = 0;
  let lastNumber = 1;
  let idxArr = 0;
  for (let i = 0; i < arr[arr.length - 1]; ++i) {
    if (arr[idxArr] === i) idxArr++;
    else if (i !== 0) {
      totalMissingNumber++;
      lastNumber = i;
    }
    if (totalMissingNumber === k) {
      return lastNumber;
    }
  }
  if (totalMissingNumber !== k) {
    const prevNumber = arr[arr.length - 1];
    for (let i = prevNumber + 1; ; ++i) {
      totalMissingNumber++;
      lastNumber = i;
      if (totalMissingNumber === k) {
        // console.log(totalMissingNumber, lastNumber);
        return lastNumber;
      }
    }
  }
  return lastNumber;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); //9
console.log(findKthPositive([1, 2, 3, 4], 2)); //6
console.log(findKthPositive([5, 6, 7, 8, 9], 9)); //14
