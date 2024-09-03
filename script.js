const passwordBox = document.querySelector("#password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*(){}[]?/";
const size = 10;
const allChars = upperCase + lowerCase + number + symbol;

function createPass(){
    let password = "";
    while(size > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function Copy(){
    passwordBox.select();
    document.execCommand("copy");
}



