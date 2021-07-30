const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

/* 滑鼠移到左邊 */
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))

/* 滑鼠離開左邊 */
left.addEventListener("mouseleave", () => container.classList.remove("hover-left"))

/* 滑鼠移到右邊 */
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))

/* 滑鼠離開右邊 */
right.addEventListener("mouseleave", () => container.classList.remove("hover-right"))