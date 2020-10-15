"use strict";// режим строгого современного кода

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//console.log(numberOfFilms);

const personalMovieDb = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};



const question1= prompt("Один из последних просмотренных фильмов?", "");
const question2= +prompt("На сколько оцените его?", "");
const question3= prompt("Один из последних просмотренных фильмов?", "");
const question4= +prompt("На сколько оцените его?", "");


personalMovieDb.movies[question1] = question2;
personalMovieDb.movies[question3] = question4;
console.log(personalMovieDb);