import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        default: null,
    },
},
 { timestamps: true });

 const Driver = mongoose.model('Driver, driverSchema');

 export default Driver