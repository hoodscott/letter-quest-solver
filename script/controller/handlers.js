$("#toggleAchievementsPanel").click(function() {
    toggleAchievementPanel();
});

$("input[name='achievement']").change(function() {
    updateAchievementArray($(this));
});

$("#configAchievementsAll").click(function() {
    updateAchievementTogglesAsBlanket(true);
});

$("#configAchievementsNone").click(function() {
    updateAchievementTogglesAsBlanket(false);
});

$(".tablink").click(function() {
    resetSelectedPanel();
    changeSelectedPanel($(this));
});