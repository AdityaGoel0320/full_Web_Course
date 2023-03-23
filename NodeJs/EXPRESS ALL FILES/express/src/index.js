let express = require("express")
let path = require('path') ; 
let hbs = require("hbs")
let app = express() ; 
let port = 3000 ; 

// path of custom directory
let custom_template_path = path.join(__dirname  , "../template" )

// main command to show you using template engine hbs
app.set("view engine" , "hbs") ; 

// now to change view directtory to custom directory
app.set("views", custom_template_path)

// to use partials 
let partials_path = path.join(__dirname  , "../template/partials" )


hbs.registerPartials(partials_path)




// routing hbs file
app.get('/', (req, res) => {
    res.render("index" , {name : "aditya goel"})
})

app.get('/', (req, res) => {
    res.send('Hello welcome to home page for template engine hbs')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname+ "../index.html")
})

app.get('/*', (req, res) => {
    res.send('404 error page')
})


// portal for  webapge
app.listen(port , ()=>{
    console.log(`server running at port :- ${port}` )
})