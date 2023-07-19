const flattendArray = (arr) => {
    return arr.reduce((prevValue, currValue) => {
        if (Array.isArray(currValue)) {
            prevValue = prevValue.concat(flattendArray(currValue))
        }
        else {
            prevValue.push(currValue)
        }
        return prevValue
    }, [])
}

const nestedArrary = [1, [2, 3, [4, 5], 6], 7, [8]]
console.log(flattendArray(nestedArrary))


const flattendObject = (obj, parent) => {
    const finalObj = {}

    const flatter = (obj, parent) => {
        const keys = Object.keys(obj)

        keys.forEach((key) => {
            const newParent = parent + key
            const value = obj[key]

            if (typeof value === "object") {
                flatter(value, newParent + ".")
            }
            else {
                finalObj[newParent] = value
            }
        })
    }

    flatter(obj, parent)
    return finalObj
}

const deepObject = {
    'A': 1,
    'B': 2,
    C: {
        D: 1,
        E: 56,
        G: [1, 2],
    },
    H: {
        K: "KK",
        L: "ABCD"
    }
}

console.log(flattendObject(deepObject, ""))

const getPathFromArray = (parent, child) => {
    const path = []
    let currentNode = child

    while (currentNode !== parent) {
        let parentElement = currentNode.parentElement
        const childArray = Array.from(parentElement.children)
        path.push(childArray.indexOf(currentNode))
        currentNode = parentElement
    }

    return path
}

const getValue = (parent, path) => {
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

    const path = getPathFromArray(rootA, nodeA)

    return getValue(rootB, path)
}

const str = `The quick the fox jumps the lazy dog`

const split = (str, delimeter) => {
    const res = []
    if (delimeter === "") return Array.from(str)

    const startSplit = (str, i) => {
        if (i >= str.length) return

        const index = str.indexOf(delimeter)
        if (index >= 0) {
            res.push(str.substring(0, index))
            startSplit(str.substring(index + delimeter.length), index + delimeter.length)
        }
        else {
            res.push(str)
        }
    }

    startSplit(str, 0)
    return res
}

console.log(split(str, " "))