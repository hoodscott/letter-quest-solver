const LAST_LETTER_ID = 14;

const DEFAULT_POINT_FOR_LETTER = {
    "A": 1,
    "B": 2,
    "C": 2,
    "D": 1,
    "E": 1,
    "F": 2,
    "G": 1,
    "H": 2,
    "I": 1,
    "J": 3,
    "K": 3,
    "L": 1,
    "M": 2,
    "N": 1,
    "O": 1,
    "P": 2,
    "Q": 3,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 2,
    "W": 2,
    "X": 3,
    "Y": 2,
    "Z": 3
};

// Recursive
const focusNextEmptyLetter = ($letterInput) => {
    if($letterInput.val().length === 0) { return; }

    const thisLetterId = Number.parseInt($letterInput.parent().parent().attr("data-tile-id"));
    const nextLetterId = thisLetterId + 1;

    if(nextLetterId === 15) { return; }

    const $nextLetterInput = $(`section[name='letter-tile'][data-tile-id='${nextLetterId}'] input[name='letter-input']`);

    if($nextLetterInput.val().length === 0) {
        $nextLetterInput.focus();
    } else {
        focusNextEmptyLetter($nextLetterInput);
    }
};

const getLetterElement = (index) => {
    return $($("input[name='letter-input']")[index]);
}

const getLetterWeight = () => {
    const letterWeight = [ ];

    $("input[name='letter-input']").each(function(index) {
        const $letter = $(this);
        letterWeight.push({
            id: index,
            letter: $letter.val().toLowerCase(),
            weight: calculateWeight($letter),
            usable: isLetterUsable($letter)
        });
    });

    return letterWeight;
}

const resetLetter = ($letter) => {
    $letter.val("");
    resetEffect($letter);
    resetHighlight($letter);
};

const resetLetters = () => $("input[name='letter-input']").each(function() { resetLetter($(this)); });