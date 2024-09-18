export function numCorrectGuesses(guesses, actual) {
    let res = 0;
    for (let i = 0; i < guesses.length; i++) {
        if (actual[i] === guesses[i]) {
            res++;
        }
    }
    return res;
}
