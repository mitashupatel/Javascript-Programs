const str = `The quick the fox jumps the lazy dog`
str.split()
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