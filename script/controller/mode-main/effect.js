const CRYSTAL = "crystal";
const PLAGUED = "plagued";
const AVOID = "avoid";

const getEffect = ($letter) => {
  return $letter.attr("data-effect");
};

const applyEffect = ($letter, effect) => {
    resetEffect($letter);
    $letter.attr("data-effect", effect);
    $letter.addClass(effect);
};

const resetEffect = ($letter) => {
    $letter.attr("data-effect", "");
    $letter.removeClass(`${CRYSTAL} ${PLAGUED} ${AVOID}`);
};

const toggleEffect = ($this) => {
    const effect = $this.attr("data-effect");
    const $letter = $this.parent().parent().find("input[name='letter-input']");

    if(getEffect($letter) === effect) {
        resetEffect($letter);
    } else {
        applyEffect($letter, effect);
    }
};