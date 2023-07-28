let celciusInput = document.querySelector('#celcius > input');
let fahrenheitInput = document.querySelector('#fahrenheit > input');
//let fahrenheit=document.querySelector('#fahrenheit < input')


let btn = document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp=parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) +32
    fahrenheitInput.value= roundNumber(fTemp)


})

fahrenheitInput.addEventListener('input', function(){
    let fTemp=parseFloat(FahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
     celciusInput.value = roundNumber (cTemp)

})

btn.addEventListener('click', ()=>{
    celciusInput.value=""
    fahrenheitInput.value=""
})