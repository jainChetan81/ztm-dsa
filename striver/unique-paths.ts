function uniquePaths(m: number, n: number): number {
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => -1)
  );
  function dfs(i: number, j: number): number {
    if (i === m - 1 && j === n - 1) return 1;
    if (i > m - 1 || j > n - 1) return 0;
    if (dp[i][j] !== -1) return dp[i][j];
    const total = dfs(i + 1, j) + dfs(i, j + 1);
    dp[i][j] = total;
    return total;
  }
  return dfs(0, 0);
}

console.log(uniquePaths(3, 7)); //28
console.log(uniquePaths(3, 2)); //3
