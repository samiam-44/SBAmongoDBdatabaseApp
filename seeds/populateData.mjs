import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Driver from '../models/Driver.mjs';
import Vehicle from '../models/Vehicle.mjs';
import Faction from '../models/Faction.mjs';

dotenv.config();
await mongoose.connect(process.env.mongoURI);

// Clear out old data first to avoid duplicates
await Driver.deleteMany();
await Vehicle.deleteMany();
await Faction.deleteMany();

console.log('Old data cleared out and now populating new data...');

//FACTIONS-----------------------



//VEHICLES--------------------------------------



//DRIVERS----------------------------------