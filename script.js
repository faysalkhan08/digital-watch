const timeCon = document.querySelector('.time')
const dateCon = document.querySelector('.date')

function init () {
    let dateTime = new Date()
    let date = dateTime.toLocaleDateString()
    let time = dateTime.toLocaleTimeString()
    timeCon.textContent = time
    dateCon.textContent = date
}

// init()

setInterval(init, 1000)