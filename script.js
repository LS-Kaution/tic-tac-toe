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

    printCharacter(farmerX, document.querySelector('#selected-charactersX'))
}


function unselectCharacterX(selectedFarmer) {
    if(selectedFarmer !== null ) {
        selectedFarmer.classList.remove('selected')
    }
}


function printCharacter(source, target) {
    target.src = source.src
}


function selectedCharacterO(element) {  
    unselectCharacterO(farmerO)
    farmerO = element
    element.classList.add('selected')   

    printCharacter(farmerO, document.querySelector('#selected-charactersO'))
}

function unselectCharacterO(selectedFarmer) {
    if(selectedFarmer !== null ) {
        selectedFarmer.classList.remove('selected')
    }
}

const buttonFight = document.querySelector('#button-fight')
buttonFight.addEventListener('click', () => {
    if(farmerX === null || farmerO === null) {
        alert('Please choose a character for each side')
    }

    else {
        callGame()
    }
})

const game = document.querySelector('#game')
game.style.display = 'none'

const selectedCharacters = document.querySelector('#selected-characters')
selectedCharacters.style.display = 'hidden'

function callGame() {
    chooseTitle.style.display = 'none'
    container.style.display = 'none'
    footer.style.display = 'none'
    game.style.display = 'flex'
    selectedCharacters.style.display = 'flex'
}

let previousTurn = null
let currentTurn = null

document.querySelectorAll('.box-game').forEach((element) => {
    element.addEventListener('click', () => {
        let X = `<img src="${farmerX.src}" class="img-size X">`
        let O = `<img src="${farmerO.src}" class="img-size O">`
        
        if(element.innerHTML === "") {
            if(previousTurn === null) {
                let turn = X
                currentTurn = turn
            }
            
            element.innerHTML = currentTurn
            previousTurn = currentTurn
            
            if(previousTurn === X) {
                currentTurn = O
            }
            
            else {
                currentTurn = X
            }
        }
    })
})

const reset = document.querySelector('#button-reset')
reset.addEventListener('click', resetGame)

function resetGame() {
    location.reload()
}