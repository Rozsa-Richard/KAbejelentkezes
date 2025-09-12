const loginPage = document.getElementById("login");
const singupPage = document.getElementById("singup");
const loginText = document.getElementById("loginText");
const singupText = document.getElementById("singupText");
seeLogin();

async function login() {
    let email = document.getElementById("lem").value;
    let password = document.getElementById("lpw").value;
    console.log(isEmail(email));
    if(email ==""){
        alert("Az emailt mezőt nem töltötte ki")
    }
    else if (password==""){
        alert("A jelszó mezőt nem töltötte ki")
    }
    else if(!isEmail(email)){
        alert("Az email nem jó formátumba adtad meg");
    }
    else {
        alert("Sikeres bejelentkezés")
    }
}

async function singup() {
    let email = document.getElementById("sem").value;
    let password1 = document.getElementById("spw1").value;
    let password2 = document.getElementById("spw2").value;

    if(email == "" || password1=="" || password2==""){
        alert("Az emailt vagy a jelszó mezőt nem töltötte ki")
    }
    else if(!isEmail(email)){
        alert("Az email nem jó formátumba adtad meg");
    }
    else if (password1 != password2){
        alert("Regisztrációnál a jelszó nem egyezik");
    }
    else {
        alert("Sikereses regisztráció");
    }
}
function isEmail(email){
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return emailRegex.test(email)
}

function seeLogin(){
    loginText.innerHTML =`<h3>Bejelentkezés</h3>
                <label for="lem">Email: </label>
                <input id="lem" type="email"><br>
                <label for="lpw">Jelszó: </label>
                <input id="lpw" type="password"><br>
                <button onclick="login()">Bejelentkezés</button>`;
    singupText.innerHTML = `Nincs még fiókod? <button onclick="seeSingUp()">Regisztráció</button>`;
    singupPage.style.backgroundColor ="yellowgreen";
    loginPage.style.backgroundColor="yellow";
}
function seeSingUp(){
    singupText.innerHTML = `<h3>Regisztráció</h3>
                <label for="sem">Email: </label>
                <input id="sem" type="email"><br>
                <label for="spw1">Jelszó: </label>
                <input id="spw1" type="password"><br>
                <label for="spw2">Jelszó újra: </label>
                <input id="spw2" type="password"><br>
                <button onclick="singup()">Regisztráció</button>`;
    loginText.innerHTML= `Van már fiókod? <button onclick="seeLogin()">Bejelentkezés</button>`;
    singupPage.style.backgroundColor ="yellow";
    loginPage.style.backgroundColor="yellowgreen";
}