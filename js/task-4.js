
const form = document.querySelector(".login-form");

form.addEventListener("submit", Submit);

const User = {

}

function Submit(event) {
    event.preventDefault();
    const target = event.target;
    if (target.email.value == "" || target.password.value == "") {
        alert("All form fields must be filled in");
    } else {
        User[target.email.name] = target.email.value;
        User[target.password.name] = target.password.value;
        console.log(User);
        reset(target);
    }

}

function reset(form) {
    form.email.value = "";
    form.password.value = "";
}