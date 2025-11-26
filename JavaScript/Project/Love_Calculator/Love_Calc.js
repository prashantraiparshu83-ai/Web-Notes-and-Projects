function calculateLove(){

    //trim function is use for remove starting space and last space
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    
    if (name1 === "" || name2 === "" ) {
        alert("Please enter both names.")
    }
    else{
        const lovePercentge = Math.floor(Math.random() * 101 )

        const result = document.getElementById("result")
        result.innerHTML =`${name1} and ${name2} is Love Percentage ${lovePercentge}`;

        if (lovePercentge < 30) {
             result.innerHTML +=  "<br> Not Great Match.Keeping Looking!"
        }
        else if (lovePercentge >= 30 && lovePercentge < 70) {
             result.innerHTML +=  "<br> There is potential. Give it a try!"
        }
        else{
                result.innerHTML +=  "<br> Great Match! Love is in the Air!"
                
        }
    }

}