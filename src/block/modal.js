import {createElement, customAppendChild} from "./utils";

export let modal,
    title,
    button,
    overlay
export function createModal() {
    let elem
    modal = createElement('div', 'modalN')
    modal.innerHTML = ''
    customAppendChild([elem = createElement('div', 'modal__window'), overlay = createElement('div', 'overlayI')], modal)
    customAppendChild([title = createElement('div', 'modal__title', 'StartGame!'), button = createElement('button', 'btn', 'Go')], elem)
    button.classList.add('go')
    document.body.appendChild(modal)
}