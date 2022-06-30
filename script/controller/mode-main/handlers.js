$("#main-mode-container input[name='letter-input']").on("keyup", function() {
    focusNextEmptyLetter($(this));
});

$("#main-mode-container button[name='tile-effect']").on("click", function() {
    toggleEffect($(this));
});

$("#main-mode-container table[name='solutions-table']").on("mouseover", "td", function() {
    addHighlights($(this));
});

$("#main-mode-container table[name='solutions-table']").on("mouseout", "td", function() {
    resetHighlights();
});

$("#main-mode-container table[name='solutions-table']").on("click", "button", function() {
    useResult($(this));
});

$("#main-mode-actions button[name='solve-action']").click(function() {
    popDetectedAchievements();
    resetDemandForNewLetters();
    getMainResults();
});

$("#main-mode-actions button[name='reset-action']").click(function() {
    resetLetters();
    resetDemandForNewLetters();
    resetMainResults();
});

$("#priority").change(function() {
    doesChosenPriorityNeedSpecifiedLetter() ? showSpecificLetterInput() : hideSpecificLetterInput();
});