/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    let map = new Map()
    arr = arr.sort()
    arr.forEach((num, index) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        }
        else {
            map.set(num, 1)
        }
    })

    const uniqueCounts = [...map.values()]
    uniqueCounts.sort((a, b) => a - b)

    let removeCount = 0
    let removedUniqCounts = 0
    uniqueCounts.forEach((u, index) => {
        removeCount += u
        if (removeCount <= k) {
            removedUniqCounts += 1
        }
        else {
            return
        }
    })

    return uniqueCounts.length - removedUniqCounts
};
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3))