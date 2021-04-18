const getWordBaseWeight = (word) => {
    return word.length;
};

const getWordAchievementWeight = (match) => {
    return getAManAPlanWordWeight(match)
        + getFeelingReallyGoodWordWeight(match)
        + getHonoraryBaconBanditWordWeight(match)
        + getItsBaconWordWeight(match)
        + getOctoberfestWordWeight(match)
        + getRowYourBoatWordWeight(match)
        + getSeeYouInSeptemberWordWeight(match)
        + getSixPackWordWeight(match)
        + getWhyWordWeight(match)
        + getYayEverydayRoyaltyWordWeight(match)
        + getCrystalConquerorWordWeight(match);
}

const getWordPriorityWeight = (match, priority) => isPrioritisedWord(match, priority) ? 100 : 0;

const getAManAPlanWordWeight = (match) => {
    return getAchievementWeight(achievements.aManAPlan,
        match.word === match.word.split('').reverse().join(''),
        MODIFIER_ACHIEVEMENT_RARE);
};

const getFeelingReallyGoodWordWeight = (match) => {
    let hasDoubleLetters;

    for(let i = 1; i < match.word.length; i++) {
        if(match.word[i] === match.word[i - 1]) {
            hasDoubleLetters = true;
            break;
        }
    }

    return getAchievementWeight(achievements.feelingReallyGood,
        hasDoubleLetters,
        MODIFIER_ACHIEVEMENT_UNCOMMON);
};

const getHonoraryBaconBanditWordWeight = (match) => {
    return getAchievementWeight(achievements.honoraryBaconBandit,
        match.word === "bandits",
        MODIFIER_ACHIEVEMENT_RARE_SPECIFIC)
};

const getItsBaconWordWeight = (match) => {
    return getAchievementWeight(achievements.itsBacon,
        match.word === "bacon",
        MODIFIER_ACHIEVEMENT_RARE_SPECIFIC);
};

const getOctoberfestWordWeight = (match) => {
    return getAchievementWeight(achievements.octoberfest,
        match.word.length === 8,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getRowYourBoatWordWeight = (match) => {
    return getAchievementWeight(achievements.rowYourBoat,
        match.matchIndexes.filter(letterId => [0, 1, 2, 3, 4].includes(letterId)).length === 5
            || match.matchIndexes.filter(letterId => [5, 6, 7, 8, 9].includes(letterId)).length === 5
            || match.matchIndexes.filter(letterId => [10, 11, 12, 13, 14].includes(letterId)).length === 5,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getSeeYouInSeptemberWordWeight = (match) => {
    return getAchievementWeight(achievements.seeYouInSeptember,
        match.word.length === 7,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getSixPackWordWeight = (match) => {
    return getAchievementWeight(achievements.sixPack,
        match.word.length === 6,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getWhyWordWeight = (match) => {
    return getAchievementWeight(achievements.why,
        match.word.split('').filter(letter => ["a", "e", "i", "o", "u"].includes(letter)).length === 0,
        MODIFIER_ACHIEVEMENT_RARE);
};

const getYayEverydayRoyaltyWordWeight = (match) => {
    return getAchievementWeight(achievements.yayEverydayRoyalty,
        match.word.split('').filter(letter => ["y"].includes(letter)).length === 2,
        MODIFIER_ACHIEVEMENT_RARE_SPECIFIC);
};

const getCrystalConquerorWordWeight = (match) => {
    let crystalsUsed = 0;

    for(let i = 0; i < match.matchIndexes.length; i++) {
        crystalsUsed += getEffect($($("input[name='letter']")[match.matchIndexes[i]])) === CRYSTAL;
    }

    return getAchievementWeight(achievements.crystalConqueror,
        crystalsUsed === 2,
        MODIFIER_ACHIEVEMENT_UNCOMMON)
};