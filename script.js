"use strict";

//alert('hello Stas');
//const result = confirm('are you here?');
//console.log(result);
//const answer = prompt("what is you name", "jon");
//console.log(answer);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);
console.log(typeof(answers));