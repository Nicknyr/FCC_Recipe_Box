import React from 'react';

const Item = ({ items }) => (
  <div>
    <div className="Recipe-Item" key={items.text}>

      {items.map((item, index) =>
        <div>
        <ul>
          <li key={index}><a href="#">{item}</a></li>
        </ul>
        </div>
      )}
    </div>
  </div>
)


export default Item;
