import React, { Component } from 'react';
import RecipeList from './RecipeList';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Pumpkin Pie", "Spaghetti", "Onion Pie"],
      ingredients:[
        ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"],
        ["Noodles", "Tomato Sauce", "(Optional) Meatballs"],
        ["Onion", "Pie Crust"]
      ],
      inputVal: '',
      ingredientVal: '',
      showRecipe: false
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
      inputVal: '',
      items: [...this.state.items, this.state.inputVal],
      ingredientVal: '',
      ingredients: [...this.state.ingredients, this.state.ingredientVal]
    });
  }

  onIngredientSubmit = (event) => {
    event.preventDefault()
    this.setState({
      ingredientVal: '',
      ingredients: [...this.state.ingredients, this.state.ingredientVal]
    });
  }

  // Shows recipe
  AddRecipe = (bool) => {
    this.setState({
      showRecipe: bool
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Recipe List</h3>
        <RecipeList items={this.state.items} ingredients={this.state.ingredients} />
        <button onClick={this.AddRecipe}>Add New Recipe</button>


      { this.state.showRecipe ?
        <div>
          <form className="Recipe-List" onSubmit={this.onSubmit}>
            <div className="Recipe-Item">
              <label>Recipe Name</label>
              <input
                value={this.state.inputVal}
                onChange={this.handleChange} />
            </div>

            <div className="Recipe-Item">
              <label>Ingredients</label>
              <input
                value={this.state.ingredientVal}
                onChange={this.handleIngredientChange} />
            </div>
            <button>Submit</button>
          </form>
        </div>

        :null
      }
      </div>
    );
  }

}
