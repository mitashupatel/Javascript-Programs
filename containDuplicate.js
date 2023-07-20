// Leet code problem
// Given an integer array nums, return true if  any value appears at least twice and return false if every element is distinct

/**
 * @param {number []}
 * @returns {boolean}
 * @author Mitashu Patel
 */

const containDuplicates1 = (arr) => {
    let set = new Set(arr)
    if (set.size === arr.length) return false
    return true
}
const containDuplicates2 = (arr) => {
    const map = new Map()
    let isDuplicate = false

    arr.map((num, index) => {
        if (map.has(num)) {
            isDuplicate = true
        }
        map.set(num, index)
    })
    return isDuplicate
}

console.log(containDuplicates2([1, 1, 3, 4]))
console.log(containDuplicates2([1, 2, 3, 4]))
console.log(containDuplicates2([1, 6, 3, 6]))
