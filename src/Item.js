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
        </ul>

          <ul>
            <li>
              {/*<input type="text" defaultValue={props.ingredients[index]} onChange={props.edit} />*/}

              <p onChange={props.edit}>{props.ingredients[index]}</p>
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
