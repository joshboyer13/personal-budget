const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: [true, "Id already in use"]
    },
    label: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    value: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        min: [6, 'Hex Color too Short (at least 6 digits)']
    },

}, { collection: 'budgetVar'})

module.exports = mongoose.model('budgetVar', budgetSchema)