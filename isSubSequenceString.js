// Leetcode String SubSequence Problem 392 isSubsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0
    let j = 0
    let sSize = s.length
    let tSize = t.length

    while (i < sSize && j < tSize) {
        if (s[i] === t[j]) {
            i++
            j++
        }
        else {
            j++
        }
    }

    if (i === sSize) return true
    return false
};


console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("ace", "abcde"))