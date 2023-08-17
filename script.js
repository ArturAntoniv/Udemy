'use strict';
const btns = document.querySelectorAll('button'); // беру всі кнопки

console.log(btns[0].classList.item(0)); // blue  Взнаю клас
console.log(btns[0].classList.item(1)); // some  Взнаю клас

console.log(btns[1].classList.add('red')); // Добавляю клас і назву

console.log(btns[0].classList.remove('blue')); // Видалив клас і назву blue

console.log(btns[0].classList.toggle('blue')); // Перемикач класів


if ( btns[1].classList.contains('red')) {
    console.log('Пишу якийсь код який щось робить');// Перевіряю наявність класу
}


btns[2].addEventListener('click', () => {
    if (!btns[3].classList.contains('red')) {   // Перевіряю наявність класу
        btns[3].classList.add('red');           // добавляю клас
    } else {
        btns[3].classList.remove('red');        // видаляю клас
    }

    btns[2].classList.toggle('blue'); // TOGGLE можна замінити код який є вище
})


//!--------    Делегування     -------------
// ЗАдача при кліку на БУДЬ ЯКУ кнопку має щось відбуватись 
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => {
    //console.dir(event.target); // перевіряю властивості

    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Просто якийсь код');
    }

    if (event.target && event.target.classList.contains('blue')) {
        console.log('Пишу якийсь код який щось робить з СИНЬОЮ кнопкою');
    }
})


//!-----    Зявляється/зникає поле електронки ------
document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden; //- ---- Зявляється/зникає поле електронки
  });


//!------    ЗАКРИТТЯ ВКЛАДОК -----------

const closeButton = document.querySelector('#container');

closeButton.addEventListener('click', (event) => {
    if (!event.target.classList.contains('remove-button')) return;

    let pane = event.target.closest('.pane');
    pane.remove();
})


//!------       Згортання вкладених елементів*------


// помістіть кожен текстовий вузол у елемент <span>
    // він займає саме те місце, яке необхідне для тексту,
    for (let li of document.querySelectorAll('li')) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling); // поміщаємо текстовий вузол у span
      }
  

      // ловимо кліки на всьому дереві

      const tree = document.querySelector('.tree');

      tree.addEventListener('click', (event) => {
        if (event.target.tagName != 'SPAN') {
            return;
          }
    
          let childrenContainer = event.target.parentNode.querySelector('ul');
          if (!childrenContainer) return; // дітей немає
    
          childrenContainer.hidden = !childrenContainer.hidden;
      })



//!------       Сортування в таблиці   ------

const grid = document.querySelector('#grid');
grid.addEventListener('click', (event) => {
    if (event.target.tagName != 'TH') return;

    let th = event.target;
    // якщо клітинка TH, тоді сортувати
    // cellIndex -- це номер клітинки th:
    // 0 для першого стовпця
    // 1 для другого і т.д.
    sortGrid(th.cellIndex, th.dataset.type);
});

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    // compare(a, b) порівнює два рядки, необхідно для сортування
    let compare;

    switch (type) {
      case 'number':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        };
        break;
      case 'string':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
        };
        break;
    }

    // сортування
    rowsArray.sort(compare);

    tbody.append(...rowsArray);
  }



  //!  Спливаюса підсказка

  let tooltipElem;

  document.onmouseover = function(event) {
    let target = event.target;

    // якщо у нас є HTML підказка...
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    // ...створіть елемент підказки

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    // розташуйте його над анотованим елементом (угорі по центру)
    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не перетинайте лівий край вікна

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // якщо перетинає верхній край вікна, розташуйте знизу
      top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
  };

  document.onmouseout = function(e) {

    if (tooltipElem) {
      tooltipElem.remove();
      tooltipElem = null;
    }

  };