/**
 * A currying function that returns sum of all previousled passed arguments in method
 * We can achieve this using help of closures.
 * @author Mitashu Patel
 */

const curryFn = () => {
    let totalSum = 0

    return (x = 0) => {
        totalSum += x
        return totalSum
    }
}

const sum = curryFn()

console.log(sum(1))
console.log(sum(2))
console.log(sum(3))
console.log(sum(4))
console.log(sum(5))
console.log(sum(6))

// Output
// PS D:\Practice> node curry2.js
// 1
// 3
// 6
// 10
// 15
// 21