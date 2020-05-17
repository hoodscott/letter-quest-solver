const solveHangman = () => {
    const matchingWords = [ ];

    const guessLetters = getGuessLetters();
    const invalidLetters = getInvalidLetters();

    $.each(dictionary, function(i, word) {
        if(word.length < guessLetters.length) {
            return false; // break
        } else if(word.length > guessLetters.length) {
            return true; // continue
        }

        for(let wordIndex = 0; wordIndex < word.length; wordIndex++) {
            if(!invalidLetters.includes(word[wordIndex])
                && (guessLetters[wordIndex] === word[wordIndex] || guessLetters[wordIndex] === "")) {
                if((wordIndex + 1) === word.length) {
                    matchingWords.push(word);
                }
            } else {
                break;
            }
        }
    });

    return matchingWords;
};