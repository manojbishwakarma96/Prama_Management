const dotenv=require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const userRoutes=require("./routes/userRoute");
const errorHandler=require("./middleWare/errorMiddleware");
const app=express()

// Middlewares

app.use(express.json());
app.use(express.urlencoded({extented:false}));
app.use(bodyParser.json());

//Routes Middelware

app.use("/api/users", userRoutes);

// Routes

app.get("/",(req,res)=>{
    res.send("Home Page");
})
// Error handaler middleware
app.use(errorHandler)

const PORT=process.env.PORT || 5000;


// CONNECT TO MONGO DATABASE AND START SERVERS

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server Running on port ${PORT}`);
        })
    }).catch((error)=>{
        console.log(error);
    })
