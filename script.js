async function login() {
    const email = document.getElementById(lem);
    const password = document.getElementById(lpw);
    if(email == ""){
        alert("Az emailt mezőt nem töltötte ki")
    }
    else if (password==""){
        alert("A jelszó mezőt nem töltötte ki")
    }
    else if(isEmail(email)){
        alert("Az email nem jó formátumba adtad meg");
    }
    else {
        alert("Sikeres bejelentkezés")
    }
}

async function singup() {
    const email = document.getElementById(sem);
    const password1 = document.getElementById(spw1);
    const password2 = document.getElementById(spw2);

    if(email == "" || password1=="" || password2){
        alert("Az emailt vagy a jelszó mezőt nem töltötte ki")
    }
    else if(isEmail(email)){
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
    if(email.includes('@')){
        return true;
    }
    return false;
}
