document.querySelector('.menu').onclick = function() {
    document.querySelector('.menu-ic').classList.toggle('menu-ic-click');
    document.querySelector('.menu-list').classList.toggle('menu-list-click');
 }
 
 
var text = document.querySelector('#title').textContent;
var i = 0;
 
 
function autoText () {
    document.querySelector('#title').textContent = text.substring(0,i);
    if (i!=text.length) {
        i++
        setTimeout(autoText,200);
    } else {
        i = 0;
        setTimeout(autoText,3000);
    }
}
 
autoText();






window.addEventListener('scroll', toUp);

function toUp () {
    if (window.pageYOffset > 400) {
        document.querySelector('.up').classList.add('up-active');
    } else {
        document.querySelector('.up').classList.remove('up-active');
    }
  }




  document.querySelector('.input-obj').addEventListener('click', qqq);


  function qqq () {
    document.querySelector('.input-obj').style.height = '100px';
  }