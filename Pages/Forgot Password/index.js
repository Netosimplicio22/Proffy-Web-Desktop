function togo(){
    var input = document.getElementById("email")
    var label = document.getElementById("label")

    if(input.value.length >= 1){
        label.style.top = "14px"
        label.style.fontSize = "12px"
        label.style.color = "#C1BCCC"
    }
}

function toback(){
    var input = document.getElementById("email")
    var label = document.getElementById("label")

    if(input.value.length == 0){
        label.style.top = "24px"
        label.style.fontSize = "16px"
        label.style.color = "#9C98A6"
    }
}