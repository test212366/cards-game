import {createModal} from "./block/modal";
import {checkRight, restartGame, startGame} from "./block/model";
import {nextLevel} from "./block/cards";
import {restartAll} from "./block/utils";

createModal()
export let currentLevel = 0,
    allLevels = 3

document.body.addEventListener('click', e => {
    if(e.target.classList.contains('go')) {
        startGame(nextLevel(currentLevel))
    } else if(e.target.classList.contains('restart')) {
        restartGame()
    } else if(e.target.classList.contains('overlay')) {
        checkRight(e.target)
    } else if(e.target.classList.contains('next')) {
        currentLevel++
        startGame(nextLevel(currentLevel))
    } else if(e.target.classList.contains('restartOne')) {
        currentLevel = restartAll(currentLevel)
    }
})
 