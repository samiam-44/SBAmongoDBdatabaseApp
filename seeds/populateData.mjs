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
const factions = await Faction.insertMany([
  
    { name: 'Salt Eaters', territory: 'Brine Flats', motto: 'Taste the Earth' },
    { name: 'The Hollowed', territory: 'Skull Nest', motto: 'Emptiness is Freedom' },
    { name: 'Wasteland Choir', territory: 'Shatterbone Ridge', motto: 'Sing in the Silence' },
    { name: 'Obsidian Teeth', territory: 'Crackglass Crater', motto: 'Bite the Light' },
    { name: 'Molten Creed', territory: 'Firejaw Caverns', motto: 'Melt the Weak' },
    { name: 'Ashborn Faith', territory: 'Cinder Gulch', motto: 'Pray Through Pain' },
    { name: 'Buzzard Cult', territory: 'The Hisslands', motto: 'Feast on the Fallen' },
    { name: 'Ember Saints', territory: 'Coalbright Summit', motto: 'From Flame, Salvation' },
    { name: 'Soot Scars', territory: 'Charfield Trench', motto: 'Marked by Fire' },
    { name: 'The Broken Banner', territory: 'Rift Hold', motto: 'Fight What’s Left' },
    { name: 'Smoke Widows', territory: 'Fogstone Reach', motto: 'You’ll Never See Us' },
    { name: 'Gravel Lords', territory: 'Stone Maw', motto: 'Crush or Be Crushed' },
    { name: 'Shatter Suns', territory: 'Sunbleed Plain', motto: 'Burn Brighter' },
    { name: 'Razor Kin', territory: 'Spine Reef', motto: 'Bleed Together' },
    { name: 'Gutter Saints', territory: 'Rustflow Burrows', motto: 'Holy in the Filth' },
    { name: 'Blight Sons', territory: 'Decay Belt', motto: 'We Carry the Plague' },
    { name: 'Thunder Herd', territory: 'Shockstep Vale', motto: 'We Run Loud' },
    { name: 'Twilight Fang', territory: 'Dustveil Ravine', motto: 'Strike at Dusk' },
    { name: 'Chain Apostles', territory: 'Linkspire', motto: 'Bound in Blood' },
    { name: 'Flesh Axle', territory: 'Torque Rift', motto: 'Metal in the Veins' }
  ]);
  
//VEHICLES--------------------------------------
const vehicles = await Vehicle.insertMany([
    { name: 'Dune Shredder', type: 'Buggy', fuel: 'Gasoline' },
    { name: 'Steel Reaper', type: 'Truck', fuel: 'Diesel' },
    { name: 'Ash Glider', type: 'Motorcycle', fuel: 'Alcohol' },
    { name: 'Rust Hawk', type: 'Helicopter', fuel: 'Jet Fuel' },
    { name: 'Sand Serpent', type: 'Tank', fuel: 'Solar' },
    { name: 'Inferno Runner', type: 'Car', fuel: 'Nitro' },
    { name: 'Chrome Shadow', type: 'Motorcycle', fuel: 'Gasoline' },
    { name: 'Bone Beast', type: 'Motorcycle', fuel: 'Electric' },
    { name: 'Blood Fury', type: 'Tank', fuel: 'Gasoline' },
    { name: 'Chrome Stinger', type: 'Buggy', fuel: 'Gasoline' },
    { name: 'Bone Howler', type: 'Tank', fuel: 'Biofuel' },
    { name: 'Dust Vulture', type: 'Helicopter', fuel: 'Diesel' },
    { name: 'Fire Crusher', type: 'Car', fuel: 'Jet Fuel' },
    { name: 'Skull Beast', type: 'Hovercraft', fuel: 'Diesel' },
    { name: 'Iron Stallion', type: 'Buggy', fuel: 'Nitro' },
    { name: 'Dust Howler', type: 'Truck', fuel: 'Jet Fuel' },
    { name: 'Storm Crusher', type: 'ATV', fuel: 'Diesel' },
    { name: 'Blood Shadow', type: 'Hovercraft', fuel: 'Biofuel' },
    { name: 'Iron Crusher', type: 'Tank', fuel: 'Nitro' },
    { name: 'Storm Howler', type: 'Buggy', fuel: 'Solar' },
    { name: 'Skull Beast', type: 'Tank', fuel: 'Solar' },
    { name: 'Storm Crusher', type: 'Helicopter', fuel: 'Nitro' },
    { name: 'Wreck Howler', type: 'Tank', fuel: 'Diesel' },
    { name: 'Skull Beast', type: 'Truck', fuel: 'Diesel' },
    { name: 'Chrome Stallion', type: 'Buggy', fuel: 'Nitro' },
    { name: 'Blood Crusher', type: 'Truck', fuel: 'Jet Fuel' },
    { name: 'Blaze Crusher', type: 'Buggy', fuel: 'Solar' },
    { name: 'Fire Crawler', type: 'Tank', fuel: 'Biofuel' },
    { name: 'Blaze Crawler', type: 'Tank', fuel: 'Diesel' },
    { name: 'Skull Fury', type: 'ATV', fuel: 'Diesel' },
    { name: 'Blaze Howler', type: 'Hovercraft', fuel: 'Gasoline' },
    { name: 'Chrome Crawler', type: 'ATV', fuel: 'Solar' },
    { name: 'Blaze Stallion', type: 'Car', fuel: 'Jet Fuel' },
    { name: 'Blaze Shadow', type: 'ATV', fuel: 'Gasoline' },
    { name: 'Iron Crawler', type: 'Helicopter', fuel: 'Nitro' },
    { name: 'Bone Fury', type: 'ATV', fuel: 'Alcohol' },
    { name: 'Fire Stinger', type: 'Car', fuel: 'Jet Fuel' },
    { name: 'Blaze Shadow', type: 'ATV', fuel: 'Nitro' },
    { name: 'Wreck Drifter', type: 'ATV', fuel: 'Nitro' },
    { name: 'Dust Fury', type: 'Truck', fuel: 'Alcohol' },
    { name: 'Wreck Shadow', type: 'Hovercraft', fuel: 'Alcohol' },
    { name: 'Iron Drifter', type: 'ATV', fuel: 'Electric' },
    { name: 'Bone Stallion', type: 'Hovercraft', fuel: 'Electric' },
    { name: 'Iron Shadow', type: 'Motorcycle', fuel: 'Gasoline' },
    { name: 'Iron Stallion', type: 'Car', fuel: 'Solar' },
    { name: 'Dust Howler', type: 'Hovercraft', fuel: 'Alcohol' }
  ]);
  


//DRIVERS----------------------------------

const drivers = await Driver.insertMany([
    { name: 'Maxine Fury', vehicle: vehicles[0]._id },
    { name: 'Dagger Jack', vehicle: vehicles[1]._id },
    { name: 'Blister Joe', vehicle: vehicles[2]._id },
    { name: 'Scorch Zane', vehicle: vehicles[3]._id },
    { name: 'Ivy Vex', vehicle: vehicles[4]._id },
    { name: 'Red Widow', vehicle: vehicles[5]._id },
    { name: 'Grimey Pete', vehicle: vehicles[0]._id },
    { name: 'Nova Fang', vehicle: vehicles[1]._id },
    { name: 'Cinder Lux', vehicle: vehicles[2]._id },
    { name: 'Knox Hellion', vehicle: vehicles[3]._id },
    { name: 'Nova Claw', vehicle: vehicles[6]._id },
    { name: 'Vex Rust', vehicle: vehicles[7]._id },
    { name: 'Jinx Drift', vehicle: vehicles[8]._id },
    { name: 'Shade Flint', vehicle: vehicles[9]._id },
    { name: 'Jinx Burn', vehicle: vehicles[10]._id },
    { name: 'Steel Flint', vehicle: vehicles[11]._id },
    { name: 'Steel Claw', vehicle: vehicles[12]._id },
    { name: 'Blaze Crush', vehicle: vehicles[13]._id },
    { name: 'Steel Drift', vehicle: vehicles[14]._id },
    { name: 'Nova Rust', vehicle: vehicles[15]._id },
    { name: 'Grimm Claw', vehicle: vehicles[16]._id },
    { name: 'Vex Spike', vehicle: vehicles[17]._id },
    { name: 'Shade Crush', vehicle: vehicles[18]._id },
    { name: 'Echo Rust', vehicle: vehicles[19]._id },
    { name: 'Shade Burn', vehicle: vehicles[20]._id },
    { name: 'Blaze Drift', vehicle: vehicles[21]._id },
    { name: 'Jinx Ash', vehicle: vehicles[22]._id },
    { name: 'Grimm Venom', vehicle: vehicles[23]._id },
    { name: 'Steel Scythe', vehicle: vehicles[24]._id },
    { name: 'Axel Claw', vehicle: vehicles[25]._id },
    { name: 'Echo Burn', vehicle: vehicles[26]._id },
    { name: 'Vex Flint', vehicle: vehicles[27]._id },
    { name: 'Rex Burn', vehicle: vehicles[28]._id },
    { name: 'Shade Venom', vehicle: vehicles[29]._id },
    { name: 'Hex Ash', vehicle: vehicles[30]._id },
    { name: 'Grimm Scythe', vehicle: vehicles[31]._id },
    { name: 'Rex Rust', vehicle: vehicles[32]._id },
    { name: 'Steel Claw', vehicle: vehicles[33]._id },
    { name: 'Vex Burn', vehicle: vehicles[34]._id },
    { name: 'Axel Drift', vehicle: vehicles[35]._id },
    { name: 'Rogue Claw', vehicle: vehicles[36]._id },
    { name: 'Hex Flint', vehicle: vehicles[37]._id },
    { name: 'Steel Ash', vehicle: vehicles[38]._id },
    { name: 'Echo Vandal', vehicle: vehicles[39]._id },
    { name: 'Hex Claw', vehicle: vehicles[40]._id },
    { name: 'Nova Drift', vehicle: vehicles[41]._id },
    { name: 'Grimm Spike', vehicle: vehicles[42]._id },
    { name: 'Rex Venom', vehicle: vehicles[43]._id },
    { name: 'Rogue Rust', vehicle: vehicles[44]._id },
    { name: 'Jinx Venom', vehicle: vehicles[45]._id }
  ]);
  



console.log('Seeding complete. Sample data inserted!');
await mongoose.disconnect();