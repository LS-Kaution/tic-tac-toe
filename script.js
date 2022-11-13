const header = document.querySelector('header')
const footer = document.querySelector('footer')
const main = document.querySelector('main')

const imgs = document.querySelectorAll('.img')


for(const img of imgs) {
    img.addEventListener('click', () => {
        selectedCharacter(img)
    }) 
}


const buttonStartGame = document.querySelector('#button-start-game')
buttonStartGame.addEventListener('click', callPreGame)

const chooseTitle = document.querySelector('#choose-title')
chooseTitle.style.display = 'none'


const container = document.querySelector('#container')
container.style.display = 'none'


function callPreGame() {
    header.style.display = 'none'
    footer.classList.toggle('click')
    main.classList.toggle('click')
    buttonStartGame.style.display = 'none'
    chooseTitle.style.display = 'flex'
    container.style.display = 'flex'
} 


function selectedCharacter(element) {
    element.classList.toggle('selected')
}


function resetGame() {
    location.reload()
}