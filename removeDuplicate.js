const removeDuplicate1 = (sentence) => {
    const wordArr = Array.from(sentence)
    const set = new Set(wordArr)
    return set
}

const removeDuplicate = (sentence = "") => {
    const arraySet = new Set()
    let writePointer = 0
    let readPointer = 0

    while (readPointer < sentence.length) {
        if (!arraySet.has(sentence[readPointer])) {
            arraySet.add(sentence[readPointer])
            sentence = sentence.substr(0, writePointer) + sentence[readPointer] + sentence.substr(writePointer + 1)
            writePointer++
        }

        readPointer++
    }
    return sentence.substr(0, writePointer)
}

let str = "Hello World"
str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
PageMaker including versions of Lorem Ipsum`

console.log(str)
console.log(removeDuplicate(str))
console.log(removeDuplicate1(str))