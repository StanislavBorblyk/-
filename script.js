"use strict";

const numberOfFilms = +prompt("скільки фільмів ви переглянули?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



/* const question1 = prompt("Останній преглянутий фільм?", ""),
      question2 = prompt("На скільки його оціните?", ""),
      question3 = prompt("Останній преглянутий фільм?", ""),
      question4 = prompt("На скільки його оціните?", "");

      personalMovieDB.movies[question1] = question2;
      personalMovieDB.movies[question3] = question4;

      console.log(personalMovieDB); */

      for (let i = 0; i < 2; i++) {
        const question1 = prompt("Останній преглянутий фільм?", ""),
              question2 = prompt("На скільки його оціните?", "");

        if (question1 !== null && question2 !== null && question1 !== '' && question2 !== '' && question1.length < 50) {
            personalMovieDB.movies[question1] = question2;
            console.log('done');
        } else {
            console.log('error');
            i --;
       }     
       };
            console.log(personalMovieDB);

        if (personalMovieDB.count < 10) {
            console.log('просмотрено мало фильмов');
        }
        else if (10 < personalMovieDB.count < 30 ) {
            console.log('ви чудовий глядач');
        }
        else if (personalMovieDB.count > 30 ) {
            console.log('ви кіноман');
    } else {
            console.log('сталася помилка');
    };
    
 
