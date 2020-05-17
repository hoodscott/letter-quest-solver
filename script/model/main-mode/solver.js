const solveMain = (letters) => {
    const matchingWords = [ ];

    dictionary.forEach(word => {
        let wordCompatible = true;
        const match = {
            word,
            matchIndexes: [ ],
            weight: getWordBaseWeight(word)
        };

        for(let wordIndex = 0; wordIndex < word.length; wordIndex++) {
            let letterCompatible = false;

            for(let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
                if(word[wordIndex] === letters[letterIndex].letter
                    && !match.matchIndexes.includes(letters[letterIndex].id)) {
                    letterCompatible = true;
                    match.weight += getLetterBaseWeight(letters[letterIndex]);
                    match.matchIndexes.push(letters[letterIndex].id);
                    break;
                }
            }

            if(!letterCompatible) {
                wordCompatible = false;
                break;
            }
        }

        if(wordCompatible) {
            match.weight += getWordAchievementWeight(match);
            matchingWords.push(match);
        }
    });

    return matchingWords;
};