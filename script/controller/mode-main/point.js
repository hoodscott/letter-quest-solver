const POINT_MIN = 1;
const POINT_MAX = 3;

const cyclePoint = ($points) => {
    const currentPoints = $points.text();
    const newPoints = (Number.parseInt(currentPoints) + 1) <= POINT_MAX ? (Number.parseInt(currentPoints) + 1) : POINT_MIN;
    $points.text(newPoints);
};

const resetPoint = ($letter) => {
    $letter.parent().parent().find("button[name='points']").text(POINT_MIN);
};