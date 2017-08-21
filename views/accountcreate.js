function validateForm() {
    var hadError = false;
    if (!valid(getText("uname"), "^(\\w|\\d){4,}$")) {
        setError("uname", "Username must be at least 4 characters and contain only alphanumeric characters.");
        hadError = true;
    }
    if (!valid(getText("pwd"), "^(.){6,}$")) {
        setError("pwd", "Password must be at least 6 characters.");
        hadError = true;
    }
    if (!valid(getText("email"), "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")) {
        setError("email", "Must be a valid email address.");
        hadError = true;
    }
}

function valid(text, criteria) {
    return new RegExp(criteria).test(text);
}

function setError(id, error) {
    getElement(id).style = "border: 1px solid red";
    getElement(id + "Verification").innerHTML = error;
}

function getText(id) {
    return getElement(id).value;
}

function getElement(id) {
    return document.getElementById(id);
}

