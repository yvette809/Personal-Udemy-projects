const calculatorDisplay = document.querySelector('h1')
const inputBtns = document.querySelectorAll('button')
const clearBtn = document.getElementById('clear-btn')


let firstValue = 0
let operatorValue = ''
let awaitingNextValue = false



function sendNumberValue (number){
    /* if current display value is 0, we want to replace it else we add number */

    

    // replace current display value if first value is entered
    if(awaitingNextValue){
        calculatorDisplay.innerText = number
        awaitingNextValue =false
    }else{
    const displayValue = calculatorDisplay.innerText
    calculatorDisplay.innerText = displayValue === '0'? number : displayValue + number 

    }
}

function addDecimal(){
    // if operator pressed, don't add decimal
    if(awaitingNextValue) return 
    //if no decimal, add one
    if(!calculatorDisplay.innerText.includes('.')){
        calculatorDisplay.innerHTML = `${calculatorDisplay.innerText}.`
    }
   
}

// calculate first and second values depending on operator

const calculate = {
    
}

function useOperator(operator){
    const currentValue = Number(calculatorDisplay.innerText)

    // prevent multiple opearators
    if(operatorValue && awaitingNextValue) return
    //asign firstvalue if no value
    if(!firstValue){
        firstValue = currentValue
    }else{
        console.log(firstValue,currentValue, operatorValue)
    }

    // raedy for next value, store operator
    awaitingNextValue = true
    operatorValue = operator
    
}

// add event listeners for numbers,operators, decimal buttons
clearBtn.addEventListener('click',resetAll)

inputBtns.forEach(inputBtn =>{
    if(inputBtn.classList.length === 0){
        inputBtn.addEventListener('click', ()=>sendNumberValue(inputBtn.value))
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', ()=>useOperator(inputBtn.value))
    }else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click',()=> addDecimal())
    }
})

// reset all values

function resetAll (){
    calculatorDisplay.innerText = '0'
    
firstValue = 0
operatorValue = ''
awaitingNextValue = false

}