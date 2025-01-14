function findPlatform(arr: number[], dep: number[]): number {
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);
  let max = 0,
    tempMax = 0;
  let s = 0,
    e = 0;

  while (s < arr.length && e < dep.length) {
    if (arr[s] < dep[e]) {
      tempMax++;
      s++;
    } else {
      e++;
      tempMax--;
    }
    max = Math.max(tempMax, max);
  }
  return max;
}

console.log(
  findPlatform(
    [900, 940, 950, 1100, 1500, 1800],
    [910, 1200, 1120, 1130, 1900, 2000]
  )
); //3
console.log(findPlatform([900, 1235, 1100], [1000, 1240, 1200])); //1
console.log(findPlatform([1000, 935, 1100], [1200, 1240, 1130]));
