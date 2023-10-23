import { button, createModal, modal, title } from "./modal";
import { changeDisplay, createElement, customRemoveChild, removeAndAddClass, removeOverlay } from "./utils";
import { allLevels, currentLevel } from "../index";

export const $container = document.querySelector('.container')
export const $items = document.querySelector('.items')
let TIME, deadline
//close first modal window and open $container game
export const startGame = (t) => {
	TIME = t
	changeDisplay(modal, 'none')
	changeDisplay($container, 'block')
	deadline = setTimeout(() => {
		title.textContent = 'GameOver'
		button.textContent = 'Restart'
		removeAndAddClass(button, 'go', 'restart')
		changeDisplay(modal, 'block')
	}, TIME)
	updateClock(TIME)
}
let inter
function updateClock(timer) {
	const time = document.querySelector('.title__timer')
	let currentTime = timer
	inter = setInterval(() => {
		currentTime -= 100
		if (currentTime <= 0) {
			clearInterval(inter)
		}
		time.textContent = currentTime
	}, 100)
} //button click restart
export const restartGame = () => {
	document.body.removeChild(modal)
	createModal()
	changeDisplay($container, 'none')
}
let currentItem, previusItem, parentCurrent, parentPrevius

export const checkRight = item => {
	//check currentItem and previous in ===
	//TODO: в гл. меню можно выбрать режимы.Сделать рандомный разброс карточек!!! :+)
	if (!currentItem && !previusItem) {
		parentCurrent = removeOverlay(parentCurrent, item)
		const text = parentCurrent.querySelector('.item__title')
		currentItem = text.textContent
	}//have one card
	else if (currentItem && !previusItem) {
		parentPrevius = removeOverlay(parentPrevius, item)
		const text = parentPrevius.querySelector('.item__title')
		previusItem = text.textContent
		setTimeout(() => {
			if (currentItem && previusItem) {
				if (currentItem == previusItem) {
					customRemoveChild([parentCurrent, parentPrevius], $items)
					currentItem = '', previusItem = '', parentCurrent = '', parentPrevius = ''
					if ($items.querySelectorAll('.item').length == 0) {
						if (currentLevel == allLevels) {
							clearTimeout(deadline)
							clearInterval(inter)
							title.textContent = 'You victory in all levels!'
							button.textContent = 'Restart 1 Level'
							removeAndAddClass(button, 'next', 'restartOne')
							changeDisplay(modal, 'block')
							TIME = ''
						} else {
							clearTimeout(deadline)
							clearInterval(inter)
							title.textContent = 'Victory!'
							button.textContent = 'NextLevel'
							removeAndAddClass(button, 'go', 'next')
							changeDisplay(modal, 'block')
							TIME = ''
						}
					}
				} else {
					parentCurrent.appendChild(createElement('div', 'overlay'))
					parentPrevius.appendChild(createElement('div', 'overlay'))
					currentItem = '', previusItem = '', parentCurrent = '', parentPrevius = ''
				}

			}
		}, 700)
	}
}