const mongoose = require('mongoose');

const ProducerSchema = new mongoose.Schema({
    // _id: Number,
    name: { type: String, required:true },
    email: { type: String, unique:true, required:true},
    phone: { type: String, required:true},
    // description: String
});

const Producer = mongoose.model('Producer', ProducerSchema);
module.exports=Producer;
