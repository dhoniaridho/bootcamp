function onClick() {
    alert('tombol udah di klik')
}

const button = document.getElementById('click')
// button.onclick = () => {
//     alert("BUtton CLick")
// }

console.dir(button)

button.addEventListener('click', (ev) => {
    console.log(ev.clientX)
})


function onChange(ev) {
    console.log(ev)
    console.log(ev.value)
}