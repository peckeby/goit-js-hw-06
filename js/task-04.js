const btnD = document.querySelector('button[data-action="decrement"]');
const btnI = document.querySelector('button[data-action="increment"]');
console.log(btnI);

let counterValue = 0;

const vlu = document.querySelector("#value");

const plusOne = () => {
    counterValue += 1;
    vlu.innerHTML = counterValue;
    return vlu;}

const minusOne = () => {
    counterValue -= 1;
    vlu.innerHTML = counterValue;
    return vlu;}

btnD.addEventListener ("click", minusOne);
btnI.addEventListener("click", plusOne);
