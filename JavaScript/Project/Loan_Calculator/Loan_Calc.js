document.getElementById('CalculateBtn').addEventListener('click',calculateLoan);
function calculateLoan(){
    const loanamount = parseFloat(document.getElementById('Loan Amount').value);
    const InterestRate = parseFloat(document.getElementById('Interest Rate').value);
    const Loanterm = parseFloat(document.getElementById('Loan Term').value);

    if (isNaN(loanamount) || isNaN(InterestRate) || isNaN(Loanterm)) {
        alert("Please enter valid Number for all the fields ");
    }


    const monthlyInterest = InterestRate / 100 / 12;
    const totalPayment = Loanterm;
    const monthlyPayment = (loanamount * monthlyInterest) /(1-Math.pow(1+monthlyInterest , -totalPayment));

    const TotalInterest = (monthlyPayment * totalPayment) - loanamount;

    displayResult(monthlyPayment,TotalInterest);
}

function displayResult(monthlyPayment ,TotalInterest) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    <p><strong> Monthly Payment: ${monthlyPayment.toFixed(2)} </p></strong>
    <p><strong> Toatl Interest: ${TotalInterest.toFixed(2)} </p></strong>`
}





