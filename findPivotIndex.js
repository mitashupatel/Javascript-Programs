/**
 * Method that returns Pivot index
 * If number[] Array is [1,1,2]
 * then Output will be Index 1
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = (nums) => {
    let i = -1
    let readPointer = 0

    while (readPointer < nums.length) {
        let a = 0
        let b = 0
        nums.slice(0, readPointer + 1).map(t => a += t)
        nums.slice(readPointer, nums.length).map(t => b += t)
        console.log(readPointer, "RP")
        console.log(a, "a")
        console.log(b, "b")
        if (a === b) {
            console.log(readPointer, "RP")
            i = readPointer
            break
        }
        readPointer++
    }

    return i

};

// console.log(pivotIndex([-1, -1, -1, 1, 1, 1]))
console.log(pivotIndex([1, 1, 2]))
