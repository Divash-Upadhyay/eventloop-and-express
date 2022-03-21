const express= require("express")

const app= express();

app.get("", (req, res) =>{
    return res.send("Hello");
});

app.get("/books", (req,res) =>{
    let obj={
        book1: "days of my life",
        book2:"prettier",
        book3:"The art of Saying No",
        book4:"pablo escobar"
    }

    res.send(obj)
})
app.listen(2345, function (){
    console.log("Listening on port 2345");
})
