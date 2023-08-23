const button = document.querySelector('#button')
const toasts = document.querySelector('#toasts')


const messages = [
    'message One',
    'Message Two',
    "Message Three",
    'Message Four'
]

const types = [
    'info',
    'success',
    'error'
]

button.addEventListener('click', () => createNotification('This is bullshit', 'error'))

function createNotification(message = null, type = null){
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(type ? type : types[Math.floor(Math.random()*types.length)])
    toast.innerText = message ? message : messages[Math.floor(Math.random()*messages.length)]
    toasts.appendChild(toast)

    setTimeout(() =>{
        toast.remove()
    }, 3000)
}