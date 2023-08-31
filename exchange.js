document.addEventListener('DOMContentLoaded', function(){

    const amountTotal = document.getElementById('amount');
    const currencyTotal = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');
    
    const API_KEY = "R+X1tNsonVmTHCjiPju7AA==gnNnzTSAAqE38YmV";
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";
    
    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;
    
        fetch(url, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            const resultPrice = amountTotal * rate;
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
    
        })
        .catch(error =>{
            console.error('Resquest failed:' , error);
            result.innerHTML = 'An error occured please try again later';
        })
    
    })
})
