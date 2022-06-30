$("#hangman-mode-container div[name='alphabet']").on("click", "button", function() {
    disableLetter($(this));
});

$("#hangman-mode-container div[name='guess']").on("blur", "input[name='guessLetter']", function() {
    enableLetter($(this));
});

$("#hangman-mode-container button[name='minus']").click(function() {
    removeGuessLetter();
});

$("#hangman-mode-container button[name='plus']").click(function() {
    addGuessLetter();
});

$("#hangman-mode-container table[name='results']").on("mouseover", "td", function() {
    addResultGuide($(this));
});

$("#hangman-mode-container table[name='results']").on("mouseout", "td", function() {
    removeResultGuide();
});

$("#hangman-mode-container button[name='solve']").click(function() {
    getHangmanResults();
});

$("#hangman-mode-container button[name='reset']").click(function() {
    resetGuess();
    resetHangmanResults();
    resetHangmanLetters();
});