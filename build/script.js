import {loadState, saveState, todaySolved} from "./state.js";
import 'toastr';
import {readGuessesSafely} from "./inputValidation";
import {plotQuadratic} from "./plot";
import {share} from "./share";
import {numCorrectGuesses} from "./guesses";
import {ParaboleID} from "./id";

let a, b, c;
let attempts = [0, 0, 0, 0];
let state = loadState();

function generateCoefficients() {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    const rng = new window.Math.seedrandom(seed);

    a = Math.floor(rng() * 21) - 10; // -10 to 10
    b = Math.floor(rng() * 41) - 20; // -20 to 20
    c = Math.floor(rng() * 101) - 50; // -50 to 50

    if (a === 0) a = 1;
}

function checkGuess() {
    let guesses = readGuessesSafely();
    if (guesses === null) {
        return
    }

    let [guessA, guessB, guessC] = guesses;

    let hints = '';
    hints += getHintHTML('a', guessA, a);
    hints += getHintHTML('b', guessB, b);
    hints += getHintHTML('c', guessC, c);
    document.getElementById('hints').innerHTML = hints;

    const correctGuesses = numCorrectGuesses([guessA, guessB, guessC], [a, b, c]);
    attempts[correctGuesses]++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts.reduce((a, b) => a + b)}`;

    if (correctGuesses === 3) {
        let numAttempts = attempts.reduce((a, b) => a + b);
        state.lastSolved = new Date();
        state.totalPlayed++;
        state.totalAttempts += numAttempts;
        updateStats();
        toggleVisibility(true)
        toastr.success(`Congratulations! You've solved today's Parabole: ${a}x² + ${b}x + ${c}\nYou solved it in ${numAttempts} attempts.`);
    }
}

function getHintHTML(coefficient, guess, actual) {
    let iconClass, color;
    if (guess === actual) {
        iconClass = 'fa-check';
        color = 'green';
    } else if (guess < actual) {
        iconClass = 'fa-arrow-up';
        color = 'red';
    } else {
        iconClass = 'fa-arrow-down';
        color = 'blue';
    }
    return `
            <div class="hint">
                <span>${coefficient}</span>
                <i class="hint-icon fas ${iconClass}" style="color: ${color};"></i>
            </div>
        `;
}

function updateStats() {
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `
            Avg. Attempts: ${Math.round(100 * state.totalAttempts / state.totalPlayed) / 100}<br>
            Total Played: ${state.totalPlayed}
        `;
    saveState(state);
}

function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeLeft = tomorrow - now;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `Next Parabole in: ${hours}h ${minutes}m ${seconds}s`;
}

function initializeGame() {
    document.getElementById("paraboleId").innerText = `Parabole #${ParaboleID}`;
    generateCoefficients();
    plotQuadratic(a, b, c);
    updateStats();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    window.onresize = () => {
        plotQuadratic(a, b, c);
    };
}

window.onload = function () {
    if (typeof window.Math.seedrandom === 'function') {
        initializeGame();
    } else {
        console.error('seedrandom library not loaded properly');
        document.getElementById('hints').innerHTML = 'Error: Game could not be initialized. Please try refreshing the page.';
    }
};

document.querySelector('#guess').addEventListener('click', e => {
    e.preventDefault();
    checkGuess();
})

function toggleVisibility(finished) {
    document.getElementById("guessContainer").style.display = finished ? 'none' : 'flex';
    document.getElementById('hints').style.display = finished ? 'none' : 'flex';
    document.getElementById("attempts").style.display = finished ? 'none' : 'flex';

    document.getElementById("alreadySolved").style.display = finished ? 'flex' : 'none';
    document.getElementById('stats').style.display = finished ? 'flex' : 'none';
    document.getElementById('countdown').style.display = finished ? 'flex' : 'none';
}

toggleVisibility(todaySolved(state));
