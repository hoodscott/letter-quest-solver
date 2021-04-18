const isExactLength = (match, length) => match.word.length === length;

const isUpToLength = (match, length) => match.word.length <= length;

const containsMultipleVowels = (match) =>
    match.word.split('').filter(letter => ["a", "e", "i", "o", "u"].includes(letter)).length > 1;

const containsMultipleTiles = (match, tilesIndexArray) => {
    let indexMatches = 0;
    for(let i = 0; i < match.matchIndexes.length; i++) {
        if(tilesIndexArray.includes(match.matchIndexes[i])) { indexMatches++; }
        if(indexMatches > 1) { return true; }
    }
    return false;
}

const isStartingWithVowel = (match) => ["a", "e", "i", "o", "u"].includes(match.word.charAt(0));

const priorities = {
    "none": (_) => false,
    "containsMultipleCornerTiles": (match) => containsMultipleTiles(match, [0, 4, 10, 14]),
    "containsMultipleTopRowTiles": (match) => containsMultipleTiles(match, [0, 1, 2, 3, 4]),
    "containsMultipleVowels": containsMultipleVowels,
    "lengthOfFour": (match) => isExactLength(match, 4),
    "lengthOfFive": (match) => isExactLength(match, 5),
    "lengthOfFiveOrFewer": (match) => isUpToLength(match, 5),
    "lengthOfSix": (match) => isExactLength(match, 6),
    "lengthOfSeven": (match) => isExactLength(match, 7),
    "startsWithConsonant": !isStartingWithVowel,
    "startsWithVowel": isStartingWithVowel,
}

const isPrioritisedWord = (match, priority) => priorities[priority](match);