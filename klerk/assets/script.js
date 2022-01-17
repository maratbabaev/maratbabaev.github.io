let checkboxMain = document.querySelector('.checkbox-main')
let checkboxCard = document.querySelectorAll('.checkbox-card')
let inputBlock = document.querySelector('.mail__input')
let input = inputBlock.querySelector('input')
let btn = inputBlock.querySelector('.btn')
let placeholder = inputBlock.querySelector('.placelolder')
let errorText = inputBlock.querySelector('.error-text')
let c = 0




checkboxMain.addEventListener('click', function(){
    checkboxMain.classList.toggle('checkbox__active')
    checkedOn(checkboxMain)
    checkboxCard.forEach(elem => {
        if (checkboxMain.classList.contains('checkbox__active')) {
            elem.classList.add('checkbox__active')
        } else {
            elem.classList.remove('checkbox__active')
        }
        checkedOn(elem)
    })
})




for (let i = 0; i < checkboxCard.length; i++) {
    checkboxCard[i].addEventListener('click', function(){
        checkboxCard[i].classList.toggle('checkbox__active')
        checkedOn(checkboxCard[i])
        if(checkboxCard[i].classList.contains('checkbox__active')) {
            c++
        } else {
            c--
        }
        if (c >= 4) {
            checkboxMain.classList.add('checkbox__active')
        } else {
            checkboxMain.classList.remove('checkbox__active')
        }
        checkedOn(checkboxMain)
    })
}



function checkedOn(check) {
    let input = check.querySelector('input')
    if (check.classList.contains('checkbox__active')) {
        input.checked = true
    } else {
        input.checked = false
    }
}





input.addEventListener('focusin', function(){
    inputBlock.classList.add('input__active')
    inputBlock.classList.remove('input__error')
})

input.addEventListener('focusout', function(){
    if (input.value.trim() != '') {
        inputBlock.classList.add('input__active')
    } else {
        inputBlock.classList.remove('input__active')
    }
})






btn.addEventListener('click', function(e){
    e.preventDefault()
    if (input.value.trim() != '') {
        inputBlock.classList.remove('input__error')
        if (input.value.indexOf('@') <= -1 || input.value.slice(-1) == '@') {
            inputBlock.classList.add('input__error')
            errorText.innerHTML = 'Введите корректные данные'
        } 
    } else {
        errorText.innerHTML = 'Заполните поле'
        inputBlock.classList.add('input__error')
    }     
})








