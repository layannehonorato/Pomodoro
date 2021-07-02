//AUMENTAR TEMPO DE TRABALHO =========================================================================

const plusWork = document.getElementById("arrowPlusWork");

plusWork.addEventListener('click',() => {

const cardWork = parseInt(document.querySelector('#valueWork').innerText);

let x= cardWork + 1;
if(x<41){
document.getElementById("valueWork").innerHTML="<h1>"+x+"</h1>";
}
})



// DIMINUIR  TEMPO DE TRABALHO ========================================================================
 
const minusWork = document.getElementById("arrowMinusWork");

minusWork.addEventListener('click',() => {

const cardWork = parseInt(document.querySelector('#valueWork').innerText);

let x= cardWork - 1;
if(x >= 25){
document.getElementById("valueWork").innerHTML="<h1>"+x+"</h1>";
}
})



// AUMENTAR TEMPO DE DESCANSO ========================================================================

const plusBreak = document.getElementById("arrowPlusBreak");

plusBreak.addEventListener('click',() => {

const cardBreak = parseInt(document.querySelector('#valueBreak').innerText);

let x= cardBreak + 1;

if(x<31){
document.getElementById("valueBreak").innerHTML="<h1>"+x+"</h1>";
}
})



// DIMINUIR TEMPO DE DESCANSO ========================================================================

const minusBreak = document.getElementById("arrowMinusBreak");

minusBreak.addEventListener('click',() => {

const cardBreak = parseInt(document.querySelector('#valueBreak').innerText);

let x= cardBreak - 1;

if(x>4){
document.getElementById("valueBreak").innerHTML="<h1>"+x+"</h1>";
}
})



// AUMENTAR SESSÕES ===================================================================================

const plusSession = document.getElementById("arrowPlusSession");

plusSession.addEventListener('click',() => {

const cardSession = parseInt(document.querySelector('#valueSession').innerText);

let x= cardSession + 1;

document.getElementById("valueSession").innerHTML="<h1>"+x+"</h1>";
})




// DIMINUIR SESSÕES ===================================================================================
const minusSession = document.getElementById("arrowMinusSession");

minusSession.addEventListener('click',() => {

const cardSession = parseInt(document.querySelector('#valueSession').innerText);

let x= cardSession - 1;

if(x>1){
document.getElementById("valueSession").innerHTML="<h1>"+x+"</h1>";
}
})




