class State {
    constructor(s) {
        this.lastSolved = s.lastSolved;
        this.streak = s.streak;
        this.totalPlayed = s.totalPlayed;
        this.totalSolved = s.totalSolved;
    }
}

export function saveState(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

export function loadState() {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : new State({
        lastSolved: null,
        streak: 0,
        totalPlayed: 0,
        totalSolved: 0,
    });
}

export function todaySolved(state) {
    if (state.lastSolved == null) {
        return false
    }

    let now = new Date();
    let lastSolved = new Date(state.lastSolved);
    return now.getFullYear() === lastSolved.getFullYear() &&
        now.getMonth() === lastSolved.getMonth() &&
        now.getDate() === lastSolved.getDate();
}
