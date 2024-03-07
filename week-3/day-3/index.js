function toggle() {
    console.log('toggle')
    const element = document.getElementById('myDiv')
    console.log(element)
    element.classList.toggle('toggle')
}

function addClass() {
    const element = document.getElementById('class')
    console.log(element)
    element.classList.add('font-bold')
}

function removeClass() {
    const element = document.getElementById('remove')
    element.classList.remove("font-bold")
}

document.getElementById('toggle').addEventListener('click', toggle)
document.getElementById('add-class').addEventListener('click', addClass)
document.getElementById('remove-class').addEventListener('click', removeClass)
