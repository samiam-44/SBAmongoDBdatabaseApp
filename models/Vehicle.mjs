import mongoose from 'mongoose';

//Vehicle document structure
const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true, //Type of car is required
    enum: ['War Rig', 'Interceptor', 'Motorbike', 'Buggy', 'Tank'],
    trim: true, //Remove extra white space 
  },
  name: {
    type: String,
    required: true, //Name is required
    unique: true, //No 2 vehicles can have the same name
    trim: true, // 
    index: true // Frequently queried
  },
  armorLevel: {
    type: Number,
    min: 0, //Minimum armor level
    max: 10, //Max armor level
    default: 5 //If no armor level is provided this will be the default
  },
  weapons: [String]
}, { timestamps: true }); 

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
