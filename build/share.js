import Pluralize from 'pluralize';

export function share(attempts) {
    if (!navigator.share) {
        return
    }

    navigator.share({
        title: 'Parabole',
        text: `I completed today's Parabole in ${Pluralize('attempt', attempts)}!
Play now 📈 https://parabole.servegame.com/`,
    })
        .then(console.log)
        .catch(console.error)
}