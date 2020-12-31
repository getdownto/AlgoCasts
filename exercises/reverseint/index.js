// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let result =  [...n.toString()].reverse()

    if (n < 0) {
        let sign = result.pop()
        result.unshift(sign)
    }

    return result.join('') * 1
}

reverseInt(-51)

module.exports = reverseInt;
