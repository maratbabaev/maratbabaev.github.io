let par = document.querySelector('.parent')
let item = document.querySelectorAll('.item')

let arr = []


let x = 0


    for (let i = 0; i < item.length/2; i++) {
        let x = Math.floor(Math.random() * ((item.length-1) - 0 + 1)) + 0
        if (arr.indexOf(x) < 0) {
            arr.push(x)
            item[x].classList.add('red')  
        } else {
            i--
        }
    }




   
    for (let j = 0; j < item.length; j++) {
        item[j].addEventListener('click', function(){
            if (item[j].classList.contains('red')) {
                item[j].style.background = 'red'
                item[j].classList.add('cl')
                x++
            } else {
                item[j].style.background = 'green'
                item[j].classList.add('cl')
                x--
            }
            if (x == 0) {
                for (let k = 0; k < item.length; k++) {
                    item[k].style.background = 'white'
                    item[k].classList.remove('cl')
                }
            }
            if (x == 2) {
                let cl = document.querySelectorAll('.cl')
                cl.forEach(elem => {   
                    setTimeout(function(){
                        elem.style.display = 'none'
                    },500)
                })
                x=0
            }
            if (x == -2) {
                let cl = document.querySelectorAll('.cl')
                cl.forEach(elem => {
                    setTimeout(function(){
                        elem.style.display = 'none'
                    },500)  
                })
                x=0
            }
            console.log(x)
        })
    }





