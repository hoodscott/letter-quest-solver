const ACHIEVEMENTS_TOGGLE_COOKIE_NAME = "letter-quest-achievements";
let achievements = {
    allPlaguedOut: true,
    aManAPlan: true,
    crystalConqueror: true,
    ehEeeEyeOweYou: true,
    feelingReallyGood: true,
    honoraryBaconBandit: true,
    inTheCorner: true,
    itsBacon: true,
    myPrecious: true,
    octoberfest: true,
    prevention: true,
    rowYourBoat: true,
    seeYouInSeptember: true,
    sixPack: true,
    topShelf: true,
    why: true,
    yayEverydayRoyalty: true
};

const loadAchievementsToggle = () => {
    if(!Cookies.get(ACHIEVEMENTS_TOGGLE_COOKIE_NAME)) { return; }

    achievements = JSON.parse(decodeURI(Cookies.get(ACHIEVEMENTS_TOGGLE_COOKIE_NAME)));

    Object.entries(achievements).forEach(achievement => {
        const achievementName = achievement[0];
        const isPopped = !achievement[1];
        popAchievement(achievementName, isPopped);
    });
};

const saveAchievementsToggle = () => {
    Cookies.set(ACHIEVEMENTS_TOGGLE_COOKIE_NAME, encodeURI(JSON.stringify(achievements)),
        { expires: 365, path: "/" });
};

const updateAchievementArray = ($achievement) => {
    achievements[$achievement.val()] = $achievement.prop("checked");
    saveAchievementsToggle();
};

const updateAchievementTogglesAsBlanket = (setAll) => {
    $("input[name='achievement']").each(function() {
        $(this).prop("checked", setAll);
        updateAchievementArray($(this));
    });
};

const popAchievement = (achievementName, isPop = true) => {
    updateAchievementArray($(`#achievement_${achievementName}`).prop("checked", !isPop));
};

const popDetectedAchievements = () => {
    popDetectedAllPlaguedOut();
};

const popDetectedAllPlaguedOut = () => {
    if(!achievements.allPlaguedOut) { return; }

    for(let i = 0; i <= LAST_LETTER_ID; i++) {
        if(getEffect(getLetterElement(i)) === PLAGUED) {
            if(i === LAST_LETTER_ID) {
                popAchievement("allPlaguedOut");
            }
        } else {
            break;
        }
    }
};