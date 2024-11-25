let scorefromHome = document.getElementById("scoreHome")
let scorefromGuest = document.getElementById("scoreGuest")
let scoreH = 0
let scoreG = 0


function add1Scorehome () {
    scoreH  += 1
    scorefromHome.textContent = scoreH
}

function add1Scoreguest () {
    scoreG += 1
    scorefromGuest.textContent = scoreG
}

function add2Scorehome () {
    scoreH  += 2
    scorefromHome.textContent = scoreH
}

function add2Scoreguest() {
    scoreG += 2
    scorefromGuest.textContent = scoreG
}

function add3Scorehome () {
    scoreH  += 3
    scorefromHome.textContent = scoreH
}

function add3Scoreguest() {
    scoreG += 3
    scorefromGuest.textContent = scoreG
}

function newScoreguest() {
    scoreG = 0
    scorefromGuest.textContent = scoreG
    
}

function newScorehome() {
    scoreH = 0
    scorefromHome.textContent = scoreH
    
}






