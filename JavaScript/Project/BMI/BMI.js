const form = document.querySelector('form')
// this usecase will give you reply
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const last_result = document.querySelector('#last_result');

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const BMI = ((weight *10000)/(height * height)).toFixed(2)
        results.innerHTML = `<span>${BMI}</span>`;
    }
    
    
    if (results.innerHTML < 18.6) {
        last_result.innerHTML = "Under Weight." 
        
    }
    else if(results.innerHTML >= 18.6 && results.innerHTML <= 24.9) {
        last_result.innerHTML = "Normal Weight." 
    }
    else{
        last_result.innerHTML = "Over Weight." 

    }
    
})
