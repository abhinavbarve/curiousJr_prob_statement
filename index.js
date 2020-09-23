$(window).on("load", function () {        // fades Out wrapper when page is loaded.
    $(".loader-wrapper").fadeOut("fast")
})

let email_correct = false;
let password_correct = false;

// dynamic copyright year.
let copyright = document.getElementById("copyright");
const copyright_text = "Copyright @" + new Date().getFullYear() + " <a target='_blank' href='https://curiousjr.com/'><strong>CURIOUS JR</strong></a>";
copyright.innerHTML = copyright_text;


// email validation 
function email_val() {
    let email = document.getElementById("input_email").value
    if (email.includes("@") === false | email.includes(".") === false) {
        document.getElementById("email_val").style.visibility = "visible";
        email_correct = false;
    } else {
        document.getElementById("email_val").style.visibility = "hidden";
        email_correct = true;
    }
}

// password validation
function pass_val() {
    let password = document.getElementById("input_password").value;
    if (password.length <= 5) {
        document.getElementById("pass_val").style.visibility = "visible";
        password_correct = false;
    } else {
        document.getElementById("pass_val").style.visibility = "hidden";
        password_correct = true;
    }
}

// after-login rituals.
function login(e) {
    console.log(e.value)
    if (email_correct === true && password_correct === true) {   
        
        $(".loader-wrapper").show()
        
        setTimeout(function () {
            $(".loader-wrapper").hide()
            alert("login successful")
        }, 10000);

        document.getElementById("input_email").value = ""
        document.getElementById("input_password").value = ""
    } else {
        alert("login unsuccessful")
    }
    e.preventDefault();  //prevents default refreshing on submitting.
}
