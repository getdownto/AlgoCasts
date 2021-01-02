// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(' ')
    let result = []

    arr.forEach(word => {
        let arrWord = word.split('')

        let capital = arrWord.shift().toUpperCase()
        arrWord.unshift(capital)

        result.push(arrWord.join(''))
    });

    return result.join(' ')
}

capitalize('agg short sentence')

module.exports = capitalize;
