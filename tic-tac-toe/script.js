let cell = document.querySelectorAll('.cell');
let sign = document.querySelectorAll('.cell span');
    
let arr = [];
let z;
let f = 0;



function final(x) {
    if (sign[0].classList.contains(x) == true && sign[1].classList.contains(x) && sign[2].classList.contains(x) ||
        sign[3].classList.contains(x) == true && sign[4].classList.contains(x) && sign[5].classList.contains(x) ||
        sign[6].classList.contains(x) == true && sign[7].classList.contains(x) && sign[8].classList.contains(x) ||
        sign[0].classList.contains(x) == true && sign[3].classList.contains(x) && sign[6].classList.contains(x) ||
        sign[1].classList.contains(x) == true && sign[4].classList.contains(x) && sign[7].classList.contains(x) ||
        sign[2].classList.contains(x) == true && sign[5].classList.contains(x) && sign[8].classList.contains(x) ||
        sign[0].classList.contains(x) == true && sign[4].classList.contains(x) && sign[8].classList.contains(x) ||
        sign[2].classList.contains(x) == true && sign[4].classList.contains(x) && sign[6].classList.contains(x)) {
        if (x === 'cross') {
            alert('Победили "Крестики"');
        }
        if (x === 'circle') {
            alert('Победили "Нолики"');
        }
    }
}



function onePlayer() {

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', function(){
            cell[i].style.pointerEvents = 'none';
            sign[i].classList.add('cross');
            arr.push(i);
            final('cross');
            setTimeout(function(){
                getCircle();   
                final('circle');
            }, 1000);
        })
    }

    function getCircle() {
        z = Math.floor(Math.random() * (cell.length - 0) + 0);
        if (arr.indexOf(z) < 0) {
            cell[z].style.pointerEvents = 'none';
            sign[z].classList.add('circle');
            arr.push(z);
        } else {
            getCircle();
        }
    }

}



function twoPlayers() {

    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', function(){
            f++;
            if (f % 2 !== 0) {
                sign[i].classList.add('cross');
                final('cross');
            } else {
                sign[i].classList.add('circle');
                final('circle');
            }
            cell[i].style.pointerEvents = 'none';
        })
    }
}




let pb = document.querySelector('.player-block');
let field = document.querySelector('.field');
let p1 = document.querySelector('.one-player');
let p2 = document.querySelector('.two-player');


setTimeout(function(){
    field.style.display = 'none';
    pb.style.display = 'block';
}, 500)


p1.addEventListener('click', function(){
    field.style.display = 'flex';
    pb.style.display = 'none';
    onePlayer();
})


p2.addEventListener('click', function(){
    field.style.display = 'flex';
    pb.style.display = 'none';
    twoPlayers();
})

