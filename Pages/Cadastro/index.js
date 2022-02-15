function ver(){
    var icon1 = document.getElementById("olho1")
    var icon2 = document.getElementById("olho2")
    var input = document.getElementById("password")

    if(input.type == "password" && input.value.length >= 1){
        input.type = "text"
        icon1.style.display = "none"
        icon2.style.display = "block"
    }
}

function esconder(){
    var icon1 = document.getElementById("olho1")
    var icon2 = document.getElementById("olho2")
    var input = document.getElementById("password")

    if(input.type == "text"){
        input.type = "password"
        icon1.style.display = "block"
        icon2.style.display = "none"
    }
}

function toname(){
    var label = document.getElementById("label1")
    var input = document.getElementById("nome")

    if(input.value.length >= 1){
        label.style.top = "14px"
        label.style.fontSize = "12px"
        label.style.color = "#C1BCCC"
    }
}

function backname(){
    var label = document.getElementById("label1")
    var input = document.getElementById("nome")

    if(input.value.length == 0){
        label.style.top = "24px"
        label.style.fontSize = "16px"
        label.style.color = "#9C98A6"
    }
}

function tosobre(){
    var label = document.getElementById("label2")
    var input = document.getElementById("sobrenome")

    if(input.value.length >= 1){
        label.style.top = "14px"
        label.style.fontSize = "12px"
        label.style.color = "#C1BCCC"
    }
}

function backsobre(){
    var label = document.getElementById("label2")
    var input = document.getElementById("sobrenome")

    if(input.value.length == 0){
        label.style.top = "24px"
        label.style.fontSize = "16px"
        label.style.color = "#9C98A6"
    }
}

function toemail(){
    var label = document.getElementById("label3")
    var input = document.getElementById("email")

    if(input.value.length >= 1){
        label.style.top = "14px"
        label.style.fontSize = "12px"
        label.style.color = "#C1BCCC"
    }
}

function backemail(){
    var label = document.getElementById("label3")
    var input = document.getElementById("email")

    if(input.value.length == 0){
        label.style.top = "24px"
        label.style.fontSize = "16px"
        label.style.color = "#9C98A6"
    }
}

function topass(){
    var label = document.getElementById("label4")
    var input = document.getElementById("password")

    if(input.value.length >= 1){
        label.style.top = "14px"
        label.style.fontSize = "12px"
        label.style.color = "#C1BCCC"
    }
}

function backpass(){
    var label = document.getElementById("label4")
    var input = document.getElementById("password")

    if(input.value.length == 0){
        label.style.top = "24px"
        label.style.fontSize = "16px"
        label.style.color = "#9C98A6"
    }
}

