const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginDetails")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

//To connect the documents

const loginschema=new mongoose.Schema({
    name:{
        type:String,required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",loginschema)

module.exports=collection