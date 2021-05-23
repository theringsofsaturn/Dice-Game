'use strict';

// Select elements
const score0El = document.querySelector('#score--o');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
