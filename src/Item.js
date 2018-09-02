import React from 'react';

const Item = (props) => (
  <div>
    <div className="Recipe-Item" key={props.text}>

        {props.items.map((item, index) =>
        <div>
        <ul>
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        </ul>
        <div>
          <ul>
            <li><input type="text" defaultValue={props.ingredients[index]} onChange={props.edit} /></li>
          </ul>
          <button onClick={() => props.edit(item, index)}>Edit</button>
          <button onClick={() => props.delete(item, index)}>Delete</button>
        </div>
        </div>
      )}
    </div>
  </div>
)


export default Item;
