const getGuessLetters = () => {
    const guess = [ ];

    $("#mode_hangman div[name='guess'] input").each(function() {
        guess.push($(this).val());
    });

    return guess;
};

const addGuessLetter = () => {
    let currentLength = Number.parseInt($("#mode_hangman span[name='currentLength']").text());
    const $inputLetter = $(`<input name="guessLetter" type="text" class="letter-base letter-small" maxlength="1" />`);
    $("#mode_hangman div[name='guess']").append($inputLetter);
    $("#mode_hangman span[name='currentLength']").text(++currentLength);

    if(currentLength === 15) {
        $("#mode_hangman button[name='plus']").prop("disabled", true);
    }

    if(currentLength > 6) {
        $("#mode_hangman button[name='minus']").prop("disabled", false);
    }
};

const removeGuessLetter = () => {
    let currentLength = Number.parseInt($("#mode_hangman span[name='currentLength']").text());
    $($("#mode_hangman div[name='guess'] input")[currentLength - 1]).remove();
    $("#mode_hangman span[name='currentLength']").text(--currentLength);

    if(currentLength === 6) {
        $("#mode_hangman button[name='minus']").prop("disabled", true);
    }

    if(currentLength < 15) {
        $("#mode_hangman button[name='plus']").prop("disabled", false);
    }
};

const resetGuess = () => {
    $("#mode_hangman div[name='guess'] input").each(function() {
        $(this).val("");
    });

    $("#mode_hangman div[name='guess']").empty();

    for(let i = 0; i < 10; i++) {
        const $inputLetter = $(`<input name="guessLetter" type="text" class="letter-base letter-small" maxlength="1" />`);
        $("#mode_hangman div[name='guess']").append($inputLetter);
    }

    $("#mode_hangman span[name='currentLength']").text(10);
    $("#mode_hangman button[name='plus']").prop("disabled", false);
    $("#mode_hangman button[name='minus']").prop("disabled", false);
};