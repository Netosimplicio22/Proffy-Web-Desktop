function script(){
    var input = document.getElementById("email")
    var label = document.getElementById("label1")

    if(input.value.length >= 1){
        label.style.top = "14px"
        label.style.fontSize = "12px"
        label.style.color = "#C1BCCC"
    }
}

function exclude(){
    var input = document.getElementById("email")    
    var label = document.getElementById("label1")

    if(input.value.length == 0){
        label.style.top = "24px"
        label.style.fontSize = "16px"
        label.style.color = "#9C98A6"
    }
}

function script2(){
    var input = document.getElementById("password")
    var label = document.getElementById("label2")

    if(input.value.length >= 1){
        label.style.top = "14px"
        label.style.fontSize = "12px"
        label.style.color = "#C1BCCC"
    }
}

function exclude2(){
    var input = document.getElementById("password")
    var label = document.getElementById("label2")

    if(input.value.length == 0){
        label.style.top = "24px"
        label.style.fontSize = "16px"
        label.style.color = "#9C98A6"
    }
}

function ver(){
    var pass = document.getElementById("password")
    var icon1 = document.getElementById("olho1") 
    var icon2 = document.getElementById("olho2")

    if(pass.type == "password" && pass.value.length >= 1){
        pass.type = "text"
        icon1.style.display = "none"
        icon2.style.display = "block"
    }
}

function esconder(){
    var pass = document.getElementById("password")
    var icon1 = document.getElementById("olho1") 
    var icon2 = document.getElementById("olho2")

    if(pass.type == "text"){
        pass.type = "password"
        icon1.style.display = "block"
        icon2.style.display = "none"
    }
}
