const midCard = document.getElementById('mid-card')
const backCardLeft = document.querySelector('.back-card')
const backCardRight = document.querySelectorAll('.back-card')[1]

backCardLeft.addEventListener('mouseover', event => {
    backCardLeft.setAttribute('class', 'front-card')

    backCardRight.setAttribute('class', 'back-card')

    midCard.setAttribute('class', 'mid-back-card back-card')
})

backCardRight.addEventListener('mouseover', event => {
    backCardRight.setAttribute('class', 'front-card')

    backCardLeft.setAttribute('class', 'back-card')

    midCard.setAttribute('class', 'mid-back-card back-card')
})

midCard.addEventListener('mouseover', event => {
    midCard.setAttribute('class', 'front-card')

    backCardRight.setAttribute('class', 'back-card')

    backCardLeft.setAttribute('class', 'back-card')
})

