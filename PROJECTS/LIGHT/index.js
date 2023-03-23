//ELEMENT FORMATION
let btn_el = document.getElementById("btn");
let img_el = document.getElementById("img")
//ELEMENT FORMATION

//MAKE BUTTON WORKING
btn_el.addEventListener("click", fnc);
//MAKE BUTTON WORKING



//FUNCTION THAT WORK WHEN BUTTON CLICK
function fnc(){
        if(btn_el.innerText.includes('on')){
            img_el.src= "on.jpg"
            btn_el.innerHTML = "turn off"
        }else{
            img_el.src= "off.jpg"
            btn_el.innerHTML = "turn on"
        }
}
//FUNCTION THAT WORK WHEN BUTTON CLICK

