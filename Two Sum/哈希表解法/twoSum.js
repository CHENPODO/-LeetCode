//測試1
// const num = [2, 7, 11, 15]
// const target = 9

//測試2
const num = [1, 3, 4, 2]
const target = 6

const twoSum = (num, target) => {
	const map = new Map() //new一個新哈希表
	for (let i = 0; i, num.length; i++) {
		const currentNum = num[i] //取得當前數字
		const complement = target - currentNum //計算補數

		if (map.has(currentNum)) {
			//如果補數已經存在哈希表中
			return [map.get(currentNum), i] //返回補數的索引和當前索引
		}
		//若補述不存在哈希表中，則將當前數字跟索引加入哈希表
		map.set(complement, i)
	}
	return [] //  如找不到則回傳空陣列
}

console.log(twoSum(num, target)) // [0, 1]、[2, 3]
