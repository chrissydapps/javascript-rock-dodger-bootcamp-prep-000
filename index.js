const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37
const RIGHT_ARROW = 39
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    const dodgerRightEdge = dodgerLeftEdge + 40;
    const rockLeftEdge = positionToInteger(rock.style.left)
    const rockRightEdge = rockLeftEdge + 20;
    if ((rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) ||
    (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) ||
    (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)) {
      return true
    }
  }
}

function createRock(x) {
  const rock = document.createElement('div')
  rock.className = 'rock'
  rock.style.left = `${x}px`
  var top = 0
  rock.style.top = top
  GAME.appendChild(rock)
  function moveRock() {
<<<<<<< HEAD
    rock.style.top = `${top += 2}px`
    if (checkCollision(rock)) {
      return endGame()
    } if(top < GAME_HEIGHT) {
      window.requestAnimationFrame(moveRock)
=======
    checkCollision(rock)
    if (true) {
      endGame()
    } else if(top < 360) {
      top += 2
>>>>>>> cdcbb5fc27fee0ff000f59009ae826b01e7a55a9
    } else {
      rock.remove()
    }
  } window.requestAnimationFrame(moveRock)
  ROCKS.push(rock)
  return rock
}

function endGame() {
  clearInterval(gameInterval)
<<<<<<< HEAD
  ROCKS.forEach(function(rock) {rock.remove()})
=======
  GAME.remove(ROCKS)
>>>>>>> cdcbb5fc27fee0ff000f59009ae826b01e7a55a9
  window.removeEventListener('keydown', moveDodger)
  START.innerHTML = 'Play again?'
  START.style.display = 'inline'
  alert("YOU LOSE!")
 }

function moveDodger(e) {
<<<<<<< HEAD
  if ([RIGHT_ARROW, LEFT_ARROW].indexOf(e.which) > -1) {
    e.preventDefault()
    e.stopPropagation()
  } if (e.which === RIGHT_ARROW) {
    moveDodgerRight()
  } if (e.which === LEFT_ARROW) {
    moveDodgerLeft()
  }
}

function moveDodgerLeft() {
  window.requestAnimationFrame(function() {
    var left = positionToInteger(DODGER.style.left)
    if (left > 0) {
      DODGER.style.left = `${left - 4}px`
    }})
=======
  e.preventDefault()
  e.stopPropagation()
  document.addEventListener('keydown', function(e) {
    if (e.which === RIGHT_ARROW) {
      moveDodgerRight()
    } if (e.which === LEFT_ARROW) {
      moveDodgerLeft()
    }
  })
}

function moveDodgerLeft() {
  var leftNumbers = DODGER.style.left.replace('px','')
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    DODGER.style.left = `${left - 4}px`
  }
  // function l() {
  //   DODGER.style.left = `${left - 4}px`
  //   if (left > 0) {
  //     window.requestAnimationFrame(l)
  //   }} window.requestAnimationFrame(l)
>>>>>>> cdcbb5fc27fee0ff000f59009ae826b01e7a55a9
}

function moveDodgerRight() {
  window.requestAnimationFrame(function() {
    var left = positionToInteger(DODGER.style.left)
    if (left < 360) {
      DODGER.style.left = `${left + 4}px`
    }})
}

function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)
  START.style.display = 'none'
  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))}, 1000)
}
