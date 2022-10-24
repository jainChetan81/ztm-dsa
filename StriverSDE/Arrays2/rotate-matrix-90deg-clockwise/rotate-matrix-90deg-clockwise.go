// Rotate Image by 90 degree
// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.
// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.
// Example 2:
// Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output:[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
// Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix

package main

import "fmt"

func main() {
	matrix := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
	matrix2 := [][]int{{5, 1, 9, 11}, {2, 4, 8, 10}, {13, 3, 6, 7}, {15, 14, 12, 16}}
	fmt.Println(rotate(matrix))
	fmt.Println(rotate(matrix2))
	fmt.Println(rotateRightWay(matrix))
	fmt.Println(rotateRightWay(matrix2))
}

func rotate(nums [][]int) [][]int {
	matrix := make([][]int, len(nums))
	for i := 0; i < len(nums); i++ {
		temperMatrix := make([]int, len(nums))
		for j := 0; j < len(nums); j++ {
			temperMatrix[j] = nums[len(nums)-j-1][i]

		}
		matrix[i] = temperMatrix
	}
	return matrix
}
func rotateRightWay(matrix [][]int) [][]int {
	n := len(matrix)
	for i := 0; i < n/2; i++ {
		for j := i; j < n-i-1; j++ {
			matrix[i][j], matrix[j][n-i-1], matrix[n-i-1][n-j-1], matrix[n-j-1][i] =
				matrix[n-j-1][i], matrix[i][j], matrix[j][n-i-1], matrix[n-i-1][n-j-1]
		}
	}
	return matrix
}

