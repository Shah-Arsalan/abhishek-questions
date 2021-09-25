// var input = document.querySelector(".password");
// var btn = document.querySelector(".status")

// input.addEventListener("input", color)

// function color (){
//     if (input.value.length < 10){
//         input.style.borderColor = "red";
//     }
//     else {
//         input.style.borderColor = "green";
//     }
// }


var input = document.querySelector("#input")
var button = document.querySelector("#password")
input.addEventListener("input" , inputRun)

function inputRun(){
    // console.log(input.value.length)
    if(input.value.length > 10){
        // console.log("true")
        input.style.borderColor = "green"
    } else{
        // console.log("false")
        input.style.borderColor = "red"
    }
}

button.addEventListener("click" , buttonRun)

function buttonRun(){
   if(input.type === "password"){
   input.type = "text" 
   button.innerText = "hide"
  
   } else if(input.type === "text"){
       input.type = "password"
       button.innerText = "show";
   }


}