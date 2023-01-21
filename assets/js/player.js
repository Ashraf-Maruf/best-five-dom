// this is player buy start

const player = document.getElementById('player');
const playerOlList = document.getElementById('player-ol-list');
const buttonArea = document.getElementsByClassName('button-area');
let topPlayerName;
for (const button of buttonArea){
    button.addEventListener('click',function (){
        let playerName = button.parentElement.querySelector("h3").innerText;
        const li = document.createElement("li");
        if (playerOlList.children.length == 5){
            alert("Only top 5 players can be selected");
            return;
        }
        else {
            li.style.marginLeft = '15px';
            li.style.marginRight = '15px';
            li.style.padding = '5px';
            li.style.color = 'white';
            li.style.fontSize = '25px';
            li.style.fontWeight = '600';
            li.innerText = playerName;
            playerOlList.appendChild(li);
            button.style.opacity = '0.4';
            button.setAttribute("disabled", true);
        }
    });
    topPlayerName = playerOlList.children.length;
}

// this is player buy end

// this is calcutate player start

document.getElementById('calculate-btn').addEventListener('click',function (){
    const perPlayerFiled = getInputFiledId('player-filed');
    if (perPlayerFiled < 0){
        alert("please enter a number not a minus");
        return;
    }
    const expensesPlayerText = getTexPlayerExpensesId('expenses-player');
    const playerOlList = document.getElementById('player-ol-list').children.length;
    const totalPlayerExpenses = perPlayerFiled * playerOlList;
    if (playerOlList < 1){
        alert('Sorry First selected top 5 player then buy. and this is not a string');
        return;
    }else if (Number.isNaN(totalPlayerExpenses)){
        alert("This is not a String it is a number");
        return;
    }
    setGetNewTextById('expenses-player',totalPlayerExpenses);
});

// this is calcutate player end


// This is calculate total result start

document.getElementById('calculate-total-btn').addEventListener('click',function (){
    const expensesPlayerText = getTexPlayerExpensesId('expenses-player');
    const managerFiled = getInputFiledId('manager-filed');
    if ((isNaN(managerFiled))){
        alert("please enter this is a number. it is not a string")
        return;
    }
    const coachFiled = getInputFiledId('coach-filed');
    if ((isNaN(coachFiled))){
        alert("please enter this is a number. it is not a string")
        return;
    }

    const calculateTotalBtn = (managerFiled + coachFiled) + expensesPlayerText;
    if (isNaN(expensesPlayerText)){
        alert("Sorry follow the steps first top 5 buy player then manager and coach. it is not a string.");
        return;
    }
    setGetNewTextById('total-result',calculateTotalBtn);
});

// This is calculate total result end


