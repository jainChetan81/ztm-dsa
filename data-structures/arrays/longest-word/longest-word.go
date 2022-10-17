// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

package main

import "fmt"

const (
	str1 = "fun&!! time"
	str2 = "I love dogs"
)

func main() {
	println(longestWord(str1))
	println(longestWord(str2))
}

func longestWord(sen string) string {
	longest := ""
	temp := ""
	// alphabet:=65-122, nums:= 48-57
	for i := 0; i < len(sen); i++ {
		if sen[i] >= 57 && sen[i] <= 122 {
			temp += string(sen[i])
			fmt.Println(i, temp)
		} else {
			temp = ""
		}
		if len(temp) > len(longest) {
			longest = temp
		}
	}
	return longest

}
