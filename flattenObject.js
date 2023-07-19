/**
 *  A Function to flatten the deeply nested object
 * @author Mitashu Patel
 */

const flattenObject = (obj, parent) => {
    const finalObj = {}

    const generateFlatObject = (obj, parent) => {
        const keys = Object.keys(obj);

        keys.forEach((key) => {
            const newParent = parent + key
            const value = obj[key]

            if (typeof value === "object") {
                generateFlatObject(value, newParent + ".")
            }
            else {
                finalObj[newParent] = value
            }
        })
    }

    generateFlatObject(obj, parent)
    return finalObj
}

const nestedObject = {
    A: "12",
    B: 25,
    C: {
        D: 23,
        E: "G",
        F: {
            G: "AB",
            H: "52"
        },
        I: [1, 2],
    }
}

console.log(flattenObject(nestedObject, ""))

// Output
// {
//     A: '12',
//     B: 25,
//     'C.D': 23,
//     'C.E': 'G',
//     'C.F.G': 'AB',
//     'C.F.H': '52',
//     'C.I.0': 1,
//     'C.I.1': 2
// }