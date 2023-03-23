let  bars_el =   document.getElementById("bars")
let  lisst_el =   document.getElementById("lisst")
// // let   =   document.getElementById("")
// // let   =   document.getElementById("")
// // let   =   document.getElementById("")
// // let   =   document.getElementById("")


bars_el.addEventListener("click" , fnc) ;

function fnc(){
    console.log("you have clicked")

    lisst_el.classList.toggle("active")
}