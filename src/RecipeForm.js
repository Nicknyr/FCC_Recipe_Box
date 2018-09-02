import React, { Component } from 'react';


const RecipeForm = (props) => {
  return (
    <div>
      <form className="Recipe-Form" onSubmit={props.onSubmit}>
          <label>Recipe Name</label>
          <input
            value={props.inputVal}
            onChange={props.handleChange} />

          <label>Ingredients</label>
          <input
            value={props.ingredientVal}
            onChange={props.handleIngredientChange} />

          <button>Submit</button>
      </form>
    </div>
  );
}

export default RecipeForm;
