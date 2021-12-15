let personsItem = document.querySelectorAll('.persons-item')
let start = document.querySelector('.start')
let preImg = document.querySelector('.pre-img')
let preName = document.querySelector('.game-pre h5')
let gameImg = document.querySelector('.game-person img')
let gameName = document.querySelector('.game-person p')
let main = document.querySelector('.top')
let gameSection = document.querySelector('.game')



let arrImg = [
    './public/images/ava1.svg',
    './public/images/ava2.svg',
    './public/images/ava3.svg',
    './public/images/ava4.svg'
]

let arrNames = [
    'Стиг',
    'Агата',
    'Доминик Торрето',
    'Капитан «Улитка»'
]



for (let i = 0; i < personsItem.length; i++) {
    personsItem[i].addEventListener('click', function(){
        for (let j = 0; j < personsItem.length; j++) {
            personsItem[j].classList.remove('persons-item_active')
        }
        personsItem[i].classList.add('persons-item_active')
        start.classList.add('start_active')
        if (personsItem[i].classList.contains('one')) {
            preImg.src = arrImg[0]
            preName.innerHTML = arrNames[0]
            gameImg.src = arrImg[0]
            gameName.innerHTML = arrNames[0]
        }
        if (personsItem[i].classList.contains('two')) {
            preImg.src = arrImg[1]
            preName.innerHTML = arrNames[1]
            gameImg.src = arrImg[1]
            gameName.innerHTML = arrNames[1]
        }
        if (personsItem[i].classList.contains('three')) {
            preImg.src = arrImg[2]
            preName.innerHTML = arrNames[2]
            gameImg.src = arrImg[2]
            gameName.innerHTML = arrNames[2]
        }
        if (personsItem[i].classList.contains('four')) {
            preImg.src = arrImg[3]
            preName.innerHTML = arrNames[3]
            gameImg.src = arrImg[3]
            gameName.innerHTML = arrNames[3]
        }
        start.addEventListener('click', function(){
            main.classList.add('block-none')
            gameSection.classList.add('block-flex')
            scrollTo({
                top: 0,
                behavior: "auto"
            })
        })
    })
}
