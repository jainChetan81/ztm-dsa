// Search in a sorted 2D matrix
// Problem Statement: Given an m*n 2D matrix and an integer, write a program to find if the given integer exists in the matrix.
// Given matrix has the following properties:
//     Integers in each row are sorted from left to right.
//     The first integer of each row is greater than the last integer of the previous row
// Example 1:
// Input: matrix =
// [[1,3,5,7],
//  [10,11,16,20],
//  [23,30,34,60]],
// target = 3
// Output: true
// Explanation: As the given integer(target) exists in the given 2D matrix, the function has returned true.
// Example 2:
// Input: matrix =
// [[1,3,5,7],
//  [10,11,16,20],
//  [23,30,34,60]],
// target = 13
// Output: false
// Explanation: As the given integer(target) does not exist in the given 2D matrix, the function has returned false.

package main

import "fmt"

func main() {
	matrix := [][]int{{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}}
	target := 3
	target2 := 13
	fmt.Println(searchMatrixBruteForce(matrix, target))
	fmt.Println(searchMatrixBruteForce(matrix, target2))
}

func searchMatrixBruteForce(matrix [][]int, target int) bool {
	if len(matrix) == 0 {
		return false
	}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == target {
				return true
			}
		}
	}
	return false
}
