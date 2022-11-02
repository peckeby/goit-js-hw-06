const rangeInput = document.querySelector("input#font-size-control");
const text = document.querySelector("#text");
console.log(rangeInput.value);

rangeInput.addEventListener(("change"), () => {
const newSize = rangeInput.value;
text.setAttribute("style", `font-size: ${newSize}px`);
return text;
});
