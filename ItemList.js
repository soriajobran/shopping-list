import React from 'react';

const ItemList = props => {
  return(
    <div>
      <p className="items">Items</p>
      <ol className="item-list">
        {props.items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </div>
  );
}

export default ItemList;