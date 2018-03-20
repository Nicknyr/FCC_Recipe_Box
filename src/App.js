import React, { Component } from 'react';
import RecipeList from './RecipeList';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Pumpkin Pie", "Spaghetti", "Onion Pie"],
      inputVal: '',
      showRecipe: false
    };
  }

  // Get text user inputs for recipe
  handleChange = (event) => {
    this.setState({inputVal: event.target.value});
  };

  // Shows recipe
  AddRecipe = (bool) => {
    this.setState({
      showRecipe: bool
    });
  }

  // When user submits recipe this adds it
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      inputVal: '',
      items: [...this.state.items, this.state.inputVal]
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Recipe List</h3>
        <RecipeList items={this.state.items} />


      { this.state.showRecipe ?
        <form className="App" onSubmit={this.onSubmit}>
        <input value={this.state.inputVal}
        onChange={this.handleChange} />
        <button>Submit</button>
        {/*<button onClick={this.AddRecipe.bind(null, true)}>Add Recipe</button>*/}
        </form>
        :null
      }
      </div>
    );
  }

}
