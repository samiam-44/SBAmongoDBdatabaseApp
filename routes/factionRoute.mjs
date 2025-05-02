import express from 'express';
import Faction from '../models/Faction.mjs';

const router = express.Router();


//Create a new faction
router.post("/factions", async (req, res) => {
    try {
        const faction = new Faction(req, res);// Create new faction from request body
        await faction.save(); //Saves to database
        res.status(201).json(faction); //Send the created faction
    } catch (err) {
        res.status(400).json({msg: err.message})
    }
});

//REad all factions
router.get('/factions', async (_req, res) => {
    const factions = await Faction.find().populate('alliedFactions', 'name'); //option to populate allied fgaction names
res.json(factions);
});

//Read ONE faction by ID
router.get('/factions/:id', async (req, res) => {
    const faction = await Faction.findById(req.params.id).populate('alliedFactions', 'name');
    if (!faction) return res.status(404).json({ msg: 'Faction not found'});
    res.json(updated);
});

//Delete a faction by ID
router.delete('/faction/:id', async (req, res) => {
    const deleted = await Faction.findById(req.params.id);
    if (!deleted) return res.status(404).json({ msg: 'Faction not found'})
    res.json({ msg: 'Faction deleted success' });
    });

    export default router;