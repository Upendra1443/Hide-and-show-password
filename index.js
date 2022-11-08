// alert('hello')

let passwordEl = document.getElementById("password");
let eyeIcon = document.getElementById("eye-icon");

eyeIcon.onclick = function(){
    if(passwordEl.type == "password"){
        passwordEl.type = "text";
        eyeIcon.src = "eye-open.png";
    }
    else{
        passwordEl.type = "password";
        eyeIcon.src = "eye-close.png"

    }
}