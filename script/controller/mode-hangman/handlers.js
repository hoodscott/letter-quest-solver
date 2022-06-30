$("#hangman-mode-container section[name='alphabet']").on("click", "button", function() {
    disableLetter($(this));
});

$("#hangman-mode-container section[name='guesses']").on("blur", "input[name='letter-input']", function() {
    enableLetter($(this));
});

$("#hangman-mode-container button[name='minus']").click(function() {
    removeGuessLetter();
});

$("#hangman-mode-container button[name='plus']").click(function() {
    addGuessLetter();
});

$("#hangman-mode-container table[name='solutions-table']").on("mouseover", "td", function() {
    addResultGuide($(this));
});

$("#hangman-mode-container table[name='solutions-table']").on("mouseout", "td", function() {
    removeResultGuide();
});

$("#hangman-mode-container button[name='solve-action']").click(function() {
    getHangmanResults();
});

$("#hangman-mode-container button[name='reset-action']").click(function() {
    resetGuess();
    resetHangmanResults();
    resetHangmanLetters();
});