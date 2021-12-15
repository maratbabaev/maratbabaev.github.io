


let rows = 15
let item = 15

let field = document.querySelector('#field')


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

 

function randomColor() {
    let color = ''
    let r = random(1,item)
    if (r <= item/3) {
      color = 'red'
    }
    if (r > item/3 && r <= (item/3)*2) {
       color = 'green'
    }
    if (r > (item/3)*2) {
        color = 'blue'
     }
     return color
}




for (let i = 1; i <= rows; i++) {
    let tr = document.createElement('tr');
    field.append(tr)
    for (let j = 1; j <= item; j++) {
        let td = document.createElement('td');
        tr.append(td)
        td.classList.add(randomColor())      
    }
}




let arr = document.querySelectorAll('td')




for (let k = 0; k < arr.length; k++) {
    arr[k].addEventListener('click', function(){
        if (k == 0) {
            for (let g = k; g <= k+1; g++) {
                arr[g].className = arr[k].classList.value
                arr[g+item].className = arr[k].classList.value
            }
        }
        else if (k == item-1) {
            for (let g = k; g >= k-1; g--) {
                arr[g].className = arr[k].classList.value
                arr[g+item].className = arr[k].classList.value
            }
        }
        else if (k == item*(rows-1)) {
            for (let g = k; g <= k+1; g++) {
                arr[g].className = arr[k].classList.value
                arr[g-item].className = arr[k].classList.value
            }
        }
        else if (k == item*rows-1) {
            for (let g = k; g >= k-1; g--) {
                arr[g].className = arr[k].classList.value
                arr[g-item].className = arr[k].classList.value
            }
        }
        else if ((k+1)%item == 0) {
            for (let g = k-1; g <= k; g++) {
                arr[g].className = arr[k].classList.value
                arr[g-item].className = arr[k].classList.value
                arr[g+item].className = arr[k].classList.value
            }
        } 
        else if (((k)+item)%item == 0) {
            for (let g = k; g <= k+1; g++) {
                arr[g].className = arr[k].classList.value
                arr[g-item].className = arr[k].classList.value
                arr[g+item].className = arr[k].classList.value
            }
        } 
        else if (k <= item) {
            for (let g = k-1; g <= k+1; g++) {
                arr[g].className = arr[k].classList.value
                arr[g+item].className = arr[k].classList.value
            }
        } 
        else if (k >= item*(rows-1)) {
            for (let g = k-1; g <= k+1; g++) {
                arr[g].className = arr[k].classList.value
                arr[g-item].className = arr[k].classList.value
            }
        } 
        else {
            for (let g = k-1; g <= k+1; g++) {
                arr[g].className = arr[k].classList.value
                arr[g-item].className = arr[k].classList.value
                arr[g+item].className = arr[k].classList.value
            }
        }
    })
}





