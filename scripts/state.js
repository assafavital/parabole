export class State {
    constructor(s = {}) {
        this.todaySolved = s.todaySolved;
        this.streak = s.streak;
        this.totalPlayed = s.totalPlayed;
        this.totalSolved = s.totalSolved;
    }
}

export function saveState(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

export function loadState(): State {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : {};
}
