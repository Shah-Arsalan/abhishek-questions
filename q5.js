var para=document.querySelector(".para");
var fontBtn=document.querySelectorAll(".font-btn")
let font=16
para.style.fontSize=16+'px';

fontBtn[0].addEventListener("click", increase)
fontBtn[1].addEventListener("click", decrease)


function increase(){
    font = font + 4;
    para.style.fontSize = font + "px";
    console.log(para.style.fontSize);
    if( font % 5 === 0){
        para.style.color = "red";
    }
     else if(font % 5 != 0){
         para.style.color = "black";
     }
}

function decrease(){
    font = font - 4;
    para.style.fontSize = font + "px";
    console.log(para.style.fontSize);
    if( font % 5 === 0){
        para.style.color = "red";
    }
     else if(font % 5 != 0){
         para.style.color = "black";
     }
}


