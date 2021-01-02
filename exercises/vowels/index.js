// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    str = str.toLowerCase()
    // for (let i = 0; i < str.length; i++) {
    //     if(str[i].charCodeAt() === 97) {

    //     }
    // }

    let vowels = str.split('').filter(a => 'aeiou'.includes(a))

    return vowels.length
}

module.exports = vowels;
