import React from 'react';
import { useDrag } from 'react-dnd';

const Ingredient = ({url, id}) => {

  const [{isDragging}, drag] = useDrag(() => ({
    type: 'item',
    item: {id:id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img 
      ref={drag}
      src={url} 
      style={{ width: isDragging ? '60px' : '50px'}}
    />
  );
};

export default Ingredient;