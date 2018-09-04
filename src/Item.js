import React from 'react';

const Item = (props) => (
  <div>
    <div className="Recipe-Item" key={props.text}>

        {props.items.map((item, index) =>
        <div className="Recipe-Item-Container">
        <ul>
          <li key={index}>
            {item}
          </li>
          <li>
            {props.ingredients[index]}
          </li>
        </ul>

          <button onClick={() => props.edit(item, index)}>Edit</button>
          <button onClick={() => props.delete(item, index)}>Delete</button>

        </div>
      )}
    </div>
  </div>
)


export default Item;
