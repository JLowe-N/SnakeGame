const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1

function createGrid() {
    // create elements
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move() {
    if (
        //if snake has hit bottom
        (currentSnake[0] + width >= 100 && direction === 10) ||
        (currentSnake[0] % width === 9 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === - 1) ||
        (currentSnake[0] - width < 0 && direction === -10) ||
        squares[currentSnake[0] + direction].classList.contains('snake')
        //if snake has hit right wall
        //if snake hast hit left wall
        //if snake has hit top
    ) {
        return clearInterval(timerId)
    }



    //remove last element from our currentSnake array
    const tail = currentSnake.pop()
    //remove styling from the last element
    squares[tail].classList.remove('snake')
    //add square in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction)
    //add styling so we can see it
    squares[currentSnake[0]].classList.add('snake')
}
let timerId = setInterval(move, 1000)

function control(e) {
    if (e.keyCode === 39) {
        direction = 1
    } else if (e.keyCode === 38) {
        direction = -10
    } else if (e.keyCode === 37) {
        direction = -1
    } else if (e.keyCode === 40) {
        direction = 10
    }
}
document.addEventListener("keydown", control)
// clearInterval(timerId)