let guessElementIDs = ['guessA', 'guessB', 'guessC'];
let guessesValid = true;

function parseGuess(elementID) {
    let element = document.getElementById(elementID);
    const guess = parseInt(element.value);

    if (isNaN(guess)) {
        guessesValid = false;
        element.style.border = '2px solid red';
        return null
    }

    element.style.border = '1px solid #ddd';
    return guess;
}

export function readGuessesSafely() {
    guessesValid = true;
    let guesses = [];
    guessElementIDs.forEach(id => {
        guesses.push(parseGuess(id));
    });

    if (!guessesValid) {
        toastr.error('Guesses must be valid integers.')
        return null
    }

    return guesses;
}
