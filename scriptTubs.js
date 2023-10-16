'use strict';
 
window.addEventListener('DOMContentLoaded', () =>{

//!  ТАБИ
    const tabs = document.querySelectorAll('.tabheader__item'),     // Присвоїв таби в перемінну 
          tabsContent = document.querySelectorAll('.tabcontent'),   // Присвоїв контентну частину в перемінну 
          tabsParent = document.querySelector('.tabheader__items'); // Присвоїв в перемінну батьківський елемент табів для створення делегування

//!  1)  Сховати контент

    function hideTabContent() {
        tabsContent.forEach(item => {
          //item.style.display = 'none';   // Сховали контент

          item.classList.add('hide');  //! Показали контент через добавляння і видалення нових класів. CSS вже мав заготовку. Замовникам так більше подобається
          item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
          item.classList.remove('tabheader__item_active'); //! Ховаю клас ACTIVE
        });
    }


//! 2)  Показати контент

    function showTabContent(i = 0) {
        //tabsContent[i].style.display = 'block'; // Показали контент
        
        
        tabsContent[i].classList.add('show', 'fade'); //! Показали контент через добавляння і видалення нових класів. CSS вже мав заготовку. Замовникам так більше подобається
        tabsContent[i].classList.remove('hide');


        tabs[i].classList.add('tabheader__item_active');
    }



    hideTabContent();   // ховаю все
    showTabContent();  //! ПОКАЗУЮ по замовчуванню перший ТАБ



//!  3)  ПОКАЗУЮ саме той TAB на номер якого я клікнув
    tabsParent.addEventListener('click', (event) => {

        const target = event.target;

        if ( target && target.classList.contains('tabheader__item')) {

          tabs.forEach((tab, numberOfTab) => {
              if (target == tab) {
                hideTabContent();   // При кліку миши ховаю всі інші
                showTabContent(numberOfTab);  //! ПОКАЗУЮ той таб на номер якого я клікнув
              }
          })

        }
    })
});