$("#mode_hangman div[name='alphabet']").on("click", "button", function() {
    disableLetter($(this));
});

$("#mode_hangman div[name='guess']").on("blur", "input[name='guessLetter']", function() {
    enableLetter($(this));
});

$("#mode_hangman button[name='minus']").click(function() {
    removeGuessLetter();
});

$("#mode_hangman button[name='plus']").click(function() {
    addGuessLetter();
});

$("#mode_hangman table[name='results']").on("mouseover", "td", function() {
    addResultGuide($(this));
});

$("#mode_hangman table[name='results']").on("mouseout", "td", function() {
    removeResultGuide();
});

$("#mode_hangman button[name='solve']").click(function() {
    resetInfo();
    getHangmanResults();
});

$("#mode_hangman button[name='reset']").click(function() {
    resetInfo();
    resetGuess();
    resetHangmanResults();
    resetHangmanLetters();
});