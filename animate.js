function randomDice() {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var dice3 = document.getElementById("dice3");
    
    let num1 = Math.floor(Math.random() * 6) + 1;
    let num2 = Math.floor(Math.random() * 6) + 1;
    let num3 = Math.floor(Math.random() * 6) + 1;
    
    updateDiceImage(dice1, num1);
    updateDiceImage(dice2, num2);
    updateDiceImage(dice3, num3);
}

function updateDiceImage(diceElement, number) {
    var path;

    switch (number) {
        case 1:
            path = "https://openclipart.org/download/282127/Die1.svg";
            break;
        case 2:
            path = "https://openclipart.org/download/282128/Die2.svg";
            break;
        case 3:
            path = "https://openclipart.org/download/282129/Die3.svg";
            break;
        case 4:
            path = "https://openclipart.org/download/282130/Die4.svg";
            break;
        case 5:
            path = "https://openclipart.org/download/282131/Die5.svg";
            break;
        case 6:
            path = "https://openclipart.org/download/282132/Die6.svg";
            break;
    }

    diceElement.src = path;
}
