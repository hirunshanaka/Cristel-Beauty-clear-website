import mongoose from "mongoose"

// craete the database model
const studentSchema = mongoose.Schema({
    name: String,
    age:Number,
    gender:String
   })
   //crete the model
   const Student =mongoose.model("students",studentSchema)
    
export default Student