import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';

// Initialization
const app = express();

//Connect
await connectDB()

//Middlewares
app.use(cors())

//Routs
app.get("/", (req,res)=>res.send("Api Working"));

//PORT
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})
