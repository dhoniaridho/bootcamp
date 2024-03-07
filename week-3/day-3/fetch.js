async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.id')
        const data = await response.json()
        if (!response.ok) {
            throw new Error("Api nya error")
        }
        console.log(data)
        return data;
    } catch (error) {
        throw Error('Gagal Fetch')
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await getTodo()
    } catch (error) {
        console.log('Errornya:', error.message)
    }
})