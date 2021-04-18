let dictionary = [ ];

$(document).ready(function() {
    initaliseView();
    loadDictionary();
});

const initaliseView = () => {
    setInfo("Loading view. Please wait.");

    initialiseMainModeView();
    initialiseHangmanModeView();

    loadAchievementsToggle();
    showMainModePanel();
};

const initialiseMainModeView = () => {
    for(let i = 0; i < 15; i++) {
        const $div = $(`<div name="tile" data-id="${i}"></div>`);

        const $divLetter = $(`<div name="letter"></div>`);
        const $inputLetter = $(`<input name="letter" type="text" class="letter-base letter-large" maxlength="1" />`);
        $divLetter.append($inputLetter);

        const $divStatus = $(`<div name="status"></div>`);
        const $buttonCrystal = $(`<button name="crystal" class="effect">Crystal</button>`);
        const $buttonPlagued = $(`<button name="plagued" class="effect">Plagued</button>`);
        const $buttonAvoid = $(`<button name="avoid" class="effect">Avoid</button>`);
        $divStatus.append($buttonCrystal, $buttonPlagued, $buttonAvoid);

        $div.append($divLetter, $divStatus);
        $("#mode_main div[name='gameplay']").append($div);
    }

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

const loadDictionary = () => {
    setInfo("Loading dictionary. Please wait.");

    $.get("./resource/dictionary.txt", function(data) {
        dictionary = data.split("\n");
        setInfo("Dictionary loaded. Ready to begin.");
    });
};