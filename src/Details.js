import React from 'react';


const Details = ({ ingredients }) => (
  <div>
    {ingredients.map((item, index) =>
      <div className="Details">
        <ul>
          <li key={index}>{ingredients[index]}</li>
        </ul>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )}
  </div>
)


export default Details;
