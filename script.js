"use strict";

const numberOfFilms = +prompt("скільки фільмів ви переглянули?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



const question1 = prompt("Останній преглянутий фільм?", ""),
      question2 = prompt("На скільки його оціните?", ""),
      question3 = prompt("Останній преглянутий фільм?", ""),
      question4 = prompt("На скільки його оціните?", "");

      personalMovieDB.movies[question1] = question2;
      personalMovieDB.movies[question3] = question4;

      console.log(personalMovieDB);