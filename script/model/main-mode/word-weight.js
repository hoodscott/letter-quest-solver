const getWordBaseWeight = (word) => {
    return word.length;
};

const getWordAchievementWeight = (word) => {
    return getAManAPlanWordWeight(word)
        + getFeelingReallyGoodWordWeight(word)
        + getHonoraryBaconBanditWordWeight(word)
        + getItsBaconWordWeight(word)
        + getOctoberfestWordWeight(word)
        + getRowYourBoatWordWeight(word)
        + getSeeYouInSeptemberWordWeight(word)
        + getSixPackWordWeight(word)
        + getWhyWordWeight(word)
        + getYayEverydayRoyaltyWordWeight(word)
        + getCrystalConquerorWordWeight(word);
}

const getAManAPlanWordWeight = (word) => {
    return getAchievementWeight(achievements.aManAPlan,
        word.word === word.word.split('').reverse().join(''),
        MODIFIER_ACHIEVEMENT_RARE);
};

const getFeelingReallyGoodWordWeight = (word) => {
    let hasDoubleLetters;

    for(let i = 1; i < word.word.length; i++) {
        if(word.word[i] === word.word[i - 1]) {
            hasDoubleLetters = true;
            break;
        }
    }

    return getAchievementWeight(achievements.feelingReallyGood,
        hasDoubleLetters,
        MODIFIER_ACHIEVEMENT_UNCOMMON);
};

const getHonoraryBaconBanditWordWeight = (word) => {
    return getAchievementWeight(achievements.honoraryBaconBandit,
        word.word === "bandits",
        MODIFIER_ACHIEVEMENT_RARE_SPECIFIC)
};

const getItsBaconWordWeight = (word) => {
    return getAchievementWeight(achievements.itsBacon,
        word.word === "bacon",
        MODIFIER_ACHIEVEMENT_RARE_SPECIFIC);
};

const getOctoberfestWordWeight = (word) => {
    return getAchievementWeight(achievements.octoberfest,
        word.word.length === 8,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getRowYourBoatWordWeight = (word) => {
    return getAchievementWeight(achievements.rowYourBoat,
        word.matchIndexes.filter(letterId => [0, 1, 2, 3, 4].includes(letterId)).length === 5
            || word.matchIndexes.filter(letterId => [5, 6, 7, 8, 9].includes(letterId)).length === 5
            || word.matchIndexes.filter(letterId => [10, 11, 12, 13, 14].includes(letterId)).length === 5,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getSeeYouInSeptemberWordWeight = (word) => {
    return getAchievementWeight(achievements.seeYouInSeptember,
        word.word.length === 7,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getSixPackWordWeight = (word) => {
    return getAchievementWeight(achievements.sixPack,
        word.word.length === 6,
        MODIFIER_ACHIEVEMENT_COMMON);
};

const getWhyWordWeight = (word) => {
    return getAchievementWeight(achievements.why,
        word.word.split('').filter(letter => ["a", "e", "i", "o", "u"].includes(letter)).length === 0,
        MODIFIER_ACHIEVEMENT_RARE);
};

const getYayEverydayRoyaltyWordWeight = (word) => {
    return getAchievementWeight(achievements.yayEverydayRoyalty,
        word.word.split('').filter(letter => ["y"].includes(letter)).length === 2,
        MODIFIER_ACHIEVEMENT_RARE_SPECIFIC);
};

const getCrystalConquerorWordWeight = (word) => {
    let crystalsUsed = 0;

    for(let i = 0; i < word.matchIndexes.length; i++) {
        crystalsUsed += getEffect($($("input[name='letter']")[word.matchIndexes[i]])) === CRYSTAL;
    }

    return getAchievementWeight(achievements.crystalConqueror,
        crystalsUsed === 2,
        MODIFIER_ACHIEVEMENT_UNCOMMON)
};