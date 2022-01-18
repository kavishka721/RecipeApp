const Recipe = require('../model/recipe.model');

//create a recipe
const createRecipe = async (req, res) => {
  if (req.body == null) console.log('no body'+req.body);

    if (req.body) {
        console.log('exist recipe details' + req.body);
        // const name = req.body.name;
        // const ingredients = req.body.ingredients;
        // const description = req.body.description;
    

        // const newRecipe = {
        //     name,
        //     ingredients,
        //     description
        // }

        const recipe = new Recipe(req.body);

        await recipe
            .save()
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((err) => {
                res.status(500).send({ error: err.message });
            });
        
    }
}

//get list of recipes
const getAllRecipes = async (req, res) => {
    await Recipe.find({})
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send({ error: err });
      });
    
}

//get a recipe details
const getARecipe = async (req, res) => {
    if (!req.params.id) {
        console.log('does not exist an id');
    }

    await Recipe.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send({ error: err });
      });
}


//delete the recipre given by id
const deleteRecipe = async (req, res) => {
  if (!req.params.id) {
    console.log("does not exist an id");
  }

  await Recipe.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).send({ data: data });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
};

//update the recipe give by id
const editRecipe = async (req, res) => {
    await Recipe.findByIdAndUpdate(req.params.id,{ $set: req.body })
      .then((response) => {
        res.status(200).send({ data: response });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getARecipe,
    deleteRecipe,
    editRecipe
}