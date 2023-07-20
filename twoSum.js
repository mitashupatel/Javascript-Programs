/**
 * @param {number []} nums
 * @param {number} target
 * @returns { number[]}
 */

const twoSum = (nums, target) => {
    let map = new Map()

    let arr = []
    nums.forEach((num, index) => {
        let temp = target - num

        if (map.has(temp)) {
            arr = [map.get(temp), index]
        }
        else {
            map.set(num, index)
        }
    })
    return arr
}

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
