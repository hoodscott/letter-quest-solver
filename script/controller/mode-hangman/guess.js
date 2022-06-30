const getGuessLetters = () => {
    const guess = [ ];

    $("#hangman-mode-container div[name='guess'] input").each(function() {
        guess.push($(this).val().toLowerCase());
    });

    return guess;
};

const addGuessLetter = () => {
    let currentLength = Number.parseInt($("#hangman-mode-container span[name='currentLength']").text());
    const $inputLetter = $(`<input name="letter-input" type="text" class="letter-input" maxlength="1" />`);
    $("#hangman-mode-container section[name='problem']").append($inputLetter);
    $("#hangman-mode-container span[name='currentLength']").text(++currentLength);

    if(currentLength === 15) {
        $("#hangman-mode-container button[name='plus']").prop("disabled", true);
    }

    if(currentLength > 6) {
        $("#hangman-mode-container button[name='minus']").prop("disabled", false);
    }
};

const removeGuessLetter = () => {
    let currentLength = Number.parseInt($("#hangman-mode-container span[name='currentLength']").text());
    $($("#hangman-mode-container section[name='problem'] input")[currentLength - 1]).remove();
    $("#hangman-mode-container span[name='currentLength']").text(--currentLength);

    if(currentLength === 6) {
        $("#hangman-mode-container button[name='minus']").prop("disabled", true);
    }

    if(currentLength < 15) {
        $("#hangman-mode-container button[name='plus']").prop("disabled", false);
    }
};

const resetGuess = () => {
    $("#hangman-mode-container div[name='guess'] input").each(function() {
        $(this).val("");
    });

    $("#hangman-mode-container div[name='guess']").empty();

    for(let i = 0; i < 10; i++) {
        const $inputLetter = $(`<input name="guessLetter" type="text" class="letter-base letter-small" maxlength="1" />`);
        $("#hangman-mode-container div[name='guess']").append($inputLetter);
    }

    $("#hangman-mode-container span[name='currentLength']").text(10);
    $("#hangman-mode-container button[name='plus']").prop("disabled", false);
    $("#hangman-mode-container button[name='minus']").prop("disabled", false);
};