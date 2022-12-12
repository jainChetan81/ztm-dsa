// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//     Each row must contain the digits 1-9 without repetition.
//     Each column must contain the digits 1-9 without repetition.
//     Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
//     A Sudoku board (partially filled) could be valid but is not necessarily solvable.
//     Only the filled cells need to be validated according to the mentioned rules.
// Example 1:
// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:
// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

package main

import "fmt"

func main() {
	arr1 := [][]byte{
		[]byte{'5', '3', '.', '.', '7', '.', '.', '.', '.'},
		[]byte{'6', '.', '.', '1', '9', '5', '.', '.', '.'},
		[]byte{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		[]byte{'8', '.', '.', '.', '6', '.', '.', '.', '3'},
		[]byte{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		[]byte{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		[]byte{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
	}

	arr2 := [][]byte{
		[]byte{'8', '3', '.', '.', '7', '.', '.', '.', '.'},
		[]byte{'6', '.', '.', '1', '9', '5', '.', '.', '.'},
		[]byte{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		[]byte{'8', '.', '.', '.', '6', '.', '.', '.', '3'},
		[]byte{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		[]byte{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		[]byte{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
		[]byte{'.', '.', '.', '4', '1', '9', '.', '.', '5'},
		[]byte{'.', '.', '.', '.', '8', '.', '.', '7', '8'},
	}
	arr3 := [][]byte{
		[]byte{'.', '.', '4', '.', '.', '.', '6', '3', '.'},
		[]byte{'.', '.', '.', '.', '.', '.', '.', '.', '.'},
		[]byte{'5', '.', '.', '.', '.', '.', '.', '9', '.'},
		[]byte{'.', '.', '.', '5', '6', '.', '.', '.', '.'},
		[]byte{'4', '.', '3', '.', '.', '.', '.', '.', '1'},
		[]byte{'.', '.', '.', '7', '.', '.', '.', '.', '.'},
		[]byte{'.', '.', '.', '5', '.', '.', '.', '.', '.'},
		[]byte{'.', '.', '.', '.', '.', '.', '.', '.', '.'},
		[]byte{'.', '.', '.', '.', '.', '.', '.', '.', '.'},
	}
	arr4 := [][]byte{
		[]byte{'.', '.', '.', '.', '5', '.', '.', '1', '.'},
		[]byte{'.', '4', '.', '3', '.', '.', '.', '.', '.'},
		[]byte{'.', '.', '.', '.', '.', '3', '.', '.', '1'},
		[]byte{'8', '.', '.', '.', '.', '.', '.', '2', '.'},
		[]byte{'.', '.', '2', '.', '7', '.', '.', '.', '.'},
		[]byte{'.', '1', '5', '.', '.', '.', '.', '.', '.'},
		[]byte{'.', '.', '.', '.', '.', '2', '.', '.', '.'},
		[]byte{'.', '2', '.', '9', '.', '.', '.', '.', '.'},
		[]byte{'.', '.', '4', '.', '.', '.', '.', '.', '.'},
	}
	fmt.Println(isValidSudoku(arr1))
	fmt.Println(isValidSudoku(arr2))
	fmt.Println(isValidSudoku(arr3))
	fmt.Println(isValidSudoku(arr4))
}

func isValidSudoku(board [][]byte) bool {
	// first let i=0 and rotate j, then j=0 and rotate i
	for i := 0; i < len(board); i++ {
		rows := make(map[string]bool, 0)
		for j := 0; j < len(board[i]); j++ {
			letter := string(board[i][j])
			if letter != "." {
				if rows[letter] == true {
					return false
				}
				rows[letter] = true
			}
		}

	}
	for j := 0; j < len(board); j++ {
		cols := make(map[string]bool, 0)
		for i := 0; i < len(board); i++ {
			letter := string(board[i][j])
			if letter != "." {
				if cols[letter] == true {
					return false
				}
				cols[letter] = true
			}
		}

	}
	for i := 0; i < len(board); i += 3 {
		for j := 0; j < len(board); j += 3 {
			square := make(map[string]bool, 0)
			for k := i; k < i+3; k++ {
				for l := j; l < j+3; l++ {
					letter := string(board[k][l])
					if letter != "." {
						if square[letter] == true {
							return false

						}
						square[letter] = true
					}
				}
			}

		}
	}

	return true
}
