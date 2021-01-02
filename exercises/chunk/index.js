// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let result = []
    let initialLength = array.length

    // for(let i = 0; i < initialLength; i += size) {
    //     let current = array.splice(0, size)
    //     result.push(current)
    // }

    for(let i = 0; i < array.length; i += size) {
        let current = array.slice(i, i + size)
        result.push(current)
    }

    console.log(result);

    return result
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)

module.exports = chunk;
