export function saveState(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

export function loadState() {
    const state = localStorage.getItem('state');
    return state ? JSON.parse(state) : {};
}
