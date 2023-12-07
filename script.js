const CalculatorSwitch = document.querySelector('.switch');
const logo = document.querySelector('.logo');
const del = document.querySelector('.del');
const clearButn = document.querySelector('.clear');
const answerButn = document.querySelector('.ans');
const storedAnswer = document.querySelector('.answer');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const operands = document.querySelectorAll('.operand');
let state = 'OFF';
let array = '';
let currentAnswer;
let answer = 0;
let stored = '';

CalculatorSwitch.addEventListener('click',()=>{
    if(!logo.classList.contains('anim')){
        logo.classList.add('anim')
        logo.style.display = 'flex';
    }
    setTimeout(()=>{
        logo.classList.remove('anim');
        logo.style.display = 'none';
    },1000)
    if(state=='OFF'){
        state = 'ON'
        CalculatorSwitch.textContent = 'OFF'
    }else{
        clear();
        state = 'OFF'
        CalculatorSwitch.textContent = 'ON'
    }
})

operands.forEach(operand=>{
    operand.addEventListener('click',()=>{
        if(state=='ON'){
            screen1.textContent +=operand.innerHTML;
            array += operand.getAttribute('value')
            currentAnswer = calculate(array);
            screen2.textContent = eval(currentAnswer);
            stored = eval(currentAnswer)
        }else{
            alert('Turn on your calculator');
        }
    })
})
function clear(){
    screen1.textContent = ''
    screen2.textContent = ''
    array=''
}

function calculate(array){
    answer = array;
    return answer;
}
del.addEventListener('click',deleteLast)
answerButn.addEventListener('click',calculateAnswer)
clearButn.addEventListener('click',clear)
storedAnswer.addEventListener('click',()=>{
    array += stored
    screen1.textContent += stored;
    currentAnswer = calculate(array)
    screen2.textContent =eval(currentAnswer);
})
function calculateAnswer(){
    currentAnswer = calculate(array);
    screen1.textContent = eval(currentAnswer); 
    screen2.textContent = ''; 
    answer = currentAnswer;
    stored = eval(currentAnswer)
}
function deleteLast(){
    screen1.textContent = screen1.textContent.slice(0,-1);
    array = array.slice(0,-1)
    currentAnswer = calculate(array);
    screen2.textContent = eval(currentAnswer);
}