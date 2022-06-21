import React from "react";
import PropTypes from "prop-types";
import Recipe from "./recipe";

const RecipeList = (props) => {
    // create a component for each object in the recipes prop
    //destructuring props get rid of redundandcy of props.
    //must use return statement with map!
    //Part 1: Brains
    const recipeComponentsArray = props.recipes.map((recipe, index) => {
        return (
            <Recipe
                key={index} // need a key for sibling components!
                name={recipe.name}
                ingredients={recipe.ingredients}
                mealType={recipe.mealType}
                onDelete={props.onDelete}
            />
        );
    });

    //Part 2: beauty
    return (
        <>
            <section className="">
                <h2>Recipe Count: {props.recipes.length}</h2>
                {/* .length just dynamically counts the lenght of the array of recipes! */}
                <ul className="container recipes">{recipeComponentsArray}</ul>
            </section>
        </>
    );
};

// Proptypes lists the props that recipelist will use in its jsx, not hte ones being passed to a child component
RecipeList.propType = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default RecipeList;
