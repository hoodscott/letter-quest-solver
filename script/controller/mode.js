const resetSelectedPanel = () => {
    $(".mode").hide();
    $("button[name='mode-change-action']").removeClass("active");
};

const changeSelectedPanel = ($tab) => {
    $tab.addClass("active");
    const selectedMode = $tab.attr("data-mode");
    $(`#${selectedMode}-mode-container`).show();
};

const showMainModePanel = () => {
  $("nav button[name='main']").trigger("click");
};