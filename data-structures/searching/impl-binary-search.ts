// implement binary search on a sorted array
export default function binarySearch(
  arr: Array<number>,
  target: number,
  left = 0,
  right = arr.length,
): number {
  if (!arr.length) return -1;
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (left >= right) return -1;
  if (arr[mid] > target) return binarySearch(arr, target, left, mid);
  return binarySearch(arr, target, mid + 1, right);
}
// example 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
// example 2
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // -1
// example 3
console.log(binarySearch([], 0)); // -1
// example 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // 0
// example 5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 9
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
