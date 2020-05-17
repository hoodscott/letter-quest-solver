const resetSelectedPanel = () => {
    $(".tabcontent").hide();
    $(".tablink").removeClass("active");
};

const changeSelectedPanel = ($tab) => {
    $tab.addClass("active");
    $("#mode_" + $tab.attr("name")).show();
};

const showMainModePanel = () => {
  $("#tabs button[name='main']").trigger("click");
};