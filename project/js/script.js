/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};





// 1-zadaniye  
let reklam = document.querySelectorAll(".promo__adv img")

reklam.forEach(img =>{
    reklam[0].remove()
     reklam[1].remove()
     reklam[2].remove()
})


// 2-zadaniye



let janr = document.querySelector('.promo__genre').textContent = "Драма"
console.log(janr);


// 3-zadaniye

let logo = document.querySelector(".promo__bg") 
// logo.style.background = "none"
logo.style.background = 'URL("./img/bg.jpg")  center no-repeat'




// 4-zadaniye

// let alfavit = document.querySelectorAll('.promo__interactive-item')

let spisok = document.querySelectorAll(".promo__interactive-item")

console.log(spisok);



// 5-zadaniye

for (let i = 0 ; i < spisok.length; i++){
    let str = i + 1
    spisok[i].innerHTML = str + " " + spisok[i].innerHTML   
   
}



movieDB.movies.sort()
console.log(movieDB.movies.sort());

// 6-zadaniye

document.querySelectorAll('.delete').forEach((btn, i) => {
    btn.addEventListener('click', () => {

        btn.parentElement.remove();
        movieDB.movies.splice(i, 1); 

        
    });
});


