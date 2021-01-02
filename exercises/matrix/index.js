// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//  matrix(5)
//     [[1,  2,  3,  4, 5],
//     [16, 17, 18, 19, 6],
//     [15, 24, 25, 20, 7],
//     [14, 23, 22, 21, 8],
//     [13, 12, 11, 10, 9]]

function matrix(n) {
    let startRow = 0
    let endRow = n - 1
    let startCol = 0
    let endCol = n - 1

    let result = []
    let lastNum = 0

    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            lastNum++
            result[startRow][i] = lastNum
        }

        startRow++

        for (let i = startRow; i <= endRow; i++) {
            lastNum++
            result[i][endCol] = lastNum
        }

        endCol--

        for (let i = endCol; i >= startCol; i--) {
            lastNum++
            result[endRow][i] = lastNum
        }

        endRow--

        for (let i = endRow; i >=startRow; i--) {
            lastNum++
            result[i][startCol] = lastNum
        }

        startCol++
    }

    return result

    // let startRow = 0
    // let endRow = n - 1
    // let startCol = 0
    // let endCol = n - 1

    // let result = []
    // let lastNum = 0

    // while (startCol <= endCol && startRow <= endRow) {
    //     let first = []
    //     let last = []
    //     for (let i = startCol + 1; i <= endCol + 1; i++) {
    //         lastNum++
    //         first.push(lastNum)
    //     }

    //     if(startCol === 0) {
    //         result.push(first)
    //     } else {
    //         let aEnd = result[startRow].splice(startCol, n)
    //         result[startRow].push(...first)
    //         result[startRow].push(...aEnd)
    //     }

    //     for (let i = startCol + 1; i < endCol; i++) {
    //         lastNum++

    //         if(endCol === n - 1) {
    //             let current = [lastNum]
    //             result.push(current)
    //         } else {
    //             let aEnd = result[i].splice(startCol, n)
    //             result[i].push(lastNum)
    //             result[i].push(...aEnd)
    //         }
    //     }

    //     if(startRow < endRow) {
    //         for (let i = startRow + 1; i <= endRow + 1; i++) {
    //             lastNum++
    //             last.unshift(lastNum)
    //         }

    //         if(endCol === n - 1) {
    //             result.push(last)
    //         } else {
    //             let aEnd = result[endRow].splice(startCol, n)
    //             result[endRow].push(...last)
    //             result[endRow].push(...aEnd)
    //         }
    //     }

    //     for (let i = startCol + 1; i < endCol; i++) {
    //         lastNum++

    //         if(endCol === n - 1) {
    //             result[n - i - 1].unshift(lastNum)
    //         } else {
    //             let aEnd = result[i].splice(startCol, n)
    //             result[i].push(lastNum)
    //             result[i].push(...aEnd)
    //         }
    //     }

    //     startCol++
    //     endCol--
    //     startRow++
    //     endRow--

    //     console.log(result[0], result[1], result[2], result[3], result[4]);
    // }

    // return result
}

matrix(5)

module.exports = matrix;
