

function handleKeyBoardBtnPress (e) {
  const playerPressed = e.key ;

  if(playerPressed === 'Escape'){
    gameFinish() ;
  }

  const currentAlhpavet = document.getElementById('screen-alphabet') ;
  const currentLetter = currentAlhpavet.innerText ;
  const expectextLetterIs = currentLetter.toLowerCase() ;
  
  if(expectextLetterIs === playerPressed){
    const currentScore = getTextElementById('score')
    const newScoreIs = currentScore + 1 ;
    setElementValueById('score' , newScoreIs)

    removeBgColorById(expectextLetterIs) ;
    continueGame()
  }
  else{
    const currentLifeIs = getTextElementById('life') ;
    const updatedLife = currentLifeIs - 1 ;
    if(updatedLife >= 0){
      setElementValueById('life' , updatedLife)
    }

    if(updatedLife === 0){
      gameOver()
    }
  }
}


function continueGame() {
  const randomLetter = getARandomAlphabet() ;

  const currentAlhpa = document.getElementById('screen-alphabet') ;
  currentAlhpa.innerText = randomLetter.toUpperCase() ;
  setBgColorById(randomLetter)

  document.addEventListener('keyup' , handleKeyBoardBtnPress)
}


function play() {
  hideElementById("home-section");
  showElementById("play-ground");
  hideElementById('finel-score')

  setElementValueById( 'life' , 5) ;
  setElementValueById( 'score' , 0) ;

  continueGame() ;
}

function gameOver () {
  hideElementById('play-ground') ;
  showElementById('finel-score') ;

  const lastScrore = getElementTextById('score') ;
  setElementValueById('game-score' , lastScrore) ;

  const currentAlphbet = getElementTextById('screen-alphabet')
  removeBgColorById(currentAlphbet.toLowerCase()) ;
}

function gameFinish () {
  hideElementById('play-ground')
  hideElementById('finel-score')
  showElementById('home-section')
  const currentAlphbet = getElementTextById('screen-alphabet')
  removeBgColorById(currentAlphbet.toLowerCase()) ;
}

