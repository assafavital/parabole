class State {
    constructor(s = {}) {
        this.todaySolved = s.todaySolved;
        this.streak = s.streak;
        this.totalPlayed = s.totalPlayed;
        this.totalSolved = s.totalSolved;
    }
}

function saveState(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

function loadState(): State {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : {};
}
