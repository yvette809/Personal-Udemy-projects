/* 
// first add the income/expense to the dom
// when icome/expense is added, update the total budget, show it on the ui and update the income/ expense value

*/

let totalBudget = document.querySelector('.total-budget')
let form = document.querySelector('.form-control')
let incomeValue = document.querySelector('.income-val')
let expenseValue = document.querySelector('.expense-val')
let selectedVal = document.querySelector('select')
let description = document.querySelector('#description')
let amount = document.querySelector('#number')
let incomeUi= document.querySelector('.income-container')
let expenseUi = document.querySelector('.expense-container')


// event listeners
form.addEventListener('submit', updateDom)

// show data in the dom

function showData (data){
    if(data.select ==='-'){
       expenseUi.innerHTML += `
       <li>
       <p>${data.descriptionText}</p>
       <p class="expense_val">${data.select}${data.amountValue}</p>

   </li>
       
       `
    }else{
        incomeUi.innerHTML += `
        <li>
        <p>${data.descriptionText}</p>
        <p class=".income_val">${data.select}${data.amountValue}</p>
 
    </li>
        
        `
    }
}

// update daa
let incomeArray = []
let expenseArray = []
let dataArray = []
function updateDom (e){

 e.preventDefault()
  let select = selectedVal.value
  let descriptionText = description.value
  let amountValue = amount.value
  if(selectedVal=== '' || description === '' || amount===''){
    alert('fields cannot be empty')
    return
  }else{
     let data = {
        id: Math.floor(Math.random()* 1000),
        select,
        descriptionText,
        amountValue
     }

     data.select ==='+'? incomeArray.push(data):expenseArray.push(data)

     dataArray.push(data)
     showData(data)
    
    
     const totalIncome = incomeArray.reduce((acc, val) => (acc += Number(val.amountValue)), 0); 
     const totalExpense = expenseArray.reduce((acc, val) => (acc += Number(val.amountValue)), 0); 
     data.select=== '-'? expenseValue.innerText = `-${totalExpense}` : incomeValue.innerText = `+${totalIncome}` 
     
     let profit = totalIncome - totalExpense
   /*   totalBudget.innerText = `${profit}`   */
   profit > 0 ? totalBudget.innerText = `+${profit}` : totalBudget.innerText = `${profit}`
    
    /*  console.log('data',data, dataArray)
     console.log('expense', expenseArray)
     console.log('income', incomeArray) */
     
     selectedVal.value = ''
     description.value= ''
     amount.value = ''
     
  }
 

}