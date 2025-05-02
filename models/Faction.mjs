import mongoose from 'mongoose';

//Strcture for faction
const factionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Faction must have name
    unique: true, // cant be more than one faction name
    trim: true,
    index: true // Indexed for faster lookup
  },
  territory: {
    type: String, // Describes their controlled land like the wastelands or  like the Citadel
    required: true,
    trim: true
  },
  motto: { 
    type: String, 
    default: 'No motto provided.'
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Creates and export the model
const Faction = mongoose.model('Faction', factionSchema);

export default Faction;
