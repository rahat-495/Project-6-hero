

function hideElementById ( elementId ) {
    const element = document.getElementById(elementId) ;
    element.classList.add('hidden')
}

function showElementById ( elementId ) {
    const element = document.getElementById(elementId) ;
    element.classList.remove('hidden')
}

function getARandomAlphabet () {
    const letters = 'abcdefghijklmnopqrstuvwxyz' ;
    const lettersArray = letters.split('') ;
    
    const randomIndexNumber = Math.round(Math.random() * 25) ;
    const index = lettersArray[randomIndexNumber] ;
    return index ;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId) ;
    const elementValue = element.innerText ;
    return elementValue ;
}

function setBgColorById ( elementId ) {
    const element = document.getElementById(elementId) ;
    element.classList.add('bg-orange-400') ;
}

function removeBgColorById ( elementId ) {
    const element = document.getElementById(elementId) ;
    element.classList.remove('bg-orange-400') ;
}

function getElementValueById (elementId){
    const element = document.getElementById(elementId) ;
    const elementValue = element.innerText ;
    const value = parseInt(elementValue) ;
    return value ;
}

function setElementValueById (elementId , value) {
    const element = document.getElementById(elementId) ;
    element.innerText = value ;
}

