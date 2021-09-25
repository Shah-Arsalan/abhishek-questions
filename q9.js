var input = document.querySelector(".name")
var colors = document.querySelector(".color")
var btn = document.querySelector(".button")
var output = document.querySelector(".out")
btn.addEventListener("click", print)

function print(){
    output.innerHTML = `<p style="color:${colors.value}"> ${input.value} </p>`
}