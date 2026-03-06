let user = {

};
const renderData = (event) => {
    event.preventDefault()
    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("pass");
    let inputRePassword  = document.getElementById("pass_again");
    let newEmail = inputEmail.value;
    let newPassword = inputPassword.value;
    let newRePassword = inputRePassword.value;
    user.email = newEmail;
    user.password = newPassword;
    user.rePassword = newRePassword;
    console.log(user);
    inputEmail.value = "";
    inputPassword.value = "";
    inputRePassword.value = "";
}
let buttonSumbit = document.getElementsByClassName("btn_signin")[0];
buttonSumbit.addEventListener("click",renderData);