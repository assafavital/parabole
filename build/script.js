import {loadState, saveState, todaySolved} from "./state.js";
import functionPlot from "function-plot";
import 'toastr';

let a, b, c;
let attempts = 0;
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

function plotQuadratic() {
    functionPlot({
        target: "#quadraticChart",
        xAxis: {
            domain: [-10, 10]
        },
        yAxis: {
            domain: [-c, c]
        },
        grid: true,
        data: [
            {
                fn: `${a} * x^2 + ${b} * x + ${c}`
            }
        ]
    })
}

function checkGuess() {
    const guessA = parseInt(document.getElementById('guessA').value);
    const guessB = parseInt(document.getElementById('guessB').value);
    const guessC = parseInt(document.getElementById('guessC').value);
    if (isNaN(guessA) || isNaN(guessB) || isNaN(guessC)) {
        toastr.error('Guesses must be valid integers.')
        return
    }

    attempts++;

    let hints = '';
    hints += getHintHTML('a', guessA, a);
    hints += getHintHTML('b', guessB, b);
    hints += getHintHTML('c', guessC, c);

    document.getElementById('hints').innerHTML = hints;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (guessA === a && guessB === b && guessC === c) {
        state.lastSolved = new Date();
        state.streak++;
        state.totalPlayed++;
        state.totalSolved++;
        updateStats();
        alert(`Congratulations! You've solved today's Parabole: ${a}x² + ${b}x + ${c}\nYou solved it in ${attempts} attempts.`);
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
            Streak: ${state.streak}<br>
            Win %: ${Math.round((state.totalSolved / state.totalPlayed) * 100) || 0}%<br>
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
    generateCoefficients();
    plotQuadratic();
    updateStats();
    updateCountdown();
    setInterval(updateCountdown, 1000);
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

if (todaySolved(state)) {
    document.getElementById("guessContainer").style.display = 'none';
    document.getElementById("attempts").style.display = 'none';
    document.getElementById("alreadySolved").style.display = 'flex';
}