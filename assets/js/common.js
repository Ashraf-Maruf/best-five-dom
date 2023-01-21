// This is input filed function

function getInputFiledId(Element) {
    const perPlayerFiled = document.getElementById(Element);
    const perPlayerFiledString = perPlayerFiled.value;
    const perPlayer = parseInt(perPlayerFiledString);
    return perPlayer;
}

// This is inner text function

function getTexPlayerExpensesId(Element) {
    const playerExpensesText = document.getElementById(Element);
    const playerExpensesString = playerExpensesText.innerText;
    const playerExpenses = parseInt(playerExpensesString);
    return playerExpenses;
}

// This is new value set function

function setGetNewTextById(Element, Value) {
    const setNewText = document.getElementById(Element);
    setNewText.innerText = Value;
}