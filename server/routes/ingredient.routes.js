const IngredientController = require("../controllers/ingredient.controller");

module.exports = (app) => {
    app.get("/api/ingredients", IngredientController.findAllIngredients);
    app.post("/api/ingredients", IngredientController.createIngredient);
    app.get("/api/ingredients/:id", IngredientController.findOneIngredient);
    app.put("/api/ingredients/:id", IngredientController.findAndUpdateIngredient);
    app.delete("/api/ingredients/:id", IngredientController.deleteOneIngredient);
}