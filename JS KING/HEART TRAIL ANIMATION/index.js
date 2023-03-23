let body_el = document.querySelector("body")
let span_el = document.createElement("span")
body_el.addEventListener('mousemove' , (e)=>{
    let x  = e.offsetX ;
    let y = e.offsetY ;
    span_el.style.left = x +"px" ;
    body_el.appendChild(span_el)

})



