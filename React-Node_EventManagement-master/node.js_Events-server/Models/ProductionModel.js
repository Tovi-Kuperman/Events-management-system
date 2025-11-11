const mongoose = require('mongoose');

const ProductionSchema = new mongoose.Schema({
    // _id: Number,
    name: { type: String, unique:true, required:true},
    description: { type: String, required:true},
    price:{ type: Number, required:true},
    producerId:{ type: String, required:true},
    // producerId:Number

});

const Production = mongoose.model('Production', ProductionSchema);
module.exports=Production;
