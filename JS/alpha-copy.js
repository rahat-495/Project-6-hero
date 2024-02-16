

function handleKeyBoardBtnPress(e){
    const playerPressed = e.key;

    if(playerPressed === 'Escape'){
        gameFinish()
    }

    const expectextLetterIs = getElementTextById('screen-alphabet') ;
    if(expectextLetterIs.toLowerCase() === playerPressed){
        const currentScore = getElementValueById('score') ;
        const newScoreIs = currentScore + 1 ;
        setElementValueById('score' , newScoreIs) ;

        removeBgColorById(expectextLetterIs.toLowerCase()) ;
        continueGame()
    }
    else{
        const lifeValue = getElementValueById('life') ;
        const currentLifeIs = lifeValue - 1 ;
        if(currentLifeIs > 0){
            setElementValueById('life' , currentLifeIs) ;
        }
        
        if(currentLifeIs === 0){
            gameOver() ;
        }
    }
}

function continueGame () {
    const randomAlphabet = getARandomAlphabet() ;
    const element = document.getElementById('screen-alphabet') ;
    element.innerText = randomAlphabet.toUpperCase() ;

    setBgColorById(randomAlphabet) ;

    document.addEventListener('keyup' , handleKeyBoardBtnPress)
}

function play(){
    hideElementById('home-section')
    showElementById('play-ground')
    hideElementById('finel-score')
    continueGame()

    setElementValueById('life' , 5)
    setElementValueById('score' , 0)
}
function gameOver(){
    hideElementById('home-section')
    hideElementById('play-ground')
    showElementById('finel-score')
    
    const expectextLetterIs = getElementTextById('screen-alphabet') ;
    removeBgColorById(expectextLetterIs.toLowerCase()) ; 
    
    const lastScore = getElementTextById('score')
    setElementValueById('game-score' , lastScore)
}

function gameFinish (){
    showElementById('home-section')
    hideElementById('play-ground')
    hideElementById('finel-score')
     
    const expectextLetterIs = getElementTextById('screen-alphabet') ;
    removeBgColorById(expectextLetterIs.toLowerCase()) ; 
}

