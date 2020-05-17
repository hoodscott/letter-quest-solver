const enableLetter = ($this) => {
  $("#mode_hangman div[name='alphabet'] button").each(function() {
    if($(this).text().toLowerCase() === $this.val().toLowerCase()) {
      $(this).prop("disabled", false);
    }
  });
};

const disableLetter = ($this) => {
  let alreadyUsedLetter;

  $("#mode_hangman input[name='guessLetter']").each(function() {
    if($(this).val().toLowerCase() === $this.text().toLowerCase()) {
      alreadyUsedLetter = true;
    }
  });

  if(!alreadyUsedLetter) {
    $this.prop("disabled", true);
  }
};

const getInvalidLetters = () => {
  const invalidLetters = [ ];

  $("#mode_hangman div[name='alphabet'] button:disabled").each(function() {
    invalidLetters.push($(this).text().toLowerCase());
  });

  return invalidLetters;
};

const resetHangmanLetters = () => {
  $("#mode_hangman div[name='alphabet'] button:disabled").each(function() {
    $(this).prop("disabled", false);
  });
};