const form = document.querySelector("form.login-form");


const inputList = document.querySelector("form.login-form").elements;
console.log(inputList.password.value);


function handleSbm(event) {
    event.preventDefault();
    const inputEmail = inputList["email"];
    const inputPassword = inputList["password"];
    const emailValue = inputEmail.value;
    const passwordValue = inputPassword.value;

    if (!inputEmail.value === true || !inputPassword.value === true){
    return alert("Необхідно заповнити всі поля!");
    } else {
        const userData = {
            [inputEmail.name]:  emailValue,
            [inputPassword.name]: passwordValue,
        };
    form.reset();
    return console.log(userData);
    }
}
// };

form.addEventListener("submit", handleSbm);

