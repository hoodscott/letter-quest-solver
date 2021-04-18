const isLetterUsable = ($letter) => getEffect($letter) !== AVOID;

const calculateWeight = ($letter) => {
    const pointsWeight = getPointsWeight($letter);
    const effectWeight = getEffectWeight($letter);
    const achievementWeight = getLetterAchievementWeight($letter);
    return pointsWeight + effectWeight + achievementWeight;
};

const getPointsWeight = ($letter) => DEFAULT_POINT_FOR_LETTER[$letter.val().toUpperCase()];

const getEffectWeight = ($letter) => getEffect($letter) ? MODIFIER_STANDARD : MODIFIER_NONE;

const getLetterBaseWeight = (letter) => letter.weight;

const getLetterAchievementWeight = ($letter) => {
    return getAllPlaguedOutLetterWeight($letter)
        + getEhEeeEyeOweYouLetterWeight($letter)
        + getInTheCornerLetterWeight($letter)
        + getPreventionLetterWeight($letter)
        + getTopShelfLetterWeight($letter)
        + getMyPreciousLetterWeight($letter);
};

const getAllPlaguedOutLetterWeight = ($letter) => {
    return getAchievementWeight(achievements.allPlaguedOut,
        getEffect($letter) === PLAGUED,
        -MODIFIER_ACHIEVEMENT_UNCOMMON);
};

const getEhEeeEyeOweYouLetterWeight = ($letter) => {
    return getAchievementWeight(achievements.ehEeeEyeOweYou,
        ["a", "e", "i", "o", "u"].includes($letter.val().toLowerCase()),
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getInTheCornerLetterWeight = ($letter) => {
    return getAchievementWeight(achievements.inTheCorner,
        [0, 4, 10, 14].includes($letter.parent().parent().attr("data-id")),
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getPreventionLetterWeight = ($letter) => {
    return getAchievementWeight(achievements.prevention,
        getEffect($letter) === PLAGUED,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getTopShelfLetterWeight = ($letter) => {
    return getAchievementWeight(achievements.topShelf,
        [0, 1, 2, 3, 4].includes($letter.parent().parent().attr("data-id")),
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getMyPreciousLetterWeight = ($letter) => {
    return getAchievementWeight(achievements.myPrecious,
        getEffect($letter) === CRYSTAL,
        MODIFIER_ACHIEVEMENT_COMMON);
};