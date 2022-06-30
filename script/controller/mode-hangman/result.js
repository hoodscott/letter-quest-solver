const getHangmanResults = () => {
    resetHangmanResults();

    const results = solveHangman();
    console.log(results);

    if(results.length > 0) {
        $("#hangman-mode-container table[name='solutions-table']").show();
        addHangmanResults(results);
    }
};

const addHangmanResults = (results) => {
    for(let i = 0; i < 5; i++) {
        if(results[i]) {
            $("#hangman-mode-container table[name='solutions-table']").append($(
                    `<tr name="result">
                        <td>${results[i]}</td>
                    </tr>`));
        }
    }

    $("#hangman-mode-container table[name='solutions-table']").removeClass("invisible");
};

const resetHangmanResults = () => {
    $("#hangman-mode-container table[name='solutions-table']").addClass("invisible");
    $("#hangman-mode-container tr[name='result']").remove();
};

const addResultGuide = ($this) => {
    const result = $this.text().trim();

    $("#hangman-mode-container input[name='letter-input']").each(function(i) {
        if($(this).val().trim() === "") {
            $(this).val(result.charAt(i));
            $(this).addClass("guide");
        }
    });
};

const removeResultGuide = () => {
    $("#hangman-mode-container input[name='letter-input']").each(function() {
        if($(this).hasClass("guide")) {
            $(this).val("");
            $(this).removeClass("guide");
        }
    });
}