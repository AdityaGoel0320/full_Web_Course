let bg_music = new Audio("music.mp3");
let gameover_music = new Audio("gameover.mp3")
let turn_music = new Audio("ting.mp3")
let box_el = document.getElementsByClassName("box")
let boxtext_el = document.getElementsByClassName("boxtext")

let turn = "X";


// Function to change the turn of the user
function changeturn() {

    return turn === "X" ? "0" : "X"

}




//  Game Logic
Array.from(box_el).forEach((element), () => {
    element.addEventListener("click", clickfnc);
});


function clickfnc() {
    alert("you have clicked")
}






