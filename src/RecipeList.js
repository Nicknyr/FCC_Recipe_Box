import React from 'react';

const RecipeList = props => (
  <div>
    <ul className="Recipe-List">
      {
        props.items.map((item, index) => <li key={index}>{item}</li>)
      }
    </ul>
    <ul>
    {
      //props.ingredients.map((item, index) => <li key={index}>{item}</li>)

    }
    </ul>
  </div>
);

export default RecipeList;
