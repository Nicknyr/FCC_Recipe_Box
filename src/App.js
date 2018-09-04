import React, { Component } from 'react';
import Item from './Item';
import './App.css';
import RecipeForm from './RecipeForm.js';
import RecipeEditForm from './RecipeEdit.js';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["Pumpkin Pie", "Spaghetti", "Onion Pie"],
      ingredients:[
        ["Pumpkin Puree ", "Sweetened Condensed Milk ", "Eggs ", "Pumpkin Pie Spice ", "Pie Crust "],
        ["Noodles ", "Tomato Sauce ", "(Optional) Meatballs "],
        ["Onion", "Pie Crust "]
      ],

      // Recipe name and ingredients
      inputVal: '',
      ingredientVal: '',
      // Recipe name and ingredients when user is editing existing recipe
      inputValEdit: '',
      ingredientValEdit: '',
      // Controls whether forms are displayed or hidden
      showRecipeForm: false,
      showRecipeEditForm: false
    };

  }

  // Get text user inputs for recipes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  // When user submits recipe this adds it to the list
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.inputVal],
      ingredients: [...this.state.ingredients, this.state.ingredientVal],
      showRecipeForm: false
    });
  }

  // Should edit and update a recipe item when user clicks edit button and then submits RecipeEditForm, not working
  onEditSubmit = (event, index) => {
    console.log('OnEditSubmit index ' + index);
    event.preventDefault()
    // This setState shoul erase previous recipe state and rewrite it with the details the user entered after editing that particular recipe item
    this.setState({
      items: this.state.inputVal,
      ingredients: this.state.ingredientVal,
      showRecipeEditForm: false
    });
  }

  closeRecipeForm = () => {
    this.setState({ showRecipeForm: false });
  }

  // Shows recipe
  AddRecipe = (bool) => {
    this.setState({
      showRecipeForm: bool
    });
  }

  // Is called when one of the edit recipe buttons is clicked, shows RecipeEditForm
  edit = (item, index) => {
    console.log('Edit button clicked');
    console.log('index is ' + index);

    this.setState({ showRecipeEditForm: !this.state.showRecipeEditForm });
  }

  // Deletes recipe item from the list
  delete = (item, index) => {
     this.setState({
      ingredients : this.state.ingredients.filter((_, i) => i !== index),
      items: this.state.items.filter((_, i) => i !== index)
    });
  }


  render() {
    return (
      <div className="Recipe-List">
        <h1>Recipe List</h1>

        <Item
          items={this.state.items}
          ingredients={this.state.ingredients}
          edit={this.edit}
          delete={this.delete}
        />


        <button onClick={this.AddRecipe}>Add New Recipe</button>

        {/* Shows form to edit recipe */}
        { this.state.showRecipeEditForm ?

          <RecipeEditForm
            inputVal={this.state.inputValEdit}
            handleChange={this.handleChange}
            ingredientValEdit={this.state.ingredientValEdit}
            onEditSubmit={this.onEditSubmit}
            closeRecipeForm={this.closeRecipeForm}
          />

          :null
        }

        {/* Shows form to add new recipe to the list */}
        { this.state.showRecipeForm ?

          <RecipeForm
            inputVal={this.state.inputVal}
            handleChange={this.handleChange}
            ingredientVal={this.state.ingredientVal}
            onSubmit={this.onSubmit}
            closeRecipeForm={this.closeRecipeForm}
          />

          :null
        }


      </div>
    );
  }

}
