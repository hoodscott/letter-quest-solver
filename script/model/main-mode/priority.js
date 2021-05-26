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

const containsLetter = (match, specifiedLetter) => match.word.includes(specifiedLetter);

const endsWithLetter = (match, specifiedLetter) => match.word.endsWith(specifiedLetter);

const startsWithLetter = (match, specifiedLetter) => match.word.startsWith(specifiedLetter);

const priorities = {
    "none": { behavior: () => false },
    "contains_double_letters": { behavior: containsDoubleLetters },
    "contains_letter...": {
        behavior: (match, specifiedLetter) => containsLetter(match, specifiedLetter),
        needsSpecifiedLetter: true
    },
    "contains_multiple_corner_tiles": { behavior: (match) => containsMultipleTiles(match, [0, 4, 10, 14]) },
    "contains_multiple_bottom_row_tiles": { behavior: (match) => containsMultipleTiles(match, [11, 12, 13, 14]) },
    "contains_multiple_top_row_tiles": { behavior: (match) => containsMultipleTiles(match, [0, 1, 2, 3, 4]) },
    "contains_multiple_vowels": { behavior: containsMultipleVowels },
    "ends_with_letter...": {
        behavior: (match, specifiedLetter) => endsWithLetter(match, specifiedLetter),
        needsSpecifiedLetter: true
    },
    "length_of_three": { behavior: (match) => isExactLength(match, 3) },
    "length_of_four": { behavior: (match) => isExactLength(match, 4) },
    "length_of_four_or_fewer": { behavior: (match) => isUpToLength(match, 4) },
    "length_of_five": { behavior: (match) => isExactLength(match, 5) },
    "length_of_five_or_fewer": { behavior: (match) => isUpToLength(match, 5) },
    "length_of_six": { behavior: (match) => isExactLength(match, 6) },
    "length_of_six_or_fewer": { behavior: (match) => isUpToLength(match, 6) },
    "length_of_seven": { behavior: (match) => isExactLength(match, 7) },
    "length_of_seven_or_fewer": { behavior: (match) => isUpToLength(match, 7) },
    "length_of_eight": { behavior: (match) => isExactLength(match, 8) },
    "length_of_eight_or_fewer": { behavior: (match) => isUpToLength(match, 8) },
    "length_of_nine": { behavior: (match) => isExactLength(match, 9) },
    "length_of_nine_or_fewer": { behavior: (match) => isUpToLength(match, 9) },
    "length_of_ten": { behavior: (match) => isExactLength(match, 10) },
    "length_of_eleven": { behavior: (match) => isExactLength(match, 11) },
    "length_of_twelve": { behavior: (match) => isExactLength(match, 12) },
    "starts_with_consonant": { behavior: (match) => !isStartingWithVowel(match) },
    "starts_with_letter...": {
        behavior: (match, specifiedLetter) => startsWithLetter(match, specifiedLetter),
        needsSpecifiedLetter: true
    },
    "starts_with_vowel": { behavior: isStartingWithVowel }
}

const isPrioritisedWord = (match, priority, prioritySpecificLetter) =>
    priorities[priority].behavior(match, prioritySpecificLetter);