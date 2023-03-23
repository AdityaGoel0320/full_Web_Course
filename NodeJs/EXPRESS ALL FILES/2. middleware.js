let express = require("express")
let path = require('path') ; 
let app = express() ; 
let port = 3000 ; 

let file_path = path.join(__dirname  , "../public") ; 


// built in middleware
app.use(express.static(file_path))


app.get('/', (req, res) => {
    res.send('Hello welcome to home page for middleware')
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