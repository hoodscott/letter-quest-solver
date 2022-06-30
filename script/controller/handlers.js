$("input[name='achievement']").on("change", function() {
    updateAchievementArray($(this));
});

$("button[name='achievements-selection-action']").on("click", function() {
    updateAchievementTogglesAsBlanket($(this).attr("data-action") === "all");
});

$("button[name='mode-change-action']").on("click", function() {
    resetSelectedPanel();
    changeSelectedPanel($(this));
});
