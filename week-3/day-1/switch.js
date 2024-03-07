// @ts-check


// let fullName = 'name'

// switch (fullName) {
//     case 'name':
//         console.log('Halo name')
//         break;
//     case 'name 1':
//         console.log('Halo name 1')
//         break;

//     default:
//         console.log('anda bukan orangnya')
//         break;
// }

/**
 * @param {Date} date
 * @returns {'minggu' | 'senin' | 'selasa' | 'rabu' | 'kamis' | 'jumat' |'sabtu'}
 */
function getDay(date) {
    switch (date.getDay()) {
        case 1:
            return 'senin'
        case 2:
            return 'selasa'
        case 3:
            return 'rabu'
        case 4:
            return 'kamis'
        case 5:
            return 'jumat'
        case 6:
            return 'sabtu'
        case 7:
            return 'minggu'
        default:
            return 'minggu'
    }
}

const day = getDay(new Date())

console.log(day)

/**
 * @param {number} input 
 */
function iniGenap(input) {
    // if (input % 2 == 0) return "Iya"
    // return "Tidak"

    return input % 2 == 0 ? "Ya" : "Gak"

    // switch (input % 2 == 0) {
    //     case true:
    //         return "Iya"
    //     case false:
    //         return "Tidak"
    // }
}


/**
 * 
 * @param {string | undefined} text 
 */
function min(text) {
    // if (text) {
    //     if (text.length == 3) {
    //         return "Ya"
    //     } else {
    //         return "Tidak"
    //     }
    // } else {
    //     return "Tidak"
    // }

    if (!text && text?.length != 3) return "Tidak"
    return "Ya"
    // if (text.length != 3) return "Error"
    // return "Yup"
}
