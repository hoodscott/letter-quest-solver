const isExactLength = (match, length) => match.word.length === length;

const isUpToLength = (match, length) => match.word.length <= length;

const containsMultipleVowels = (match) =>
    match.word.split('').filter(letter => ["a", "e", "i", "o", "u"].includes(letter)).length > 1;

const isStartingWithVowel = (match) => ["a", "e", "i", "o", "u"].includes(match.word.charAt(0));

const priorities = {
    "none": (_) => false,
    "containsMultipleVowels": (match) => containsMultipleVowels(match),
    "lengthOfFour": (match) => isExactLength(match, 4),
    "lengthOfFive": (match) => isExactLength(match, 5),
    "lengthOfFiveOrFewer": (match) => isUpToLength(match, 5),
    "lengthOfSix": (match) => isExactLength(match, 6),
    "lengthOfSeven": (match) => isExactLength(match, 7),
    "startsWithConsonant": (match) => !isStartingWithVowel(match),
    "startsWithVowel": (match) => isStartingWithVowel(match),
}

const isPrioritisedWord = (match, priority) => priorities[priority](match);