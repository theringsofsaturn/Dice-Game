'use strict';

// Select elements
const score0El = document.querySelector('#score--o');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnNew = document.querySelector('.btn--roll');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
