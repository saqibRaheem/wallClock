setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]')
const minutsHand = document.querySelector('[data-minuts-hand]')
const hoursHand = document.querySelector('[data-hours-hand]')

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minutsRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutsRatio + currentDate.getHours()) / 12


    setRotation(secondHand, secondRatio)
    setRotation(minutsHand, minutsRatio)
    setRotation(hoursHand, hoursRatio)
}

function setRotation(elements, rotationRatio){
    elements.style.setProperty('--rotation' , rotationRatio *360)
}
setClock();