import {$items} from "./model";
import {createModal, modal} from "./modal";

export const createElement = (tag, classEl, text = '') => {
    const elem = document.createElement(tag)
    elem.classList.add(classEl)
    elem.textContent = text
    return elem
}
export const customAppendChild = (array, item) => {
    array.forEach(el => {
        item.appendChild(el)
    })
}
export const changeDisplay = (item, display) => {
    item.style.display = display
}
export const removeAndAddClass = (item, remove, add) => {
    item.classList.remove(remove)
    item.classList.add(add)
}
export const removeOverlay = (parentPrevius, item) => {
    parentPrevius = item.parentNode
    parentPrevius.removeChild(item)
    return parentPrevius
}
export const deleteValues = (...rest) => {
    rest = ''
    return rest
}
export const customRemoveChild = (array, item) => {
    array.forEach(el => {
        item.removeChild(el)
    })
}
export const randomSortArray = array => {
    array.sort(() => {
        return Math.random() - 0.5
    })
    return array
}
export const createAllItems = (array) => {
    for (let i = 0; i < array.length; i++) {
        const el = createElement('div', 'item')
        customAppendChild([createElement('div', 'overlay'),createElement('div', 'item__title',array[i])], el)
        $items.appendChild(el)
    }
}
export const restartAll = level => {
    level = 0
    document.body.removeChild(modal)
    createModal()
    return level
}