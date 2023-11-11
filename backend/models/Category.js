const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId
    },
    imageFileName: {
        type: String,
        trim: true
    },
    slug: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    removed: {
        type: Boolean,
        default: false,
    },
})

const category = mongoose.model('Categories', categorySchema)

module.exports = category