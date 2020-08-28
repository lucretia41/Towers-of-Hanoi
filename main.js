const startTower = document.querySelector('#startTower')
const offsetTower = document.querySelector('#offsetTower')
const endTower = document.querySelector('#endTower')


const disk1 = document.querySelector('#disk1')
const disk2 = document.querySelector('#disk2')
const disk3 = document.querySelector('#disk3')
const disk4 = document.querySelector('#disk4')


let isActiveTower = false

let topDisk
let startDiskWidth
let targetDiskWidth
let currentTower
let diskCount

function handleClick(event) {
    currentTower = event.currentTarget
    diskCount = currentTower.childElementCount

    if (isActiveTower === false && diskCount === 0) {
        alert('Select a tower with disks')
    } else if (isActiveTower === false) {
        topDisk = currentTower.lastElementChild
        topDisk.setAttribute('class', 'highlight')
        startDiskWidth = currentTower.lastElementChild.clientWidth
        isActiveTower = true

        console.log(topDisk)
        console.log(startDiskWidth)
        console.log(isActiveTower)
    } else if (isActiveTower === true && diskCount > 0) {
        targetDiskWidth = currentTower.lastElementChild.clientWidth
        if (startDiskWidth < targetDiskWidth) {
            topDisk.removeAttribute('class')
            currentTower.append(topDisk)
        }
        isActiveTower = false
        topDisk.removeAttribute('class')

        console.log(topDisk)
        console.log(targetDiskWidth)
        console.log(isActiveTower)
    } else if (isActiveTower === true && diskCount === 0) {
        topDisk.removeAttribute('class')
        currentTower.append(topDisk)
        isActiveTower = false
    }

    if (endTower.childElementCount === 4) {
        alert('Success!')
        startTower.append(disk1, disk2, disk3, disk4)
        isActiveTower = false
    }


}

startTower.addEventListener('click', handleClick)
offsetTower.addEventListener('click', handleClick)
endTower.addEventListener('click', handleClick)