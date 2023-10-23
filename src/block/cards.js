import {$items} from "./model";
import {createAllItems, randomSortArray} from "./utils";
import {modal} from "./modal";

export const nextLevel = currentlevel => {
    if(currentlevel == 0) {
        const allText = randomSortArray([1,1,2,2]),
            time = 60000
        // time for timer ms

        $items.innerHTML = ''
        modal.style.display = 'none'
        createAllItems(allText)
        return time
    } else if(currentlevel == 1) {
        const allText = randomSortArray([1,1,2,2,3,3,4,4,5,5,6,6]),
            time = 30000

        $items.innerHTML = ''
        modal.style.display = 'none'
        createAllItems(allText)
        return time
    } else if(currentlevel == 2) {
        const allText = randomSortArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]),
            time = 45000

        $items.innerHTML = ''
        modal.style.display = 'none'
        createAllItems(allText)
        return time
    } else if(currentlevel == 3) {
        const allText = randomSortArray([1,1,2,2,3,3,4,4,5,5]),
            time = 10000

        $items.innerHTML = ''
        modal.style.display = 'none'
        createAllItems(allText)
        return time
    }
}