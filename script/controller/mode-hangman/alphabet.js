const enableLetter = ($this) => {
  $("#hangman-mode-container div[name='alphabet'] button").each(function() {
    if($(this).text().toLowerCase() === $this.val().toLowerCase()) {
      $(this).prop("disabled", false);
    }
  });
};

const disableLetter = ($this) => {
  let alreadyUsedLetter;

  $("#hangman-mode-container input[name='letter-input']").each(function() {
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

  $("#hangman-mode-container div[name='alphabet'] button:disabled").each(function() {
    invalidLetters.push($(this).text().toLowerCase());
  });

  return invalidLetters;
};

const resetHangmanLetters = () => {
  $("#hangman-mode-container div[name='alphabet'] button:disabled").each(function() {
    $(this).prop("disabled", false);
  });
};