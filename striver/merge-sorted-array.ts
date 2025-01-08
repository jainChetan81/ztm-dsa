/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let [left, right] = [m - 1, 0];
  while (left >= 0 && right < n) {
    if (nums1[left] > nums2[right]) {
      [nums1[left], nums2[right]] = [nums2[right], nums1[left]];
    }
    left--;
    right++;
  }
  console.log(nums1, left, nums2, right);
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  left = m;
  right = 0;
  while (left < nums1.length && right < n) {
    nums1[left] = nums2[right];
    left++;
    right++;
  }
  console.log(nums1);
}

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([4, 5, 6], 3, [1, 2, 3], 3));
