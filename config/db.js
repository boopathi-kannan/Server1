const mongoose= require('mongoose')
mongoose.connect(process.env.MONGODB || "mongodb+srv://boopathi:2004@in-aws.cvu6s.mongodb.net/boopathi?retryWrites=true&w=majority&appName=in-aws")
 
const connection=mongoose.connection
connection.on("connected",()=>{
  console.log("DB connected")
  })

  connection.on('error',(error)=>{
    console.log("Error"+error)
  })

  module.exports=mongoose