let table = document.querySelector('table');

start(2)


function start(line) {
  table.innerHTML = '';
  getBlock(table, line)
  red(array(line), line)
}


function red(arr, line) {
  let td = document.querySelectorAll('td');
  for (let j = 0; j < td.length; j++) {
    td[j].innerHTML = arr[j]
    td[j].addEventListener('click', function (){
      if (td[j].innerHTML == Math.min.apply(null, arr)) {
        td[j].style.background = 'red';
        arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1)
      } 
      if (arr.length == 0) {
        start(++line)
      }
    }) 
  }
}


function getBlock(table, line) {
  for (let k = 0; k < line; k++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for (let x = 0; x < line; x++) {
      let td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}


function array(line) {
  let arr = [];
  let block = line * line;
  let z = block;

  for (let i = 1; i <= z; i++) {
    x = random (block, 1)
    if (arr.indexOf(x) == -1) {
      arr.push(x)
    } else {
      arr.splice(arr.indexOf(x), 1)
      arr.push(x)
      z++
    }
  }
  return arr;
}


function random (max,min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}