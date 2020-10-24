const CRYSTAL = "crystal";
const PLAGUED = "plagued";
const AVOID = "avoid";

const getEffect = ($letter) => {
  return $letter.attr("data-effect");
};

const applyEffect = ($letter, effect) => {
    $letter.attr("data-effect", effect);
};

const resetEffect = ($letter) => {
    $letter.attr("data-effect", "");
};

const toggleEffect = ($this, effect) => {
    const $letter = $this.parent().parent().find("input[name='letter']");

    if(getEffect($letter) === effect) {
        resetEffect($letter);
    } else {
        applyEffect($letter, effect);
    }
};