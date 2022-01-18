const express = require("express");
const router = express.Router();

const recipeController = require('../controller/recipe.controller');

module.exports = () => {

    router.get('/', recipeController.getAllRecipes);
    router.post('/create', recipeController.createRecipe);
    router.get('/:id', recipeController.getARecipe);
    router.put('/:id', recipeController.editRecipe);
    router.delete('/:id', recipeController.deleteRecipe);

    return router;
}
