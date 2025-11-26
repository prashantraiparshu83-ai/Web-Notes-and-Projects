let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;//playerX , playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

// reset game
const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
    if (turnO) {
        box.innerHTML ="O";
        turnO = false;
    }
    else{
         box.innerHTML ="X";
        turnO = true;
    }
    box.disabled = true;

// when we click or fill 'X' and 'O' checkWinner function call
    checkWinner();
    });
} );

const enabledBoxes =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML=""
    }
}

// when First time Winner declare disable all buttons
const disabledBoxes =() => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winnner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}




const checkWinner =() => {
    for (let pattern of winPatterns) {
    //Pattern index print
    //console.log(pattern[0],pattern[1],pattern[2]);

    // Print box inner value
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);


    //    console.log(
    //     boxes[pattern[0]].innerHTML,
    //     boxes[pattern[1]].innerHTML,
    //     boxes[pattern[2]].innerHTML);
        
    // Store it in individual variable

        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        
        //Print winner
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val ==pos2val && pos2val == pos3val) {
                console.log("Winner.",pos1val);

                showWinner(pos1val)
            }
        }
    }
}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);

