const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quoteRanks1', {useNewUrlParser: true});

const DBCollectionSchema = new mongoose.Schema({
    name: {type: String, required: [true,"Required"], minlength:[3,"Author name be 3 letters"]},
    quotes: [{quote:{type: String, required: [true,"Required"], minlength:[3,"Quote must be 3 letters"]}}]
}, {timestamps:true});


 module.exports = mongoose.model('DBCollection', DBCollectionSchema)