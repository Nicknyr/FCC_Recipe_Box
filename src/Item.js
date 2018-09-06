import React from 'react';

const Item = (props) => (
  <div>
    <div className="Recipe-Item-Container" key={props.text}>

        {props.items.map((item, index) =>
        <div className="Recipe-Item">

            <h3 key={index}>{item}</h3>

            <p key={index}>{props.ingredients[index]}</p>


          <div className="buttons-container">
            <button className="edit-button" onClick={() => props.edit(item, index)}>Edit</button>
            <button className="delete-button" onClick={() => props.delete(item, index)}>Delete</button>
          </div>

        </div>
      )}
    </div>
  </div>
)


export default Item;
