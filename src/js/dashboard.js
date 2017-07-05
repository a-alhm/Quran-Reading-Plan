export function moveRight(right, left) {
    if (left.length >= 1)
        right.unshift(left[left.length - 1])
    left.pop()
}
export function moveLeft(right, left) {
    if (right.length > 1) {
        left.push(right[0])
        right.shift()
    }
}