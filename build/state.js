class State {
    constructor(s) {
        this.lastSolved = s.lastSolved;
        this.totalPlayed = s.totalPlayed || 0;
        this.totalAttempts = s.totalAttempts || 0;
        this.lastAttempts = s.lastAttempts ?? [0, 0, 0, 0];
    }
}

export function saveState(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

export function loadState() {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : new State({
        lastSolved: null,
        totalPlayed: 0,
        totalAttempts: 0,
        lastAttempts: [0, 0, 0, 0]
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
