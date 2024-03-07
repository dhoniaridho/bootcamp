/**
 * 
 * @param {number} input 
 * @returns 
 */
const getNumber = async (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input == 22) {
                reject("You're 22")
            }
            resolve("Yeah")
        }, 2000)
    });
}


const inputNumberElement = document.getElementById('input-number')

inputNumberElement.addEventListener('change', async (ev) => {
    const num = await getNumber(ev.target.valueAsNumber)
    console.log(num)
})

// document.addEventListener('DOMContentLoaded', async () => {

//     try {
//         const num = await getNumber()

//         console.log('berhasil dapat nomor', num)

//     } catch (error) {
//         console.log('OOps, ga dapet nomor alasanya : ' + error)
//     }

// })
