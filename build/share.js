import {ParaboleID} from "./id";
import {loadState} from "./state";

export function share() {
    if (!navigator.share) {
        return
    }

    const attempts = loadState().lastAttempts ?? [0, 0, 0, 0];
    let totalAttempts = attempts.reduce((a, b) => a + b, 0);

    navigator.share({
        text: `📈 Parabole #${ParaboleID}
${visualizeAttempts(attempts)} = ${totalAttempts}
https://parabole.servegame.com/`,
    })
        .then(console.log)
        .catch(console.error)
}

function visualizeAttempts(attempts) {
    return '⬛️'.repeat(attempts[0]) +
        '🟥'.repeat(attempts[1]) +
        '🟨'.repeat(attempts[2]) +
        '🟩'.repeat(attempts[3])
}

document.querySelector("#share").addEventListener("click", share)
