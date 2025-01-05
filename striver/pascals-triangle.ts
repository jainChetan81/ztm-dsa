function generate(numRows: number): number[][] {
  const res = [[1]];
  for (let i = 1; i < numRows + 1; i++) {
    const row: number[] = new Array(i).fill(1);
    const prev = res[i - 1];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) continue;
      row[j] = (prev?.[j - 1] ?? 0) + (prev?.[j] ?? 0);
    }
    res.push(row);
  }
  return res;
}

console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
