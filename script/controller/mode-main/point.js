const POINT_MIN = 1;
const POINT_MAX = 3;

const DEFAULT_POINT_FOR_LETTER = {
    "A": 1,
    "B": 2,
    "C": 2,
    "D": 1,
    "E": 1,
    "F": 2,
    "G": 1,
    "H": 2,
    "I": 0, // todo
    "J": 3,
    "K": 3,
    "L": 1,
    "M": 2,
    "N": 1,
    "O": 1,
    "P": 2,
    "Q": 3,
    "R": 1,
    "S": 1,
    "T": 0, // todo
    "U": 1,
    "V": 2,
    "W": 2,
    "X": 3,
    "Y": 2,
    "Z": 3
}

const autoPoint = ($letter) => {
    const defaultPoint = DEFAULT_POINT_FOR_LETTER[$letter.val().toUpperCase()];
    $letter.parent().parent().find("button[name='points']").text(defaultPoint);
};

const cyclePoint = ($points) => {
    const currentPoints = $points.text();
    const newPoints = (Number.parseInt(currentPoints) + 1) <= POINT_MAX ? (Number.parseInt(currentPoints) + 1) : POINT_MIN;
    $points.text(newPoints);
};

const resetPoint = ($letter) => {
    $letter.parent().parent().find("button[name='points']").text(POINT_MIN);
};