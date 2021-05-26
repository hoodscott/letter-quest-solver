const getPrioritySetting = () => $("#priority").val();

const getSpecificLetterPrioritySetting = () => $("#priority_specifiedLetter").val().toLowerCase();

const doesChosenPriorityNeedSpecifiedLetter = () => priorities[$("#priority").val()].needsSpecifiedLetter;

const showSpecificLetterInput = () => $("#priority_specifiedLetter").show();

const hideSpecificLetterInput = () => $("#priority_specifiedLetter").hide();