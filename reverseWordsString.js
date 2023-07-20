const str = "Hey my name is mitashu j patel and what is your name so i can call you with that"
const reverseWordString = (str) => {
    let arrayWords = Array.from(str).reverse()
    let finalString = []
    let temp = []

    arrayWords.forEach((x, index) => {
        if (x !== " ") temp.push(x)
        else {
            finalString = finalString.concat(" ", temp.reverse())
            temp = []
        }

        if (index === arrayWords.length - 1) finalString = finalString.concat(" ", temp.reverse())
    })

    return finalString.join('')
}

console.log(reverseWordString(str))