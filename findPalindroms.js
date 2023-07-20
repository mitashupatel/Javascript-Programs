const countPalindromes = (sentence, left, right) => {
    let count = 0
    while (left >= 0 && right < sentence.length && sentence[left] == sentence[right]) {
        count++
        left--
        right++
    }
    return count
}

const findPalindromes = (sentence) => {
    let count = 0

    for (let i = 0; i < sentence.length; i++) {
        count += countPalindromes(sentence, i, i)
        count += countPalindromes(sentence, i, i + 1)
    }
    return count
}

let palindrome = "aabbba"
console.log(findPalindromes(palindrome))
