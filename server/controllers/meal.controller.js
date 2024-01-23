const Meal = require("../models/meal.model");

const createMeal = (req, res) => {
    Meal.create(req.body)
        .then(newMeal => res.json(newMeal))
        .catch(err => res.status(400).json(err))
}

const findAllMeals = (req, res) => {
    Meal.find()
        .then(allMeals => res.json(allMeals))
        .catch(err => console.log(err))
}

const findOneMeal = (req, res) => {
    Meal.findById({_id: req.params.id})
        .then(oneMeal => res.json(oneMeal))
        .catch(err => console.log(err))
}

const findAndUpdateMeal = (req, res) => {
    Meal.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updateMeal => res.json(updateMeal))
        .catch(err => res.status(400).json(err))
}

const deleteOneMeal = (req, res) => {
    Meal.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => console.log(err))
}

module.exports = {
    createMeal,
    findAllMeals,
    findOneMeal,
    findAndUpdateMeal,
    deleteOneMeal
}