const express=require("express");
const app=express();
const connectDB=require("./config/connectDB");
//middleware
app.use(express.json())
//connect to data base
connectDB()
//3 routes
app.use("/api/contacts",require("./routes/contact"));
//create port
const port=process.env.PORT||8000
app.listen(port,(err) => err?console.log("erreur"):console.log(`server is running on port ${port}`)
);