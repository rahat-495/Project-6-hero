

function hideElementById (elementId) {
    const element = document.getElementById(elementId) ;
    element.classList.add('hidden');
}

function showElementById (elementId) {
    const element = document.getElementById(elementId) ;
    element.classList.remove('hidden');
}

function getARandomAlphabet () {
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz' ;
    const alphabetsArray = alphabetsString.split('') ;
    
    const index = Math.round(Math.random() * 25) ;
    const randomAlphabet = alphabetsArray[index] ;
    return randomAlphabet ;
}

function setBgColorById ( elementId ) {
    const element = document.getElementById(elementId) ;
    element.classList.add('bg-orange-400')
    return element ;
}

function removeBgColorById ( elementId ) {
    const element = document.getElementById(elementId) ;
    element.classList.remove('bg-orange-400')
    return element ;
}

function getTextElementById (elementId) {
    const element = document.getElementById(elementId)
    const valueText = element.innerText ;
    const value = parseInt(valueText) ;
    return value
}

function setElementValueById ( elementId , value ) {
    const element = document.getElementById(elementId) ;
    element.innerText = value ;
}

function getElementTextById (elementId){
    const element = document.getElementById(elementId) ;
    const elementValue = element.innerText ;
    return elementValue ;
}

