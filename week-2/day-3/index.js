// @ts-check
let createdAt = ''

function tambahLima() {
    console.log('tambah lima fungsi')
}

const tambahEnam = () => {

}
/**
 * Ini fungsi penjumlahan
 * @param {number} a parameter pertama
 * @param {number} b parameter kedua
 * @param {number} c parameter ketiga
 * @returns {string}
 */
function entahlah(a, b, c) {
    console.log(a, b, c)
    return `${a} ${b} ${c}`
}

function voidFunction() {

}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function dikalikan(a, b) {
    return a * b
}

const hasilDikalikan = dikalikan(1, 20)
console.log(hasilDikalikan)

/**
 * 
 * @param {string} a 
 * @param {string} b 
 * @returns 
 */
function returnArray(a, b) {
    return [
        a, b
    ]
}

/**
 * 
 * @param  {...number} arg 
 * @returns 
 */
const jumlahkan = (...arg) => {
    return arg.reduce((prevValue, nextValue) => prevValue + nextValue)
}

let j = jumlahkan(1)
console.log(j)

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`

const fullName = getFullName("John", "Doe")

console.log(fullName)

let hasil = entahlah(1, 10, 10)

console.log(hasil)
tambahLima()

