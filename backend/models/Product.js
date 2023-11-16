const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    attributes: {
        condition: {
            type: String,
            enum: ['Used', 'New'],
            required: true
        },
        color: {
            type: String,
            trim: true
        },
        size: {
            type: String,
            trim: true
        },
    },
    price: {
        type: Number,
        trim: true,
        required: true,
        min: 0
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    qty: {
        type: Number,
        trim: true,
        required: true,
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

const product = mongoose.model('Products', productSchema)

module.exports = product