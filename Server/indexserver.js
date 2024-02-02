const express =  require("express")
const app  = express()

const cors =  require("cors")


const userRouter = require("./Routes/userRoutes")
const movieRouter = require("./Routes/movieRoutes")

require("dotenv").config()
const dbconfig = require("./config/dbconfig")

app.use(cors())

app.use(express.json())

app.use("/user",userRouter)
app.use("/movie",movieRouter)


app.get("/",(req,res)=>{
    res.send("Api running ")
})

app.listen(7000 , ()=>{
    console.log("we are on port 7000");
})