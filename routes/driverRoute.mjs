import express from 'express';
import Driver from '../models/Driver.mjs'; 

const router = express.Router();

//CREATE: a new Driver
router.post('/drivers', async (req, res) => {
    const { name, vehicle } = req.body; //get name and vehicle from body

    const newDriver = new Driver({ name, vehicle}); //Make new Driver
    await newDriver.save(); //Save to DB

    res.status(201).json(newDriver); 
});

//GET ALL druvers
router.get('/drivers', async (req, res) => {
    const drivers = await Driver.find(); //Find all drivers
    res.status(200).json(drivers);
});

//GET one Driver by ID
router.get('/drivers/:id', async (req, res) => {
    const driver = await Driver.findById(req.params.id);

    if (!driver) {
        return res.status(404).json({ msg:'Driver not found'}); //If not found
    }
    res.status(200).json(driver); 
});

//UPDATE; 
router.patch('/drivers/:id', async (req, res) => {
    const updatedDriver = await Driver.findByIdAndUpdate(
        req.params.id,// find by id
        req.body, //Update with body
        { new: true } //Return updated driver
    );
    if (!updatedDriver) {
        return res.status(404).json({ msg: 'Driver not found' });
    }
    res.status(200).json(updatedDriver); //Send updated driver

});

//DELETE
router.delete('/drivers/:id', async (req, res) => {
    const deletedDriver = await Driver.findByIdAndDelete(req.params.id); //If not found

if (!deletedDriver) {
    return res.status(404).json({ msg: 'Driver not found' });
};
res.status(200).json({ msg: 'Driver deleted successfully' }); 
})


export default router;