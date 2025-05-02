import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['War Rig', 'Interceptor', 'Motorbike', 'Buggy', 'Tank'],
    trim: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true // Frequently queried
  },
  armorLevel: {
    type: Number,
    min: 0,
    max: 10,
    default: 5
  },
  weapons: [String]
}, { timestamps: true });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
