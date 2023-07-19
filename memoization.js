/**
 * Memoized Function
 * Function to use memoization concept in Javascript
 * @author - Mitashu Patel
 * 
 */

const memoize = (fn) => {
    const cache = {}

    return (...args) => {
        const argsToString = JSON.stringify(args)
        if (argsToString in cache) {
            console.log(`fetched from cache ${argsToString}`)
            return cache[argsToString]
        }
        else {
            console.log(`computing value ${argsToString}`)
            const result = fn.apply(this, args)
            cache[argsToString] = result
            return result
        }
    }
}

const factorial = memoize((x) => {
    if (x === 0) return 1
    return x * factorial(x - 1)
})

console.log(factorial(5))
console.log(factorial(6))


// Output

// PS D:\Practice> node memoization.js
// computing value [5]
// computing value [4]
// computing value [3]
// computing value [2]
// computing value [1]
// computing value [0]
// 120
// computing value [6]
// fetched from cache [5]
// 720