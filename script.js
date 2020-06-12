'use strict';


function getUserNumber() {
	let userNumber = prompt('Угадай число от 1 до 100');
	if(isNaN(userNumber) || userNumber === "") {
		getUserNumber();
	} else {
		return userNumber;
	}

}

function getRandomNumber(min, max) {
	let randomNum = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(randomNum);
}

function getWiner(userNum, ranNum) {

	 function result() {
		if(userNum === null || userNum === undefined){
			alert('Игра окончена');
		} else if(userNum === ranNum) {
			alert('Вы победитель!');
		} else if(userNum < ranNum) {
			alert('Загаданное число больше');
		}  else {
			alert('Загаданное число меньше"');
		}
	}
	result();
	
}

getWiner(getUserNumber(), getRandomNumber(1, 100));

