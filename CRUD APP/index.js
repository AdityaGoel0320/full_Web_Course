let ul_el = document.getElementById("ul")
let btn_el = document.getElementById("btn")

//CODE TO MAKE (ADD) BUTTON WORK
btn_el.addEventListener('click', addchapter)
//CODE TO MAKE (ADD) BUTTON WORK




function addchapter(e) {

    //TO TAKE INPUT VALUE OF ADD SIBLING TEXT
    if (ul_el.children[0].className == "newemptymsg") {
        ul_el.children[0].remove();
    }
    let currentbtn = e.currentTarget;
    let currentinput = currentbtn.previousElementSibling
    let currentchaptername = currentinput.value;
    console.log(currentinput.value)
    //TO TAKE INPUT VALUE OF ADD SIBLING TEXT

    //TO ADD NEW LI ON ADD BUTTON CLICK

    let newli = document.createElement("li")
    newli.className = `list-group-item d-flex`

    newli.innerHTML = `<h3 class="flex-grow-1">${currentchaptername}</h3>
    <button class="btn btn-warning mx-3" onclick="editchapter(this)">Edit</button>
    <button class="btn btn-danger" onclick="removechapter(this)">Remove</button>`

    ul_el.appendChild(newli)

    //TO ADD NEW LI ON ADD BUTTON CLICK
}





// FUNCTION THAT WORK WHEN REMOVE BUTTON IS CLICKED
function removechapter(currentelement) {

    currentelement.parentElement.remove();


    // if thereis nothingh than give an message to add items
    if (ul_el.children.length <= 0) {
        let newemptymsg = document.createElement("h3")
        newemptymsg.textContent = "Nothing there please add Chapter"
        newemptymsg.classList.add("newemptymsg")
        ul_el.appendChild(newemptymsg)
    }

}
// FUNCTION THAT WORK WHEN REMOVE BUTTON IS CLICKED



// FUNCTION THAT WORKS WHEN EDIT BUTTON IS CLICKED
function editchapter(currentelement) { 

    if (currentelement.textContent == "Done") {
        currentelement.textContent = "Edit"
        let currentchaptername = currentelement.previousElementSibling.value;
        let currentheading = document.createElement("h3")
        currentheading.className = "flex-grow-1"
        currentheading.textContent = currentchaptername
        currentelement.parentElement.replaceChild(currentheading, currentelement.previousElementSibling)





    }
    else {

        currentelement.textContent = "Done"
        let currentchaptername = currentelement.previousElementSibling.textContent;
        let currentinput = document.createElement("input")
        currentinput.type = "text"
        currentinput.placeholder = "chapter name"
        currentinput.className = "form-control"
        currentinput.value = currentchaptername
        currentelement.parentElement.replaceChild(currentinput, currentelement.previousElementSibling)
    }



}
// FUNCTION THAT WORKS WHEN EDIT BUTTON IS CLICKED
