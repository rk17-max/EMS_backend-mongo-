const mongoose=require("mongoose")

const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true

    },
    salary:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model("Employee",employeeSchema)
