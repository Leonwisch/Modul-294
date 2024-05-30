document.forms.Login.addEventListener('submit', (event) =>{
    event.preventDefault();
    debugger

    const form = document.forms.Login;

    const passwordElement = form.elements.password;
    const passwordverifyElement = form.elements.passwordverify;

    const passwordValue = passwordElement.value;
    const passwordverifyValue = passwordverifyElement.value;


    passwordverifyElement.setCustomValidity("");
        if (passwordverifyValue !== passwordValue) {
            passwordverifyElement.setCustomValidity("The Passwords do not match");
        } else {
            alert("successful login")
            }

});

