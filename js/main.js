let runningTotal; 
let total; 

let result = document.getElementById('result'); 
let plus = document.getElementById('plus'); 
let userInput = document.getElementById('userInput'); 
let minus = document.getElementById('minus'); 

plus.addEventListener('click', function() {
    total = parseInt(userInput.value); 
    runningTotal += total; 
    render(); 
})

minus.addEventListener('click', function() {
    total = parseInt(userInput.value); 
    runningTotal -= total; 
    render(); 
})

init(); 

function init() {
    runningTotal = 0; 
    render(); 
}

function render() {
    result.textContent = (runningTotal < 0) ? runningTotal : runningTotal; 
    result.style.color = (runningTotal < 0) ?  "red" : "black"; 

}
