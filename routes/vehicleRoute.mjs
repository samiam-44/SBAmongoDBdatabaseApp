import express from 'express';
import Vehicle from '../models/Vehicle.mjs';

const router = express.Router();

// CREATE a new vehicle
router.post('/vehicles', async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body); // Create a new vehicle from request body
    await vehicle.save(); // Save to database
    res.status(201).json(vehicle); // Send back the created vehicle
  } catch (err) {
    res.status(400).json({ msg: err.message }); // Catch validation errors
  }
});

// READ ALL vehicles
router.get('/vehicles', async (_req, res) => {
  const vehicles = await Vehicle.find(); // Get all vehicles
  res.json(vehicles); // Send them back
});

// READ ONE vehicle by ID
router.get('/vehicles/:id', async (req, res) => {
  const vehicle = await Vehicle.findById(req.params.id); // Find vehicle by MongoDB ID
  if (!vehicle) return res.status(404).json({ msg: 'Vehicle not found' });
  res.json(vehicle);
});

// UPDATE a vehicle by ID
router.patch('/vehicles/:id', async (req, res) => {
  const updated = await Vehicle.findByIdAndUpdate(
    req.params.id, // Vehicle to update
    req.body, // New data
    { new: true } // Return the updated document
  );
  if (!updated) return res.status(404).json({ msg: 'Vehicle not found' });
  res.json(updated);
});

// DELETE a vehicle by ID
router.delete('/vehicles/:id', async (req, res) => {
  const deleted = await Vehicle.findByIdAndDelete(req.params.id); // Delete by ID
  if (!deleted) return res.status(404).json({ msg: 'Vehicle not found' });
  res.json({ msg: 'Vehicle deleted successfully' });
});

export default router;
