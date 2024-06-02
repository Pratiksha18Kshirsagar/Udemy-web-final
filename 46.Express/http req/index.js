import express from "express";
const app = express();



// get means it is method which has two params , 1-path , 2-handler => handler is a call back function which again takes two params , 1-req , 2-res
app.get("/" , (req , res)=>{
    res.send("Hello world");
})
app.get("/about" , (req , res)=>{
    res.send("About");
})
app.get("/contact" , (req , res)=>{
    res.send("contact");
})

// sees if req are coming , if it  comes it gets invoked 
app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
})