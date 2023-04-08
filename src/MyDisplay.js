import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyDisplay() {
  const { myState } = useContext(MyContext);

  return (
    <div className='display'>{myState}</div>
  );
}

export default MyDisplay;
