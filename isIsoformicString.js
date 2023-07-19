// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false

    let sDict = new Map()
    let tDict = new Map()

    for (let i = 0; i < s.length; i++) {
        let sc = s[i]
        let tc = t[i]

        if (!sDict.has(sc) && !tDict.has(tc)) {
            sDict.set(sc, tc)
            tDict.set(tc, sc)
        }

        if (sDict.get(sc) !== tc || tDict.get(tc) !== sc) {
            return false
        }
    }
    return true
};

console.log(isIsomorphic("foo", "bar"))