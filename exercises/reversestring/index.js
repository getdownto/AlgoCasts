// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return(str.split('').reverse().join(''))
    // let result = '';
    
    // [...str].forEach(char => {
    //     result = char + result
    // });

    // return result

    return [...str].reduce((result, char) => {
        return char + result
    })
}

module.exports = reverse;
