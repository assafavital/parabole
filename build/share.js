import Pluralize from 'pluralize';

export function share(attempts) {
    if (!navigator.share) {
        return
    }

    navigator.share({
        title: 'Parabole',
        text: `I completed today's Parabole in ${Pluralize('attempt', attempts)}!
${visualizeAttempts(attempts)}
Play now 📈 https://parabole.servegame.com/`,
    })
        .then(console.log)
        .catch(console.error)
}

function visualizeAttempts(attempts) {
    return '⚫'.repeat(attempts[0]) +
        '🔴'.repeat(attempts[1]) +
        '🟡'.repeat(attempts[2]) +
        '🟢'.repeat(attempts[3])
}
