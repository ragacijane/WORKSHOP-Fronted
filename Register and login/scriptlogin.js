let usersArry = [{
    userName : "_",
    mail : "_",
    phone : "_",
    password : "_"
}];

let userNameErr;
let passwordErr;
let mailErr;
let phoneErr;
let repasswordErr;



function initialize(){

    userNameErr = document.getElementById("userNameErr");
    passwordErr = document.getElementById("passwordErr");
    mailErr = document.getElementById("mailErr");
    phoneErr = document.getElementById("phoneErr");
    repasswordErr = document.getElementById("repasswordErr");

    let user = localStorage.getItem("users");

    if( user !== null ){
        usersArry = JSON.parse( user );
    }
    else{
        localStorage.setItem( "users" , JSON.stringify(usersArry) );
    }
}

function restartErr(){

    userNameErr.innerHTML = "";
    passwordErr.innerHTML = "";
    mailErr.innerHTML = "";
    phoneErr.innerHTML = "";
    repasswordErr.innerHTML = "";
}

function register(){

    restartErr();

    let userName = document.getElementById("userName").value;
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;

    if(/^[a-zA-Z]\w*$/.test( userName ) === false ){
        userNameErr.innerHTM = "Username is not in format.";
    }
    else if(/^\w+@[a-z]+\.[a-z]{2,3}$/.test( mail ) === false ){
        mailErr.innerHTML = "Mail is not in format.";
    }
    else if (/^\+3816\d{7,8}/.test( phone ) === false ){
        phoneErr.innerHTML = "Phone is not in format.";
    }
    else if(
        /^.{6,}$/.test( password ) === false ||
        /[a-z]/.test( password ) === false ||
        /[A-Z]/.test( password ) ===false ||
        /\d/.test( password ) === false
        ){
        passwordErr.innerHTML = "Password is not in format.";
    }
    else if( password !== repassword ){
        repasswordErr.innerHTML = "Passwords are different.";
    }
    else if( !checkUserName( userName ) ){
        userNameErr.innerHTML = "Already taken.";
    }
    else{
        addUser( userName, mail, phone, password );

        window.location.href = "login.html";
    }
}

function checkUserName( name ){
    for ( let i = 0 ; i < usersArry.length ; i++ ){
        if( name === usersArry[i]["userName"] ){
            return false;
        }
    }
    return true;
}

function addUser( i, m, t, l ){
    usersArry.push({
        userName: i,
        mail : m,
        phone: t,
        password : l
    });
    
    localStorage.setItem( "users" , JSON.stringify(usersArry) );

}

function login(){

    userNameErr.innerHTML = "";
    passwordErr.innerHTML = "";

    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    for ( let i = 0 ; i < usersArry.length ; i++ ){
        if( userName === usersArry[i]["userName"] ){
            if( password === usersArry[i]["password"] ){
                window.location.href = "wellcome.html";
                break;
            }
            else {
                userNameErr.innerHTML = "";
                passwordErr.innerHTML = "Incorrect password.";
                break;
            }
        }
        else if(i === usersArry.length-1){
            userNameErr.innerHTML = "Incorrect username.";
        }
    }
}

