const LAST_LETTER_ID = 14;

// Recursive
const focusNextEmptyLetter = ($currentLetter) => {
    const thisLetterId = Number.parseInt($currentLetter.parent().parent().attr("data-id"));
    const nextLetterId = (thisLetterId + 1) < 15 ? (thisLetterId + 1) : 0;

    if(nextLetterId === 0) {
        return;
    }

    const $nextLetter = $(`div[data-id='${nextLetterId}'] input[name='letter']`);

    if($nextLetter.val().length === 0) {
        $nextLetter.focus();
    } else {
        focusNextEmptyLetter($nextLetter);
    }
};

const getLetterElement = (index) => {
    return $($("input[name='letter']")[index]);
}

const getLetterWeight = () => {
    const letterWeight = [ ];

    $("input[name='letter']").each(function(index) {
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
    resetPoint($letter);
};

const resetLetters = () => {
    $("input[name='letter']").each(function() {
        resetLetter($(this));
    });

    setInfo("Please update the new tiles to solve with.");
}