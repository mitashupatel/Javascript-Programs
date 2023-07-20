const memoize = (fn) => {
    const cache = {}

    return (...args) => {
        const argsToString = JSON.stringify(args)
        if (argsToString in cache) {
            console.log("called from cache", argsToString)
            return cache[argsToString]
        }
        else {
            console.log("computed", argsToString)
            const result = fn.apply(this, args)
            cache[argsToString] = result
            return result
        }
    }
}

const factorial = memoize((n) => {
    if (n === 0) return 1
    return n * factorial(n - 1)
})

console.log(factorial(5))
console.log(factorial(6))


const flatternArrary = (array) => {
    return array.reduce((prevValue, currValue) => {
        if (Array.isArray(currValue)) {
            prevValue = prevValue.concat(flatternArrary(currValue))
        }
        else {
            prevValue.push(currValue)
        }
        return prevValue
    }, [])
}

const nestedArrary = [[[[1, 2, [3, 4], 56], 5]], 5, [6]]
console.log(flatternArrary(nestedArrary))


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
const flattenObject = (obj, parent) => {
    let finalObj = {}

    const getFlatObject = (obj, parent) => {
        const keys = Object.keys(obj)
        keys.forEach((key) => {
            const newParent = parent + key
            const value = obj[key]

            if (typeof value === "object") {
                getFlatObject(value, newParent + ".")
            }
            else {
                finalObj[newParent] = value
            }

        })
    }
    getFlatObject(obj, parent)
    return finalObj
}

console.log(flattenObject(nestedObject, ""))


const getPathFromChildToParent = (parent, child) => {
    let currentNode = child
    let path = []

    while (currentNode !== parent) {
        let parentElement = currentNode.parentElement
        const childrenArray = Array.from(parentElement.children)
        path.push(childrenArray.indexOf(currentNode))
        currentNode = parentElement
    }
    return path
}

const getValueFromPath = (parent, path) => {
    let currentNode = parent
    while (path.length) {
        currentNode = currentNode.children[path.pop()]
    }
    return currentNode.innerText
}

const findNodeValue = () => {
    const rootA = document.getElementById("rootA")
    const rootB = document.getElementById("rootB")
    const nodeA = document.getElementById("nodeA")

    const path = getPathFromChildToParent(rootA, nodeA)
    return getValueFromPath(rootB, path)
}

// console.log(findNodeValue())

const memoize2 = (fn) => {
    const cachedData = {}

    return (...args) => {
        const argsToString = JSON.parse(args)

        if (argsToString in cachedData) {
            console.log("cached0", args)
            return cachedData[argsToString]
        }
        else {
            console.log(argsToString, "Computed")
            const result = fn.apply(this, args)
            cachedData[argsToString] = result
            return result
        }
    }
}

const factorialResponse = memoize2((x) => {
    if (x === 0) return 1
    return x * factorialResponse(x - 1)
})

console.log(factorialResponse(10))
console.log(factorialResponse(15))


const flatObjectMaker = (obj, parent) => {
    let finalObj = {}

    const getFlatObj = (obj, parent) => {
        const keys = Object.keys(obj)

        keys.forEach((key) => {
            const newParent = parent + key
            const value = obj[key]

            if (typeof value === "object") {
                getFlatObj(value, newParent + ".")
            }
            else {
                finalObj[newParent] = value
            }
        })
    }

    getFlatObj(obj, parent)
    return finalObj
}

console.log(flatObjectMaker(nestedObject, ""))


const flatttArr = (arr) => {
    return arr.reduce((prev, curr) => {
        if (Array.isArray(curr)) {
            prev = prev.concat(flatttArr(curr))
        }
        else {
            prev.push(curr)
        }
        return prev
    }, [])
}

console.log(flatttArr(nestedArrary))


const memoize3 = (fn) => {
    const cached = {}

    return (...args) => {
        const argsToString = JSON.parse(args)
        if (argsToString in cached) {
            console.log("From Cached Data", argsToString)
            return cached[argsToString]
        }
        else {
            console.log("Computing Result", argsToString)
            const result = fn.apply(this, args)
            cached[argsToString] = result
            return result
        }
    }
}

const factorials = memoize3((x) => {
    if (x === 0) return 1
    return x * factorials(x - 1)
})

console.log(factorials(12))
console.log(factorials(15))
