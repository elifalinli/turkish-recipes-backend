const mongoose = require('mongoose')

const soupSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the soup's name"],
        },
        ingredients: {
            type: Array,
            required: true,
            default: 0,
        },
        instructions: {
            type: String,
            required: true
        },
        hints: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)
const mainSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the main's name"],
        },
        ingredients: {
            type: Array,
            required: true,
            default: 0,
        },
        instructions: {
            type: String,
            required: true
        },
        hints: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
)
const saladSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the salad's name"],
        },
        ingredients: {
            type: Array,
            required: true,
            default: 0,
        },
        instructions: {
            type: String,
            required: true
        },
        hints: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
)

const sideSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the side's name"],
        },
        ingredients: {
            type: Array,
            required: true,
            default: 0,
        },
        instructions: {
            type: String,
            required: true
        },
        hints: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
)
const Soup = mongoose.model('Soup', soupSchema);
const Main = mongoose.model('Main', mainSchema);
const Salad = mongoose.model('Salad', saladSchema)
const Side = mongoose.model('Side', sideSchema)

module.exports = {
    Soup,
    Main,
    Salad,
    Side
}
