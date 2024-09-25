const express=require('express')
const dbcon = require('./config/db')
const Project=require('./models/Projectmodel')
const app=express()

require('dotenv').config()

const port=process.env.port || 7777 
//app.use(express.json())
app.get('/',(req,res)=>{
  res.json({message:"Welcome"})
})

app.listen(port,()=>
{
  console.log(`server is running in port:${port}`)
})