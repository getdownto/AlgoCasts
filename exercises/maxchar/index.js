// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {}
    for (const char of [...str]) {
        if(map.hasOwnProperty(char)) {
            map[char] ++
        } else {
            map[char] = 1
        }
    }

    console.log(map)
}

maxChar("apple 1231111")

module.exports = maxChar;
