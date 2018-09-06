import React, { Component } from 'react';

const RecipeForm = (props) => {
  return (
    <div>
      <form className="Recipe-Form" onSubmit={props.onSubmit}>
        <p className="x-close" onClick={props.closeRecipeForm}>X</p>
        <div className="form-content">
          <label>Recipe Name</label>

          <input
            name="inputVal"
            value={props.inputVal}
            onChange={props.handleChange}
          />

          <label>Ingredients</label>
          <input
            name="ingredientVal"
            value={props.ingredientVal}
            onChange={props.handleChange}
          />

          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
