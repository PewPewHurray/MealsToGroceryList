const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name for the meal is required"]
    },
    prepTime: {
        type: Number,
        required: [true, "Prep time is required"],
        min: [0, "Prep time must not be negetive"]
    },
    cookTime: {
        type: Number,
        required: [true, "Cook time is required"],
        min: [0, "Cook time must not be negetive"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    ingredients: {
        type: Number,
        required: [true, "Must have at least one ingredient"]
    },
    instructions: {
        type: String,
        required: [true, "Instructions are required"]
    }
}, {timeseries: true})

module.exports = mongoose.model("Meal", MealSchema);