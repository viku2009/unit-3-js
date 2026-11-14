document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "") {
        document.getElementById("message").innerHTML = "Please enter your name";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("message").innerHTML = "Invalid Email";
    }
    else {
        document.getElementById("message").innerHTML = "Registration Successful";
    }
};