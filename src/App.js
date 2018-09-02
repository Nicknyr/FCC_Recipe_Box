import React, { Component } from 'react';
import Item from './Item';
import Details from './Details';
import './App.css';
import RecipeForm from './RecipeForm.js';


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
      inputVal: '',
      ingredientVal: '',
      showRecipeForm: false,
      showDetails: true
    };

  }

  // Get text user inputs for recipe
  handleChange = (event) => {
    this.setState({inputVal: event.target.value});
  };

  handleIngredientChange = (event) => {
    this.setState({ingredientVal: event.target.value});
  }

  // When user submits recipe this adds it
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      //inputVal: '',
      items: [...this.state.items, this.state.inputVal],
      //ingredientVal: '',
      ingredients: [...this.state.ingredients, this.state.ingredientVal],
      showRecipeForm: false
    });

  }

  // Shows recipe
  AddRecipe = (bool) => {
    this.setState({
      showRecipeForm: bool
    });
  }


  edit = (item, index, e) => {
    console.log('Edit button clicked');
    console.log('index is ' + index);

  }

  delete = (item, index) => {
     this.setState({
      ingredients : this.state.ingredients.filter((_, i) => i !== index),
      items: this.state.items.filter((_, i) => i !== index)
    });
  }


  render() {
    console.log(this.state.ingredients);
    const items = this.state.items;

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

        { this.state.showRecipeForm ?

          <RecipeForm
            inputVale={this.state.inputVal}
            handleChange={this.handleChange}
            ingredientVal={this.state.ingredientVal}
            handleIngredientChange={this.handleIngredientChange}
            onSubmit={this.onSubmit}
          />

          :null
        }
      </div>
    );
  }

}
