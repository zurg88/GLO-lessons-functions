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
	console.log(Math.round(randomNum));
	return Math.round(randomNum);
}

function getWiner(ranNum) {

	 function result(ranNum) {
		let userNum = getUserNumber();
		console.log(typeof(userNum));
		
		  if(userNum === null || userNum === undefined) {
			alert('Игра окончена');
		} else {
			userNum = +userNum;
			if(userNum === ranNum){
				alert('Вы победитель!');
			} else if(userNum < ranNum) {
				alert('Загаданное число больше');
				result(ranNum);
			}  else {
				alert('Загаданное число меньше');
				result(ranNum); 
			}
		}
	}
	result(ranNum);
	
}

getWiner( getRandomNumber(1, 100));

