var  lname = document.getElementById("lastname");
var  email = document.getElementById("email");
var  pass = document.getElementById("password");
var  con_pass = document.getElementById("confirm-password");

function inputForm() {
    let fname = document.getElementById("firstname").value;
    if (fname.length<2 || fname.length>20) {
        document.getElementById("dot1").style.backgroundColor="red";
    }
    else {
        document.getElementById("dot1").style.backgroundColor="green";
    }

    let email = document.getElementById("email").value;
    if (email.length<4 || email.length>30) {
        document.getElementById("dot2").style.backgroundColor="red";
    }
    else {
        document.getElementById("dot2").style.backgroundColor="green";
    }

    let pass = document.getElementById("password").value;
    if (pass.length<8) {
        document.getElementById("dot3").style.backgroundColor="red";
    }
    else {
        document.getElementById("dot3").style.backgroundColor="green";
    }
}

function validateForm() {
    let fname = document.forms["signup"]["fname"].value;
    let email = document.forms["signup"]["email"].value;
    let password = document.forms["signup"]["password"].value;
    let con_password = document.forms["signup"]["confirm-password"].value;

    //<!-- Check for presence -->
    if (fname == "") {
        alert("Name must be filled out");
        return false;
    }
    else if (email == "") {
        alert("E-mail must be filled out");
        return false;
    }
    else if (password == "") {
        alert("Password must be filled out");
        return false;
    }
    else if (con_password == "") {
        alert("Confirmation of the password must be filled out");
        return false;
    }

    //<!-- Length check -->
    else if (fname.length<2 || fname.length>20) {
        alert("Name length must be between 2 and 20 symbols");
        return false;
    }
    else if (email.length<4 || email.length>30) {
        alert("E-mail length must be between 4 and 30 symbols");
        return false;
    }
    else if (password.length<8) {
        alert("Password must contain at least 8 symbols");
        return false;
    }

    //<!-- Similarity check -->
    else if (password!=con_password) {
        alert("Passwords do not match")
    }
    else {
        var sound = document.getElementById("applesound");
        sound.play();
        alert("Successfully Validated!");
    }
}