/**
 * Function that returns an Sum of all parameters passed in function
 * Currying function that accepts arguments in different way.
 * @author Mitashu Patel
 */

// Limit of function to accept arguments
const ARGS_LENGTH = 5

const sum = (...args) => {
    if (args.length === ARGS_LENGTH) return args.reduce((prev, curr) => prev + curr, 0)
    else {
        const recusiveFn = (...args2) => {
            args = args.concat(args2)

            if (args.length === ARGS_LENGTH) return args.reduce((prev, curr) => prev + curr, 0)
            else return recusiveFn
        }

        return recusiveFn
    }
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(1)(2, 3)(4, 5))
console.log(sum(1)(2)(3)(4)(5))
console.log(sum(1, 2, 3)(4, 5))

// Expected Output
// PS D:\Practice> node curryy.js
// 15
// 15
// 15
// 15