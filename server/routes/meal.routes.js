const MealController = require("../controllers/meal.controller");

module.exports = (app) => {
    app.get("/api/meals", MealController.findAllMeals);
    app.post("/api/meals", MealController.createMeal);
    app.get("/api/meals/:id", MealController.findOneMeal);
    app.put("/api/meals/:id", MealController.findAndUpdateMeal);
    app.delete("/api/meals/:id", MealController.deleteOneMeal);
}