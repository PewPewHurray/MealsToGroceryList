const Ingredient = require("../models/ingredient.model");

const createIngredient = (req, res) => {
    Ingredient.create(req.body)
        .then(newIngredient => res.json(newIngredient))
        .catch(err => res.status(400).json(err))
}

const findAllIngredients = (res) => {
    Ingredient.find()
        .then(allIngredients => res.json(allIngredients))
        .catch(err => console.log(err))
}

const findOneIngredient = (req, res) => {
    Ingredient.findById({_id: req.params.id})
        .then(oneIngredient => res.json(oneIngredient))
        .catch(err => console.loq(err))
}

const findAndUpdateIngredient = (req, res) => {
    Ingredient.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updateIngredient => res.json(updateIngredient))
        .catch(err => res.status(400).json(err))
}

const deleteOneIngredient = (req, res) => {
    Ingredient.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => console.log(err))
}

module.exports = {
    createIngredient,
    findAllIngredients,
    findOneIngredient,
    findAndUpdateIngredient,
    deleteOneIngredient
}