let colorsList = document.querySelectorAll('.colors__list')
let next = document.querySelectorAll('.next')
  
colorsList.forEach(colorsList => {
    let arrClick = []
    for (let i = 0; i < 42; i++) {
        let color = document.createElement('button')
        color.className = 'color-item color'+i
        colorsList.appendChild(color)
        let colorClick = document.createElement('img')
        colorClick.src = './public/images/color-click.svg'
        color.appendChild(colorClick)
        color.addEventListener('click', function(){
            arrClick.push(color)
            color.classList.add('color-item__active')
            if (arrClick.length > 3) {
                arrClick[0].classList.remove('color-item__active')
                arrClick.splice(0,1)
            }
            if (arrClick.length > 2 && colorsList.classList.contains('select-colors__list')) {
                next[0].classList.add('next__active')
            }
        })
    }
})





let selectSportItem = document.querySelectorAll('.select-sport__item')
let selectSport = document.querySelector('.select-sport')
let selectColors = document.querySelector('.select-colors')
    
selectSportItem.forEach(elem => {
    elem.addEventListener('click', function(){
        selectSport.style.display = 'none'
        selectColors.style.display = 'flex'
    })
})









