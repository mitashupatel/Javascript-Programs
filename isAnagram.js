/**
 * A Method to check that two words ar anagram or not
 * @author Mitashu Patel
 * @param {string a}
 * @param {string b}
 */

const isAnagram = (a, b) => {
    const firstArray = Array.from(a)
    const secondArray = Array.from(b)
    if (firstArray.length !== secondArray.length) return false

    const map = new Map()

    firstArray.map((x) => {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1)
        }
        else {
            map.set(x, 1)
        }
    })

    secondArray.map((x) => {
        if (map.has(x)) {
            map.set(x, map.get(x) - 1)
            if (map.get(x) === 0) map.delete(x)
        }
    })

    if (map.size === 0) return true
    return false
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "cat"))
