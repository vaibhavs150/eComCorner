function validateform() {
    const name = document.myform.Name.value;
    const number = document.myform.number.value;
    const email = document.myform.email.value;
    const password = document.myform.password.value;
    const repeatPassword = document.myform.repeatPassword.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    }

    if (number == null || number == "") {
        alert("Number can't be blank");
        return false;
    }

    const emailPattern = /^\S+@\S+\.\S+$/; // Simple email pattern
    if (email == null || email == "" || !emailPattern.test(email)) {
        alert("Invalid email");
        return false;
    }

    if (password == null || password == "") {
        alert("Password can't be blank");
        return false;
    }

    if (password !== repeatPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
