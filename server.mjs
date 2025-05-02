//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import driverRoutes from './routes/driverRoute.mjs';
import vehicleRoutes from './routes/vehicleRoute.mjs';
import factionRoutes from './routes/factionRoute.mjs';

//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
connectDB();

//ROUTES
app.use('/api', driverRoutes);
app.use('/api', vehicleRoutes);
app.use('/api', factionRoutes)
//Error handling middle ware
app.use((err, _req, res, _next) => {
    res.status(500).json({ msg: err.message });
})


//Listners
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
});

