const mongoose=required('mongoose')
const porjectSchema=new mongoose.Schema({
  title:{
    type:String,
  required:true 
  },
  desc:
  {
    type:String,
    required:true 

  }
 

})

const Projects=mongoose.model("Projects",porjectSchema)
module.exports=Projects 
