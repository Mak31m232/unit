var shetmenu = 0;

function menu() {
    if (shetmenu==0) {
        let menu = document.getElementById("menu") 
        let menuicon = document.getElementById("icon-div") 
        let registration = document.getElementById("registration")
        let content = document.getElementById("content-watch")
        content.style.marginTop = "-50%"
        registration.style.marginTop = "-58%"
        menuicon.style.display="block"
        menu.style.display="none"
        shetmenu = 1;
    }   
    else if (shetmenu==1){
        let boom = document.getElementById("menu")
        let menuicon = document.getElementById("icon-div") 
        let registration = document.getElementById("registration")
        let content = document.getElementById("content-watch")
        content.style.marginTop = "-46.2%"
        registration.style.marginTop = "-35%"
        menuicon.style.display="none"
        boom.style.display="block"
        shetmenu = 0;
    }
}

function registration() {
	var registration = document.getElementById("registration")
	registration.style.display = "block"
}

function registration2() {
	var registration = document.getElementById("registration");
	registration.style.display = "none"
    var sign = document.getElementById("btn-sign");
    var acaunt = document.getElementById("acaunt")
    var creation = document.getElementById("creation")
    var user = document.getElementById("usernameFiel").value
    var user2 = document.getElementById("usernameField").value
    let shadow = document.getElementById("shadow")
    let registrationmobil = document.getElementById("registration-mobil")
    registrationmobil.style.display = "none"
    shadow.style.display = "none"
    console.log("Password: "+user)
    console.log("Name: "+user2)
    acaunt.style.marginLeft = "96.5%"
    creation.style.marginLeft = "-48%"
    sign.style.display = "none"
    alert("Вы успешно вошли в акаунт")
}

function registration3() {
	var registration = document.getElementById("registration");
    var sign = document.getElementById("btn-sign");
    var acaunt = document.getElementById("acaunt")
    var creation = document.getElementById("creation")
    var user = document.getElementById("usernameFiel").value
    var user2 = document.getElementById("usernameField").value
    let shadow = document.getElementById("shadow")
    let registrationmobil = document.getElementById("registration-mobil")
    registrationmobil.style.display = "none"
    shadow.style.display = "none"
    console.log("Password: "+user)
    console.log("Name: "+user2)
    acaunt.style.marginLeft = "96.5%"
    creation.style.marginLeft = "-48%"
	sign.style.display = "none"
    registration.style.display = "none"
    alert("Вы успешно зарегистрировались")
}

function registration4() {
	var f = document.getElementById("registration");
    let content = document.getElementById("content-watch")
    content.style.marginTop = "-46.1%"
    content.style.display = "block"
	f.style.display = "none"
}

let shet = 0;

function menu2() {
    if (shet==0) {
        let boom = document.getElementById("menu2")
        boom.style.display="block"
        shet = 1;
    }   
    else if (shet==1){
        let boom = document.getElementById("menu2")
        boom.style.display="none"
        shet = 0;
    }
}