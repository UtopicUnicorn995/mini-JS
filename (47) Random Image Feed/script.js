const container = document.querySelector('.container')
const SOURCE_LINK = 'https://source.unsplash.com/random/'
const input = document.querySelector('input')
let rows = 0

console.log(input.value, input.innerText)
input.addEventListener('input', () => {
    rows = input.value
    container.innerHTML = ''
    for(let i = 0; i < rows * 3; i++){
        const imgEl = document.createElement('img')
        imgEl.src = `${SOURCE_LINK}${getRandomSize()}`
        container.appendChild(imgEl)
    }
})

function getRandomSize(){
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 300
}