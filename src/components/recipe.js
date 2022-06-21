import React from "react";

const Recipe = ({ name, ingredients, mealType, onDelete }) => {
    // props is going to an object with a list of ingredients
    //BRAINS
    const ingredientElementsArray = ingredients.map((ingredient, index) => {
        //creating sibling elements! Needs keys!
        return <li key={index}>{ingredient}</li>;
    });

    //flow we see a lot especially with forms
    // could instead do anonymous function
    const onClickRemove = () => {
        onDelete(name);
    };
    //BEAUTY
    return (
        <>
            <h3>{name}</h3>
            <h3>Ingredients:</h3>
            <ul>{ingredientElementsArray}</ul>
            <h3>Meal Type: {mealType}</h3>
            <button onClick={onClickRemove}>Delete Recipe</button>
        </>
    );
};

export default Recipe;
