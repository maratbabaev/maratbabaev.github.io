var track = document.querySelector('.track');
var block = document.querySelectorAll('.block');
var car = document.querySelector('.car');
var boom = document.querySelector('.boom');
var begin = document.querySelector('.begin');
var loss = document.querySelector('.loss');
var win = document.querySelector('.win');
var x = 3;
var q = 3.75;


setTimeout(function(){
  begin.style.display = 'flex';
  window.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') { 
      begin.style.display = 'none';
      randomBlock();
    }
  })
}, 500)


function sound() {
  var audio = new Audio(); 
  audio.src = 'auto.mp3'; 
  audio.play();
}

function music() {
  var audio = new Audio(); 
  audio.src = 'sound.mp3'; 
  audio.play();
}


var random = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function randomBlock () {
  for (let i = 0, z = 500; i < block.length; i++, z = z + 500) {
    block[i].style.top = random(z, z - 400) + 'px';
    block[i].style.left = random(0, 420) + 'px';
  }
  var go = setInterval(function(){
    q += 3.75;
    car.style.bottom = q + 'px' 
    for (let j = 0; j < block.length; j++) {
      if (q + 100 >= parseInt(window.getComputedStyle(block[j]).getPropertyValue('bottom')) && q <= parseInt(window.getComputedStyle(block[j]).getPropertyValue('bottom')) + 50 &&
      parseInt(window.getComputedStyle(car).getPropertyValue('left')) <= parseInt(window.getComputedStyle(block[j]).getPropertyValue('left')) + 80 && 
      parseInt(window.getComputedStyle(car).getPropertyValue('left')) + 50  >= parseInt(window.getComputedStyle(block[j]).getPropertyValue('left'))) {
        clearInterval(go)
       track.style.animationPlayState = 'paused'
       setTimeout(function(){
        loss.style.display = 'block';
        window.addEventListener('keydown', function(event) {
          if (event.key == 'Enter') { 
            window.location.reload()
          }
        }) 
      }, 500)
      } 
    }
    if (q >= 19900) {
      clearInterval(go)
       track.style.animationPlayState = 'paused'
       setTimeout(function(){
        win.style.display = 'block';
        music()
        window.addEventListener('keydown', function(event) {
          if (event.key == 'Enter') { 
            window.location.reload()
          }
        })
      }, 500)
    }  
  }, 1)
  track.classList.add('go');
  sound();
}


window.addEventListener('keydown', function(event){
  if (event.key == 'ArrowLeft') {
    var toSide = setInterval(function(){
      var carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
      car.style.left = carLeft - x + 'px';
      if (parseInt(window.getComputedStyle(car).getPropertyValue('left')) <= -1) {
        car.style.left = carLeft - 0 + 'px';
      }
      window.addEventListener('keyup', function(){
        clearInterval(toSide)
      })
    }, 1)
  }
})

  
window.addEventListener('keydown', function(event){
  if (event.key == 'ArrowRight') {
    var toSide = setInterval(function(){
      var carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
      car.style.left = carLeft + x + 'px';
      if (parseInt(window.getComputedStyle(car).getPropertyValue('left')) >= 451) {
        car.style.left = carLeft + 0 + 'px';
      }
      window.addEventListener('keyup', function(){
        clearInterval(toSide)
      })
    }, 1)
  }
})






