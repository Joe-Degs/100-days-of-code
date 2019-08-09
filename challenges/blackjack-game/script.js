//
//Blackjack game 
//by Hmmm Me 


//CARD VARIABLES 
let suits = ['Hearts', 'Club', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 
	'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five',
	'Four', 'Three', 'Two'];
	
	
//DOM VARIABLES	
let textArea = document.getElementById('text-area'),
 	newGameButton = document.getElementById('new-game-button'),
	hitButton = document.getElementById('hit-button'),
	stayButton = document.getElementById('stay-button');
//console.log(textArea);

//GAME VARIABLES
let gameStarted = false,
	gameOver = false,
	playerWon = false,
	dealerCards = [],
	playerCards = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];



hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();



newGameButton.addEventListener('click', function() {
	gameStarted = true;
	gameOver = false;
	playerWon = false;
	
	deck = createDeck();
	shuffleDeck(deck);
	playerCards = [ getNextCard(), getNextCard() ];
	dealerCards = [ getNextCard(), getNextCard() ];
	
	
	newGameButton.style.display = 'none';
	hitButton.style.display = 'inline';
	stayButton.style.display = 'inline';
	showStatus();
});
		

function createDeck() {
	let deck = [];
	for(let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
		for(let valueIdx = 0; valueIdx < values.length; valueIdx++) {
			let card = {
				suit: suits[suitIdx],
				value: values[valueIdx]
			};
			deck.push( card );
		}
	}
	return deck;
}

function shuffleDeck(deck) {
	for(let i = 0;i < deck.length; i++) {
		let swapIdx = Math.trunc(Math.random() * deck.length);
		let tmp = deck[swapIdx];
		deck[swapIdx] = deck[i];
		deck[i] = tmp
	}
}

function getCardString(card) {
	return card.value + ' of ' + card.suit;
}

function getScore(cardArray) {
	let score = 0;
	let hasAce = false;
	for(let i=0; i<cardArray.length; i++) {
		let card = cardArray[i];
		score += getCardNumericValue(card);
		if(card.value === 'Ace') {
			hasAce = true;
			
		}
	}
	if(hasAce && score <= 21) {
		return score + 10;
	}
	return score;
}

function updateScores() {
	dealerScore = getScore(dealerCards);
	playerScore = getScore(playerCards);
}

function showStatus() {
	if(!gameStarted) {
		textArea.innerText = 'Welcome Mothersucker!';
		return;
	} /*else {
		textArea.innerText = 'Let\'s play Mothersucker!' 
	}*/
	
	let dealerCardStringString = '';
	for(let i=0; i < dealerCards.length; i++) {
		dealerCardString += getCardString(playerCards[i]) + '\n';
	}
	
	let playerCardString = '';
	for (let i=0; i < playerCards.length; i++) {
		playerCardString += getCardString(playerCards[i]) + '\n';
	}
	
	updateScores();
	
	textArea.innerText = 
		'dealer has:\n' +
		dealerCardString +
		'(score: ' + playerScore + ')\n\n'
		
		'Player has:\n' +
		playerCardString +
		'(score: ' + playerScore + ')\n\n';
		
		
	if(gameOver) {
		if(playerWon) {
			textArea.innerText += 'YOU WIN';
		} else {
			textArea.innerText += 'DEALER WINS';
		}
		newGameButton.style.display = 'inline';
		hitButton.style.display = 'none';
		stayButton.style.display = none;
	}
	
	for(var i = 0;i < deck.length; i++) {
		textArea.innerText += '\n' + getCardString(deck[i]);
	}
}


function getNextCard() {
	return deck.shift();
}






//for (let i = 0;i < deck.length; i++) {
//	console.log(deck[i]);
//}