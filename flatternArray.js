/**
 * Function to Flatten the Nested array.
 * @author Mitashu Patel
 */

const flatternArrary = (arr = []) => {
    return arr.reduce((preValue, currValue) => {
        if (Array.isArray(currValue)) {
            preValue = preValue.concat(flatternArrary(currValue))
        }
        else {
            preValue.push(currValue)
        }
        return preValue
    }, [])
}

// const flatternArrary = (arr, newArr = []) => {
//     let arrary = []
//     return arr.map((value, index) => {
//         if (Array.isArray(value)) {
//             arrary = [...arrary, ...value]
//         }
//         else {
//             arrary.push(value)
//         }
//         return value
//     })
// }

const nestedArrary = [[[[1, 2, [3, 4], 56], 5]], 5, [6]]
console.log(flatternArrary(nestedArrary))

// Output
// [1, 2, 3, 4, 56, 5, 5, 6]