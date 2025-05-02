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
    [
        { name: 'Fire Fury', type: 'Tank', fuel: 'Jet Fuel', armorLevel: 9, weapons: ['Flamethrower', 'Cannon'] },
        { name: 'Iron Shadow', type: 'Buggy', fuel: 'Biofuel', armorLevel: 5, weapons: ['Machine Gun'] },
        { name: 'Chrome Serpent', type: 'War Rig', fuel: 'Solar', armorLevel: 8, weapons: ['Harpoon Launcher'] },
        { name: 'Blaze Crusher', type: 'Buggy', fuel: 'Diesel', armorLevel: 6, weapons: ['Grenade Launcher', 'Spikes'] },
        { name: 'Skull Hawk', type: 'Tank', fuel: 'Electric', armorLevel: 7, weapons: ['Cannon', 'Smoke Screen'] },
        { name: 'Dust Fury', type: 'Motorbike', fuel: 'Diesel', armorLevel: 3, weapons: ['Crossbow'] },
        { name: 'Wreck Crawler', type: 'Interceptor', fuel: 'Solar', armorLevel: 5, weapons: ['Flamethrower'] },
        { name: 'Bone Crusher', type: 'Buggy', fuel: 'Jet Fuel', armorLevel: 6, weapons: ['Saw Blades'] },
        { name: 'Blaze Fury', type: 'Motorbike', fuel: 'Gasoline', armorLevel: 4, weapons: ['Molotovs'] },
        { name: 'Chrome Shadow', type: 'Tank', fuel: 'Electric', armorLevel: 9, weapons: ['Laser Cannon', 'Armor Piercer'] },
        { name: 'Fire Hawk', type: 'War Rig', fuel: 'Diesel', armorLevel: 10, weapons: ['Missile Rack'] },
        { name: 'Skull Serpent', type: 'Interceptor', fuel: 'Gasoline', armorLevel: 6, weapons: ['Machine Gun', 'Rear Mines'] },
        { name: 'Iron Crusher', type: 'Tank', fuel: 'Diesel', armorLevel: 9, weapons: ['Cannon', 'Riot Spikes'] },
        { name: 'Dust Shadow', type: 'Motorbike', fuel: 'Biofuel', armorLevel: 3, weapons: ['Spiked Chain'] },
        { name: 'Chrome Drifter', type: 'Interceptor', fuel: 'Gasoline', armorLevel: 5, weapons: ['Grenades'] },
        { name: 'Fire Crusher', type: 'Buggy', fuel: 'Electric', armorLevel: 7, weapons: ['Molotovs', 'Spikes'] },
        { name: 'Blood Crawler', type: 'Interceptor', fuel: 'Biofuel', armorLevel: 6, weapons: ['Chainsaw Blades'] },
        { name: 'Storm Crusher', type: 'Motorbike', fuel: 'Gasoline', armorLevel: 4, weapons: ['Spiked Rims'] },
        { name: 'Bone Fury', type: 'War Rig', fuel: 'Gasoline', armorLevel: 10, weapons: ['Rocket Launcher'] },
        { name: 'Skull Fury', type: 'War Rig', fuel: 'Solar', armorLevel: 8, weapons: ['Harpoon', 'Flamethrower'] },
        { name: 'Fire Serpent', type: 'Motorbike', fuel: 'Alcohol', armorLevel: 4, weapons: ['Flaming Tires'] },
        { name: 'Blaze Serpent', type: 'Motorbike', fuel: 'Biofuel', armorLevel: 3, weapons: ['Spikes'] },
        { name: 'Chrome Fury', type: 'Motorbike', fuel: 'Gasoline', armorLevel: 5, weapons: ['Grenades'] },
        { name: 'Blaze Drifter', type: 'War Rig', fuel: 'Electric', armorLevel: 9, weapons: ['Machine Gun Turret'] },
        { name: 'Chrome Stallion', type: 'Tank', fuel: 'Biofuel', armorLevel: 9, weapons: ['Cannon', 'EMP Blast'] },
        { name: 'Wreck Serpent', type: 'Tank', fuel: 'Alcohol', armorLevel: 7, weapons: ['Drill Nose', 'Napalm Tank'] },
        { name: 'Dust Stallion', type: 'Tank', fuel: 'Gasoline', armorLevel: 8, weapons: ['Cannon'] },
        { name: 'Storm Shadow', type: 'Motorbike', fuel: 'Electric', armorLevel: 4, weapons: ['Spiked Elbows'] },
        { name: 'Iron Serpent', type: 'Tank', fuel: 'Biofuel', armorLevel: 9, weapons: ['Smoke Dispensers'] },
        { name: 'Blaze Hawk', type: 'Buggy', fuel: 'Solar', armorLevel: 6, weapons: ['Mini Gun'] },
        { name: 'Chrome Hawk', type: 'Buggy', fuel: 'Gasoline', armorLevel: 7, weapons: ['Fire Spitter'] },
        { name: 'Fire Crawler', type: 'War Rig', fuel: 'Solar', armorLevel: 10, weapons: ['Rocket Pods'] },
        { name: 'Storm Serpent', type: 'War Rig', fuel: 'Gasoline', armorLevel: 8, weapons: ['Oil Slick'] },
        { name: 'Storm Hawk', type: 'War Rig', fuel: 'Solar', armorLevel: 9, weapons: ['Flak Cannon'] },
        { name: 'Dust Crusher', type: 'War Rig', fuel: 'Electric', armorLevel: 10, weapons: ['Spiked Grill'] },
        { name: 'Blood Fury', type: 'Interceptor', fuel: 'Diesel', armorLevel: 6, weapons: ['Grenade Launcher'] },
        { name: 'Blood Hawk', type: 'Interceptor', fuel: 'Biofuel', armorLevel: 7, weapons: ['Molotovs'] },
        { name: 'Skull Crawler', type: 'Buggy', fuel: 'Gasoline', armorLevel: 6, weapons: ['Front Spikes'] },
        { name: 'Wreck Crusher', type: 'Motorbike', fuel: 'Gasoline', armorLevel: 4, weapons: ['Nail Spreader'] },
        { name: 'Wreck Hawk', type: 'Buggy', fuel: 'Diesel', armorLevel: 5, weapons: ['Mini Gun', 'Oil Slick'] }
      ]
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