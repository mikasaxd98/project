
"use strict";

let numberOfFilms;
let geners;
let arr =[];
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};


//rememberMyFilms();


//detectPersonallelvel();




//showMyDB(false);

console.log(writeYourGeners());


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}


function detectPersonallelvel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function writeYourGeners(){

    for(let i = 1; i<4; i++){
        geners = prompt("Какой ваш любимый жанр?","");
        arr[i] = `Ваш любимый жанр под номером:${i} - ${geners}`;
        personalMovieDB.geners[i -1] = arr[i];
    }
    return personalMovieDB;
}


function showMyDB(x) {

    if (x != personalMovieDB.privat) {

        console.log(personalMovieDB);
    }
}