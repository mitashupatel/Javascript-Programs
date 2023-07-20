/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sum = []
    let readPointer = 0

    while (readPointer <= nums.length - 1) {
        if (readPointer === 0) {
            sum.push(nums[0])
            readPointer++
            return
        }

        let s = 0
        nums.slice(0, readPointer + 1).map(t => s += t)
        sum.push(s)
        readPointer++
    }

    return sum
};

console.log(runningSum([1, 2, 3, 4]))