/*global document, window*/


let btn = document.querySelector('button'),
	
	overlay = document.querySelector('.overlay'),
	
	close = document.querySelector('#close'),

	dropbox = document.querySelector('#drophere'),

	homepage = document.querySelector('.homepage'),

	game = document.querySelector('.game'),

	house = document.querySelector('#house'),

	winner = document.querySelector('.winner'),

	houseWin = document.querySelector('.housewin'),

	equal = document.getElementById('equal'),

	playAgain = document.querySelectorAll('input'),

	count,

	theScore = document.getElementById('points'); 
	


	
/* click rules button to see the rules */
btn.addEventListener('click', () => {
	
	overlay.style.display = 'block';
	
});

/* closeing overlay div on clicking the close icon */
close.addEventListener('click', () => {
	
	overlay.style.display = 'none';
	
});


/* on clicking on the window.... close the overlay div */
window.addEventListener('click', (ev) => {
	
	if (ev.target == overlay) {
		
		overlay.style.display = 'none';
	}
	
});




/* starting of the game part */
let rpsArray = ['paper', 'scissors', 'rock'];

let randItem = rpsArray[Math.floor(Math.random() * rpsArray.length)];


let all = Array.from(document.querySelectorAll('#all'));


for (let shit of all) {

	shit.addEventListener('click', function () {

		if (this.classList.contains('paper')) {

			dropbox.classList.add('paper');
			count = setInterval(housePapFun, 1200);
			
		
		} else if (this.classList.contains('scissors')) {

			dropbox.classList.add('scissors');
			count = setInterval(houseSciFun, 1200);

		

		} else {

			dropbox.classList.add('rock');
			count = setInterval(houseRocFun, 1200);

		
		}

		homepage.style.display = 'none';

		game.style.display = 'block';


	});
}




function paperFun (eve) {

	'use strict';

	if ((house.classList.contains('rock'))) {

		winner.style.display = 'block';
		plus();

	} else if ((house.classList.contains('scissors'))) {

		houseWin.style.display = 'block';
		miuns();

	} else {

		equal.style.display = 'block';
	}

}



function rockFun(eve) {

	'use strict';
	
	if ((house.classList.contains('scissors'))) {

		winner.style.display = 'block';
		plus();

	} else  if ((house.classList.contains('paper'))) {

		houseWin.style.display = 'block';
		miuns();

	} else {

		equal.style.display = 'block';
	}
}



function scissorsFun(eve) {

	'use strict';
	
	if ((house.classList.contains('paper'))) {

		winner.style.display = 'block';
		plus();

	} else if ((house.classList.contains('rock'))) {

		houseWin.style.display = 'block';
		miuns();

	} else {

		equal.style.display = 'block';
	}
}






/*The three coming functions are for setInterval.. try not to change anything unless you are sure that it will work */
function housePapFun() {

	'use strict';

	house.classList.add(randItem);
	
	
	for (let shit of all) {

		paperFun(shit);
	}

	clearInterval(count);
	
}


function houseSciFun() {

	'use strict';

	house.classList.add(randItem);

	
	for (let shit of all) {

		scissorsFun(shit);
	}

	clearInterval(count);
}

function houseRocFun() {

	'use strict';
  
	house.classList.add(randItem);

	for (let shit of all) {

		rockFun(shit);
	}

	clearInterval(count);
}




/* changing the score points from 12 to  13 or 11 */
var counter = 12;

theScore.innerHTML = counter;

function plus() {

	counter = counter + 1;

	localStorage.setItem('point', counter);

	theScore.textContent = localStorage.getItem('point');


}

function miuns() {

	counter = counter - 1;

	theScore.textContent = counter;
}



for (let hey of playAgain) {

	hey.onclick = function () {

		window.location.reload(false);

	}

}


