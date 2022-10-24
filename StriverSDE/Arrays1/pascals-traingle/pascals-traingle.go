// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]
// Constraints:
//     1 <= numRows <= 30

package main

import "fmt"

func main() {
	fmt.Println(pascalTriangle(5))
	fmt.Println(pascalTriangle(1))
}

func pascalTriangle(num int) [][]int {
	triangle := make([][]int, num)
	triangle[0] = []int{1}
	for i := 1; i < num; i++ {
		triangle[i] = make([]int, i+1)
		for j := 0; j <= i; j++ {
			fmt.Println(i, j)
			if j == 0 || j == i {
				triangle[i][j] = 1
			} else {
				triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
			}

		}

	}
	return triangle
}
