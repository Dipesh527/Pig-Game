'use-strict'
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceImage = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0 ,0];

let currentScore = 0 ;
let activePlayer = 0;
diceImage.classList.add('hidden');

const switchPlayer = function(){
  
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Generate the random dice functionality
btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random()* 6) + 1;

    diceImage.classList.remove('hidden');
    diceImage.src =   `dice-${dice}.png`; 
    if( dice !== 1){
      currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent= currentScore;


    }else{
      switchPlayer();
    }
});

// holding the score
btnHold.addEventListener('click', function(){
  
  scores[activePlayer] += currentScore; 
  document.getElementById(`score--${activePlayer}`).textContent= scores[activePlayer]  ;

  // checki if player has scored >= 100 
  if(scores[activePlayer] >= 100)
  {
    document.querySelector(`player--${activePlayer}`).classList.add('player-winner');
  }
  // switch player
  switchPlayer();

});