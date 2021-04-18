const isCertainLength = (match, length) => match.word.length === length;

const priorities = {
    "none": (_) => false,
    "fiveLetterWords": (match) => isCertainLength(match, 5),
    "sixLetterWords": (match) => isCertainLength(match, 6),
    "sevenLetterWords": (match) => isCertainLength(match, 7),
}

const isPrioritisedWord = (match, priority) => priorities[priority](match);