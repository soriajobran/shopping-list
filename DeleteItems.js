import React from 'react';

const DeleteItems = props => {
  return (
    <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
       Delete Last Item
    </button>
  );
}

export default DeleteItems;