// basic files loaded in project
let express = require("express")
let app = express() ; 
let port = 3000 ; 



// routing 
app.get('/', (req, res) => {
    res.send('Hello welcome to home page')
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