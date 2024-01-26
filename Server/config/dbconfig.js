const mongoose =  require("mongoose")
console.log(process.env.mongodb_url);

// mongoose.connect(process.env.mongodb_url)

mongoose.connect(process.env.mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'MoviesBook'
});

const isconnection = mongoose.connection

isconnection.on("connected" ,()=>{
    console.log("connection sucessfully");
})

isconnection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});