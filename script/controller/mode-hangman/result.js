const getHangmanResults = () => {
    resetHangmanResults();

    const results = solveHangman();

    if(results.length > 0) {
        $("#mode_hangman table[name='results'] tr[name='heading']").show();
        addHangmanResults(results);
    }
};

const addHangmanResults = (results) => {
    for(let i = 0; i < 5; i++) {
        if(results[i]) {
            $("#mode_hangman table[name='results']").append($(
                    `<tr name="result">
                        <td>${results[i]}</td>
                    </tr>`));
        }
    }

    $("#mode_hangman table[name='results']").removeClass("invisible");
};

const resetHangmanResults = () => {
    $("#mode_hangman table[name='results']").addClass("invisible");
    $("#mode_hangman tr[name='result']").remove();
};

const addResultGuide = ($this) => {
    const result = $this.text().trim();

    $("#mode_hangman input[name='guessLetter']").each(function(i) {
        if($(this).val().trim() === "") {
            $(this).val(result.charAt(i));
            $(this).addClass("guide");
        }
    });
};

const removeResultGuide = () => {
    $("#mode_hangman input[name='guessLetter']").each(function() {
        if($(this).hasClass("guide")) {
            $(this).val("");
            $(this).removeClass("guide");
        }
    });
}