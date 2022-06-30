let dictionary = [ ];

$(document).ready(function() {
    initaliseView();
    loadDictionary();
});

const initaliseView = () => {
    initialiseMainModeView();
    initialiseHangmanModeView();

    loadAchievementsToggle();
    showMainModePanel();
};

const initialiseMainModeView = () => {
    Object.keys(priorities).filter((key) => key !== "none").forEach((key) => {
        $(`#priority`).append(`<option value="${key}">${key.replaceAll("_", " ")}</option>`);
    })
};

const initialiseHangmanModeView = () => {
    for(let i = 0; i < 10; i++) {
        const $inputLetter = $(`<input name="guessLetter" type="text" class="letter-base letter-small" maxlength="1" />`);
        $("#mode_hangman div[name='guess']").append($inputLetter);
    }
};

const loadDictionary = () => $.get("./resource/dictionary.txt", function(data) { dictionary = data.split("\n"); });