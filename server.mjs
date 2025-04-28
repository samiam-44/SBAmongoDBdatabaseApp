//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';

//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
connectDB();


//Error handling middle ware
app.use((err, _req, res, next) => {
    res.status(500).json({ msg: err.message });
})


//Listners
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})

