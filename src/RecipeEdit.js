import React, { Component } from 'react';


const RecipeEditForm = (props) => {
  return (
    <div>
      <form className="Recipe-Form Edit-Form" onSubmit={props.onSubmit}>
        <p className="x-close" onClick={props.closeRecipeForm}>X</p>
        <div className="form-content">
          <h1>This is the edit form</h1>
          <label>Edit Recipe</label>
          <input
            name="inputValEdit"
            value={props.inputValEdit}
            onChange={props.handleChange}
          />

          <label>Ingredients</label>
          <input
            name="ingredientValEdit"
            value={props.ingredientValEdit}
            onChange={props.handleChange}
          />


        <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RecipeEditForm;
