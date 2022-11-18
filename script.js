const header = document.querySelector('header')
const footer = document.querySelector('footer')
const main = document.querySelector('main')
const imgx = document.querySelectorAll('.img-x')
const imgo = document.querySelectorAll('.img-o')


let farmerX = null
let farmerO = null


for(const img of imgx) {
    img.addEventListener('click', () => {
        selectedCharacterX(img)
    }) 
}

for(const img of imgo) {
    img.addEventListener('click', () => {
        selectedCharacterO(img)
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


function selectedCharacterX(element) {  
    unselectCharacterX(farmerX)
    farmerX = element
    element.classList.add('selected')
    printCharacterX(farmerX)   
}

function printCharacterX(img) {
    img.innerHTML
}

function unselectCharacterX(selectedFarmer) {
    if(selectedFarmer !== null ) {
        selectedFarmer.classList.remove('selected')
    }
}


function selectedCharacterO(element) {  
    unselectCharacterO(farmerO)
    farmerO = element
    element.classList.add('selected')   
}

function unselectCharacterO(selectedFarmer) {
    if(selectedFarmer !== null ) {
        selectedFarmer.classList.remove('selected')
    }
}

const buttonFight = document.querySelector('#button-fight')
buttonFight.addEventListener('click', callGame)

const game = document.querySelector('#game')
game.style.display = 'none'

const selectedCharacters = document.querySelector('#selected-characters')
selectedCharacters.style.display = 'none'

function callGame() {
    chooseTitle.style.display = 'none'
    container.style.display = 'none'
    footer.style.display = 'none'
    game.style.display = 'flex'
    selectedCharacters.style.display = 'flex'
}

let character = 'X'


document.querySelectorAll('.box-game').forEach((element) => {
    element.addEventListener('click', () => {
        if(element.innerHTML === "") {
            element.innerHTML = character
            character = character === "X" ? "O" : "X"
        }
    })
})

function resetGame() {
    location.reload()
}