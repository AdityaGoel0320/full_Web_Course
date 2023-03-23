let mongoose = require("mongoose")

// connection creation and new db formation(ttchannel)
mongoose.connect("mongodb://localhost:27017/ttchannel", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected")
}).catch((error) => {
    console.log(error)
})

// schema creation
let playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    video: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})



// model creation (compulsary to give name in singular)
let Playlist = new mongoose.model("Playlist" , playlistSchema)

// old method to create document
// let reactplaylist = new Playlist({
//     name: "react" , 
//     ctype: "frontEnd",
//     video: 80,
//     author: "thapa technical",
//     active: true,
//     // as date is set to default

// })
// reactplaylist.save() ; 

// latest method to creat document
let createDoc = async() =>{
    try{
        let reactplaylist = new Playlist({
            name: "react js" , 
            ctype: "frontEnd",
            video: 80,
            author: "thapa technical",
            active: true,
            // as date is set to default
        
        })
        let expressplaylist = new Playlist({
            name: "express js" , 
            ctype: "frontEnd",
            video: 80,
            author: "thapa technical",
            active: true,
            // as date is set to default
        
        })
        let result = await Playlist.insertMany([expressplaylist , reactplaylist]) ; 
        console.log(result)
    }catch(error){
        console.log(error)
    }
} 
createDoc(); 