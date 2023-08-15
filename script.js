//  //!------------------------------------------------------------//
//  /* Задание на урок:
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false
// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }
// Проверить, чтобы все работало без ошибок в консоли */

// //!   1) завдання   // Створити перемінну і зробити перевірки

// let numberOfFilms;
// function start() {
//      numberOfFilms = +prompt("Скільки фільмів Ви вже подивились?", "");
//     while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || !isFinite(numberOfFilms)) {
//         numberOfFilms = +prompt("Скільки фільмів Ви вже подивились?", "");
//     }
// }
// //start();

// //!   2) завдання   // Створити обєкт
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies:{},
// 	actors:{},
// 	genres:[],
// 	privat: false,
// };

// //!   3) завдання   // Задати питання і відповісти
// // const a = prompt("Який останній фільм Ви дивились?", ""),
// // 	  b = prompt("Як ви його оцінюєте?", ""),
// // 	  c = prompt("Який останній фільм Ви дивились?", ""),
// // 	  d = prompt("Як ви його оцінюєте?", "");

// // personalMovieDB.movies[a] = b; //! помістили в масив відповідь
// // personalMovieDB.movies[c] = d;

//  //!------------------------------------------------------------//
 
// //! 4) Створити ф-ю  запамятовування фільмів. Автоматизувати питання щоб ці питання не повторювались
// function rememberMyFilms() {
// for ( let i = 0; i < 2; i++) {
//     const a = prompt("Який останній фільм Ви дивились?", ""),
//           b = prompt("Як ви його оцінюєте?", "");

//     //! 5) Потрібно щоб відповідь була заповнена, не можа було ввести пустоту, вийти, і довжина не більше 50 символів. Якщо так відбувається знову має бути питання.
//     if ( a != null && b != null && a!='' && b !='' && a.length < 50 && b.length <= 2) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;  //! ПОВЕРТАЮСЬ В ЦИКЛІ НА ОДНУ ІТЕРАЦІЮ НАЗАД ЯКЩО Є ПОМИЛКА
//     }
// }
// console.log(personalMovieDB);
// }
// //rememberMyFilms();


//  //! 6) Створи ф-ю к-ті переглядаємості фільмів. Провірити скільки фільмів користувач подивився і вивести повідомлення якщо менше чим 10 ( Переглянуто мало фільмів), якщо від 10 до 30 ( Ви хороший глядач), якщо більше 30 ( Ви кіноман)

//  function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Переглянуто мало фільмів');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Ви хороший глядач');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Ви кіноман');
//     } else {
//         console.log('Некоректне значення кількості фільмів');
//     }
// }
// //detectPersonalLevel();

//  //! 7) Створи ф-ю showMyDB, яка буде перевіряти властивість privat. Якщо в позиції false має виводити в консоль головний обєкт

//  function showMyDB(hidden) {
//     if (!hidden) {                      //! Тут знак оклику замінює FALSE і виводить в консоль 
//         console.log(personalMovieDB);
//     } else if (hidden)                  //! Тут я показав якщо буде TRUE
//     console.log('Error');
// }
// showMyDB(personalMovieDB.privat);


//  //! 8. Створи ф-ю writeYourGenres в якій користувач буде 3 рази відповідати на питання " Ваш улюблений жанр під номером ${ номер по порядку}". Кожна відповідь записуватиметься в масив данних genres

//  function writeYourGenres() {
//     for ( let i = 1; i <= 3; i++) {
//         const answer = prompt(`Ваш улюблений жанр під номером ${ i }`);

//         personalMovieDB.genres.push(answer);
        
//         //personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${ i }`); //! Можна і так
         
//     }
//  }
//  writeYourGenres();



 //!---------------  Рефакторинг  ----------------------

 const personalMovieDB = {
	count: 0,
	movies:{},
	actors:{},
	genres:[],
	privat: false,

    start: function () {
        personalMovieDB.count = +prompt("Скільки фільмів Ви вже подивились?", "");

        while ( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || !isFinite(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Скільки фільмів Ви вже подивились?", "");
        }
   },
   

    rememberMyFilms: function () {
        for ( let i = 0; i < 2; i++) {
           const a = prompt("Який останній фільм Ви дивились?", ""),
            b = prompt("Як ви його оцінюєте?", "");
          if ( a != null && b != null && a!='' && b !='' && a.length < 50 && b.length <= 2) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
          } else {
            console.log('Error');
            i--;  
            }
        }
    },


    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Переглянуто мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви хороший глядач');
        } else if (personalMovieDB.count >= 30) {
            console.log('Ви кіноман');
        } else {
            console.log('Некоректне значення кількості фільмів');
        }
    },


    showMyDB: function (hidden) {
        if ( !hidden ) {                      
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {                      
            personalMovieDB.privat = false;
        } else {                
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        // for ( let i = 1; i <= 3; i++) {
        //     const answer = prompt(`Ваш улюблений жанр під номером ${ i }`);
        //     if ( answer == null || answer == '' ) {
        //         console.log('What the fuck?');
        //         i--;
        //     } else {
        //         personalMovieDB.genres.push(answer);
        //     }          
        // }

        for ( let i = 1; i < 2; i++) {
            const answer = prompt(`Введіть улюблені жанри через кому ${ i }`).toLocaleLowerCase().trim(); //! Данні через кому
            if ( answer == null || answer == '' ) {
                console.log('What the fuck?');
                i--;
            } else {
                personalMovieDB.genres = answer.split(', ');
                personalMovieDB.genres.sort(); 
            }          
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр № ${i+1} це ${item}`);
        });
    },
}; 
    personalMovieDB.start();
    personalMovieDB.rememberMyFilms();
    personalMovieDB.detectPersonalLevel();
    personalMovieDB.showMyDB();
    personalMovieDB.toggleVisibleMyDB();
    personalMovieDB.writeYourGenres();
   

