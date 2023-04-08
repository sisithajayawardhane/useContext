import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyInput() {
  const { myState, handleInputChange } = useContext(MyContext);

  return (
    <input className='input' type="text" value={myState} onChange={handleInputChange} />
  );
}

export default MyInput;
