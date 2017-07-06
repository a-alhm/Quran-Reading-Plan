import moment from 'moment'

export const moveRight = (right, left) => {
    if (left.length >= 1)
        right.unshift(left[left.length - 1])
    left.pop()
}
export const moveLeft = (right, left) => {
    if (right.length > 1) {
        left.push(right[0])
        right.shift()
    }
}

export const howManyDaysSelected = array => {
    return array.reduce((initial, ele) => {
        if (ele.day.selected) {
            initial++
        }
        return initial
    }, 0)
}
export const daysDone = array => {
    return array.reduce((inital, num) => {
        if (num.done) {
            inital++
        }
        return inital
    }, 0)
}
export const progress = (leftArray, rightArray) => {
    let fullplan = leftArray.concat(rightArray),
        fullplanDaysSelected = howManyDaysSelected(fullplan),
        fullplanDaysDone = daysDone(fullplan)

    return fullplanDaysDone / fullplanDaysSelected
}
export const daysDoneBeforeToday = (leftArray, rightArray, today) => {
    let fullplan = leftArray.concat(rightArray)
    return fullplan.reduce((initial, ele) => {
        if (ele.done === false && moment(today).isAfter(ele.date) && ele.day.selected) {
            initial++
        }
        return initial
    }, 0)
}