import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema ({ //Defines Schemma for the model of driver
    name: { //Drivers name
        type: String, //In a string type
        required: true, //Driver name Reuired
        unique: true, // No 2 drivers can have the same name
        trim: true, // This ignores the spaces before or after the name "trims" white space
    }, 
    vehicle: { //Vehicle feild to link the driver with a vehivle
        type: mongoose.Schema.Types.ObjectId, //Stores the object if of a vehicle
        ref: 'Vehicle', //Refercne to vehivle model >>> creates a relationship to driver
        default: null, //Default value if no vehicle is assigned to the driver
    },
},
 { timestamps: true }); //Logs the time it each item was created at and updated at

 const Driver = mongoose.model('Driver, driverSchema'); //Create a model based on schema above

 export default Driver