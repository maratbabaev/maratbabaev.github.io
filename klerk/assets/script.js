let checkbox = document.querySelectorAll('.checkbox')
let inputBlock = document.querySelector('.mail__input')
let input = inputBlock.querySelector('input')
let btn = inputBlock.querySelector('.btn')
let placeholder = inputBlock.querySelector('.placelolder')
let errorText = inputBlock.querySelector('.error-text')


for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('click', function(){
        if (checkbox[i].classList.contains('checkbox-main')) {
            checkbox[i].classList.toggle('checkbox__active')
            for (let j = 0; j < checkbox.length; j++) {
                if (checkbox[i].classList.contains('checkbox__active')) {
                    checkbox[j].classList.add('checkbox__active')
                } else {
                    checkbox[j].classList.remove('checkbox__active')
                }
            }
        } else {
            checkbox[i].classList.toggle('checkbox__active')
            let checkboxActive = document.querySelectorAll('.checkbox-card.checkbox__active')
            let checkboxMain = document.querySelector('.checkbox-main')
            if (checkboxActive.length == 4) {
                checkboxMain.classList.add('checkbox__active')
            } else {
                checkboxMain.classList.remove('checkbox__active')
            }
            checkedOn(checkboxMain)
        }
        checkedOn(checkbox[i])
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








