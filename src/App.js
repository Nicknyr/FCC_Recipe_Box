import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Item from './Item';
import Details from './Details';
import './App.css';


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
      showRecipe: false,
      showDetails: false
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

  // Shows Details
  ShowRecipeDetails = (bool) => {
    this.setState({
      showDetails: bool
    });
  }

  render() {
    console.log(this.state.ingredients);
    const items = this.state.items;

    return (
      <div className="Recipe-List">
        <h1>Recipe List</h1>
        <Item items={this.state.items} onClick={this.ShowRecipeDetails}/>
        <button onClick={this.AddRecipe}>Add New Recipe</button>

      { this.state.showDetails ?
        <div>
          <Details ingredients={this.state.ingredients} />
          <p>{Details}</p>
        </div>

        : null
      }


      { this.state.showRecipe ?
        <div>
          <form className="Recipe-Form" onSubmit={this.onSubmit}>
              <label>Recipe Name</label>
              <input
                value={this.state.inputVal}
                onChange={this.handleChange} />

              <label>Ingredients</label>
              <input
                value={this.state.ingredientVal}
                onChange={this.handleIngredientChange} />

            <button>Submit</button>
          </form>
        </div>

        :null
      }
      </div>
    );
  }

}
