import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDb from './config/db.js';
import Router from './routes/UserRouter.js';

const app = express()
const port = 4000;
app.use(cors())
app.use(express.json())
dotenv.config()


// database connections
ConnectDb()


// api endpoints----------------------
app.use("/api/user",Router)

app.get("/", (req, res) => {
    res.send("server is running");
})

app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`); 

})