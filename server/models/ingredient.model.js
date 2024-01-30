const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The name for the ingredient is required"],
        min: [3, "The name must be more then 2 characters"]
    },
    calories: {
        type: Number
    },
    carbs: {
        type: Number
    },
    fiber: {
        type: Number
    },
    protein: {
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model("Ingredient", IngredientSchema);