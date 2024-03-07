/**
 * 
 * @param {string} input 
 */
function isA(input) {
    if (input == 'A') {
        return 'A'
    } else {
        return 'Bukan A'
    }
}
/**
 * @param {string} input
 */
function isB(input) {
    if (input == 'B') return "Ini adalah B"
    return "Bukan B"
}

/**
 * 
 * @param {string} input 
 */
function isABC(input) {
    if (input == 'A') {
        return 'A'
    } else if (input == 'B') {
        return 'B'
    } else if (input == 'C') {
        return 'C'
    } else {
        return 'Lainnya'
    }
}


const a = isA('A')
const b = isA('B')
const z = isB('B')

// console.log(a)
// console.log(b)
console.log(z)