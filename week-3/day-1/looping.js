/**
 * 
 * @param {number} input 
 * @returns {number}
 */
const diaGenap = (input) => input % 2 == 0 ? "Iya" : "Tidak"

// for (let i = 1; i <= 20; i++) {
//     console.log(diaGenap(i), i);
// }


const users = [
    {
        fullName: 'User a'
    },
    {
        fullName: 'user B'
    }
]

for (let user of users) {
    console.log(user.fullName)
}