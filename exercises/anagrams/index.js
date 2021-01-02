// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let strASorted = [...stringA.toLowerCase()].sort((a, b) => a.localeCompare(b)).filter((a) => a.charCodeAt() >= 97 && a.charCodeAt() <= 122)
    let strBSorted = [...stringB.toLowerCase()].sort((a, b) => a.localeCompare(b)).filter((a) => a.charCodeAt() >= 97 && a.charCodeAt() <= 122)
    
    return strASorted.join('') === strBSorted.join('')
}

anagrams('rail sAfety', 'fairy tales')

module.exports = anagrams;
