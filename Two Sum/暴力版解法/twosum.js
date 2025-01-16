const num = [2, 7, 11, 15]
const target = 9

const twoSum = (num, target) => {
	// 外層迴圈選擇第一個數
	for (let i = 0; i < num.length; i++) {
		// 內層迴圈選擇第二個數
		for (let j = i + 1; j < num.length; j++) {
			if (num[i] + num[j] === target) {
				return [i, j] // 如果前後兩數相加等於目標值，則返回索引值
			}
		}
	}
	return [] // 如果都不等於目標值，則回傳空陣列
}

console.log(twoSum(num, target)) // [0, 1]
console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([1, 3, 4, 2], 6)) // [2, 3]
console.log(twoSum([3, 3], 6)) // [0, 1]
