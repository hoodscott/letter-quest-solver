const getPrioritySetting = () => $("#priority").val();

const getSpecificLetterPrioritySetting = () => $("#priority-specified-letter").val().toLowerCase();

const doesChosenPriorityNeedSpecifiedLetter = () => priorities[$("#priority").val()].needsSpecifiedLetter;

const showSpecificLetterInput = () => $("#priority-specified-letter").show();

const hideSpecificLetterInput = () => $("#priority-specified-letter").hide();