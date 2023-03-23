let express = require("express")
let path = require("path")
let app = express();
let port = process.env.PORT || 8000;

app.set('view engine' , 'hbs'); 

// routing
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/about", (req, res) => {
    // res.send("welcome to about page")
    res.render("about")
})

app.get("/weather", (req, res) => {
    res.send("welcome to weather page")
})

app.get("*", (req, res) => {
    res.send("404 page")
})

app.listen(port, () => {
    console.log(`listening to port number :- ${port}`)
}); 