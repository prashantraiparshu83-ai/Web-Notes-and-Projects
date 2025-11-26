document.getElementById('IncreamentBtn').addEventListener("click" , increamentCounter);

document.getElementById('DecreamentBtn').addEventListener("click" , decreamentCounter);

document.getElementById('resetBtn').addEventListener("click" , resetCounter);

let counterDisplay = document.getElementById('Counter-Display');
let counterValue = 0;

function updateCounterDisplay() {
     counterDisplay.textContent = counterValue;

}
function increamentCounter() {
    counterValue++;
    updateCounterDisplay();
}
function decreamentCounter() {
    if (counterValue>0) {
        counterValue--;
        updateCounterDisplay();
    }

}
function resetCounter() {
    counterValue = 0;
    updateCounterDisplay();

}










