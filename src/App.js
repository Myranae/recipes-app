import "./App.css";
import React, { useState } from "react";
import recipeData from "./data/recipeData.json";
import RecipeList from "./components/recipeList";

function App() {
    const [recipes, setRecipes] = useState(recipeData);

    const onDelete = (name) => {
        // need to pass a brand new data structure
        // provide filter a criteria in how to filter
        const newRecipes = recipes.filter((recipe) => {
            return recipe.name !== name;
        });

        setRecipes(newRecipes);
    };

    return (
        <main>
            <h1>Recipe App</h1>
            <RecipeList recipes={recipes} onDelete={onDelete} />
        </main>
    );
}

export default App;
