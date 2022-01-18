const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  description: { type: String, required: true }
},{collation: 'recipes'});

module.exports = mongoose.model("Recipe", RecipeSchema)