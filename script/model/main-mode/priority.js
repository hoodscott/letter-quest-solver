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

const containsDoubleLetters = (match) => {
    for(let i = 1; i < match.word.length; i++) { if(match.word[i] === match.word[i - 1]) { return true; } }
    return false;
}

const isStartingWithVowel = (match) => ["a", "e", "i", "o", "u"].includes(match.word.charAt(0));

const priorities = {
    "none": (_) => false,
    "contains_double_letters": containsDoubleLetters,
    "contains_multiple_corner_tiles": (match) => containsMultipleTiles(match, [0, 4, 10, 14]),
    "contains_multiple_bottom_row_tiles": (match) => containsMultipleTiles(match, [11, 12, 13, 14]),
    "contains_multiple_top_row_tiles": (match) => containsMultipleTiles(match, [0, 1, 2, 3, 4]),
    "contains_multiple_vowels": containsMultipleVowels,
    "length_of_four": (match) => isExactLength(match, 4),
    "length_of_four_or_fewer": (match) => isUpToLength(match, 4),
    "length_of_five": (match) => isExactLength(match, 5),
    "length_of_five_or_fewer": (match) => isUpToLength(match, 5),
    "length_of_six": (match) => isExactLength(match, 6),
    "length_of_six_or_fewer": (match) => isUpToLength(match, 6),
    "length_of_seven": (match) => isExactLength(match, 7),
    "length_of_seven_or_fewer": (match) => isUpToLength(match, 7),
    "length_of_eight": (match) => isExactLength(match, 8),
    "length_of_eight_or_fewer": (match) => isUpToLength(match, 8),
    "length_of_nine": (match) => isExactLength(match, 9),
    "length_of_nine_or_fewer": (match) => isUpToLength(match, 9),
    "length_of_ten": (match) => isExactLength(match, 10),
    "length_of_eleven": (match) => isExactLength(match, 11),
    "length_of_twelve": (match) => isExactLength(match, 12),
    "starts_with_consonant": (match) => !isStartingWithVowel(match),
    "starts_with_vowel": isStartingWithVowel,
}

const isPrioritisedWord = (match, priority) => priorities[priority](match);