function merge(intervals: number[][]): number[][] {
  const res = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let [start = 0, end = 0] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    if (end < s) {
      res.push([start, end]);
      start = s;
    }
    start = Math.min(start, s);
    end = Math.max(end, e);
  }
  res.push([start, end]);
  return res;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); //[[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [0, 0],
  ])
); //[[1,5]]
