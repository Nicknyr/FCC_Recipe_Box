import React from 'react';

const RecipeList = props => (
    <ul>
      {
        props.items.map((item, index) => <li key={index}>{item}</li>)
      }
    </ul>
);

export default RecipeList;
