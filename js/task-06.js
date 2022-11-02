const valIt = document.querySelector("#validation-input");


valIt.addEventListener("blur", () => {
    const symbols = valIt.value.split("");
    symbols.length >= valIt.dataset.length ? valIt.classList.add("valid"): valIt.classList.add("invalid");
});

