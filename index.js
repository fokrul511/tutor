const express=require("express");
const mongoose = require('mongoose');
const cors = require('cors')
const app=express();
const port=5000;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
async function database(){
    try {
        await 
        mongoose.connect('mongodb://127.0.0.1:27017/tutor');
        console.log("Database is connected");
    } catch (error) {
        console.log("Database is not connected");
        console.log(error);
    }
}
const category=require("./Routes/Category");
category(app);

app.listen(port,async()=>{
    console.log(`server is running at http://localhost:${port}`)
    await database()
})