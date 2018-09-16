import React from 'react';
import Button from 'react-bootstrap/lib/Button';


const Item = (props) => (
  <div>
    <div className="Recipe-Item-Container" key={props.text}>
      {/* Iterates through recipe item names and displays them */}
      {props.items.map((item, index) => {
        return (
        <div className="Recipe-Item" key={index}>
          <h3>{item}</h3>

        {/* Iterates through recipe ingriedients and displays them*/}
        <p className="ingredients-list">
          {props.ingredients[index].map((ingredient, ingredientIndex) => {
            return (
              <div className="ingredient" key={ingredient}>
                {ingredient}
              </div>
            )
          })}
        </p>

        <div className="buttons-container">
          <Button className="edit-button" onClick={() => props.edit(item, index)}>Edit</Button>
          <Button className="delete-button" onClick={() => props.delete(item, index)}>Delete</Button>
          </div>
        </div>
      );
    }
  )}
  </div>
</div>
)

export default Item;
