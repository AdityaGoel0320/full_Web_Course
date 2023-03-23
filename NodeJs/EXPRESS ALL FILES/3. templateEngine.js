let express = require("express")
let path = require('path') ; 
let app = express() ; 
let port = 3000 ; 

// main command to show you using template engine hbs
app.set("view engine" , "hbs") ; 

// routing hbs file
app.get('/', (req, res) => {
    res.render("index" , {name : "aditya goel"})
})

app.get('/', (req, res) => {
    res.send('Hello welcome to home page for template engine hbs')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname+ "/index.html")
})

app.get('/*', (req, res) => {
    res.send('404 error page')
})



app.listen(port , ()=>{
    console.log(`server running at port :- ${port}` )
})